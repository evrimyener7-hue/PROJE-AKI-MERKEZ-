"use client";

import { useMemo, useState } from "react";
import PageHero from "@/components/PageHero";
import ResultPanel, { ResultSection } from "@/components/ResultPanel";
import SectionHeader from "@/components/SectionHeader";
import { useLanguage } from "@/components/LanguageProvider";

export default function ProjectStarterPage() {
  const { locale } = useLanguage();
  const isTr = locale === "tr";

  const [idea, setIdea] = useState("");
  const [targetUser, setTargetUser] = useState("");
  const [goal, setGoal] = useState("");
  const [outputType, setOutputType] = useState("");
  const [format, setFormat] = useState("");
  const [constraints, setConstraints] = useState("");
  const [skillLevel, setSkillLevel] = useState("");
  const [run, setRun] = useState(false);

  const sections = useMemo<ResultSection[]>(() => {
    const defaultIdea = isTr ? "Henüz detaylanmamış bir fikir" : "An early-stage idea";
    const text = idea || defaultIdea;
    return [
      { title: isTr ? "Proje Özeti" : "Project Summary", content: `${text} fikri net bir akışa dönüştürülüyor.` },
      { title: isTr ? "Temel Problem" : "Core Problem", content: isTr ? "Kullanıcının süreçte kaybolması ve adım netliğinin olmaması." : "Users lose direction without clear process stages." },
      { title: isTr ? "Amaç" : "Goal", content: goal || (isTr ? "Fikri uygulanabilir adımlara çevirmek." : "Translate idea into executable stages.") },
      { title: isTr ? "Hedef Kullanıcı" : "Target User", content: targetUser || (isTr ? "Kendi projelerini düzenlemek isteyen üretici." : "Independent creator managing personal projects.") },
      { title: isTr ? "Kapsam" : "Scope", content: `${outputType || (isTr ? "Yapılandırılmış içerik" : "Structured output")} • ${format || (isTr ? "Kart ve panel düzeni" : "Card and panel layout")}` },
      { title: isTr ? "İlk Sürüm (MVP)" : "MVP", content: isTr ? "Fikir girişi, özet paneli, temel akış haritası ve prompt çıktısı." : "Idea input, summary panel, base workflow map, prompt output." },
      { title: isTr ? "Riskler / Belirsizlikler" : "Risks / Uncertainties", content: constraints || (isTr ? "Zaman sınırı ve kapsamın büyümesi." : "Time limitations and scope creep.") },
      { title: isTr ? "Sonraki Adım" : "Next Step", content: isTr ? `Mevcut bilgi seviyesi: ${skillLevel || "orta"}. İlk prototip ekranlarını çıkar.` : `Current skill level: ${skillLevel || "intermediate"}. Draft first prototype screens.` }
    ];
  }, [constraints, format, goal, idea, isTr, outputType, skillLevel, targetUser]);

  return (
    <div className="space-y-8">
      <PageHero
        title={isTr ? "Proje Başlatıcı" : "Project Starter"}
        subtitle={isTr ? "Kaba fikrini yapılandır, kapsamı netleştir, uygulanabilir ilk sürümü belirle." : "Structure rough ideas, clarify scope, and define a practical first version."}
      />
      <SectionHeader title={isTr ? "Ne yapmak istiyorsun?" : "What do you want to build?"} />
      <div className="grid gap-6 lg:grid-cols-2">
        <div className="space-y-3 rounded-3xl border border-slate-700 bg-panel p-5">
          <textarea value={idea} onChange={(e) => setIdea(e.target.value)} rows={6} className="w-full rounded-xl border border-slate-600 bg-slate-950 p-3" placeholder={isTr ? "Örn: Yaratıcı proje planlama asistanı" : "Ex: A creative project planning assistant"} />
          {[{v:targetUser,s:setTargetUser,p:isTr?"Hedef kullanıcı":"Target user"},{v:goal,s:setGoal,p:isTr?"Amaç":"Goal"},{v:outputType,s:setOutputType,p:isTr?"Çıktı türü":"Output type"},{v:format,s:setFormat,p:isTr?"Format":"Format"},{v:constraints,s:setConstraints,p:isTr?"Kısıtlar":"Constraints"},{v:skillLevel,s:setSkillLevel,p:isTr?"Mevcut bilgi seviyesi":"Current skill level"}].map((field)=> (
            <input key={field.p} value={field.v} onChange={(e)=>field.s(e.target.value)} className="w-full rounded-xl border border-slate-600 bg-slate-950 p-3 text-sm" placeholder={field.p} />
          ))}
          <button onClick={() => setRun(true)} className="w-full rounded-xl bg-cyan-400/20 px-4 py-3 font-medium text-cyan-100 hover:bg-cyan-400/30">{isTr ? "Fikrimi Yapılandır" : "Structure My Idea"}</button>
        </div>
        {run ? <ResultPanel sections={sections} /> : <div className="rounded-3xl border border-dashed border-slate-600 p-6 text-slate-400">{isTr ? "Sonuç paneli için fikrini yapılandır." : "Structure your idea to generate the output panel."}</div>}
      </div>
    </div>
  );
}
