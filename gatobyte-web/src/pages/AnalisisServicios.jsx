import { useMemo, useState } from "react";
import PageHero from "../components/PageHero";
import Reveal from "../components/Reveal";
import References from "../components/References";
import Icon from "../components/Icon";
import CopyButton from "../components/CopyButton";
import { analisisServicios as data } from "../data/content";

const bs = (n) =>
  `Bs ${n.toLocaleString("es-BO", { minimumFractionDigits: 0, maximumFractionDigits: 2 })}`;

function Badge({ status }) {
  return <span className={`verify-badge verify-${status}`}>{data.badges[status]}</span>;
}

function coverageText(primary, backup) {
  if (!backup) {
    return {
      tone: "warn",
      text: "Sin respaldo: si el enlace principal falla, el área se queda sin conexión hasta que se repare.",
    };
  }
  if (backup.medium === primary.medium) {
    return {
      tone: "mid",
      text: `Otro proveedor, mismo medio (${primary.medium.toLowerCase()}): cubre la falla de un proveedor, pero no un corte que afecte a toda la fibra de la zona.`,
    };
  }
  return {
    tone: "ok",
    text: `Otro proveedor y otro medio (${backup.medium.toLowerCase()}): sigue funcionando aunque se corte la fibra terrestre.`,
  };
}

function LinkSimulator() {
  const [primaryId, setPrimaryId] = useState("axs");
  const [backupId, setBackupId] = useState("starlink500");
  const [months, setMonths] = useState(4);

  const primary = data.links.find((l) => l.id === primaryId);
  const backup = data.links.find((l) => l.id === backupId) || null;

  const result = useMemo(() => {
    const chosen = [primary, backup].filter(Boolean);
    const monthly = chosen.reduce((acc, l) => acc + l.monthly, 0);
    const once = chosen.reduce((acc, l) => acc + l.once, 0);
    return {
      monthly,
      once,
      total: monthly * months + once,
      share: (monthly / data.budgetMonthlyAverage) * 100,
    };
  }, [primary, backup, months]);

  const coverage = coverageText(primary, backup);
  const primaries = data.links.filter((l) => l.medium === "Fibra óptica");

  return (
    <div className="sim-card">
      <div className="sim-controls">
        <label>
          <span>Enlace principal</span>
          <select
            value={primaryId}
            onChange={(e) => {
              setPrimaryId(e.target.value);
              if (e.target.value === backupId) setBackupId("");
            }}
          >
            {primaries.map((l) => (
              <option key={l.id} value={l.id}>
                {l.short}
              </option>
            ))}
          </select>
        </label>
        <label>
          <span>Enlace de respaldo</span>
          <select value={backupId} onChange={(e) => setBackupId(e.target.value)}>
            <option value="">Ninguno</option>
            {data.links
              .filter((l) => l.id !== primaryId)
              .map((l) => (
                <option key={l.id} value={l.id}>
                  {l.short}
                </option>
              ))}
          </select>
        </label>
        <label>
          <span>Meses de proyección: {months}</span>
          <input
            type="range"
            min="1"
            max="12"
            value={months}
            onChange={(e) => setMonths(Number(e.target.value))}
          />
        </label>
      </div>

      <div className="sim-results">
        <div className="sim-figure">
          <span className="sim-value">{bs(result.monthly)}</span>
          <span className="sim-label">por mes</span>
        </div>
        <div className="sim-figure">
          <span className="sim-value">{bs(result.once)}</span>
          <span className="sim-label">pagos únicos (instalación y equipo)</span>
        </div>
        <div className="sim-figure sim-figure-main">
          <span className="sim-value">{bs(result.total)}</span>
          <span className="sim-label">total en {months} {months === 1 ? "mes" : "meses"}</span>
        </div>
        <div className="sim-figure">
          <span className="sim-value">{result.share.toFixed(1)} %</span>
          <span className="sim-label">del costo mensual promedio del área</span>
        </div>
      </div>

      <p className={`sim-coverage sim-coverage-${coverage.tone}`}>
        <Icon name="shield" size={16} strokeWidth={2} />
        {coverage.text}
      </p>
    </div>
  );
}

