import { lazy, Suspense } from "react";
import PageHero from "../components/PageHero";
import PositionCarousel from "../components/PositionCarousel";
import Reveal from "../components/Reveal";
import Icon from "../components/Icon";
import { descripcionPosiciones as data } from "../data/content";

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

export default function DescripcionPosiciones() {
  return (
    <>
      <PageHero {...data.hero} />

      <section className="section narrow-section article-section">
        <Reveal>
          <h2>¿Qué es una descripción de puesto?</h2>
          {data.intro.map((p, i) => (
            <p key={i} className={i === 0 ? "drop-cap" : ""}>
              {p}
            </p>
          ))}
        </Reveal>

        <Reveal delay={100} className="component-list">
          <h4>Componentes clave de una buena descripción</h4>
          <ul>
            {data.components.map((c, i) => (
              <li key={i}>{c}</li>
            ))}
          </ul>
        </Reveal>
      </section>

      <section className="section section-alt">
        <Reveal className="section-heading">
          <h2>Posiciones del área</h2>
          <p>Desliza para conocer el rol y las responsabilidades de cada posición.</p>
        </Reveal>
        <PositionCarousel positions={data.positions} />
      </section>

      <section className="section">
        <Reveal className="section-heading">
          <span className="pdf-icon">
            <Icon name="file" size={26} strokeWidth={1.6} />
          </span>
          <h2>Documento completo de descripciones de puesto</h2>
          <p>
            Consulta y descarga el documento oficial con el detalle completo de cada posición del
            área: identificación, funciones, relaciones, responsabilidades y requerimientos.
          </p>
        </Reveal>
        <Reveal delay={100}>
          <Suspense fallback={<PdfViewerFallback />}>
            <PdfViewer
              src="/documents/descripcion-de-puestos-big-data-analitica.pdf"
              title="Descripción de Puestos — Big Data y Analítica"
              downloadName="Descripcion-de-Puestos-Big-Data-y-Analitica-GatoByte.pdf"
            />
          </Suspense>
        </Reveal>
      </section>
    </>
  );
}
