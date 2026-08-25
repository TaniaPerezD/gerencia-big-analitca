import Icon from "../Icon";

export default function PawTrail({ count = 6, className = "" }) {
  return (
    <div className={`paw-trail ${className}`} aria-hidden="true">
      {Array.from({ length: count }).map((_, i) => (
        <span
          key={i}
          className="paw-trail-print"
          style={{
            "--i": i,
            transform: `translateY(${i % 2 === 0 ? "0px" : "14px"}) rotate(${(i % 2 === 0 ? -1 : 1) * (8 + i * 3)}deg)`,
          }}
        >
          <Icon name="paw" size={18 + (i % 3) * 3} strokeWidth={0} className="paw-trail-icon" />
        </span>
      ))}
    </div>
  );
}
