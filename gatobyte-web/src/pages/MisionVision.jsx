import PageHero from "../components/PageHero";
import DefinitionGrid from "../components/DefinitionGrid";
import Gallery from "../components/Gallery";
import VideoEmbed from "../components/VideoEmbed";
import Reveal from "../components/Reveal";
import Icon from "../components/Icon";
import { misionVision as data } from "../data/content";

export default function MisionVision() {
  return (
    <>
      <PageHero {...data.hero} />

      <section className="section narrow-section">
        <Reveal className="section-heading section-heading-left">
          <h2>Teoría</h2>
          <p>Fundamentos conceptuales de la misión y la visión como herramientas estratégicas.</p>
        </Reveal>
        <DefinitionGrid items={data.sections} />
      </section>

      <section className="mv-band-section">
        <Reveal className="mv-band">
          <div className="mv-block">
            <Icon name="target" size={28} strokeWidth={1.6} />
            <h3>Misión</h3>
            <p>{data.mision}</p>
          </div>
          <div className="mv-divider" aria-hidden="true" />
          <div className="mv-block">
            <Icon name="telescope" size={28} strokeWidth={1.6} />
            <h3>Visión</h3>
            <p>{data.vision}</p>
          </div>
        </Reveal>
      </section>

      <section className="section">
        <Reveal className="section-heading">
          <h2>Galería</h2>
          <p>Salud, datos y decisiones médicas en imágenes.</p>
        </Reveal>
        <Gallery items={data.gallery} />
      </section>

      <section className="section section-alt">
        <Reveal className="section-heading">
          <h2>Video</h2>
          <p>Cómo el big data está transformando la toma de decisiones en salud.</p>
        </Reveal>
        <VideoEmbed {...data.video} />
      </section>
    </>
  );
}
