"use client";

import PageHero from "@/components/PageHero";
import SectionHeader from "@/components/SectionHeader";
import ToolCard from "@/components/ToolCard";
import { useLanguage } from "@/components/LanguageProvider";
import { toolCategories } from "@/data/content";

export default function ToolGuidePage() {
  const { locale } = useLanguage();
  const isTr = locale === "tr";
  return (
    <div className="space-y-8">
      <PageHero title={isTr ? "Araç Rehberi" : "Tool Guide"} subtitle={isTr ? "Görev tipine göre araç önerileri, güçlü yönler ve sınırlılıklar." : "Tool recommendations by task type with practical trade-offs."} />
      {toolCategories[locale].map((group) => (
        <section key={group.category} className="space-y-4">
          <SectionHeader title={group.category} />
          <div className="grid gap-4 md:grid-cols-2">
            {group.tools.map((tool) => (
              <ToolCard key={tool.name} {...tool} />
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
