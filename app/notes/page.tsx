"use client";

import PageHero from "@/components/PageHero";
import TabGroup from "@/components/TabGroup";
import { useLanguage } from "@/components/LanguageProvider";

export default function NotesPage() {
  const { locale } = useLanguage();
  const isTr = locale === "tr";

  const tabs = isTr
    ? [
        { label: "Yararlı Çerçeveler", content: <ul className="list-disc pl-5"><li>Problem → Etki → Çözüm</li><li>Hedef → Kapsam → MVP → Ölçüm</li></ul> },
        { label: "Prompt Kalıpları", content: <p>Rol + Bağlam + Kısıt + Çıktı formatı + Değerlendirme kriteri.</p> },
        { label: "Proje Planlama Şablonları", content: <p>Haftalık odak, yapılacaklar, riskler, bir sonraki karar.</p> },
        { label: "Kontrol Listeleri", content: <p>Net problem, ölçülebilir hedef, doğrulanabilir MVP, geri bildirim döngüsü.</p> },
        { label: "Kişisel Not Alanı", content: <p>Bu alan kişisel notlar ve öğrenme çıkarımları için yer tutucudur.</p> }
      ]
    : [
        { label: "Useful Frameworks", content: <ul className="list-disc pl-5"><li>Problem → Impact → Solution</li><li>Goal → Scope → MVP → Metrics</li></ul> },
        { label: "Prompt Patterns", content: <p>Role + Context + Constraints + Output format + Evaluation criteria.</p> },
        { label: "Project Planning Templates", content: <p>Weekly focus, action items, risks, and next decision.</p> },
        { label: "Checklists", content: <p>Clear problem, measurable goal, testable MVP, feedback loop.</p> },
        { label: "Personal Notes", content: <p>Placeholder area for personal notes and reflection snippets.</p> }
      ];

  return (
    <div className="space-y-8">
      <PageHero title={isTr ? "Notlar / Bilgi Alanı" : "Notes / Knowledge Base"} subtitle={isTr ? "Tekrar kullanılabilir çerçeveler, şablonlar ve kişisel not alanı." : "Reusable frameworks, templates, and personal reference notes."} />
      <TabGroup tabs={tabs} />
    </div>
  );
}
