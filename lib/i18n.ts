export type Locale = "tr" | "en";

export type Dictionary = {
  appName: string;
  nav: { label: string; href: string }[];
  tagline: string;
  subtitle: string;
  homeIntro: string;
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
  };
};

export const dictionaries: Record<Locale, Dictionary> = {
  tr: {
    appName: "Proje Akış Merkezi",
    tagline: "Belirsizlikten netliğe, netlikten üretime.",
    subtitle:
      "Fikirlerini düzenle, proje akışını kur, doğru araçları seç ve AI için güçlü çıktılar üret.",
    homeIntro:
      "Burada fikirlerini düzenleyebilir, proje adımlarını planlayabilir, uygun araçları seçebilir ve tekrar kullanılabilir promptlar üretebilirsin.",
    cta: "Çalışma alanına başla",
    nav: [
      { label: "Ana Sayfa", href: "/" },
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
      optional: "İsteğe bağlı"
    }
  },
  en: {
    appName: "Project Flow Hub",
    tagline: "From ambiguity to clarity, from clarity to output.",
    subtitle:
      "Organize your ideas, map your project flow, choose the right tools, and produce AI-ready outputs.",
    homeIntro:
      "This workspace helps you structure ideas, map project steps, choose tools, and generate reusable prompts.",
    cta: "Start your workspace",
    nav: [
      { label: "Home", href: "/" },
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
      optional: "Optional"
    }
  }
};
