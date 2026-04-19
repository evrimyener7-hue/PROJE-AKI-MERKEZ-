"use client";

import { useMemo, useState } from "react";
import CopyButton from "@/components/CopyButton";
import PageHero from "@/components/PageHero";
import PromptCard from "@/components/PromptCard";
import { useLanguage } from "@/components/LanguageProvider";

export default function PromptBuilderPage() {
  const { locale } = useLanguage();
  const isTr = locale === "tr";

  const types = isTr
    ? ["Uygulama geliştirme", "Arayüz / tasarım", "Araştırma", "Planlama", "Yazı / içerik", "İş akışı"]
    : ["App-building", "Design/UI", "Research", "Planning", "Writing/content", "Workflow"];

  const [selectedType, setSelectedType] = useState(types[0]);
  const [context, setContext] = useState("");
  const [tone, setTone] = useState(isTr ? "sade ve net" : "clear and practical");
  const [result, setResult] = useState("");

  const basePrompt = useMemo(
    () =>
      isTr
        ? `Rolün: kıdemli ürün stratejisti ve uygulama tasarımcısı.\nGörev: ${selectedType} promptu üret.\nBağlam: ${context || "Belirtilmedi"}\nTon: ${tone}\nÇıktı: adım adım plan + uygulanabilir öneriler + kontrol listesi.`
        : `Role: senior product strategist and app designer.\nTask: generate a ${selectedType} prompt.\nContext: ${context || "Not provided"}\nTone: ${tone}\nOutput: step-by-step plan + practical recommendations + checklist.`,
    [context, isTr, selectedType, tone]
  );

  const adjust = (type: "detail" | "short" | "technical" | "simple") => {
    const map = {
      detail: isTr ? "Detay seviyesi yüksek, örnekli anlat." : "Increase detail level and include examples.",
      short: isTr ? "Daha kısa, 6 maddede özetle." : "Make it shorter in 6 bullets.",
      technical: isTr ? "Teknik seviyeyi artır, mimari öner." : "Raise technical depth with architecture advice.",
      simple: isTr ? "Daha sade bir dille yeniden yaz." : "Rewrite in a simpler style."
    };
    setResult(`${basePrompt}\nEk talimat: ${map[type]}`);
  };

  return (
    <div className="space-y-8">
      <PageHero title={isTr ? "Prompt Oluşturucu" : "Prompt Builder"} subtitle={isTr ? "Yapılandırılmış proje düşüncesini AI araçlarında çalışacak promptlara dönüştür." : "Convert structured project thinking into AI-ready prompts."} />
      <div className="grid gap-6 xl:grid-cols-2">
        <div className="space-y-3 rounded-3xl border border-slate-700 bg-panel p-5">
          <select value={selectedType} onChange={(e) => setSelectedType(e.target.value)} className="w-full rounded-xl border border-slate-600 bg-slate-950 p-3">
            {types.map((type) => (
              <option key={type}>{type}</option>
            ))}
          </select>
          <textarea value={context} onChange={(e) => setContext(e.target.value)} rows={5} placeholder={isTr ? "Proje bağlamı, hedef, kısıtlar" : "Project context, goals, constraints"} className="w-full rounded-xl border border-slate-600 bg-slate-950 p-3" />
          <input value={tone} onChange={(e) => setTone(e.target.value)} className="w-full rounded-xl border border-slate-600 bg-slate-950 p-3" placeholder={isTr ? "Ton" : "Tone"} />
          <button onClick={() => setResult(basePrompt)} className="w-full rounded-xl bg-cyan-400/20 px-4 py-3 text-cyan-100 hover:bg-cyan-400/30">{isTr ? "Prompt Üret" : "Generate Prompt"}</button>
        </div>
        <div className="space-y-4">
          <PromptCard title={isTr ? "Üretilen Prompt" : "Generated Prompt"} prompt={result || basePrompt} />
          <div className="rounded-2xl border border-slate-700 bg-panel p-4">
            <div className="mb-3 flex flex-wrap gap-2">
              <button onClick={() => adjust("detail")} className="rounded-lg bg-slate-800 px-3 py-2 text-sm">{isTr ? "Daha detaylı yap" : "Make it more detailed"}</button>
              <button onClick={() => adjust("short")} className="rounded-lg bg-slate-800 px-3 py-2 text-sm">{isTr ? "Daha kısa yap" : "Make it shorter"}</button>
              <button onClick={() => adjust("technical")} className="rounded-lg bg-slate-800 px-3 py-2 text-sm">{isTr ? "Daha teknik yap" : "Make it more technical"}</button>
              <button onClick={() => adjust("simple")} className="rounded-lg bg-slate-800 px-3 py-2 text-sm">{isTr ? "Daha sade yap" : "Make it simpler"}</button>
            </div>
            <div className="flex justify-end"><CopyButton text={result || basePrompt} /></div>
          </div>
        </div>
      </div>
    </div>
  );
}
