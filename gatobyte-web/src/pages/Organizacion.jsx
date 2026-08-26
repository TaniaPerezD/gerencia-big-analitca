import PageHero from "../components/PageHero";
import Accordion from "../components/Accordion";
import Reveal from "../components/Reveal";
import orgChart from "../assets/organigrama.png";
import { organizacion as data } from "../data/content";

export default function Organizacion() {
  return (
    <>
      <PageHero {...data.hero} variant="minimal" />

      <section className="section narrow-section">
        <Reveal className="section-heading section-heading-left">
          <h2>Teoría</h2>
          <p>Conceptos clave para entender cómo se organiza el área.</p>
        </Reveal>
        <Accordion items={data.theory} />
      </section>

      <section className="section section-alt">
        <Reveal className="section-heading">
          <h2>Organigrama</h2>
          <p>Estructura jerárquica del Área de Big Data y Analítica.</p>
        </Reveal>
        <Reveal className="orgchart-frame">
          <img src={orgChart} alt="Organigrama del Área de Big Data y Analítica" />
        </Reveal>
        <div className="orgchart-legend">
          {data.positions.map((p) => (
            <span key={p.title} className="legend-chip" style={{ "--chip-color": p.color }}>
              <span className="legend-dot" />
              {p.title}
            </span>
          ))}
        </div>
      </section>
    </>
  );
}
