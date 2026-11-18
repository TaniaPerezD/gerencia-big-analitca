import PageHero from "../components/PageHero";
import Reveal from "../components/Reveal";
import Icon from "../components/Icon";
import { conclusiones as data } from "../data/content";

export default function Conclusiones() {
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
      </section>

      <section className="section section-alt">
        <Reveal className="section-heading">
          <span className="pdf-icon">
            <Icon name="target" size={26} strokeWidth={1.6} />
          </span>
          <h2>Objetivo</h2>
          <p>{data.objetivoIntro}</p>
        </Reveal>

        <div className="quote-grid">
          {data.objetivos.map((m, i) => (
            <Reveal key={m.name} delay={i * 70} className="quote-card">
              <h3>{m.name}</h3>
              <p className="quote-subject">
                <b>{m.role}</b>
              </p>
              <pre className="quote-body">{`Objetivo inicial: ${m.inicial}\n\n${m.conclusion}`}</pre>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section narrow-section article-section">
        <Reveal className="component-list">
          <h4>Tecnológicas</h4>
          {data.tecnologicas.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </Reveal>
      </section>
    </>
  );
}
