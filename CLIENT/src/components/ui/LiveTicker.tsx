"use client";

import { useEffect, useState } from "react";
import { ArrowDownRight, ArrowUpRight, Radio } from "lucide-react";

interface StatItem {
  label: string;
  value: string;
  accent: string;
}

export const LiveTicker = () => {
  const [btcPrice, setBtcPrice] = useState<number>(67250);
  const [direction, setDirection] = useState<"up" | "down">("up");

  useEffect(() => {
    const interval = setInterval(() => {
      setBtcPrice((prev) => {
        const delta = Math.round((Math.random() * 400 - 200) * 100) / 100;
        const next = Math.max(10000, prev + delta);
        setDirection(delta >= 0 ? "up" : "down");
        return next;
      });
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  const stats: StatItem[] = [
    {
      label: "Students learning now",
      value: "1,247",
      accent: "text-neon-green",
    },
    {
      label: "Blocks simulated today",
      value: "144",
      accent: "text-neon-purple",
    },
    {
      label: "Lessons completed this week",
      value: "3,982",
      accent: "text-neon-blue",
    },
  ];

  return (
    <div className="w-full border-y border-white/10 bg-black/40 backdrop-blur-md">
      <div className="container mx-auto px-4 py-3 flex items-center gap-6 overflow-x-auto scrollbar-none">
        <div className="flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-gray-400 shrink-0">
          <Radio className="w-3 h-3 text-neon-blue animate-pulse" />
          LIVE STATS
        </div>

        <div className="h-6 w-px bg-white/10 shrink-0" />

        <div className="flex items-center gap-2 shrink-0">
          <span className="text-xs text-gray-400">BTC</span>
          <span className="text-sm font-mono text-white">
            {btcPrice.toLocaleString("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 2 })}
          </span>
          {direction === "up" ? (
            <span className="inline-flex items-center gap-1 text-xs text-emerald-400">
              <ArrowUpRight className="w-3 h-3" />
              +0.8%
            </span>
          ) : (
            <span className="inline-flex items-center gap-1 text-xs text-red-400">
              <ArrowDownRight className="w-3 h-3" />
              -0.6%
            </span>
          )}
        </div>

        <div className="h-6 w-px bg-white/10 shrink-0" />

        <div className="flex items-center gap-6 text-xs whitespace-nowrap">
          {stats.map((item) => (
            <div key={item.label} className="flex items-center gap-2">
              <span className="text-gray-400">{item.label}:</span>
              <span className={`font-semibold ${item.accent}`}>{item.value}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};


