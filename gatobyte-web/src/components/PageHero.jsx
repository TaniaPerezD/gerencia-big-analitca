import Sparkle from "./decor/Sparkle";
import PawTrail from "./decor/PawTrail";

export default function PageHero({ tag, title, subtitle, image }) {
  return (
    <section className="page-hero" style={{ "--hero-image": `url(${image})` }}>
      <div className="page-hero-overlay" />
      <Sparkle top="18%" right="10%" size={20} delay={0.2} color="#e8a259" />
      <Sparkle top="60%" left="6%" size={14} delay={1.1} color="#f4ede1" />
      <div className="page-hero-content reveal reveal-visible">
        {tag && <span className="tag-pill">{tag}</span>}
        <h1>{title}</h1>
        {subtitle && <p>{subtitle}</p>}
      </div>
      <PawTrail count={5} className="page-hero-trail" />
    </section>
  );
}
