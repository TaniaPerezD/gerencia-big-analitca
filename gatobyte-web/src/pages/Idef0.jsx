import PageHero from "../components/PageHero";
import Accordion from "../components/Accordion";
import Reveal from "../components/Reveal";
import References from "../components/References";
import { idef0 as data } from "../data/content";

export default function Idef0() {
  return (
    <>
      <PageHero {...data.hero} variant="minimal" />

      <section className="section narrow-section article-section">
        <Reveal>
          <h2>¿Qué es IDEF0?</h2>
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
          <h2>Fundamentos del modelado IDEF0</h2>
          <p>La notación, la descomposición y su valor estratégico para la organización.</p>
        </Reveal>
        <Accordion items={data.theory} />
      </section>

      <section className="section">
        <Reveal className="section-heading">
          <h2>{data.diagram.title}</h2>
          <p>{data.diagram.subtitle}</p>
        </Reveal>

        <Reveal delay={100} className="orgchart-frame">
          <img src={data.diagram.url} alt={data.diagram.alt} loading="lazy" />
        </Reveal>

        <Reveal delay={150} className="orgchart-legend">
          {data.legend.map((l) => (
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

      <section className="section section-alt">
        <div className="narrow-section">
          <References items={data.references} />
        </div>
      </section>
    </>
  );
}