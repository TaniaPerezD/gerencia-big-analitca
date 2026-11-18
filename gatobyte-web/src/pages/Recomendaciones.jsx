import PageHero from "../components/PageHero";
import Reveal from "../components/Reveal";
import { recomendaciones as data } from "../data/content";

export default function Recomendaciones() {
  return (
    <>
      <PageHero {...data.hero} variant="minimal" />

      <section className="section narrow-section article-section">
        <Reveal className="component-list">
          <h4>General</h4>
          {data.general.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </Reveal>

        <Reveal delay={80} className="component-list">
          <h4>Tecnológicas</h4>
          {data.tecnologicas.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </Reveal>

        <Reveal delay={160} className="component-list">
          <h4>Académica</h4>
          {data.academica.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </Reveal>
      </section>
    </>
  );
}
