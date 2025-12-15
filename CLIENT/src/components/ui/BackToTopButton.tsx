"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

export const BackToTopButton = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (typeof window === "undefined") return;
      setVisible(window.scrollY > 400);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleClick = () => {
    if (typeof window === "undefined") return;
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (!visible) return null;

  return (
    <button
      type="button"
      onClick={handleClick}
      aria-label="Back to top"
      className="fixed bottom-6 left-6 z-40 flex items-center justify-center w-10 h-10 rounded-full bg-white/10 border border-white/20 text-white hover:bg-neon-blue hover:text-black hover:border-neon-blue shadow-lg transition-all"
    >
      <ArrowUp className="w-4 h-4" />
    </button>
  );
};


