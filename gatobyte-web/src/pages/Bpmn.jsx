import PageHero from "../components/PageHero";
import Accordion from "../components/Accordion";
import Reveal from "../components/Reveal";
import References from "../components/References";
import { bpmn as data } from "../data/content";

export default function Bpmn() {
  return (
    <>
      <PageHero {...data.hero} variant="minimal" />

      <section className="section narrow-section article-section">
        <Reveal>
          <h2>¿Qué es BPMN?</h2>
          {data.intro.map((p, i) => (
            <p key={i} className={i === 0 ? "drop-cap" : ""}>
              {p}
            </p>
          ))}
        </Reveal>

        <Reveal delay={100} className="component-list">
          <h4>La clave para leerlo</h4>
          <ul>
            {data.keyPoints.map((k, i) => (
              <li key={i}>{k}</li>
            ))}
          </ul>
        </Reveal>
      </section>

      <section className="section section-alt">
        <Reveal className="section-heading">
          <h2>Fundamentos del modelado BPMN</h2>
          <p>La notación básica: eventos, actividades, compuertas y flujos que cuentan cada proceso.</p>
        </Reveal>
        <Accordion items={data.theory} />
      </section>

      <section className="section">
        <Reveal className="section-heading">
          <h2>{data.areaContext.heading}</h2>
          <p>{data.areaContext.subtitle}</p>
        </Reveal>

        <div className="narrow-section">
          <Reveal className="article-section">
            {data.areaContext.description.split(". ").map((sentence, i, arr) => (
              <p key={i}>
                {sentence}
                {i < arr.length - 1 ? "." : ""}
              </p>
            ))}
          </Reveal>

          <Reveal delay={100} className="component-list">
            <h4>Cómo leer el proceso</h4>
            <ul>
              {data.areaContext.columns.map((c, i) => (
                <li key={i}>{c}</li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <section className="section section-alt">
        <Reveal className="section-heading">
          <h2>{data.diagram.title}</h2>
          <p>{data.diagram.subtitle}</p>
        </Reveal>

        <Reveal delay={100} className="orgchart-frame">
          <iframe
            src={data.diagram.url}
            title={data.diagram.title}
            className="process-embed"
            loading="lazy"
            allowFullScreen
          />
        </Reveal>

        <Reveal delay={150} className="orgchart-legend">
          {data.areaContext.legend.map((l) => (
            <span key={l.label} className="legend-chip" style={{ "--chip-color": l.color }}>
              <span className="legend-dot" />
              {l.label}
              <span className="legend-note">&nbsp;· {l.note}</span>
            </span>
          ))}
        </Reveal>

        <Reveal delay={180} className="diagram-caption">
          <p>{data.diagram.caption}</p>
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