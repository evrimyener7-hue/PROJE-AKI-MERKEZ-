export default function PageHero({
  title,
  subtitle,
  tagline
}: {
  title: string;
  subtitle: string;
  tagline?: string;
}) {
  return (
    <section className="relative overflow-hidden rounded-3xl border border-cyan-300/25 bg-gradient-to-br from-cyan-400/10 via-slate-950 to-fuchsia-400/10 p-8 shadow-neon md:p-12">
      <div className="absolute -right-24 top-0 h-56 w-56 rounded-full bg-fuchsia-500/20 blur-3xl" />
      <div className="absolute -left-10 bottom-0 h-40 w-40 rounded-full bg-cyan-400/20 blur-3xl" />
      <div className="relative space-y-4">
        <p className="text-xs uppercase tracking-[0.28em] text-cyan-200/90">Proje Akış Merkezi</p>
        <h1 className="max-w-4xl text-3xl font-semibold leading-tight text-white md:text-5xl">{title}</h1>
        <p className="max-w-3xl text-slate-200">{subtitle}</p>
        {tagline ? <p className="text-lg font-medium text-fuchsia-300">{tagline}</p> : null}
      </div>
    </section>
  );
}
