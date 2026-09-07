import PageHero from "../components/PageHero";
import StatStrip from "../components/StatStrip";
import DefinitionGrid from "../components/DefinitionGrid";
import Accordion from "../components/Accordion";
import Gallery from "../components/Gallery";
import Reveal from "../components/Reveal";
import { mbti as data } from "../data/content";

export default function Mbti() {
  return (
    <>
      <PageHero {...data.hero} />

      <section className="section stat-section">
        <StatStrip stats={data.stats} />
      </section>

      <section className="section narrow-section article-section">
        <Reveal>
          <h2>¿Qué es el MBTI?</h2>
          {data.intro.map((p, i) => (
            <p key={i} className={i === 0 ? "drop-cap" : ""}>
              {p}
            </p>
          ))}
        </Reveal>

        <Reveal delay={100} className="component-list">
          <h4>Cómo se forma cada tipo</h4>
          <ul>
            {data.components.map((c, i) => (
              <li key={i}>{c}</li>
            ))}
          </ul>
        </Reveal>
      </section>

      <section className="section section-alt">
        <Reveal className="section-heading">
          <h2>Las 4 dicotomías</h2>
          <p>Los cuatro pares de preferencias que definen cómo percibimos y decidimos.</p>
        </Reveal>
        <DefinitionGrid items={data.dichotomies} />
      </section>

      <section className="section">
        <Reveal className="section-heading">
          <h2>Los 16 tipos</h2>
          <p>Los cuatro grandes grupos de personalidad y sus integrantes.</p>
        </Reveal>
        <Accordion items={data.temperaments} />
      </section>

      <section className="section section-alt">
        <Reveal className="section-heading">
          <h2>Personalidad en el equipo</h2>
          <p>El MBTI como herramienta de autoconocimiento y colaboración.</p>
        </Reveal>
        <Gallery items={data.gallery} />
      </section>
    </>
  );
}