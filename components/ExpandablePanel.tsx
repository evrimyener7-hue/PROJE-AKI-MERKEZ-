"use client";

import { useState } from "react";

export default function ExpandablePanel({
  title,
  description,
  children
}: {
  title: string;
  description: string;
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState(false);
  return (
    <div className="rounded-2xl border border-slate-700 bg-panel p-4">
      <button className="flex w-full items-start justify-between gap-3 text-left" onClick={() => setOpen((v) => !v)}>
        <div>
          <h3 className="font-medium text-white">{title}</h3>
          <p className="text-sm text-slate-300">{description}</p>
        </div>
        <span className="text-cyan-300">{open ? "−" : "+"}</span>
      </button>
      {open ? <div className="mt-4 text-sm text-slate-200">{children}</div> : null}
    </div>
  );
}
