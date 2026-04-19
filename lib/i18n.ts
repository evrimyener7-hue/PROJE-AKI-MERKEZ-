export type Locale = "tr" | "en";

export type Dictionary = {
  appName: string;
  nav: { label: string; href: string }[];
  tagline: string;
  subtitle: string;
  homeIntro: string;
  workshopFocusTitle: string;
  workshopFocusText: string;
  homeSections: {
    title: string;
    description: string;
    href: string;
  }[];
  cta: string;
  common: {
    copy: string;
    copied: string;
    clarifyFurther: string;
    optional: string;
    nextStep: string;
  };
};

export const dictionaries: Record<Locale, Dictionary> = {
  tr: {
    appName: "Proje Akış Merkezi",
    tagline: "Belirsizlikten netliğe, netlikten üretime.",
    subtitle:
      "Fikirleri, proje akışını ve AI üretim adımlarını tek bir atölye düzeninde yönet.",
    homeIntro:
      "Bu alan artık iki ana üretim atölyesi etrafında çalışır: Vibe Coding ve Üretken Yapay Zeka. Diğer sayfalar destek katmanı olarak yanında durur.",
    workshopFocusTitle: "Merkez Atölyeler",
    workshopFocusText:
      "Proje yönlendirme + AI üretim planlama + prompt geliştirme + araç seçimi + aşama bazlı ilerleme.",
    cta: "Atölyeni başlat",
    nav: [
      { label: "Ana Sayfa", href: "/" },
      { label: "Vibe Coding Atölyesi", href: "/vibe-coding" },
      { label: "Üretken Yapay Zeka Atölyesi", href: "/generative-ai" },
      { label: "Proje Başlatıcı", href: "/project-starter" },
      { label: "Fikir Netleştirici", href: "/idea-clarifier" },
      { label: "Prompt Oluşturucu", href: "/prompt-builder" },
      { label: "Araç Rehberi", href: "/tool-guide" },
      { label: "Akış Haritaları", href: "/workflow-maps" },
      { label: "Notlar", href: "/notes" },
      { label: "Öğrenme Modülü", href: "/modules/ornek-modul" }
    ],
    homeSections: [
      {
        title: "Vibe Coding Atölyesi",
        description: "Proje türü seç, brief oluştur, promptla kodla, test et, deploy et.",
        href: "/vibe-coding"
      },
      {
        title: "Üretken Yapay Zeka Atölyesi",
        description: "İçerik türüne göre senaryo, görsel, ses, video ve final çıktıyı planla.",
        href: "/generative-ai"
      },
      {
        title: "Proje Başlatıcı",
        description: "Kaba fikri hedef, kapsam ve MVP odaklı yapılandır.",
        href: "/project-starter"
      },
      {
        title: "Fikir Netleştirici",
        description: "Doğru sorularla fikrini adım adım somutlaştır.",
        href: "/idea-clarifier"
      },
      {
        title: "Prompt Oluşturucu",
        description: "Yapılandırılmış düşünceyi güçlü AI promptlarına çevir.",
        href: "/prompt-builder"
      },
      {
        title: "Araç Rehberi",
        description: "Göreve göre uygun araçları, güçlü yönleriyle keşfet.",
        href: "/tool-guide"
      },
      {
        title: "Akış Haritaları",
        description: "İş akışlarını görsel yol haritalarıyla takip et.",
        href: "/workflow-maps"
      },
      {
        title: "Notlar / Bilgi Alanı",
        description: "Şablonlar, çerçeveler ve kişisel notlar için referans alanı.",
        href: "/notes"
      },
      {
        title: "İsteğe Bağlı Öğrenme Modülleri",
        description: "Hafif öğrenme modülleriyle becerini destekle.",
        href: "/modules/ornek-modul"
      }
    ],
    common: {
      copy: "Kopyala",
      copied: "Kopyalandı",
      clarifyFurther: "Biraz daha netleştir",
      optional: "İsteğe bağlı",
      nextStep: "Sonraki adım"
    }
  },
  en: {
    appName: "Project Flow Hub",
    tagline: "From ambiguity to clarity, from clarity to output.",
    subtitle:
      "Manage ideas, project flow, and AI production steps in one guided workshop structure.",
    homeIntro:
      "The platform now centers around two workshop pathways: Vibe Coding and Generative AI. Existing planning pages remain as support layers.",
    workshopFocusTitle: "Core Workshops",
    workshopFocusText:
      "Project guidance + AI production planning + prompt development + tool selection + stage-based execution.",
    cta: "Start your workshop",
    nav: [
      { label: "Home", href: "/" },
      { label: "Vibe Coding Workshop", href: "/vibe-coding" },
      { label: "Generative AI Workshop", href: "/generative-ai" },
      { label: "Project Starter", href: "/project-starter" },
      { label: "Idea Clarifier", href: "/idea-clarifier" },
      { label: "Prompt Builder", href: "/prompt-builder" },
      { label: "Tool Guide", href: "/tool-guide" },
      { label: "Workflow Maps", href: "/workflow-maps" },
      { label: "Notes", href: "/notes" },
      { label: "Learning Module", href: "/modules/ornek-modul" }
    ],
    homeSections: [
      {
        title: "Vibe Coding Workshop",
        description: "Select project type, build brief, code via prompts, test, and deploy.",
        href: "/vibe-coding"
      },
      {
        title: "Generative AI Workshop",
        description: "Plan scenario, visuals, sound, video, and final output by content type.",
        href: "/generative-ai"
      },
      {
        title: "Project Starter",
        description: "Transform rough ideas into goal, scope, and MVP structure.",
        href: "/project-starter"
      },
      {
        title: "Idea Clarifier",
        description: "Make your concept concrete through guided questions.",
        href: "/idea-clarifier"
      },
      {
        title: "Prompt Builder",
        description: "Turn structured thinking into high-quality AI prompts.",
        href: "/prompt-builder"
      },
      {
        title: "Tool Guide",
        description: "Discover suitable tools by task with clear trade-offs.",
        href: "/tool-guide"
      },
      {
        title: "Workflow Maps",
        description: "Follow practical process routes through visual flows.",
        href: "/workflow-maps"
      },
      {
        title: "Notes / Knowledge Base",
        description: "Keep frameworks, templates, and personal notes organized.",
        href: "/notes"
      },
      {
        title: "Optional Learning Modules",
        description: "Add lightweight skill modules without distraction.",
        href: "/modules/ornek-modul"
      }
    ],
    common: {
      copy: "Copy",
      copied: "Copied",
      clarifyFurther: "Clarify Further",
      optional: "Optional",
      nextStep: "Next step"
    }
  }
};
