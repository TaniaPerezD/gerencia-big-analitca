import PageHero from "../components/PageHero";
import DefinitionGrid from "../components/DefinitionGrid";
import Reveal from "../components/Reveal";
import References from "../components/References";
import Icon from "../components/Icon";
import monitoreoUrl from "../assets/monitoreo_big_analitica.html?url";
import { monitoreoSolarWinds as data } from "../data/content";

export default function Monitoreo() {
  return (
    <>
      <PageHero {...data.hero} variant="minimal" />

      <section className="section intro-split">
        <Reveal className="intro-split-text">
          <h2>¿Qué es SolarWinds?</h2>
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
          <h2>{data.embed.heading}</h2>
          <p>{data.embed.subtitle}</p>
        </Reveal>

        <Reveal delay={140} className="chart-frame-wrap">
          <iframe
            src={monitoreoUrl}
            title={data.embed.heading}
            className="chart-embed"
            loading="lazy"
          />
          <a href={monitoreoUrl} target="_blank" rel="noreferrer" className="board-open-link">
            <Icon name="external" size={16} strokeWidth={2} /> {data.embed.openLabel}
          </a>
        </Reveal>

        <Reveal delay={180} className="diagram-caption">
          <p>{data.embed.caption}</p>
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
