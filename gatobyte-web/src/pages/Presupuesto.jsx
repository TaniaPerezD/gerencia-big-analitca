import PageHero from "../components/PageHero";
import Reveal from "../components/Reveal";
import References from "../components/References";
import Icon from "../components/Icon";
import SpreadsheetEmbed from "../components/SpreadsheetEmbed";
import { presupuesto as data } from "../data/content";

export default function Presupuesto() {
  return (
    <>
      <PageHero
        tag="Planificación financiera"
        title="Presupuesto del Área"
        subtitle="Cuánto cuesta implementar y operar el Área de Big Data y Analítica durante una proyección de cuatro meses, y de dónde sale cada cifra."
        variant="minimal"
      />

      <section className="section">
        <Reveal className="section-heading">
          <span className="pdf-icon">
            <Icon name="landmark" size={26} strokeWidth={1.6} />
          </span>
          <h2>{data.heading}</h2>
          <p>{data.subtitle}</p>
        </Reveal>

        <div className="narrow-section article-section">
          {data.intro.map((p, i) => (
            <Reveal key={i} delay={i * 60}>
              <p className={i === 0 ? "drop-cap" : ""}>{p}</p>
            </Reveal>
          ))}
        </div>

        <div className="budget-figures">
          {data.figures.map((figure, i) => (
            <Reveal key={figure.label} delay={i * 70} className="budget-figure-wrap">
              <div className="budget-figure">
                <span className="budget-figure-icon">
                  <Icon name={figure.icon} size={22} strokeWidth={1.8} />
                </span>
                <span className="budget-figure-value">{figure.value}</span>
                <span className="budget-figure-label">{figure.label}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section section-alt">
        <Reveal className="section-heading">
          <h2>¿Cómo se compone el presupuesto?</h2>
          <p>Los rubros que sostienen la operación del área y su peso dentro del total.</p>
        </Reveal>

        <div className="narrow-section">
          <Reveal className="component-list">
            <h4>Rubros principales</h4>
            <ul>
              {data.composition.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={80} className="component-list">
            <h4>Supuestos y criterios</h4>
            <ul>
              {data.notes.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <Reveal className="section-heading">
          <h2>Evaluación de servicios del presupuesto</h2>
          <p>
            Qué aporta cada servicio contratado, cuánto cuesta y qué tan justificado está dentro del
            plan.
          </p>
        </Reveal>

        <div className="service-eval-grid">
          {data.serviceEval.map((service, i) => (
            <Reveal
              key={service.name}
              delay={i * 60}
              className={`service-eval-card service-eval-${service.status}`}
            >
              <div className="service-eval-head">
                <h3>{service.name}</h3>
                <span className="service-eval-badge">{service.badge}</span>
              </div>
              <p className="service-eval-use">{service.use}</p>
              <p className="service-eval-cost">{service.cost}</p>
              <p className="service-eval-detail">{service.detail}</p>
            </Reveal>
          ))}
        </div>

        <Reveal className="diagram-caption">
          <p>{data.serviceEvalNote}</p>
        </Reveal>
      </section>

      <section className="section section-alt">
        <Reveal className="section-heading">
          <span className="pdf-icon">
            <Icon name="database" size={26} strokeWidth={1.6} />
          </span>
          <h2>{data.embedHeading}</h2>
          <p>{data.embedSubtitle}</p>
        </Reveal>

        <SpreadsheetEmbed
          src="/documents/presupuesto-big-analitica.xlsx"
          title="Presupuesto del Área de Big Data y Analítica"
        />

        <Reveal delay={180} className="diagram-caption">
          <p>{data.caption}</p>
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
