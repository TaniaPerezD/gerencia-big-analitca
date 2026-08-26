import Icon from "./Icon";
import Reveal from "./Reveal";

export default function PositionCarousel({ positions }) {
  return (
    <div className="position-carousel">
      {positions.map((p, i) => (
        <Reveal key={p.title} delay={i * 80} className="position-card">
          <span className="position-icon">
            <Icon name={p.icon} size={24} strokeWidth={1.8} />
          </span>
          <h3>{p.title}</h3>
          <p>{p.summary}</p>
          <h4>Responsabilidades</h4>
          <ul>
            {p.responsibilities.map((r, j) => (
              <li key={j}>{r}</li>
            ))}
          </ul>
        </Reveal>
      ))}
    </div>
  );
}
