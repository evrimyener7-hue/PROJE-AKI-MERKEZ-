import Link from "next/link";

export default function FeatureCard({
  title,
  description,
  href
}: {
  title: string;
  description: string;
  href: string;
}) {
  return (
    <Link
      href={href}
      className="group rounded-3xl border border-slate-700/70 bg-panel p-6 transition duration-300 hover:-translate-y-1 hover:border-cyan-300/50 hover:shadow-neon"
    >
      <h3 className="mb-2 text-xl font-semibold text-white">{title}</h3>
      <p className="text-sm text-slate-300">{description}</p>
      <p className="mt-5 text-sm font-medium text-cyan-300 opacity-80 transition group-hover:opacity-100">Keşfet →</p>
    </Link>
  );
}
