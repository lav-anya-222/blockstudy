"use client";

import { FlashcardGarden } from "@/components/learning/FlashcardGarden";
import { GlassCard } from "@/components/ui/GlassCard";
import { Book, FileText, Plus, Search } from "lucide-react";

export default function LibraryPage() {
    return (
        <div className="space-y-8">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-3xl font-bold mb-2">Resource Library 📖</h1>
                    <p className="text-gray-400">Manage your flashcards, notes, and study materials.</p>
                </div>
                <div className="flex gap-4">
                    <div className="relative">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" size={18} />
                        <input
                            type="text"
                            placeholder="Search resources..."
                            className="pl-10 pr-4 py-2 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-blue-500 w-64"
                        />
                    </div>
                    <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-500 rounded-lg transition-colors">
                        <Plus size={18} />
                        Add New
                    </button>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Main Content - Flashcard Garden */}
                <div className="lg:col-span-2 space-y-6">
                    <div className="flex items-center justify-between">
                        <h2 className="text-xl font-bold flex items-center gap-2">
                            <RotateCw size={20} className="text-blue-400" />
                            Flashcard Garden
                        </h2>
                        <select className="bg-white/5 border border-white/10 rounded-lg px-3 py-1 text-sm">
                            <option>Physics 101</option>
                            <option>Calculus II</option>
                            <option>World History</option>
                        </select>
                    </div>

                    <FlashcardGarden />
                </div>

                {/* Sidebar - Quick Resources */}
                <div className="space-y-6">
                    <h2 className="text-xl font-bold">Recent Uploads</h2>
                    <div className="space-y-4">
                        {[1, 2, 3, 4].map((i) => (
                            <GlassCard key={i} hoverEffect className="flex items-center gap-4 p-4 cursor-pointer">
                                <div className="p-3 rounded-lg bg-purple-500/10 text-purple-400">
                                    <FileText size={20} />
                                </div>
                                <div>
                                    <h4 className="font-medium">Lecture Notes {i}.pdf</h4>
                                    <p className="text-xs text-gray-500">Added 2 hours ago</p>
                                </div>
                            </GlassCard>
                        ))}
                    </div>

                    <h2 className="text-xl font-bold mt-8">Collections</h2>
                    <div className="grid grid-cols-2 gap-4">
                        <GlassCard hoverEffect className="p-4 text-center cursor-pointer">
                            <Book size={24} className="mx-auto mb-2 text-blue-400" />
                            <span className="text-sm font-medium">Textbooks</span>
                        </GlassCard>
                        <GlassCard hoverEffect className="p-4 text-center cursor-pointer">
                            <FileText size={24} className="mx-auto mb-2 text-green-400" />
                            <span className="text-sm font-medium">Papers</span>
                        </GlassCard>
                    </div>
                </div>
            </div>
        </div>
    );
}

import { RotateCw } from "lucide-react";
