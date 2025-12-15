"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckSquare, Plus, Trash2 } from "lucide-react";

type CategoryId = "learning" | "practice" | "goals";

interface TodoItem {
  id: string;
  label: string;
  done: boolean;
}

interface TodoCategory {
  id: CategoryId;
  title: string;
  emoji: string;
  items: TodoItem[];
}

const STORAGE_KEY = "blockstudy-todos-v1";

const defaultCategories: TodoCategory[] = [
  {
    id: "learning",
    title: "Learning Tasks",
    emoji: "📚",
    items: [
      { id: "learn-1", label: "What is blockchain?", done: true },
      { id: "learn-2", label: "How transactions work", done: false },
      { id: "learn-3", label: "Smart contracts basics", done: false },
      { id: "learn-4", label: "Decentralization vs. centralization", done: false },
    ],
  },
  {
    id: "practice",
    title: "Practice Tasks",
    emoji: "🛠️",
    items: [
      { id: "practice-1", label: "Try the blockchain transaction demo", done: false },
      { id: "practice-2", label: "Experiment in the sandbox", done: false },
      { id: "practice-3", label: "Complete one quiz", done: false },
    ],
  },
  {
    id: "goals",
    title: "Goals",
    emoji: "🎯",
    items: [
      { id: "goal-1", label: "Finish blockchain basics this week", done: false },
      { id: "goal-2", label: "Build a simple DApp prototype", done: false },
    ],
  },
];

export const LearningTodo = () => {
  const [categories, setCategories] = useState<TodoCategory[]>(defaultCategories);
  const [newTask, setNewTask] = useState("");
  const [activeCategory, setActiveCategory] = useState<CategoryId>("learning");

  useEffect(() => {
    if (typeof window === "undefined") return;
    try {
      const stored = window.localStorage.getItem(STORAGE_KEY);
      if (stored) {
        const parsed = JSON.parse(stored) as TodoCategory[];
        setCategories(parsed);
      }
    } catch {
      // ignore parse errors and use defaults
    }
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(categories));
  }, [categories]);

  const flatItems = categories.flatMap((c) => c.items);
  const completedCount = flatItems.filter((i) => i.done).length;
  const totalCount = flatItems.length || 1;
  const percent = Math.round((completedCount / totalCount) * 100);

  const toggleItem = (id: string) => {
    setCategories((prev) =>
      prev.map((cat) => ({
        ...cat,
        items: cat.items.map((item) =>
          item.id === id ? { ...item, done: !item.done } : item
        ),
      }))
    );
  };

  const clearCompleted = () => {
    setCategories((prev) =>
      prev.map((cat) => ({
        ...cat,
        items: cat.items.filter((item) => !item.done),
      }))
    );
  };

  const handleAddTask = () => {
    const trimmed = newTask.trim();
    if (!trimmed) return;

    setCategories((prev) =>
      prev.map((cat) =>
        cat.id === activeCategory
          ? {
              ...cat,
              items: [
                ...cat.items,
                {
                  id: `${cat.id}-${Date.now()}`,
                  label: trimmed,
                  done: false,
                },
              ],
            }
          : cat
      )
    );
    setNewTask("");
  };

  return (
    <section className="rounded-2xl border border-white/10 bg-[#050510]/80 p-6 md:p-8 shadow-[0_0_40px_rgba(15,23,42,0.8)]">
      <div className="flex items-center justify-between gap-4 mb-4">
        <div>
          <p className="text-xs uppercase tracking-[0.18em] text-gray-400 mb-1">
            MY BLOCKCHAIN JOURNEY
          </p>
          <h1 className="text-2xl md:text-3xl font-bold flex items-center gap-2">
            <CheckSquare className="w-6 h-6 text-neon-blue" />
            My Learning To‑Do List
          </h1>
        </div>
        <div className="hidden sm:flex flex-col items-end">
          <span className="text-xs text-gray-400">Progress</span>
          <span className="text-lg font-semibold text-neon-blue">
            {completedCount}/{totalCount} tasks
          </span>
        </div>
      </div>

      <div className="mb-4">
        <div className="h-2 w-full rounded-full bg-white/10 overflow-hidden">
          <div
            className="h-full rounded-full bg-gradient-to-r from-neon-blue via-neon-purple to-neon-green transition-all"
            style={{ width: `${percent}%` }}
          />
        </div>
        <p className="mt-1 text-xs text-gray-400">{percent}% of your learning chain mined</p>
      </div>

      <div className="flex flex-wrap gap-2 mb-4">
        {categories.map((cat) => (
          <button
            key={cat.id}
            type="button"
            onClick={() => setActiveCategory(cat.id)}
            className={`px-3 py-1 rounded-full text-xs border transition-colors ${
              activeCategory === cat.id
                ? "border-neon-blue text-neon-blue bg-neon-blue/10"
                : "border-white/15 text-gray-300 hover:border-neon-blue/60 hover:text-neon-blue"
            }`}
          >
            <span className="mr-1">{cat.emoji}</span>
            {cat.title}
          </button>
        ))}
      </div>

      <div className="flex gap-2 mb-4">
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Add a new task, e.g. Read about DeFi basics"
          className="flex-1 px-3 py-2 rounded-lg bg-black/40 border border-white/15 text-sm text-white placeholder:text-gray-500 focus:outline-none focus:border-neon-blue"
        />
        <button
          type="button"
          onClick={handleAddTask}
          className="px-3 py-2 rounded-lg bg-neon-blue text-black text-xs font-semibold flex items-center gap-1 hover:bg-neon-blue/90 transition-colors"
        >
          <Plus className="w-4 h-4" /> Add
        </button>
      </div>

      <div className="space-y-3 max-h-[320px] overflow-y-auto pr-1">
        <AnimatePresence initial={false}>
          {categories
            .find((c) => c.id === activeCategory)
            ?.items.map((item) => (
              <motion.button
                key={item.id}
                layout
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                onClick={() => toggleItem(item.id)}
                className={`w-full flex items-center justify-between gap-3 px-3 py-2 rounded-lg border text-left text-sm transition-colors ${
                  item.done
                    ? "border-emerald-400/50 bg-emerald-500/10 text-emerald-200 line-through"
                    : "border-white/12 bg-black/40 text-gray-200 hover:border-neon-blue/60 hover:bg-neon-blue/5"
                }`}
              >
                <span>{item.label}</span>
                <span
                  className={`w-4 h-4 rounded-sm border text-[10px] flex items-center justify-center ${
                    item.done
                      ? "border-emerald-400 bg-emerald-400 text-black"
                      : "border-white/30 bg-transparent"
                  }`}
                >
                  {item.done ? "✓" : ""}
                </span>
              </motion.button>
            ))}
        </AnimatePresence>
        {categories.find((c) => c.id === activeCategory)?.items.length === 0 && (
          <p className="text-xs text-gray-500">No tasks yet. Add your first one above.</p>
        )}
      </div>

      <div className="mt-4 flex items-center justify-between gap-3 text-xs text-gray-400">
        <p>
          Tip: Think of each task as a block. When you complete it, you&apos;re mining your own
          learning chain.
        </p>
        <button
          type="button"
          onClick={clearCompleted}
          className="inline-flex items-center gap-1 px-2 py-1 rounded-full border border-white/15 hover:border-red-400 hover:text-red-400 transition-colors"
        >
          <Trash2 className="w-3 h-3" /> Clear completed
        </button>
      </div>
    </section>
  );
};


