import Sparkle from "./decor/Sparkle";
import PawTrail from "./decor/PawTrail";

export default function PageHero({ tag, title, subtitle, image, variant = "bleed" }) {
  if (variant === "minimal") {
    return (
      <section className="page-hero page-hero-minimal">
        <div className="page-hero-minimal-pattern" aria-hidden="true" />
        <Sparkle top="22%" left="12%" size={16} delay={0.4} color="#0d9488" />
        <Sparkle top="30%" right="14%" size={12} delay={1.3} color="#5eead4" />
        <div className="page-hero-content reveal reveal-visible">
          {tag && <span className="tag-pill tag-pill-inverse">{tag}</span>}
          <h1>{title}</h1>
          {subtitle && <p>{subtitle}</p>}
        </div>
      </section>
    );
  }

  if (variant === "split") {
    return (
      <section className="page-hero page-hero-split">
        <div className="page-hero-split-copy">
          <Sparkle top="12%" left="10%" size={16} delay={0.3} color="#5eead4" />
          {tag && <span className="tag-pill tag-pill-inverse">{tag}</span>}
          <h1>{title}</h1>
          {subtitle && <p>{subtitle}</p>}
          <PawTrail count={5} className="page-hero-trail" />
        </div>
        <div className="page-hero-split-image">
          <img src={image} alt="" />
        </div>
      </section>
    );
  }

  return (
    <section className="page-hero" style={{ "--hero-image": `url(${image})` }}>
      <div className="page-hero-overlay" />
      <Sparkle top="18%" right="10%" size={20} delay={0.2} color="#2dd4bf" />
      <Sparkle top="60%" left="6%" size={14} delay={1.1} color="#f3f8fb" />
      <div className="page-hero-content reveal reveal-visible">
        {tag && <span className="tag-pill">{tag}</span>}
        <h1>{title}</h1>
        {subtitle && <p>{subtitle}</p>}
      </div>
      <PawTrail count={5} className="page-hero-trail" />
    </section>
  );
}
