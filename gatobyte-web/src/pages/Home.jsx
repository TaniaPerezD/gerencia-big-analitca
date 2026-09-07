import { Link } from "react-router-dom";
import Icon from "../components/Icon";
import Reveal from "../components/Reveal";
import PhotoBlob from "../components/decor/PhotoBlob";
import Sparkle from "../components/decor/Sparkle";
import PhotoMarquee from "../components/PhotoMarquee";
import StatStrip from "../components/StatStrip";
import ProcessSteps from "../components/ProcessSteps";
import { catPhotos, marqueePhotos } from "../data/catPhotos";
import { homeStats, processSteps } from "../data/content";

const pillars = [
  {
    icon: "microscope",
    title: "Ciencia",
    text: "Conocimiento sistemático y verificable que sostiene todo lo que construimos.",
  },
  {
    icon: "cpu",
    title: "Tecnología",
    text: "Aplicamos el conocimiento científico para resolver problemas reales.",
  },
  {
    icon: "lightbulb",
    title: "Innovación",
    text: "Convertimos ideas nuevas en valor social, económico y tecnológico.",
  },
  {
    icon: "compass",
    title: "Gestión",
    text: "Alineamos estrategia, infraestructura y talento con los objetivos del negocio.",
  },
];

const values = [
  { icon: "cat", title: "Curiosidad", text: "Como todo buen gato, exploramos cada problema desde todos los ángulos." },
  { icon: "paw", title: "Agilidad", text: "Nos adaptamos rápido a nuevas tecnologías y metodologías ágiles." },
  { icon: "target", title: "Precisión", text: "Cada decisión se apoya en datos, evidencia y buenas prácticas." },
  { icon: "users", title: "Colaboración", text: "Trabajamos en equipo, como una colonia bien organizada." },
];

