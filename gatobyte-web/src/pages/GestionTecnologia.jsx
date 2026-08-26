import PageHero from "../components/PageHero";
import Timeline from "../components/Timeline";
import Gallery from "../components/Gallery";
import VideoEmbed from "../components/VideoEmbed";
import StatStrip from "../components/StatStrip";
import Reveal from "../components/Reveal";
import { gestionTecnologia as data } from "../data/content";

export default function GestionTecnologia() {
  return (
    <>
      <PageHero {...data.hero} variant="split" />

      <section className="section stat-section">
        <StatStrip stats={data.stats} />
      </section>

      <section className="section">
        <Reveal className="section-heading">
          <h2>Teoría</h2>
          <p>Componentes, estrategia, procesos y herramientas de la gestión de tecnología.</p>
        </Reveal>
        <Timeline items={data.sections} />
      </section>

      <section className="section section-alt">
        <Reveal className="section-heading">
          <h2>Galería</h2>
          <p>Estrategia, equipos e infraestructura tecnológica en imágenes.</p>
        </Reveal>
        <Gallery items={data.gallery} />
      </section>

      <section className="section">
        <Reveal className="section-heading">
          <h2>Video</h2>
          <p>Liderazgo y visión aplicados a la gestión de tecnología.</p>
        </Reveal>
        <VideoEmbed {...data.video} />
      </section>
    </>
  );
}
