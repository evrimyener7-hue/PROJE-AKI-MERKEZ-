"use client";

import { useMemo, useState } from "react";
import PageHero from "@/components/PageHero";
import SectionHeader from "@/components/SectionHeader";
import StageGuideCard from "@/components/StageGuideCard";
import TagBadge from "@/components/TagBadge";
import { useLanguage } from "@/components/LanguageProvider";
import { vibePlatforms, vibeProjectTypes, vibeStages } from "@/data/workshops";

export default function VibeCodingPage() {
  const { locale } = useLanguage();
  const isTr = locale === "tr";

  const [projectType, setProjectType] = useState(vibeProjectTypes[locale][0]);
  const [platform, setPlatform] = useState(vibePlatforms[locale][0]);
  const [projectName, setProjectName] = useState("");
  const [purpose, setPurpose] = useState("");
  const [audience, setAudience] = useState("");
  const [features, setFeatures] = useState("");

  const helperPrompts = isTr
    ? ["bunu sadeleştir", "bunu geliştir", "bunu test etmeye uygun hale getir", "bunu deploy edilebilir yap", "bunu daha net bir brief haline getir"]
    : ["simplify this", "improve this", "make this test-ready", "make this deployable", "turn this into a clearer brief"];

  const kickoff = useMemo(
    () =>
      isTr
        ? `${projectType} türünde "${projectName || "isimsiz proje"}" oluştur. Amaç: ${purpose || "belirtilmedi"}. Hedef kitle: ${audience || "belirtilmedi"}. Özellikler: ${features || "temel sürüm"}. ${platform} odağında ilerle.`
        : `Create a "${projectName || "untitled project"}" as a ${projectType}. Purpose: ${purpose || "not specified"}. Audience: ${audience || "not specified"}. Features: ${features || "base version"}. Build around ${platform}.`,
    [audience, features, isTr, platform, projectName, projectType, purpose]
  );

  return (
    <div className="space-y-8">
      <PageHero
        title={isTr ? "Vibe Coding Atölyesi" : "Vibe Coding Workshop"}
        subtitle={isTr ? "Proje türünü seç, yapılandırılmış formu doldur, platformunu belirle ve fikirden deploy'a kadar ilerle." : "Select project type, fill structured setup, choose platform, and move from idea to deploy."}
      />

      <section className="space-y-4 rounded-3xl border border-slate-700 bg-panel p-6">
        <SectionHeader title={isTr ? "1) Proje türünü seç" : "1) Select project type"} />
        <div className="flex flex-wrap gap-2">
          {vibeProjectTypes[locale].map((type) => (
            <button
              key={type}
              onClick={() => setProjectType(type)}
              className={`rounded-full px-3 py-2 text-sm ${projectType === type ? "bg-cyan-400/25 text-cyan-100" : "bg-slate-800 text-slate-300"}`}
            >
              {type}
            </button>
          ))}
        </div>
      </section>

      <section className="grid gap-6 xl:grid-cols-2">
        <div className="space-y-3 rounded-3xl border border-slate-700 bg-panel p-6">
          <SectionHeader title={isTr ? "2) Proje kurulum formu" : "2) Project setup form"} />
          <input value={projectName} onChange={(e) => setProjectName(e.target.value)} className="w-full rounded-xl border border-slate-600 bg-slate-950 p-3" placeholder={isTr ? "Proje adı" : "Project name"} />
          <textarea value={purpose} onChange={(e) => setPurpose(e.target.value)} rows={3} className="w-full rounded-xl border border-slate-600 bg-slate-950 p-3" placeholder={isTr ? "Ne yapmasını istiyorsunuz?" : "What should it do?"} />
          <input value={audience} onChange={(e) => setAudience(e.target.value)} className="w-full rounded-xl border border-slate-600 bg-slate-950 p-3" placeholder={isTr ? "Hedef kitle" : "Target audience"} />
          <textarea value={features} onChange={(e) => setFeatures(e.target.value)} rows={2} className="w-full rounded-xl border border-slate-600 bg-slate-950 p-3" placeholder={isTr ? "Özel özellikler (opsiyonel)" : "Special features (optional)"} />
        </div>

        <div className="space-y-4 rounded-3xl border border-cyan-300/25 bg-slate-900/70 p-6">
          <SectionHeader title={isTr ? "3) Platform / araç seçimi" : "3) Platform/tool selection"} />
          <div className="flex flex-wrap gap-2">
            {vibePlatforms[locale].map((item) => (
              <button key={item} onClick={() => setPlatform(item)} className={`rounded-full px-3 py-2 text-sm ${platform === item ? "bg-fuchsia-400/25 text-fuchsia-100" : "bg-slate-800 text-slate-300"}`}>
                {item}
              </button>
            ))}
          </div>
          <div className="rounded-2xl border border-slate-700 bg-panel p-4 text-sm text-slate-200">{kickoff}</div>
        </div>
      </section>

      <section className="space-y-4">
        <SectionHeader title={isTr ? "4) Aşama bazlı üretim akışı" : "4) Stage-by-stage production flow"} />
        <div className="grid gap-4 lg:grid-cols-2">
          {vibeStages[locale].map((stage) => (
            <StageGuideCard
              key={stage.name}
              title={stage.name}
              description={stage.description}
              prepare={stage.prepare}
              next={stage.next}
              prompt={stage.prompt}
            />
          ))}
        </div>
      </section>

      <section className="space-y-3 rounded-3xl border border-fuchsia-400/30 bg-panel p-6">
        <SectionHeader title={isTr ? "Yardımcı promptlar" : "Helper prompts"} />
        <div className="flex flex-wrap gap-2">
          {helperPrompts.map((item) => (
            <TagBadge key={item} label={item} />
          ))}
        </div>
      </section>
    </div>
  );
}
