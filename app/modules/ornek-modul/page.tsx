"use client";

import PageHero from "@/components/PageHero";
import TabGroup from "@/components/TabGroup";
import { useLanguage } from "@/components/LanguageProvider";

export default function ExampleModulePage() {
  const { locale } = useLanguage();
  const isTr = locale === "tr";

  const tabs = isTr
    ? [
        { label: "Genel Bakış", content: <p>Bu modül, fikirden prototipe geçişte zihinsel çerçeve sunar.</p> },
        { label: "Temel Kavramlar", content: <p>Problemi tanımlama, kapsam sınırları, MVP kararı, geri bildirim döngüsü.</p> },
        { label: "Prompt Şablonları", content: <p>"Rolün ürün stratejisti..." ile başlayan örnek şablonlar.</p> },
        { label: "Alternatif Araçlar", content: <p>Miro, FigJam, Notion, Cursor, Figma alternatif kullanım önerileri.</p> },
        { label: "Düşünme Notları", content: <p>Hangi kararlar enerjini artırdı? Hangi adımlar karmaşıktı?</p> },
        { label: "İsteğe Bağlı Mini Quiz", content: <p>Quiz görünürlüğü v1'de isteğe bağlıdır; kapatılabilir tasarlandı.</p> }
      ]
    : [
        { label: "Overview", content: <p>This module provides a mental model for moving from idea to prototype.</p> },
        { label: "Key Concepts", content: <p>Problem framing, scope boundaries, MVP decision, feedback loops.</p> },
        { label: "Prompt Templates", content: <p>Reusable templates starting with role and constraints definitions.</p> },
        { label: "Alternative Tools", content: <p>Practical alternatives: Miro, FigJam, Notion, Cursor, Figma.</p> },
        { label: "Reflection Notes", content: <p>Which decisions improved clarity? Which steps created friction?</p> },
        { label: "Optional Mini Quiz", content: <p>Quiz support is optional in v1 and can be hidden at any time.</p> }
      ];

  return (
    <div className="space-y-8">
      <PageHero title={isTr ? "Örnek Öğrenme Modülü" : "Sample Learning Module"} subtitle={isTr ? "Platformı destekleyen, hafif ve isteğe bağlı öğrenme alanı." : "A lightweight, optional learning companion for the platform."} />
      <TabGroup tabs={tabs} />
    </div>
  );
}
