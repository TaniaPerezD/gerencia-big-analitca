import Icon from "./Icon";

export default function TheorySection({ icon, title, blocks }) {
  return (
    <article className="theory-card">
      <div className="theory-card-header">
        <span className="theory-icon" aria-hidden="true">
          <Icon name={icon} size={22} strokeWidth={2} />
        </span>
        <h3>{title}</h3>
      </div>
      <div className="theory-card-body">
        {blocks.map((block, i) => (
          <div key={i} className="theory-block">
            {block.heading && <h4>{block.heading}</h4>}
            {block.text && <p>{block.text}</p>}
            {block.list && (
              <ul>
                {block.list.map((item, j) => (
                  <li key={j}>{item}</li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </article>
  );
}
