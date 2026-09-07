import PageHero from "../components/PageHero";
import StatStrip from "../components/StatStrip";
import DefinitionGrid from "../components/DefinitionGrid";
import Accordion from "../components/Accordion";
import TheorySection from "../components/TheorySection";
import Reveal from "../components/Reveal";
import Icon from "../components/Icon";
import { scrum as data } from "../data/content";

export default function Scrum() {
  return (
    <>
      <PageHero {...data.hero} variant="split" />


      <section className="section narrow-section article-section">
        <Reveal>
          <h2>¿Qué es Scrum?</h2>
          {data.intro.map((p, i) => (
            <p key={i} className={i === 0 ? "drop-cap" : ""}>
              {p}
            </p>
          ))}
        </Reveal>

        <Reveal delay={100} className="component-list">
          <h4>El Manifiesto Ágil</h4>
          <ul>
            {data.agileValues.map((v, i) => (
              <li key={i}>{v}</li>
            ))}
          </ul>
        </Reveal>
      </section>

      <section className="section section-alt">
        <Reveal className="section-heading">
          <h2>Roles del equipo Scrum</h2>
          <p>Tres responsabilidades claras que hacen funcionar el marco.</p>
        </Reveal>
        <DefinitionGrid items={data.roles} />
      </section>

      <section className="section">
        <Reveal className="section-heading">
          <h2>Ceremonias</h2>
          <p>Las reuniones que estructuran el tiempo dentro de cada sprint.</p>
        </Reveal>
        <Accordion items={data.ceremonies} />
      </section>

      <section className="section section-alt">
        <Reveal className="section-heading">
          <h2>Artefactos</h2>
          <p>Los elementos que dan transparencia al trabajo: el backlog, el sprint y su avance.</p>
        </Reveal>
        <div className="theory-grid">
          {data.artifacts.map((a, i) => (
            <Reveal key={a.title} delay={i * 70}>
              <TheorySection {...a} />
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section">
        <Reveal className="section-heading">
          <span className="pdf-icon">
            <Icon name="activity" size={26} strokeWidth={1.6} />
          </span>
          <h2>{data.board.heading}</h2>
          <p>{data.board.subtitle}</p>
        </Reveal>

        <Reveal delay={100} className="component-list board-columns">
          <h4>Cómo leer el tablero</h4>
          <ul>
            {data.board.columns.map((c, i) => (
              <li key={i}>{c}</li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={150} className="board-frame-wrap">
          <iframe
            src={data.board.url}
            title={data.board.heading}
            className="board-embed"
            loading="lazy"
            allowFullScreen
          />
        </Reveal>
      </section>
    </>
  );
}