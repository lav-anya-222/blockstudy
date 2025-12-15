"use client";

import { useState } from "react";
import { MessageCircle, X } from "lucide-react";
import { AIChatInterface } from "./AIChatInterface";

export const BlockyAssistant = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Floating button */}
      <button
        type="button"
        aria-label="Open Blocky Assistant chatbot"
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-40 flex items-center gap-2 rounded-full bg-neon-blue text-black px-4 py-3 shadow-[0_0_25px_rgba(56,189,248,0.7)] hover:bg-neon-blue/90 transition-all border border-white/20"
      >
        <MessageCircle size={20} />
        <span className="hidden sm:inline text-sm font-semibold">
          Ask Blocky
        </span>
      </button>

      {/* Slide-up panel */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-black/40 backdrop-blur-sm">
          <div className="relative w-full sm:max-w-xl sm:rounded-2xl bg-[#050510] border border-white/10 shadow-2xl max-h-[90vh] flex flex-col">
            <header className="flex items-center justify-between px-4 py-3 border-b border-white/10">
              <div>
                <h2 className="text-sm font-semibold text-white">
                  Blocky Assistant 🤖
                </h2>
                <p className="text-xs text-gray-400">
                  Ask anything about blockchain or learning paths.
                </p>
              </div>
              <button
                type="button"
                aria-label="Close Blocky Assistant"
                onClick={() => setIsOpen(false)}
                className="p-1 rounded-full hover:bg-white/10 text-gray-400 hover:text-white transition-colors"
              >
                <X size={16} />
              </button>
            </header>

            <div className="flex-1 min-h-[320px] max-h-[70vh] overflow-hidden">
              <AIChatInterface />
            </div>
          </div>
        </div>
      )}
    </>
  );
};


