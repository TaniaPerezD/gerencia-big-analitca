import Icon from "./Icon";
import Reveal from "./Reveal";

export default function ProcessSteps({ steps }) {
  return (
    <div className="process-steps">
      <div className="process-line" aria-hidden="true" />
      {steps.map((step, i) => (
        <Reveal key={step.title} delay={i * 110} className="process-step-wrap">
          <div className="process-step">
            <span className="process-number">{i + 1}</span>
            <span className="process-icon">
              <Icon name={step.icon} size={22} strokeWidth={1.8} />
            </span>
            <h4>{step.title}</h4>
            <p>{step.text}</p>
          </div>
        </Reveal>
      ))}
    </div>
  );
}
