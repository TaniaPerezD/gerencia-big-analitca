import { useCallback, useEffect, useState } from "react";
import Icon from "./Icon";

const INTERVAL_MS = 30000;
const MAX_SAMPLES = 24;

function Sparkline({ values, ok }) {
  if (values.length < 2) {
    return <span className="live-spark-empty">Recolectando…</span>;
  }
  const max = Math.max(...values, 1);
  const step = 100 / (values.length - 1);
  const points = values
    .map((v, i) => `${(i * step).toFixed(1)},${(28 - (v / max) * 24).toFixed(1)}`)
    .join(" ");
  return (
    <svg className="live-spark" viewBox="0 0 100 30" preserveAspectRatio="none" aria-hidden="true">
      <polyline
        points={points}
        fill="none"
        stroke={ok ? "var(--terracotta)" : "#d92d20"}
        strokeWidth="2"
        vectorEffect="non-scaling-stroke"
      />
    </svg>
  );
}

export default function LiveMonitor() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  const [history, setHistory] = useState({});

  const measure = useCallback(async () => {
    setLoading(true);
    try {
      const response = await fetch("/api/probe", { cache: "no-store" });
      if (!response.ok) throw new Error("http");
      const json = await response.json();
      setHistory((prev) => {
        const next = { ...prev };
        json.services.forEach((s) => {
          next[s.id] = [...(prev[s.id] || []), s.ms].slice(-MAX_SAMPLES);
        });
        return next;
      });
      setData(json);
      setError(false);
    } catch {
      setError(true);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    measure();
    const timer = setInterval(measure, INTERVAL_MS);
    return () => clearInterval(timer);
  }, [measure]);

  const services = data?.services ?? [];
  const up = services.filter((s) => s.ok).length;
  const avg = services.length
    ? Math.round(services.reduce((acc, s) => acc + s.ms, 0) / services.length)
    : null;

  return (
    <div className="live-monitor">
      <div className="live-summary">
        <div className="live-kpi">
          <span className="live-kpi-value">
            {services.length ? `${up}/${services.length}` : "—"}
          </span>
          <span className="live-kpi-label">servicios responden</span>
        </div>
        <div className="live-kpi">
          <span className="live-kpi-value">{avg !== null ? `${avg} ms` : "—"}</span>
          <span className="live-kpi-label">latencia media</span>
        </div>
        <div className="live-kpi">
          <span className="live-kpi-value live-kpi-small">
            {data ? new Date(data.checkedAt).toLocaleTimeString("es-BO") : "—"}
          </span>
          <span className="live-kpi-label">
            última medición{data ? ` · desde ${data.region}` : ""}
          </span>
        </div>
        <button type="button" className="live-refresh" onClick={measure} disabled={loading}>
          <Icon name="refresh" size={16} strokeWidth={2} />
          {loading ? "Midiendo…" : "Medir ahora"}
        </button>
      </div>

      {error && (
        <p className="live-error">
          No se pudo contactar la función de medición. Se reintenta automáticamente cada 30 segundos.
        </p>
      )}

      <div className="live-grid">
        {services.map((s) => (
          <article key={s.id} className={`live-card${s.ok ? "" : " live-card-down"}`}>
            <header>
              <span className={`live-dot${s.ok ? "" : " live-dot-down"}`} aria-hidden="true" />
              <div>
                <h3>{s.name}</h3>
                <span className="live-group">{s.group}</span>
              </div>
              <span className="live-badge">{s.ok ? "Activo" : "Caído"}</span>
            </header>
            <div className="live-metrics">
              <span>
                <b>{s.ms}</b> ms
              </span>
              <span>{s.status ? `HTTP ${s.status}` : s.error}</span>
            </div>
            <Sparkline values={history[s.id] ?? []} ok={s.ok} />
          </article>
        ))}
        {!services.length && !error && <p className="live-error">Midiendo los servicios…</p>}
      </div>
    </div>
  );
}
