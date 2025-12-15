"use client";

import { useEffect, useState } from "react";
import { Activity } from "lucide-react";

interface TodoCategory {
  items: { id: string; label: string; done: boolean }[];
}

const STORAGE_KEY = "blockstudy-todos-v1";

export const ProgressWidget = () => {
  const [percent, setPercent] = useState(0);

  useEffect(() => {
    if (typeof window === "undefined") return;
    try {
      const stored = window.localStorage.getItem(STORAGE_KEY);
      if (!stored) return;
      const cats = JSON.parse(stored) as TodoCategory[];
      const items = cats.flatMap((c) => c.items);
      if (!items.length) return;
      const done = items.filter((i) => i.done).length;
      setPercent(Math.round((done / items.length) * 100));
    } catch {
      // ignore
    }
  }, []);

  return (
    <div className="rounded-2xl border border-white/10 bg-[#050510]/80 p-4 flex items-center gap-3">
      <div className="w-10 h-10 rounded-full bg-neon-blue/10 border border-neon-blue/40 flex items-center justify-center">
        <Activity className="w-5 h-5 text-neon-blue" />
      </div>
      <div className="flex-1">
        <p className="text-xs text-gray-400">Overall learning progress</p>
        <div className="flex items-center justify-between">
          <p className="text-sm font-semibold text-white">{percent}% complete</p>
          <div className="w-24 h-1.5 rounded-full bg-white/10 overflow-hidden">
            <div
              className="h-full rounded-full bg-gradient-to-r from-neon-blue to-neon-green"
              style={{ width: `${percent}%` }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};


