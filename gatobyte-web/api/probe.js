// Función de Vercel: mide, en cada llamada, si los servicios del área responden y cuánto tardan.
// Son mediciones reales de disponibilidad HTTP hechas desde el servidor de Vercel.
const TARGETS = [
  { id: "axs", name: "Internet AXS (fibra)", group: "Conectividad", url: "https://www.axsbolivia.com" },
  { id: "entel", name: "Internet Entel (fibra)", group: "Conectividad", url: "https://www.entel.bo" },
  { id: "starlink", name: "Starlink (respaldo)", group: "Conectividad", url: "https://www.starlink.com" },
  { id: "inventario", name: "Sistema de Inventario", group: "Plataforma", url: "https://iatech-co-frontend.vercel.app" },
  { id: "tableau", name: "Tableau (licencias)", group: "Plataforma", url: "https://www.tableau.com" },
];

async function probe(target) {
  const started = Date.now();
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), 8000);
  try {
    const response = await fetch(target.url, {
      method: "GET",
      redirect: "follow",
      signal: controller.signal,
      headers: { "user-agent": "GatoByte-Monitor/1.0" },
    });
    response.body?.cancel?.();
    return {
      ...target,
      // Un 4xx (por ejemplo, bloqueo a bots) significa que el servicio responde; un 5xx, que falla.
      ok: response.status < 500,
      status: response.status,
      ms: Date.now() - started,
    };
  } catch (error) {
    return {
      ...target,
      ok: false,
      status: 0,
      ms: Date.now() - started,
      error: error.name === "AbortError" ? "tiempo agotado" : "sin respuesta",
    };
  } finally {
    clearTimeout(timer);
  }
}

export default async function handler(req, res) {
  const services = await Promise.all(TARGETS.map(probe));
  res.statusCode = 200;
  res.setHeader("Content-Type", "application/json; charset=utf-8");
  res.setHeader("Cache-Control", "public, s-maxage=10, stale-while-revalidate=20");
  res.end(
    JSON.stringify({
      checkedAt: new Date().toISOString(),
      region: process.env.VERCEL_REGION || "local",
      services,
    })
  );
}