export default function Home() {
  return (
    <>
      <section className="cat-hero">
        <Sparkle top="14%" left="6%" size={20} delay={0.2} color="#0d9488" />
        <Sparkle top="70%" right="8%" size={16} delay={1.2} color="#14304f" />
        <div className="cat-hero-grid">
          <div className="cat-hero-copy">
            <span className="tag-pill">Bienvenidos a</span>
            <h1>
              Gato<span className="brand-accent">Byte</span>
            </h1>
            <p>
              Somos un grupo dedicado al estudio de la Ciencia, la Tecnología, la Innovación y la
              Gestión de Tecnología — con la curiosidad, agilidad y precisión de un gato.
            </p>
            <div className="hero-actions hero-actions-left">
              <Link to="/ciencia-e-innovacion" className="btn btn-primary">
                Ciencia e Innovación
              </Link>
              <Link to="/gestion-de-tecnologia" className="btn btn-outline">
                Gestión de Tecnología
              </Link>
            </div>
          </div>

          <div className="cat-hero-art">
            <PhotoBlob {...catPhotos.peeking} className="blob-main" />
            <PhotoBlob {...catPhotos.reachingPaw} className="blob-chip blob-chip-a" />
            <PhotoBlob {...catPhotos.sunglasses} className="blob-chip blob-chip-b" />
          </div>
        </div>

        <PhotoMarquee photos={marqueePhotos} />
      </section>

      <section className="section stat-section">
        <StatStrip stats={homeStats} />
      </section>

      <section className="section">
        <Reveal className="section-heading">
          <h2>¿Quiénes somos?</h2>
          <p>
            GatoByte es un grupo de trabajo académico que investiga y presenta los fundamentos de la
            ciencia, la tecnología, la innovación y su gestión estratégica dentro de las
            organizaciones. Como los gatos, observamos con paciencia antes de saltar: analizamos,
            aprendemos y aplicamos.
          </p>
        </Reveal>

        <Reveal delay={80} className="component-list">
          <h4>¿Qué queremos hacer?</h4>
          <ul>
            <li>
              Investigar y documentar, con rigor científico, cómo la ciencia, la tecnología, la
              innovación y la gestión de tecnología se conectan entre sí.
            </li>
            <li>
              Aplicar esos fundamentos a un caso real de trabajo: la organización, los roles y la
              forma de operar de un Área de Big Data y Analítica.
            </li>
            <li>
              Practicar metodologías ágiles como Scrum para organizar nuestro propio trabajo en
              equipo, con roles, ceremonias y un tablero de seguimiento en vivo.
            </li>
            <li>
              Comunicar todo el conocimiento generado de forma clara, visual y accesible, lista
              para compartirse dentro y fuera de la colonia.
            </li>
          </ul>
        </Reveal>

        <div className="pillars-grid">
          {pillars.map((p, i) => (
            <Reveal key={p.title} delay={i * 90} className="pillar-card-wrap">
              <div className="pillar-card">
                <span className="pillar-icon" aria-hidden="true">
                  <Icon name={p.icon} size={26} strokeWidth={1.8} />
                </span>
                <h3>{p.title}</h3>
                <p>{p.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section section-alt">
        <Reveal className="teaser-card">
          <div className="teaser-icon">
            <Icon name="target" size={30} strokeWidth={1.8} />
          </div>
          <div className="teaser-body">
            <h3>Misión y Visión</h3>
            <p>
              Conoce el propósito que guía nuestro trabajo hoy y el futuro que buscamos construir
              a partir de los datos de salud.
            </p>
          </div>
          <Link to="/mision-y-vision" className="btn btn-primary teaser-btn">
            Ver página <Icon name="rocket" size={16} strokeWidth={2} />
          </Link>
        </Reveal>
      </section>

      <section className="section">
        <Reveal className="section-heading">
          <h2>Nuestros valores</h2>
          <p>Los principios que guían a la colonia GatoByte en cada proyecto.</p>
        </Reveal>
        <div className="values-grid">
          {values.map((v, i) => (
            <Reveal key={v.title} delay={i * 90} className="value-card-wrap">
              <div className="value-card">
                <Icon name={v.icon} size={26} strokeWidth={1.8} />
                <h4>{v.title}</h4>
                <p>{v.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section section-alt">
        <Reveal className="section-heading">
          <h2>Cómo trabajamos</h2>
          <p>El proceso que seguimos en cada investigación, paso a paso.</p>
        </Reveal>
        <ProcessSteps steps={processSteps} />
      </section>

      <section className="section">
        <Reveal className="quote-card">
          <PhotoBlob {...catPhotos.bandana} className="quote-avatar" />
          <div className="quote-body">
            <Icon name="paw" size={26} strokeWidth={0} className="quote-mark" />
            <p>
              "La curiosidad no mató al gato: le enseñó el método científico."
            </p>
            <span className="quote-author">— Filosofía GatoByte</span>
          </div>
        </Reveal>
      </section>

      <section className="section cta-section">
        <Reveal className="cta-box">
          <h2>Explora nuestro contenido</h2>
          <p>Teoría, fotografías y videos sobre nuestra estrategia, ciencia, innovación y gestión de tecnología.</p>
          <div className="hero-actions">
            <Link to="/mision-y-vision" className="btn btn-cream">
              <Icon name="target" size={18} strokeWidth={2} /> Misión y Visión
            </Link>
            <Link to="/ciencia-e-innovacion" className="btn btn-cream">
              <Icon name="microscope" size={18} strokeWidth={2} /> Ciencia e Innovación
            </Link>
            <Link to="/gestion-de-tecnologia" className="btn btn-cream">
              <Icon name="compass" size={18} strokeWidth={2} /> Gestión de Tecnología
            </Link>
            <Link to="/organizacion" className="btn btn-cream">
              <Icon name="network" size={18} strokeWidth={2} /> Organización
            </Link>
            <Link to="/descripcion-de-posiciones" className="btn btn-cream">
              <Icon name="file" size={18} strokeWidth={2} /> Descripción de Posiciones
            </Link>
          </div>
        </Reveal>
      </section>
    </>
  );
}
