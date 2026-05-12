export interface Step {
  number: string;
  icon: string;
  title: string;
  description: string;
}

interface StepsFlowProps {
  steps: Step[];
  columns?: 3 | 4;
}

export default function StepsFlow({ steps, columns = 4 }: StepsFlowProps) {
  return (
    <div className={`steps-flow${columns === 3 ? ' steps-3' : ''}`}>
      {steps.map((step) => (
        <div key={step.number} className="step-item">
          <div className="step-number">{step.number}</div>
          <div className="step-icon">{step.icon}</div>
          <h4 className="step-title">{step.title}</h4>
          <p className="step-desc">{step.description}</p>
        </div>
      ))}
    </div>
  );
}