function LicenseSimulator() {
  const [fx, setFx] = useState(data.licenses.fx);
  const [months, setMonths] = useState(4);

  const tableauMonthly = data.licenses.tableau.reduce((a, t) => a + t.usd * t.seats * fx, 0);
  const powerBiMonthly = data.licenses.powerBi.usd * data.licenses.powerBi.seats * fx;
  const saving = tableauMonthly - powerBiMonthly;

  const rows = [
    {
      name: "Tableau (1 Creator + 2 Explorer + 2 Viewer)",
      monthly: tableauMonthly,
      status: "verificado",
      note: "Precios oficiales; es lo que incluye el presupuesto.",
    },
    {
      name: "Power BI Pro (5 usuarios)",
      monthly: powerBiMonthly,
      status: "referencia",
      note: data.licenses.powerBi.note,
    },
    {
      name: "Looker Studio (5 usuarios)",
      monthly: 0,
      status: "referencia",
      note: data.licenses.looker.note,
    },
  ];

  return (
    <div className="sim-card">
      <div className="sim-controls">
        <label>
          <span>Tipo de cambio (Bs por US$)</span>
          <input
            type="number"
            step="0.01"
            min="1"
            value={fx}
            onChange={(e) => setFx(Math.max(1, Number(e.target.value) || 1))}
          />
        </label>
        <label>
          <span>Meses de proyección: {months}</span>
          <input
            type="range"
            min="1"
            max="12"
            value={months}
            onChange={(e) => setMonths(Number(e.target.value))}
          />
        </label>
      </div>

      <div className="compare-table" role="table" aria-label="Comparación de licencias de visualización">
        <div className="compare-row compare-head" role="row">
          <span>Opción</span>
          <span>Por mes</span>
          <span>En {months} {months === 1 ? "mes" : "meses"}</span>
          <span>Estado</span>
        </div>
        {rows.map((row) => (
          <div className="compare-row" role="row" key={row.name}>
            <span>
              <b>{row.name}</b>
              <small>{row.note}</small>
            </span>
            <span>{bs(row.monthly)}</span>
            <span>{bs(row.monthly * months)}</span>
            <span>
              <Badge status={row.status} />
            </span>
          </div>
        ))}
      </div>

      <p className="sim-coverage sim-coverage-mid">
        <Icon name="trending" size={16} strokeWidth={2} />
        Pasar de Tableau a Power BI Pro ahorraría {bs(saving)} al mes ({bs(saving * months)} en {months}{" "}
        {months === 1 ? "mes" : "meses"}), a costa de rehacer los tableros y perder los roles diferenciados de
        Tableau.
      </p>
    </div>
  );
}

export default function AnalisisServicios() {
  return (
    <>
      <PageHero {...data.hero} variant="minimal" />

      <section className="section">
        <div className="narrow-section article-section">
          {data.intro.map((p, i) => (
            <Reveal key={i} delay={i * 60}>
              <p className={i === 0 ? "drop-cap" : ""}>{p}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section section-alt">
        <Reveal className="section-heading">
          <span className="pdf-icon">
            <Icon name="network" size={26} strokeWidth={1.6} />
          </span>
          <h2>Internet: AXS, Entel y Starlink</h2>
          <p>Costos del Excel del presupuesto, con la fuente de cada cifra y su estado de verificación.</p>
        </Reveal>

        <div className="link-grid">
          {data.links.map((link, i) => (
            <Reveal key={link.id} delay={i * 60} className={`link-card link-${link.status}`}>
              <div className="link-card-head">
                <h3>{link.name}</h3>
                <Badge status={link.status} />
              </div>
              <p className="link-role">
                {link.role} · {link.medium}
              </p>
              <p className="link-price">
                {bs(link.monthly)} <small>por mes</small>
              </p>
              {link.once > 0 && <p className="link-once">+ {bs(link.once)} de pago único</p>}
              <p className="link-line">
                <b>A favor:</b> {link.pros}
              </p>
              <p className="link-line">
                <b>En contra:</b> {link.cons}
              </p>
              <p className="link-source">Fuente: {link.source}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section">
        <Reveal className="section-heading">
          <h2>Simulador de conectividad</h2>
          <p>Elige un enlace principal y uno de respaldo para ver el costo y qué fallas cubre la combinación.</p>
        </Reveal>
        <Reveal delay={80}>
          <LinkSimulator />
        </Reveal>
      </section>

      <section className="section section-alt">
        <Reveal className="section-heading">
          <span className="pdf-icon">
            <Icon name="trending" size={26} strokeWidth={1.6} />
          </span>
          <h2>Software de visualización: ¿qué licencia comprar?</h2>
          <p>
            Comparamos el paquete de Tableau del presupuesto con dos alternativas, con el tipo de cambio y los
            meses que tú elijas.
          </p>
        </Reveal>
        <Reveal delay={80}>
          <LicenseSimulator />
        </Reveal>
      </section>

      <section className="section">
        <Reveal className="section-heading">
          <h2>{data.recommendation.heading}</h2>
          <p>La conclusión del análisis, con lo que todavía debe confirmarse.</p>
        </Reveal>
        <div className="narrow-section">
          <Reveal className="component-list">
            <ul>
              {data.recommendation.points.map((p, i) => (
                <li key={i}>{p}</li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <section className="section section-alt">
        <Reveal className="section-heading">
          <span className="pdf-icon">
            <Icon name="file" size={26} strokeWidth={1.6} />
          </span>
          <h2>Pedir las cotizaciones reales</h2>
          <p>
            Las cifras de arriba son referencias públicas, no cotizaciones oficiales. Estos borradores sirven para
            pedirlas a cada proveedor; cópialos y envíalos desde un correo institucional.
          </p>
        </Reveal>
        <div className="quote-grid">
          {data.quoteTemplates.map((q, i) => (
            <Reveal key={q.provider} delay={i * 70} className="quote-card">
              <h3>{q.provider}</h3>
              <p className="quote-subject">
                <b>Asunto:</b> {q.subject}
              </p>
              <pre className="quote-body">{q.body}</pre>
              <CopyButton text={`Asunto: ${q.subject}\n\n${q.body}`} label="Copiar borrador" />
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="narrow-section">
          <References items={data.references} />
        </div>
      </section>
    </>
  );
}
