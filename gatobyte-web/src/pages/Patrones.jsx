import PageHero from "../components/PageHero";
import Accordion from "../components/Accordion";
import DefinitionGrid from "../components/DefinitionGrid";
import Reveal from "../components/Reveal";
import References from "../components/References";
import Icon from "../components/Icon";
import patronesUrl from "../assets/patrones_big_analitica.html?url";
import { patronesWeka as data } from "../data/content";

export default function Patrones() {
  return (
    <>
      <PageHero {...data.hero} variant="minimal" />

      <section className="section intro-split">
        <Reveal className="intro-split-text">
          <h2>¿Qué es Weka?</h2>
          {data.intro.map((p, i) => (
            <p key={i} className={i === 0 ? "drop-cap" : ""}>
              {p}
            </p>
          ))}
        </Reveal>

        <Reveal delay={100} className="intro-split-card">
          <h4>Qué permite descubrir</h4>
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
            La minería de datos no es un ejercicio académico: es la forma de convertir el historial
            de la organización en evidencia para decidir mejor.
          </p>
        </Reveal>
        <DefinitionGrid items={data.benefits} />
      </section>

      <section className="section">
        <Reveal className="section-heading">
          <h2>Métodos de minería de datos</h2>
          <p>Las tres técnicas de Weka que se aplican sobre el inventario de activos.</p>
        </Reveal>
        <Accordion items={data.methods} />
      </section>

      <section className="section section-alt">
        <Reveal className="section-heading">
          <span className="pdf-icon">
            <Icon name="layers" size={26} strokeWidth={1.6} />
          </span>
          <h2>{data.embed.heading}</h2>
          <p>{data.embed.subtitle}</p>
        </Reveal>

        <Reveal delay={140} className="chart-frame-wrap">
          <iframe
            src={patronesUrl}
            title={data.embed.heading}
            className="chart-embed"
            loading="lazy"
          />
          <a href={patronesUrl} target="_blank" rel="noreferrer" className="board-open-link">
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
