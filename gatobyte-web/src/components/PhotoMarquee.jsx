export default function PhotoMarquee({ photos }) {
  const track = [...photos, ...photos];
  return (
    <div className="marquee">
      <div className="marquee-track">
        {track.map((p, i) => (
          <div className="marquee-item" key={i}>
            <img src={p.src} alt={p.alt} loading="lazy" />
          </div>
        ))}
      </div>
    </div>
  );
}
