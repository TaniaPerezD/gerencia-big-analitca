import { Link } from "react-router-dom";
import Icon from "../components/Icon";
import Reveal from "../components/Reveal";
import BigPaw from "../components/decor/BigPaw";
import CatSilhouette from "../components/decor/CatSilhouette";
import PawTrail from "../components/decor/PawTrail";
import Sparkle from "../components/decor/Sparkle";

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
        <div className="cat-hero-meta">
          <span>GatoByte</span>
          <span className="cat-hero-meta-center">Ciencia · Tecnología · Innovación</span>
          <span>2026</span>
        </div>

        <div className="cat-hero-stage">
          <CatSilhouette pose="loaf" className="hero-cat-top" />
          <BigPaw color="dark" className="paw paw-tl" />
          <BigPaw color="dark" className="paw paw-tr" />
          <BigPaw color="tan" className="paw paw-bl" />
          <BigPaw color="tan" className="paw paw-br" />

          <div className="cat-hero-card">
            <Sparkle top="10%" left="8%" size={18} delay={0} color="#f4ede1" />
            <Sparkle top="70%" right="10%" size={24} delay={0.8} color="#f4ede1" />
            <Sparkle top="20%" right="18%" size={14} delay={1.5} color="#f4ede1" />
            <span className="tag-pill tag-pill-inverse">Bienvenidos a</span>
            <h1>
              Gato<span className="brand-accent">Byte</span>
            </h1>
            <p>
              Somos un grupo dedicado al estudio de la Ciencia, la Tecnología, la Innovación y la
              Gestión de Tecnología — con la curiosidad, agilidad y precisión de un gato.
            </p>
            <div className="hero-actions">
              <Link to="/ciencia-e-innovacion" className="btn btn-cream">
                Ciencia e Innovación
              </Link>
              <Link to="/gestion-de-tecnologia" className="btn btn-outline-cream">
                Gestión de Tecnología
              </Link>
            </div>
          </div>
        </div>

        <PawTrail count={7} className="hero-paw-trail" />
        <CatSilhouette pose="stretch" className="hero-cat-bottom" />
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
        <div className="mission-grid">
          <Reveal className="mission-card">
            <span className="mission-icon" aria-hidden="true">
              <Icon name="target" size={30} strokeWidth={1.8} />
            </span>
            <h3>Misión</h3>
            <p>
              Difundir y aplicar el conocimiento en ciencia, tecnología e innovación para impulsar
              una gestión tecnológica eficiente, ética y orientada a resultados.
            </p>
          </Reveal>
          <Reveal delay={120} className="mission-card">
            <span className="mission-icon" aria-hidden="true">
              <Icon name="telescope" size={30} strokeWidth={1.8} />
            </span>
            <h3>Visión</h3>
            <p>
              Ser un referente en la comprensión y aplicación de la ciencia, la tecnología y la
              innovación como motores de desarrollo sostenible.
            </p>
          </Reveal>
        </div>
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

      <section className="section cta-section">
        <Reveal className="cta-box">
          <h2>Explora nuestro contenido</h2>
          <p>Teoría, fotografías y videos sobre ciencia, innovación y gestión de tecnología.</p>
          <div className="hero-actions">
            <Link to="/ciencia-e-innovacion" className="btn btn-cream">
              <Icon name="microscope" size={18} strokeWidth={2} /> Ciencia e Innovación
            </Link>
            <Link to="/gestion-de-tecnologia" className="btn btn-cream">
              <Icon name="compass" size={18} strokeWidth={2} /> Gestión de Tecnología
            </Link>
          </div>
        </Reveal>
      </section>
    </>
  );
}
