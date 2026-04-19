import Link from "next/link";

export default function ModuleCard({ title, description, href }: { title: string; description: string; href: string }) {
  return (
    <Link href={href} className="rounded-3xl border border-fuchsia-400/30 bg-panel p-5 transition hover:border-fuchsia-300 hover:shadow-magenta">
      <h3 className="text-lg font-semibold text-white">{title}</h3>
      <p className="mt-2 text-sm text-slate-300">{description}</p>
    </Link>
  );
}
