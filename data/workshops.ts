import { Locale } from "@/lib/i18n";

export const vibeProjectTypes: Record<Locale, string[]> = {
  tr: [
    "Dashboard / panel",
    "Web uygulaması",
    "Blok içerik sitesi",
    "AI araç",
    "Chatbot",
    "Landing page",
    "Basit oyun",
    "E-ticaret sayfası",
    "Portfolyo sitesi",
    "İç araç / utility tool"
  ],
  en: [
    "Dashboard / panel",
    "Web app",
    "Block-content site",
    "AI tool",
    "Chatbot",
    "Landing page",
    "Simple game",
    "E-commerce page",
    "Portfolio site",
    "Internal utility tool"
  ]
};

export const vibePlatforms: Record<Locale, string[]> = {
  tr: [
    "Replit",
    "GPT",
    "Codex",
    "No-code / low-code seçenekleri",
    "Tasarım odaklı başlangıç",
    "Hızlı prototipleme seçenekleri"
  ],
  en: [
    "Replit",
    "GPT",
    "Codex",
    "No-code / low-code options",
    "Design-first start",
    "Rapid prototyping options"
  ]
};

export const vibeStages: Record<Locale, { name: string; description: string; prepare: string; next: string; prompt: string }[]> = {
  tr: [
    {
      name: "Fikir",
      description: "Projenin ne işe yarayacağını ve kime değer üreteceğini netleştir.",
      prepare: "Bir cümlelik değer önerisi + hedef kullanıcı profili.",
      next: "Problem ve beklentiyi tek paragrafta yaz.",
      prompt: "Bu fikri kullanıcı problemi, değer önerisi ve tek cümle MVP hedefi ile yeniden yaz."
    },
    {
      name: "Brief",
      description: "Kapsamı sınırla ve ilk sürüm için gereksiz parçaları çıkar.",
      prepare: "Olmazsa olmaz 3 özellik ve başarı ölçütü.",
      next: "MVP kapsamı dışında kalanları ayrıca listele.",
      prompt: "Aşağıdaki fikri ürün brief formatında düzenle: hedef, kapsam, metrik, risk."
    },
    {
      name: "Prompt",
      description: "Kod üretimine uygun açık talimat seti oluştur.",
      prepare: "Teknoloji tercihi, ekran listesi, veri modeli.",
      next: "Promptu modüllere ayır ve önceliklendir.",
      prompt: "Next.js + TypeScript için bu briefi görevlere bölünmüş geliştirme promptuna çevir."
    },
    {
      name: "Kod",
      description: "AI desteği ile modül bazlı geliştirme yap.",
      prepare: "Dosya yapısı ve minimum bileşen listesi.",
      next: "Önce çekirdek akışı çalışan hale getir.",
      prompt: "Verilen promptu kullanarak önce temel sayfaları ve reusable componentleri üret."
    },
    {
      name: "Test",
      description: "Kırılan noktaları ve kullanılabilirlik sorunlarını yakala.",
      prepare: "Kritik kullanıcı senaryoları ve hata listesi.",
      next: "Smoke test listesi çıkar ve her adımı doğrula.",
      prompt: "Bu uygulama için manuel test senaryoları ve kabul kriterleri oluştur."
    },
    {
      name: "Deploy",
      description: "Üretim yayını ve ilk geri bildirim döngüsünü planla.",
      prepare: "Deploy ortamı, env değişkenleri, izleme planı.",
      next: "İlk kullanıcı geri bildirim formunu hazırla.",
      prompt: "Bu proje için deploy checklisti ve yayın sonrası 7 günlük izleme planı çıkar."
    }
  ],
  en: [
    {
      name: "Idea",
      description: "Clarify value, target user, and practical outcome.",
      prepare: "One-line value proposition + target profile.",
      next: "Write a single paragraph describing problem and intent.",
      prompt: "Rewrite this idea with user problem, value proposition, and one-sentence MVP goal."
    },
    {
      name: "Brief",
      description: "Constrain scope and remove non-essential features.",
      prepare: "Three must-have features + success metric.",
      next: "Separate out-of-scope items clearly.",
      prompt: "Convert the idea into a product brief: goal, scope, metric, risk."
    },
    {
      name: "Prompt",
      description: "Create clear instructions for AI-assisted development.",
      prepare: "Tech stack, screens, and data model.",
      next: "Split prompt into implementable modules.",
      prompt: "Turn this brief into a task-based development prompt for Next.js + TypeScript."
    },
    {
      name: "Code",
      description: "Implement iteratively with AI pair-coding support.",
      prepare: "Folder structure and minimum component list.",
      next: "Prioritize core flow before polish.",
      prompt: "Generate base pages and reusable components from this build prompt."
    },
    {
      name: "Test",
      description: "Catch broken logic and usability friction early.",
      prepare: "Critical user journeys and edge cases.",
      next: "Run a lightweight smoke-test checklist.",
      prompt: "Create manual test scenarios and acceptance criteria for this app."
    },
    {
      name: "Deploy",
      description: "Prepare release and first feedback loop.",
      prepare: "Deployment target, env vars, monitoring plan.",
      next: "Set up a first-week feedback form.",
      prompt: "Generate deployment checklist and a 7-day post-launch monitoring plan."
    }
  ]
};

export const genContentTypes: Record<Locale, string[]> = {
  tr: ["Reklam filmi", "Tanıtım filmi", "Kısa film", "Müzik klibi", "Sosyal medya içeriği", "Bireysel hesap içeriği", "Reels / dikey video", "Eğitim videosu"],
  en: ["Commercial", "Promo film", "Short film", "Music video", "Social media content", "Personal account content", "Reels / vertical video", "Educational video"]
};

