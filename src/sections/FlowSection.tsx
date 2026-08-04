import { SectionTitle } from "../components/SectionTitle";

const steps = [
  { no: "01", label: "日時送信" },
  { no: "02", label: "LINE追加" },
  { no: "03", label: "当日案内" },
];

export function FlowSection() {
  return (
    <section className="flow">
      <div className="container">
        <SectionTitle en="Flow" ja="予約から来場までの流れ" />
        <ol className="flow__steps">
          {steps.map((step) => (
            <li key={step.no} className="flow__step">
              <span className="flow__no" aria-hidden="true">
                {step.no}
              </span>
              <span className="flow__label">{step.label}</span>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
