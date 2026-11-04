import PageHero from "../components/PageHero";
import Accordion from "../components/Accordion";
import DefinitionGrid from "../components/DefinitionGrid";
import Reveal from "../components/Reveal";
import References from "../components/References";
import Icon from "../components/Icon";
import graficosUrl from "../assets/graficos-big-data.html?url";
import { datosTableau as data } from "../data/content";

export default function DatosTableau() {
  return (
    <>
      <PageHero {...data.hero} variant="minimal" />

      <section className="section intro-split">
        <Reveal className="intro-split-text">
          <h2>¿Qué son los gráficos de datos?</h2>
          {data.intro.map((p, i) => (
            <p key={i} className={i === 0 ? "drop-cap" : ""}>
              {p}
            </p>
          ))}
        </Reveal>

        <Reveal delay={100} className="intro-split-card">
          <h4>Qué permite ver un gráfico</h4>
          <ul>
            {data.keyPoints.map((k, i) => (
              <li key={i}>{k}</li>
            ))}
          </ul>
        </Reveal>
      </section>

      <section className="section section-alt">
        <Reveal className="section-heading">
          <h2>¿Para qué sirven los gráficos en una organización?</h2>
          <p>
            Visualizar datos no es decorar reportes: es una herramienta de gestión que conecta la
            evidencia con la acción.
          </p>
        </Reveal>
        <DefinitionGrid items={data.benefits} />
      </section>

      <section className="section">
        <Reveal className="section-heading">
          <h2>¿Por qué Tableau?</h2>
          <p>
            Tableau es una plataforma de analítica visual y business intelligence pensada para
            explorar datos y compartir hallazgos sin fricción técnica.
          </p>
        </Reveal>
        <Accordion items={data.whyTableau} />
      </section>

      <section className="section section-alt">
        <Reveal className="section-heading">
          <span className="pdf-icon">
            <Icon name="trending" size={26} strokeWidth={1.6} />
          </span>
          <h2>{data.embed.heading}</h2>
          <p>{data.embed.subtitle}</p>
        </Reveal>

        <Reveal delay={90} className="component-list board-columns">
          <h4>Cómo explorarlo</h4>
          <ul>
            {data.embed.howTo.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={140} className="chart-frame-wrap">
          <iframe
            src={graficosUrl}
            title={data.embed.heading}
            className="chart-embed"
            loading="lazy"
          />
          <a href={graficosUrl} target="_blank" rel="noreferrer" className="board-open-link">
            <Icon name="external" size={16} strokeWidth={2} /> Abrir el tablero en una pestaña nueva
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
