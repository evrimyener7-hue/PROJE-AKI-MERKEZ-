"use client";

import { useLanguage } from "./LanguageProvider";

export default function LanguageSwitcher() {
  const { locale, setLocale } = useLanguage();

  return (
    <div className="inline-flex rounded-full border border-cyan-300/30 bg-slate-900/70 p-1 shadow-neon">
      {(["tr", "en"] as const).map((item) => (
        <button
          key={item}
          onClick={() => setLocale(item)}
          className={`rounded-full px-3 py-1 text-xs font-medium uppercase tracking-wider transition ${
            locale === item
              ? "bg-cyan-300/20 text-cyan-200"
              : "text-slate-400 hover:text-cyan-200"
          }`}
        >
          {item}
        </button>
      ))}
    </div>
  );
}
