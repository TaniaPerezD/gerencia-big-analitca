import PageHero from "../components/PageHero";
import NumberedList from "../components/NumberedList";
import Gallery from "../components/Gallery";
import VideoEmbed from "../components/VideoEmbed";
import StatStrip from "../components/StatStrip";
import References from "../components/References";
import Reveal from "../components/Reveal";
import { cienciaInnovacion as data } from "../data/content";

export default function CienciaInnovacion() {
  return (
    <>
      <PageHero {...data.hero} />

      <section className="section stat-section">
        <StatStrip stats={data.stats} />
      </section>

      <section className="section narrow-section">
        <Reveal className="section-heading section-heading-left">
          <h2>Teoría</h2>
          <p>Fundamentos de ciencia, tecnología e innovación, y su intersección en la sociedad.</p>
        </Reveal>
        <NumberedList items={data.sections} />
      </section>

      <section className="section section-alt">
        <Reveal className="section-heading">
          <h2>Galería</h2>
          <p>Ciencia, tecnología e innovación en imágenes.</p>
        </Reveal>
        <Gallery items={data.gallery} />
      </section>

      <section className="section">
        <Reveal className="section-heading">
          <h2>Video</h2>
          <p>Un vistazo audiovisual a la innovación tecnológica.</p>
        </Reveal>
        <VideoEmbed {...data.video} />
      </section>

      <section className="section narrow-section">
        <References items={data.references} />
      </section>
    </>
  );
}
