"use client";

import { useState } from "react";

type Tab = { label: string; content: React.ReactNode };

export default function TabGroup({ tabs }: { tabs: Tab[] }) {
  const [active, setActive] = useState(0);
  return (
    <div className="rounded-3xl border border-slate-700 bg-panel p-5">
      <div className="mb-4 flex flex-wrap gap-2">
        {tabs.map((tab, index) => (
          <button
            key={tab.label}
            onClick={() => setActive(index)}
            className={`rounded-xl px-3 py-2 text-sm ${
              active === index ? "bg-cyan-400/20 text-cyan-100" : "bg-slate-800 text-slate-300"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="text-sm text-slate-200">{tabs[active]?.content}</div>
    </div>
  );
}
