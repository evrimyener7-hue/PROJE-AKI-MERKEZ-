"use client";

import { useState } from "react";
import { useLanguage } from "./LanguageProvider";

export default function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);
  const { dictionary } = useLanguage();

  const onCopy = async () => {
    await navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 1000);
  };

  return (
    <button onClick={onCopy} className="rounded-lg border border-cyan-300/30 px-3 py-2 text-xs text-cyan-200 hover:bg-cyan-400/10">
      {copied ? dictionary.common.copied : dictionary.common.copy}
    </button>
  );
}
