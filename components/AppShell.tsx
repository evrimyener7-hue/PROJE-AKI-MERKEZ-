"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLanguage } from "./LanguageProvider";
import LanguageSwitcher from "./LanguageSwitcher";

export default function AppShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const { dictionary } = useLanguage();

  return (
    <div className="min-h-screen bg-base text-slate-100">
      <div className="pointer-events-none fixed inset-0 opacity-50 [background:radial-gradient(circle_at_10%_20%,rgba(34,211,238,.08),transparent_35%),radial-gradient(circle_at_90%_10%,rgba(244,114,182,.08),transparent_30%)]" />
      <header className="sticky top-0 z-30 border-b border-slate-800/80 bg-base/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-4">
          <Link href="/" className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-200">{dictionary.appName}</Link>
          <nav className="hidden gap-3 lg:flex">
            {dictionary.nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`rounded-lg px-3 py-2 text-xs transition ${
                  pathname === item.href ? "bg-cyan-400/15 text-cyan-200" : "text-slate-400 hover:text-cyan-100"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <LanguageSwitcher />
        </div>
      </header>
      <main className="relative mx-auto max-w-7xl px-5 py-10">{children}</main>
    </div>
  );
}
