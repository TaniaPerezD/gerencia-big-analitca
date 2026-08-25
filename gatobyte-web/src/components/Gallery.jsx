import Icon from "./Icon";
import Reveal from "./Reveal";

export default function Gallery({ items }) {
  return (
    <div className="gallery-grid">
      {items.map((item, i) => (
        <Reveal key={item.caption} delay={i * 70} className="gallery-item-wrap">
          <figure className="gallery-item">
            <img src={item.src} alt={item.alt} loading="lazy" />
            <figcaption>
              <Icon name="paw" size={14} strokeWidth={0} className="figcaption-icon" />
              {item.caption}
            </figcaption>
          </figure>
        </Reveal>
      ))}
    </div>
  );
}
