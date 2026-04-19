export default function StructuredOutputBox({
  title,
  content
}: {
  title: string;
  content: string;
}) {
  return (
    <div className="rounded-2xl border border-slate-700 bg-panelSoft p-4">
      <h4 className="mb-2 text-sm font-semibold uppercase tracking-wide text-fuchsia-300">{title}</h4>
      <p className="text-sm text-slate-200">{content}</p>
    </div>
  );
}
