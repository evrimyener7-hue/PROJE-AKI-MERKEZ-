"use client";

import { useState } from "react";
import PageHero from "@/components/PageHero";
import SectionHeader from "@/components/SectionHeader";
import StageGuideCard from "@/components/StageGuideCard";
import { useLanguage } from "@/components/LanguageProvider";
import { genContentTypes, genStages } from "@/data/workshops";

export default function GenerativeAiPage() {
  const { locale } = useLanguage();
  const isTr = locale === "tr";

  const [contentType, setContentType] = useState(genContentTypes[locale][0]);
  const [topic, setTopic] = useState("");
  const [projectName, setProjectName] = useState("");
  const [name, setName] = useState("");
  const [folder, setFolder] = useState("01-brief / 02-script / 03-assets / 04-edit / 05-final");
  const [brief, setBrief] = useState("");

  return (
    <div className="space-y-8">
      <PageHero
        title={isTr ? "Üretken Yapay Zeka Atölyesi" : "Generative AI Workshop"}
        subtitle={isTr ? "İçerik türünü seç, proje setup'ını yap, senaryodan final çıktıya kadar adım adım üret." : "Pick content type, configure project setup, and produce from script to final output."}
      />

      <section className="space-y-4 rounded-3xl border border-slate-700 bg-panel p-6">
        <SectionHeader title={isTr ? "1) İçerik türü" : "1) Content type"} />
        <div className="flex flex-wrap gap-2">
          {genContentTypes[locale].map((type) => (
            <button key={type} onClick={() => setContentType(type)} className={`rounded-full px-3 py-2 text-sm ${contentType === type ? "bg-cyan-400/20 text-cyan-100" : "bg-slate-800 text-slate-300"}`}>
              {type}
            </button>
          ))}
        </div>
      </section>

      <section className="grid gap-4 xl:grid-cols-2">
        <div className="space-y-3 rounded-3xl border border-slate-700 bg-panel p-6">
          <SectionHeader title={isTr ? "2) Proje setup" : "2) Project setup"} />
          <input value={topic} onChange={(e) => setTopic(e.target.value)} className="w-full rounded-xl border border-slate-600 bg-slate-950 p-3" placeholder={isTr ? "Konu" : "Topic"} />
          <input value={projectName} onChange={(e) => setProjectName(e.target.value)} className="w-full rounded-xl border border-slate-600 bg-slate-950 p-3" placeholder={isTr ? "Proje adı" : "Project name"} />
          <input value={name} onChange={(e) => setName(e.target.value)} className="w-full rounded-xl border border-slate-600 bg-slate-950 p-3" placeholder={isTr ? "Ad ve soyad" : "Full name"} />
          <input value={folder} onChange={(e) => setFolder(e.target.value)} className="w-full rounded-xl border border-slate-600 bg-slate-950 p-3" placeholder={isTr ? "Klasör yapısı" : "Folder structure"} />
          <textarea value={brief} onChange={(e) => setBrief(e.target.value)} rows={4} className="w-full rounded-xl border border-slate-600 bg-slate-950 p-3" placeholder={isTr ? "Ek notlar / brief" : "Additional notes / brief"} />
        </div>

        <div className="rounded-3xl border border-fuchsia-400/30 bg-slate-900/70 p-6 text-sm text-slate-200">
          <SectionHeader title={isTr ? "Atölye özeti" : "Workshop summary"} />
          <p>{isTr ? `Tür: ${contentType}` : `Type: ${contentType}`}</p>
          <p>{isTr ? `Konu: ${topic || "belirtilmedi"}` : `Topic: ${topic || "not specified"}`}</p>
          <p>{isTr ? `Proje: ${projectName || "isimsiz"}` : `Project: ${projectName || "untitled"}`}</p>
          <p>{isTr ? `Sorumlu: ${name || "belirtilmedi"}` : `Owner: ${name || "not specified"}`}</p>
          <p className="mt-2">{isTr ? `Klasör: ${folder}` : `Folders: ${folder}`}</p>
          <p className="mt-4 rounded-xl border border-slate-700 bg-panel p-3">{brief || (isTr ? "Kısa brief ekleyerek üretim kararlarını sabitle." : "Add a brief to anchor production decisions.")}</p>
        </div>
      </section>

      <section className="space-y-4">
        <SectionHeader title={isTr ? "3) Aşama bazlı üretim yolu" : "3) Stage-based production pathway"} />
        <div className="grid gap-4 lg:grid-cols-2">
          {genStages[locale].map((stage) => (
            <StageGuideCard
              key={stage.name}
              title={stage.name}
              decision={stage.decision}
              sample={stage.sample}
              prompt={stage.prompt}
              next={stage.next}
              tools={stage.tools}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
