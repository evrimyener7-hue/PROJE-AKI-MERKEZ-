import CopyButton from "./CopyButton";

export default function PromptCard({ title, prompt }: { title: string; prompt: string }) {
  return (
    <div className="space-y-3 rounded-2xl border border-slate-700 bg-panel p-4">
      <div className="flex items-center justify-between gap-4">
        <h3 className="font-semibold text-white">{title}</h3>
        <CopyButton text={prompt} />
      </div>
      <p className="whitespace-pre-wrap text-sm text-slate-200">{prompt}</p>
    </div>
  );
}
