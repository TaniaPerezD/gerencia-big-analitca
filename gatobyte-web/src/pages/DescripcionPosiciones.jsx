import PageHero from "../components/PageHero";
import PositionCarousel from "../components/PositionCarousel";
import Reveal from "../components/Reveal";
import Icon from "../components/Icon";
import { descripcionPosiciones as data } from "../data/content";

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
        <Reveal className="pdf-panel">
          <span className="pdf-icon">
            <Icon name="file" size={30} strokeWidth={1.6} />
          </span>
          <h3>Documento completo de descripciones de puesto</h3>
          <p>
            Aquí se podrá consultar y descargar el documento oficial en PDF con el detalle completo
            de cada posición del área.
          </p>
          <span className="pdf-placeholder-badge">
            <Icon name="download" size={15} strokeWidth={2} /> Próximamente
          </span>
        </Reveal>
      </section>
    </>
  );
}
