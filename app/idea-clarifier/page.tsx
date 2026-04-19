"use client";

import { useMemo, useState } from "react";
import ExpandablePanel from "@/components/ExpandablePanel";
import PageHero from "@/components/PageHero";
import ResultPanel from "@/components/ResultPanel";
import { useLanguage } from "@/components/LanguageProvider";

export default function IdeaClarifierPage() {
  const { locale, dictionary } = useLanguage();
  const isTr = locale === "tr";
  const [depth, setDepth] = useState(1);

  const questions = isTr
    ? [
        ["Fikrin özü ne?", "Bunu tek cümlede ifade et."],
        ["Hangi problemi çözüyor?", "Gerçek hayatta hangi sıkışmayı gideriyor?"],
        ["Kim için?", "Kim bu fikirden düzenli fayda görür?"],
        ["Neden farklı?", "Mevcut yöntemlere göre hangi farkı yaratıyor?"],
        ["En basit yararlı sürüm ne?", "2 saatte test edilebilecek en küçük adım ne?"],
        ["Hangi araçlar gerekebilir?", "Planlama, üretim, test araçları neler?"]
      ]
    : [
        ["What is the core idea?", "State it in one clear sentence."],
        ["What problem does it solve?", "Which real bottleneck does it remove?"],
        ["Who is it for?", "Who benefits from this repeatedly?"],
        ["What makes it different?", "How is it meaningfully distinct?"],
        ["What is the simplest useful version?", "What can be tested in two hours?"],
        ["What tools might be needed?", "Which planning, creation, and testing tools fit?"]
      ];

  const summary = useMemo(
    () => [
      { title: isTr ? "Netleşen yön" : "Clarified direction", content: isTr ? `Odak seviyesi ${depth}/5: fikirin temel kullanım senaryosu belirginleşiyor.` : `Focus depth ${depth}/5: the primary use case is becoming clear.` },
      { title: isTr ? "Eksik kalanlar" : "Open points", content: isTr ? "Farklılaştırıcı değer ve ölçülebilir başarı metriği tanımlanmalı." : "Define differentiator and measurable success metric." },
      { title: isTr ? "Sonraki adım" : "Next step", content: isTr ? "MVP senaryosunu tek akışta yaz ve prompt oluşturucuya taşı." : "Write one MVP scenario flow and pass it to prompt builder." }
    ],
    [depth, isTr]
  );

  return (
    <div className="space-y-8">
      <PageHero title={isTr ? "Fikir Netleştirici" : "Idea Clarifier"} subtitle={isTr ? "Belirsiz düşünceyi adım adım net bir konsepte dönüştür." : "Turn vague thinking into a concrete concept through guided steps."} />
      <div className="grid gap-6 lg:grid-cols-2">
        <div className="space-y-4">
          {questions.map(([title, description], index) => (
            <ExpandablePanel key={title} title={`${index + 1}. ${title}`} description={description}>
              {isTr ? "Kısa cevap yaz, sonra nedenini ekle. Somut örnek ver." : "Write a short answer, then justify it. Add one concrete example."}
            </ExpandablePanel>
          ))}
          <button onClick={() => setDepth((d) => Math.min(d + 1, 5))} className="rounded-xl bg-cyan-400/20 px-4 py-3 text-cyan-100 hover:bg-cyan-400/30">
            {dictionary.common.clarifyFurther}
          </button>
        </div>
        <ResultPanel sections={summary} />
      </div>
    </div>
  );
}
