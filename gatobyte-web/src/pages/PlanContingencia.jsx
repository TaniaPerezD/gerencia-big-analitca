import { lazy, Suspense } from "react";
import PageHero from "../components/PageHero";
import Accordion from "../components/Accordion";
import Reveal from "../components/Reveal";
import Icon from "../components/Icon";
import { planContingencia as data } from "../data/content";

const PdfViewer = lazy(() => import("../components/PdfViewer"));

function PdfViewerFallback() {
  return (
    <div className="pdf-viewer">
      <div className="pdf-spinner">
        <Icon name="refresh" size={26} strokeWidth={2} className="pdf-spin" />
      </div>
    </div>
  );
}

export default function PlanContingencia() {
  return (
    <>
      <PageHero {...data.hero} variant="minimal" />

      <section className="section narrow-section article-section">
        <Reveal>
          <h2>¿Qué es un Plan de Contingencia?</h2>
          {data.intro.map((p, i) => (
            <p key={i} className={i === 0 ? "drop-cap" : ""}>
              {p}
            </p>
          ))}
        </Reveal>

        <Reveal delay={100} className="component-list">
          <h4>Objetivos del plan</h4>
          <ul>
            {data.keyPoints.map((k, i) => (
              <li key={i}>{k}</li>
            ))}
          </ul>
        </Reveal>
      </section>

      <section className="section section-alt">
        <Reveal className="section-heading">
          <h2>Metodología del plan de contingencia</h2>
          <p>Seguridad física, fases de desarrollo, etapas del plan y pruebas de validación.</p>
        </Reveal>
        <Accordion items={data.theory} />
      </section>

      <section className="section">
        <Reveal className="section-heading">
          <span className="pdf-icon">
            <Icon name="shield" size={26} strokeWidth={1.6} />
          </span>
          <h2>{data.document.heading}</h2>
          <p>{data.document.description}</p>
        </Reveal>
        <Reveal delay={100}>
          <Suspense fallback={<PdfViewerFallback />}>
            <PdfViewer
              src={data.document.src}
              title={data.document.title}
              downloadName={data.document.downloadName}
            />
          </Suspense>
        </Reveal>
      </section>

      <section className="section section-alt">
        <Reveal className="section-heading">
          <span className="pdf-icon">
            <Icon name="check" size={26} strokeWidth={1.6} />
          </span>
          <h2>{data.conclusiones.heading}</h2>
          <p>{data.conclusiones.subtitle}</p>
        </Reveal>

        <Reveal className="component-list">
          <h4>General</h4>
          {data.conclusiones.general.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </Reveal>

        <Reveal delay={80} className="component-list">
          <h4>Objetivo</h4>
          <p>{data.conclusiones.objetivoIntro}</p>
          <div className="quote-grid">
            {data.conclusiones.objetivos.map((m, i) => (
              <Reveal key={m.name} delay={i * 70} className="quote-card">
                <h3>{m.name}</h3>
                <p className="quote-subject">
                  <b>{m.role}</b>
                </p>
                <pre className="quote-body">{`Objetivo inicial: ${m.inicial}\n\n${m.conclusion}`}</pre>
              </Reveal>
            ))}
          </div>
        </Reveal>

        <Reveal delay={160} className="component-list">
          <h4>Tecnológicas</h4>
          {data.conclusiones.tecnologicas.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </Reveal>
      </section>

      <section className="section">
        <Reveal className="section-heading">
          <span className="pdf-icon">
            <Icon name="compass" size={26} strokeWidth={1.6} />
          </span>
          <h2>{data.recomendaciones.heading}</h2>
          <p>{data.recomendaciones.subtitle}</p>
        </Reveal>

        <Reveal className="component-list">
          <h4>General</h4>
          {data.recomendaciones.general.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </Reveal>

        <Reveal delay={80} className="component-list">
          <h4>Tecnológicas</h4>
          {data.recomendaciones.tecnologicas.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </Reveal>

        <Reveal delay={160} className="component-list">
          <h4>Académica</h4>
          {data.recomendaciones.academica.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </Reveal>
      </section>
    </>
  );
}
