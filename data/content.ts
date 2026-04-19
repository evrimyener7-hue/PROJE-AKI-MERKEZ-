import { Locale } from "@/lib/i18n";

export const workflows: Record<Locale, string[][]> = {
  tr: [
    ["Fikir", "Brief", "Prompt", "Prototip"],
    ["Araştırma", "Yapılandırma", "Yazı", "Revizyon"],
    ["Fikir", "Arayüz fikri", "Uygulama promptu", "Geliştirme", "Test"],
    ["Öğrenme hedefi", "Notlar", "Örnekler", "Deneme"]
  ],
  en: [
    ["Idea", "Brief", "Prompt", "Prototype"],
    ["Research", "Structuring", "Writing", "Revision"],
    ["Idea", "Interface direction", "App prompt", "Development", "Testing"],
    ["Learning goal", "Notes", "Examples", "Practice"]
  ]
};

export const toolCategories: Record<Locale, { category: string; tools: any[] }[]> = {
  tr: [
    {
      category: "Fikir geliştirme",
      tools: [
        {
          name: "Miro",
          goodFor: "Ne için iyi: Düşünce haritası ve fikir kümeleri oluşturma.",
          when: "Ne zaman: Belirsiz fikirleri ilk kez açarken.",
          strengths: "Güçlü yönler: Görsel düşünmeyi hızlandırır.",
          limitations: "Sınırlılıklar: Çok dalda dağılma riski.",
          tags: ["mind map", "brainstorm"]
        }
      ]
    },
    {
      category: "Kodlama / Prototipleme",
      tools: [
        {
          name: "Cursor + GitHub",
          goodFor: "Ne için iyi: Kod üretimi ve iteratif geliştirme.",
          when: "Ne zaman: MVP aşamasında hızlı deneme yaparken.",
          strengths: "Güçlü yönler: Prompt + kod akışı birlikte ilerler.",
          limitations: "Sınırlılıklar: Prompt kalitesine çok bağlıdır.",
          tags: ["coding", "mvp", "iteration"]
        }
      ]
    },
    {
      category: "Yazı / Sunum",
      tools: [
        {
          name: "Notion AI",
          goodFor: "Ne için iyi: Plan, brief ve rapor taslakları.",
          when: "Ne zaman: Bilgiyi tek yerde toparlamak isterken.",
          strengths: "Güçlü yönler: Düzenli bilgi tabanı.",
          limitations: "Sınırlılıklar: Karmaşık sayfalar bakım ister.",
          tags: ["writing", "organize", "docs"]
        }
      ]
    }
  ],
  en: [
    {
      category: "Idea Development",
      tools: [
        {
          name: "Miro",
          goodFor: "Good for: Building maps and clusters from raw ideas.",
          when: "When to use: During early ambiguity and exploration.",
          strengths: "Strengths: Fast visual externalization.",
          limitations: "Limitations: Can become noisy without focus.",
          tags: ["mind map", "brainstorm"]
        }
      ]
    },
    {
      category: "Coding / Prototyping",
      tools: [
        {
          name: "Cursor + GitHub",
          goodFor: "Good for: AI-assisted coding and iteration.",
          when: "When to use: MVP implementation and quick trials.",
          strengths: "Strengths: Tight prompt-to-code loop.",
          limitations: "Limitations: Depends on prompt quality.",
          tags: ["coding", "mvp", "iteration"]
        }
      ]
    },
    {
      category: "Writing / Presentation",
      tools: [
        {
          name: "Notion AI",
          goodFor: "Good for: Briefs, planning docs, and summaries.",
          when: "When to use: Centralizing project knowledge.",
          strengths: "Strengths: Structured personal knowledge base.",
          limitations: "Limitations: Needs consistent upkeep.",
          tags: ["writing", "organize", "docs"]
        }
      ]
    }
  ]
};