export const genStages: Record<Locale, { name: string; decision: string; sample: string; prompt: string; next: string; tools: string[] }[]> = {
  tr: [
    {
      name: "Senaryo",
      decision: "Ana mesaj, ton ve hedef izleyici kararı.",
      sample: "30 sn açılış + problem + dönüşüm + CTA akışı.",
      prompt: "Bu konu için 45 saniyelik, sahne bazlı bir video senaryosu yaz.",
      next: "Sahne listesini 6 kareye böl.",
      tools: ["ChatGPT", "Claude", "Notion AI"]
    },
    {
      name: "Görseller",
      decision: "Görsel stil, renk paleti, karakter ve ortam.",
      sample: "Neon şehirde genç girişimci, sinematik ışık.",
      prompt: "Bu senaryonun 6 sahnesi için görsel prompt üret.",
      next: "En iyi 3 görsel stili seç.",
      tools: ["Leonardo AI", "OpenArt", "Midjourney"]
    },
    {
      name: "Sesler",
      decision: "Anlatıcı tonu, müzik atmosferi, efekt yoğunluğu.",
      sample: "Sakin anlatım + düşük tempolu elektronik arka plan.",
      prompt: "Senaryoya uygun voice-over metni ve ses tasarımı planı oluştur.",
      next: "Ses katmanlarını timeline'a yerleştir.",
      tools: ["ElevenLabs", "Suno", "AIVA"]
    },
    {
      name: "Videolar",
      decision: "Sahne geçişleri, kamera hareketi, süre dağılımı.",
      sample: "Her sahne 5-7 sn, yumuşak geçişler.",
      prompt: "Seçilen görseller için video generation promptları yaz.",
      next: "En iyi shotları seçip sekans oluştur.",
      tools: ["Higgsfield", "Runway", "Pika"]
    },
    {
      name: "Montaj",
      decision: "Ritim, kesme noktaları ve altyazı stili.",
      sample: "Vurgu cümlelerinde hızlı kesme + büyüyen altyazı.",
      prompt: "Bu video için montaj planı ve ritim önerisi ver.",
      next: "İlk rough cut dosyasını çıkar.",
      tools: ["CapCut", "Premiere Pro", "DaVinci Resolve"]
    },
    {
      name: "Kurgu",
      decision: "Hikaye bütünlüğü ve duygusal akış.",
      sample: "Açılış problemi, orta çözüm, final çağrı.",
      prompt: "Kurguyu daha güçlü hale getirmek için revizyon önerileri üret.",
      next: "2 alternatif final kurgusu dene.",
      tools: ["Premiere Pro", "DaVinci Resolve", "Descript"]
    },
    {
      name: "Final Çıktı",
      decision: "Format, çözünürlük, platform versiyonları.",
      sample: "1080x1920 reels + 1920x1080 YouTube versiyonu.",
      prompt: "Bu projeyi platform bazlı export checklistine dönüştür.",
      next: "Yayın planı ve A/B başlık testi hazırla.",
      tools: ["Frame.io", "YouTube Studio", "Meta Creator Studio"]
    }
  ],
  en: [
    {
      name: "Scenario",
      decision: "Define message, tone, and audience intent.",
      sample: "30s flow: hook, pain, shift, CTA.",
      prompt: "Write a 45-second scene-by-scene video script for this topic.",
      next: "Split script into 6 visual beats.",
      tools: ["ChatGPT", "Claude", "Notion AI"]
    },
    {
      name: "Visuals",
      decision: "Choose style, palette, character, environment.",
      sample: "Cinematic neon city with founder-focused framing.",
      prompt: "Generate image prompts for 6 scenes based on this script.",
      next: "Select top 3 visual directions.",
      tools: ["Leonardo AI", "OpenArt", "Midjourney"]
    },
    {
      name: "Audio",
      decision: "Narration style, music mood, effect density.",
      sample: "Calm narration + low-tempo electronic bed.",
      prompt: "Create voice-over copy and audio design plan for this script.",
      next: "Lay out audio layers on timeline.",
      tools: ["ElevenLabs", "Suno", "AIVA"]
    },
    {
      name: "Video",
      decision: "Scene timing, camera motion, transitions.",
      sample: "5–7s scenes with smooth transitions.",
      prompt: "Write video generation prompts for selected visuals.",
      next: "Assemble best shots into sequence.",
      tools: ["Higgsfield", "Runway", "Pika"]
    },
    {
      name: "Editing",
      decision: "Pacing, cuts, subtitle style.",
      sample: "Fast cuts on key claims with animated captions.",
      prompt: "Suggest pacing and editing plan for this video.",
      next: "Produce first rough cut.",
      tools: ["CapCut", "Premiere Pro", "DaVinci Resolve"]
    },
    {
      name: "Narrative Cut",
      decision: "Story coherence and emotional flow.",
      sample: "Problem opening, solution middle, CTA closing.",
      prompt: "Generate revision suggestions to strengthen story flow.",
      next: "Try two alternate endings.",
      tools: ["Premiere Pro", "DaVinci Resolve", "Descript"]
    },
    {
      name: "Final Output",
      decision: "Formats, resolutions, platform variants.",
      sample: "1080x1920 reels + 1920x1080 YouTube cut.",
      prompt: "Turn this project into a platform-specific export checklist.",
      next: "Prepare release schedule + A/B title tests.",
      tools: ["Frame.io", "YouTube Studio", "Meta Creator Studio"]
    }
  ]
};
