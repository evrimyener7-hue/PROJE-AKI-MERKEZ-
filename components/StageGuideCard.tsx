"use client";

import CopyButton from "./CopyButton";
import TagBadge from "./TagBadge";
import { useLanguage } from "./LanguageProvider";

export default function StageGuideCard({
  title,
  description,
  prepare,
  next,
  prompt,
  tools,
  sample,
  decision
}: {
  title: string;
  description?: string;
  prepare?: string;
  next: string;
  prompt: string;
  tools?: string[];
  sample?: string;
  decision?: string;
}) {
  const { dictionary, locale } = useLanguage();
  const isTr = locale === "tr";

  return (
    <div className="space-y-4 rounded-3xl border border-slate-700 bg-panel p-5">
      <h3 className="text-xl font-semibold text-white">{title}</h3>
      {description ? <p className="text-sm text-slate-300">{description}</p> : null}
      {prepare ? (
        <p className="text-sm text-slate-200">
          <span className="text-cyan-300">{isTr ? "Hazırlık" : "Preparation"}:</span> {prepare}
        </p>
      ) : null}
      {decision ? (
        <p className="text-sm text-slate-200">
          <span className="text-cyan-300">{isTr ? "Karar" : "Decision"}:</span> {decision}
        </p>
      ) : null}
      {sample ? (
        <p className="text-sm text-slate-200">
          <span className="text-fuchsia-300">{isTr ? "Örnek çıktı" : "Sample output"}:</span> {sample}
        </p>
      ) : null}

      <div className="rounded-2xl border border-cyan-300/25 bg-slate-900/70 p-3">
        <div className="mb-2 flex items-center justify-between gap-4">
          <p className="text-xs uppercase tracking-wider text-cyan-200">Prompt</p>
          <CopyButton text={prompt} />
        </div>
        <p className="text-sm text-slate-100">{prompt}</p>
      </div>

      {tools?.length ? (
        <div className="flex flex-wrap gap-2">
          {tools.map((tool) => (
            <TagBadge key={tool} label={tool} />
          ))}
        </div>
      ) : null}

      <div className="rounded-xl border border-fuchsia-400/25 bg-fuchsia-400/10 p-3 text-sm text-fuchsia-100">
        <strong>{dictionary.common.nextStep}:</strong> {next}
      </div>
    </div>
  );
}
