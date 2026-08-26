import { useState } from "react";
import Icon from "./Icon";
import Reveal from "./Reveal";

export default function Accordion({ items }) {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className="accordion">
      {items.map((item, i) => {
        const isOpen = openIndex === i;
        return (
          <Reveal key={item.title} delay={i * 60} className={`accordion-item${isOpen ? " open" : ""}`}>
            <button
              type="button"
              className="accordion-trigger"
              onClick={() => setOpenIndex(isOpen ? -1 : i)}
              aria-expanded={isOpen}
            >
              <span className="accordion-icon">
                <Icon name={item.icon} size={19} strokeWidth={1.8} />
              </span>
              <span className="accordion-title">{item.title}</span>
              <Icon name="chevron" size={18} strokeWidth={2} className="accordion-chevron" />
            </button>
            <div className="accordion-body">
              <div className="accordion-body-inner">
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
            </div>
          </Reveal>
        );
      })}
    </div>
  );
}
