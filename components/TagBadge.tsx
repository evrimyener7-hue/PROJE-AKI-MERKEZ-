export default function TagBadge({ label }: { label: string }) {
  return <span className="rounded-full border border-cyan-300/35 bg-cyan-400/10 px-3 py-1 text-xs text-cyan-100">{label}</span>;
}
