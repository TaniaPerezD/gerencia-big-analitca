import PageHero from "../components/PageHero";
import DefinitionGrid from "../components/DefinitionGrid";
import Reveal from "../components/Reveal";
import References from "../components/References";
import Icon from "../components/Icon";
import LiveMonitor from "../components/LiveMonitor";
import { monitoreoGrafana as data } from "../data/content";
import { grafanaShots } from "../data/grafanaShots";

export default function Monitoreo() {
  return (
    <>
      <PageHero {...data.hero} variant="minimal" />

      <section className="section intro-split">
        <Reveal className="intro-split-text">
          <h2>¿Qué es Grafana?</h2>
          {data.intro.map((p, i) => (
            <p key={i} className={i === 0 ? "drop-cap" : ""}>
              {p}
            </p>
          ))}
        </Reveal>

        <Reveal delay={100} className="intro-split-card">
          <h4>Qué permite vigilar</h4>
          <ul>
            {data.keyPoints.map((k, i) => (
              <li key={i}>{k}</li>
            ))}
          </ul>
        </Reveal>
      </section>

      <section className="section section-alt">
        <Reveal className="section-heading">
          <h2>¿Para qué sirve en una organización?</h2>
          <p>
            Monitorear no es solo vigilar servidores: es una herramienta de gestión que conecta la
            salud de la infraestructura con la continuidad del negocio.
          </p>
        </Reveal>
        <DefinitionGrid items={data.benefits} />
      </section>

      <section className="section">
        <Reveal className="section-heading">
          <span className="pdf-icon">
            <Icon name="activity" size={26} strokeWidth={1.6} />
          </span>
          <h2>{data.live.heading}</h2>
          <p>{data.live.subtitle}</p>
        </Reveal>

        <Reveal delay={120}>
          <LiveMonitor />
        </Reveal>

        <Reveal delay={160} className="diagram-caption">
          <p>{data.live.caption}</p>
        </Reveal>
      </section>

      {grafanaShots.length > 0 && (
        <section className="section section-alt">
          <Reveal className="section-heading">
            <span className="pdf-icon">
              <Icon name="server" size={26} strokeWidth={1.6} />
            </span>
            <h2>{data.shots.heading}</h2>
            <p>{data.shots.subtitle}</p>
          </Reveal>

          <div className="shot-grid">
            {grafanaShots.map((shot, i) => (
              <Reveal key={shot.title} delay={i * 80}>
                <figure className="shot">
                  <a href={shot.src} target="_blank" rel="noreferrer" title="Abrir la captura completa">
                    <img src={shot.src} alt={shot.alt} loading="lazy" />
                  </a>
                  <figcaption>
                    <b>{shot.title}</b>
                    {shot.text}
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>

          <Reveal delay={180} className="diagram-caption">
            <p>{data.shots.caption}</p>
          </Reveal>
        </section>
      )}

      <section className="section">
        <Reveal className="section-heading">
          <h2>{data.tools.heading}</h2>
          <p>{data.tools.subtitle}</p>
        </Reveal>

        <Reveal delay={80}>
          <div className="sim-card">
            <div className="compare-table" role="table" aria-label="Comparación de herramientas de monitoreo">
              <div className="compare-row compare-head tools-row" role="row">
                <span>Herramienta</span>
                <span>Costo</span>
                <span>Fortaleza y límite</span>
                <span>Decisión</span>
              </div>
              {data.tools.rows.map((row) => (
                <div className="compare-row tools-row" role="row" key={row.name}>
                  <span>
                    <b>{row.name}</b>
                  </span>
                  <span>{row.cost}</span>
                  <span>
                    {row.strength}
                    <small>{row.limit}</small>
                  </span>
                  <span>
                    <span className={`verify-badge verify-${row.status}`}>{row.verdict}</span>
                  </span>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </section>

      <section className="section">
        <div className="narrow-section">
          <References items={data.references} />
        </div>
      </section>
    </>
  );
}
