import Icon from "./Icon";
import Reveal from "./Reveal";
import AnimatedNumber from "./AnimatedNumber";

export default function StatStrip({ stats }) {
  return (
    <div className="stat-strip">
      {stats.map((s, i) => (
        <Reveal key={s.label} delay={i * 90} className="stat-tile-wrap">
          <div className="stat-tile">
            <span className="stat-icon">
              <Icon name={s.icon} size={24} strokeWidth={2} />
            </span>
            <span className="stat-value">
              <AnimatedNumber value={s.value} />
            </span>
            <span className="stat-label">{s.label}</span>
          </div>
        </Reveal>
      ))}
    </div>
  );
}
