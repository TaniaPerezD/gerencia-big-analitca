import Reveal from "./Reveal";

export default function References({ items }) {
  return (
    <Reveal className="references-block">
      <h4>Fuentes y referencias</h4>
      <ul>
        {items.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
    </Reveal>
  );
}
