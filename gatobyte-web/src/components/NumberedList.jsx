import Icon from "./Icon";
import Reveal from "./Reveal";
import { splitNumberedTitle } from "../utils/text";

export default function NumberedList({ items }) {
  return (
    <div className="numbered-list">
      {items.map((item, i) => {
        const { num, label } = splitNumberedTitle(item.title);
        return (
          <Reveal key={item.title} delay={(i % 4) * 70} className="numbered-row">
            <span className="numbered-index">{num ?? i + 1}</span>
            <span className="numbered-icon">
              <Icon name={item.icon} size={22} strokeWidth={1.8} />
            </span>
            <div className="numbered-content">
              <h3>{label}</h3>
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
