import TagBadge from "./TagBadge";

export default function ToolCard({
  name,
  goodFor,
  when,
  strengths,
  limitations,
  tags
}: {
  name: string;
  goodFor: string;
  when: string;
  strengths: string;
  limitations: string;
  tags: string[];
}) {
  return (
    <div className="rounded-3xl border border-slate-700 bg-panel p-5">
      <h3 className="text-lg font-semibold text-white">{name}</h3>
      <div className="mt-3 space-y-1 text-sm text-slate-300">
        <p><span className="text-cyan-300">•</span> {goodFor}</p>
        <p><span className="text-cyan-300">•</span> {when}</p>
        <p><span className="text-cyan-300">•</span> {strengths}</p>
        <p><span className="text-fuchsia-300">•</span> {limitations}</p>
      </div>
      <div className="mt-4 flex flex-wrap gap-2">{tags.map((tag) => <TagBadge key={tag} label={tag} />)}</div>
    </div>
  );
}
