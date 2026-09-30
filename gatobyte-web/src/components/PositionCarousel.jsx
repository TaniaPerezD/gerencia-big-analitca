import Icon from "./Icon";
import Reveal from "./Reveal";
import RoleLinks from "./RoleLinks";
import { roleAnchorId } from "../data/roles";

export default function PositionCarousel({ positions }) {
  return (
    <div className="position-carousel">
      {positions.map((p, i) => (
        <Reveal
          key={p.title}
          id={roleAnchorId("posiciones", p.roleId)}
          delay={i * 80}
          className="position-card"
        >
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
          <RoleLinks role={p.roleId} page="posiciones" />
        </Reveal>
      ))}
    </div>
  );
}
