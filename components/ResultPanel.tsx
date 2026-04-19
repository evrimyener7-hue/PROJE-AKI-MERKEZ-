import StructuredOutputBox from "./StructuredOutputBox";

export type ResultSection = {
  title: string;
  content: string;
};

export default function ResultPanel({ sections }: { sections: ResultSection[] }) {
  return (
    <div className="space-y-4 rounded-3xl border border-fuchsia-400/30 bg-slate-900/50 p-5 shadow-magenta">
      {sections.map((section) => (
        <StructuredOutputBox key={section.title} title={section.title} content={section.content} />
      ))}
    </div>
  );
}
