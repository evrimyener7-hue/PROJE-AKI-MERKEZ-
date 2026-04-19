export default function SectionHeader({
  title,
  description
}: {
  title: string;
  description?: string;
}) {
  return (
    <div className="mb-6 space-y-2">
      <h2 className="text-2xl font-semibold tracking-tight text-white md:text-3xl">{title}</h2>
      {description ? <p className="max-w-3xl text-sm text-slate-300 md:text-base">{description}</p> : null}
    </div>
  );
}
