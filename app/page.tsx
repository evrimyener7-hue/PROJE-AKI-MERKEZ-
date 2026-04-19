"use client";

import FeatureCard from "@/components/FeatureCard";
import ModuleCard from "@/components/ModuleCard";
import PageHero from "@/components/PageHero";
import SectionHeader from "@/components/SectionHeader";
import { useLanguage } from "@/components/LanguageProvider";

export default function HomePage() {
  const { dictionary } = useLanguage();

  return (
    <div className="space-y-12">
      <PageHero title={dictionary.appName} subtitle={dictionary.subtitle} tagline={dictionary.tagline} />

      <section className="space-y-6">
        <SectionHeader title={dictionary.cta} description={dictionary.homeIntro} />
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {dictionary.homeSections.slice(0, 6).map((section) => (
            <FeatureCard key={section.href} title={section.title} description={section.description} href={section.href} />
          ))}
        </div>
        <ModuleCard
          title={dictionary.homeSections[6].title}
          description={dictionary.homeSections[6].description}
          href={dictionary.homeSections[6].href}
        />
      </section>
    </div>
  );
}
