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
          goodFor: "Ne için iyi: Fikir haritası, akış ve kapsam kırılımı.",
          when: "Ne zaman: Belirsiz başlangıçta çerçeve ararken.",
          strengths: "Güçlü yönler: Görsel düşünmeyi hızlandırır.",
          limitations: "Sınırlılıklar: Disiplinsiz kullanılırsa dağılabilir.",
          tags: ["mind map", "brainstorm", "flow"]
        }
      ]
    },
    {
      category: "Kodlama / prototipleme",
      tools: [
        {
          name: "Codex + GitHub",
          goodFor: "Ne için iyi: Prompttan üretime hızlı kod akışı.",
          when: "Ne zaman: MVP'yi kısa sürede ayağa kaldırırken.",
          strengths: "Güçlü yönler: Iteratif geliştirme döngüsü.",
          limitations: "Sınırlılıklar: Brief kalitesi sonucu doğrudan etkiler.",
          tags: ["coding", "mvp", "iteration"]
        },
        {
          name: "Replit",
          goodFor: "Ne için iyi: Kurulumsuz hızlı deneme ve paylaşım.",
          when: "Ne zaman: Hızlı prototip ve ekip içi gösterimde.",
          strengths: "Güçlü yönler: Düşük sürtünmeli başlangıç.",
          limitations: "Sınırlılıklar: Büyük ölçek için sınırlı kalabilir.",
          tags: ["prototype", "cloud", "fast"]
        }
      ]
    },
    {
      category: "Görsel / video üretimi",
      tools: [
        {
          name: "Leonardo AI",
          goodFor: "Ne için iyi: Stil tutarlı görsel üretimi.",
          when: "Ne zaman: Storyboard veya sahne görselleri çıkarırken.",
          strengths: "Güçlü yönler: Kontrol edilebilir stil varyasyonları.",
          limitations: "Sınırlılıklar: Prompt iterasyonu zaman ister.",
          tags: ["image", "style", "storyboard"]
        },
        {
          name: "Higgsfield",
          goodFor: "Ne için iyi: AI video varyasyonları.",
          when: "Ne zaman: Kısa sahne denemelerinde.",
          strengths: "Güçlü yönler: Hızlı görsel hareket üretimi.",
          limitations: "Sınırlılıklar: İnce kurgu kontrolü sınırlı.",
          tags: ["video", "short", "generation"]
        },
        {
          name: "OpenArt",
          goodFor: "Ne için iyi: Alternatif görsel konsept keşfi.",
          when: "Ne zaman: Birden çok art direction denemesinde.",
          strengths: "Güçlü yönler: Çeşitli model seçenekleri.",
          limitations: "Sınırlılıklar: Sonuçlar tutarlılık gerektirir.",
          tags: ["concept", "image", "variation"]
        }
      ]
    },
    {
      category: "Ses / anlatım",
      tools: [
        {
          name: "ElevenLabs",
          goodFor: "Ne için iyi: Doğal voice-over ve anlatım.",
          when: "Ne zaman: Tanıtım veya eğitim videosu seslendirmede.",
          strengths: "Güçlü yönler: Ses karakteri esnekliği.",
          limitations: "Sınırlılıklar: Yanlış ton seçimi kaliteyi düşürür.",
          tags: ["voice", "audio", "narration"]
        }
      ]
    }
  ],
  en: [
    {
      category: "Idea development",
      tools: [
        {
          name: "Miro",
          goodFor: "Good for: mapping ideas, flow, and scope blocks.",
          when: "When to use: early ambiguity and framing stage.",
          strengths: "Strengths: accelerates visual reasoning.",
          limitations: "Limitations: can become noisy without curation.",
          tags: ["mind map", "brainstorm", "flow"]
        }
      ]
    },
    {
      category: "Coding / prototyping",
      tools: [
        {
          name: "Codex + GitHub",
          goodFor: "Good for: moving from prompt to working code quickly.",
          when: "When to use: during fast MVP implementation.",
          strengths: "Strengths: tight iterative build loop.",
          limitations: "Limitations: highly dependent on brief quality.",
          tags: ["coding", "mvp", "iteration"]
        },
        {
          name: "Replit",
          goodFor: "Good for: zero-setup prototyping and sharing.",
          when: "When to use: quick demos and internal validation.",
          strengths: "Strengths: low friction start.",
          limitations: "Limitations: may not fit larger scale projects.",
          tags: ["prototype", "cloud", "fast"]
        }
      ]
    },
    {
      category: "Image / video generation",
      tools: [
        {
          name: "Leonardo AI",
          goodFor: "Good for: style-consistent image generation.",
          when: "When to use: storyboard and scene concepting.",
          strengths: "Strengths: controllable style variations.",
          limitations: "Limitations: requires prompt iteration.",
          tags: ["image", "style", "storyboard"]
        },
        {
          name: "Higgsfield",
          goodFor: "Good for: quick AI video variations.",
          when: "When to use: short scene experiments.",
          strengths: "Strengths: rapid motion generation.",
          limitations: "Limitations: limited fine-grain edit control.",
          tags: ["video", "short", "generation"]
        },
        {
          name: "OpenArt",
          goodFor: "Good for: alternative visual direction discovery.",
          when: "When to use: testing multiple art directions.",
          strengths: "Strengths: broad model options.",
          limitations: "Limitations: needs consistency curation.",
          tags: ["concept", "image", "variation"]
        }
      ]
    },
    {
      category: "Audio / narration",
      tools: [
        {
          name: "ElevenLabs",
          goodFor: "Good for: natural narration and voice-over.",
          when: "When to use: promo or educational narration tracks.",
          strengths: "Strengths: flexible voice profiles.",
          limitations: "Limitations: tone selection affects quality.",
          tags: ["voice", "audio", "narration"]
        }
      ]
    }
  ]
};
