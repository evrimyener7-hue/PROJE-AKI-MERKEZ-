"use client";

import PageHero from "@/components/PageHero";
import WorkflowStep from "@/components/WorkflowStep";
import { useLanguage } from "@/components/LanguageProvider";
import { workflows } from "@/data/content";

export default function WorkflowMapsPage() {
  const { locale } = useLanguage();
  const isTr = locale === "tr";

  return (
    <div className="space-y-8">
      <PageHero title={isTr ? "Akış Haritaları" : "Workflow Maps"} subtitle={isTr ? "Düşünceden üretime giden adımları görsel akışlarla izle." : "Follow visual process routes from thinking to output."} />
      <div className="space-y-4">
        {workflows[locale].map((steps, index) => (
          <WorkflowStep key={index} steps={steps} />
        ))}
      </div>
    </div>
  );
}
