import Icon from "./Icon";
import Reveal from "./Reveal";
import { splitNumberedTitle } from "../utils/text";

export default function Timeline({ items }) {
  return (
    <div className="timeline">
      <div className="timeline-line" aria-hidden="true" />
      {items.map((item, i) => {
        const { num, label } = splitNumberedTitle(item.title);
        const side = i % 2 === 0 ? "timeline-left" : "timeline-right";
        return (
          <Reveal key={item.title} delay={(i % 4) * 70} className={`timeline-row ${side}`}>
            <span className="timeline-dot">{num ?? i + 1}</span>
            <div className="timeline-card">
              <div className="timeline-card-header">
                <Icon name={item.icon} size={19} strokeWidth={1.8} />
                <h3>{label}</h3>
              </div>
              {item.blocks.map((block, j) => (
                <div key={j} className="theory-block">
                  {block.heading && <h4>{block.heading}</h4>}
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
            </div>
          </Reveal>
        );
      })}
    </div>
  );
}
