import Icon from "./Icon";
import Reveal from "./Reveal";

export default function DefinitionGrid({ items }) {
  return (
    <div className="definition-grid">
      {items.map((item, i) => (
        <Reveal key={item.title} delay={i * 90} className="definition-item">
          <span className="definition-icon">
            <Icon name={item.icon} size={22} strokeWidth={1.8} />
          </span>
          <h3>{item.title}</h3>
          {item.blocks.map((block, j) => (
            <div key={j} className="theory-block">
              {block.text && <p>{block.text}</p>}
              {block.list && (
                <ul>
                  {block.list.map((li, k) => (
                    <li key={k}>{li}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </Reveal>
      ))}
    </div>
  );
}
