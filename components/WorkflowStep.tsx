export default function WorkflowStep({ steps }: { steps: string[] }) {
  return (
    <div className="rounded-3xl border border-slate-700 bg-panel p-5">
      <div className="flex flex-wrap items-center gap-2">
        {steps.map((step, index) => (
          <div key={step} className="flex items-center gap-2">
            <span className="rounded-xl border border-cyan-300/35 bg-cyan-300/10 px-3 py-2 text-sm text-cyan-100">{step}</span>
            {index < steps.length - 1 ? <span className="text-fuchsia-300">→</span> : null}
          </div>
        ))}
      </div>
    </div>
  );
}
