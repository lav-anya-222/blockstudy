"use client";

import { useState } from "react";

interface GlossaryTermProps {
  term: string;
  definition: string;
}

export const GlossaryTerm = ({ term, definition }: GlossaryTermProps) => {
  const [open, setOpen] = useState(false);

  return (
    <span className="relative inline-block">
      <button
        type="button"
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
        onFocus={() => setOpen(true)}
        onBlur={() => setOpen(false)}
        className="underline decoration-dotted decoration-neon-blue/60 underline-offset-4 text-neon-blue hover:text-neon-blue/80 text-sm"
      >
        {term}
      </button>
      {open && (
        <div className="absolute z-30 left-1/2 -translate-x-1/2 mt-2 w-64 rounded-xl bg-black/80 border border-white/15 px-3 py-2 text-xs text-gray-200 shadow-xl">
          <p className="font-semibold mb-1 text-neon-blue">{term}</p>
          <p>{definition}</p>
        </div>
      )}
    </span>
  );
};


