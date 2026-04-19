"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { Dictionary, dictionaries, Locale } from "@/lib/i18n";

type LanguageContextType = {
  locale: Locale;
  dictionary: Dictionary;
  setLocale: (locale: Locale) => void;
};

const LanguageContext = createContext<LanguageContextType | null>(null);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocale] = useState<Locale>("tr");

  useEffect(() => {
    const saved = localStorage.getItem("pam-locale") as Locale | null;
    if (saved && (saved === "tr" || saved === "en")) {
      setLocale(saved);
    }
  }, []);

  const value = useMemo(
    () => ({
      locale,
      dictionary: dictionaries[locale],
      setLocale: (next: Locale) => {
        localStorage.setItem("pam-locale", next);
        setLocale(next);
      }
    }),
    [locale]
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useLanguage must be used in LanguageProvider");
  return context;
}
