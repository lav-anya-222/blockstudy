"use client";

import { GlassCard } from "@/components/ui/GlassCard";
import { Users, Plus, Video, Mic } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

const activeRooms = [
    { id: 1, name: "Physics Group Alpha", subject: "Physics", members: 4, maxMembers: 6 },
    { id: 2, name: "Late Night Calculus", subject: "Math", members: 2, maxMembers: 4 },
    { id: 3, name: "History Buffs", subject: "History", members: 5, maxMembers: 8 },
];

export default function StudyRoomLobby() {
    return (
        <div className="space-y-8">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-3xl font-bold mb-2">Study Rooms 📚</h1>
                    <p className="text-gray-400">Collaborate with peers in real-time virtual spaces.</p>
                </div>
                <button className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl font-bold hover:scale-105 transition-transform">
                    <Plus size={20} />
                    Create Room
                </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {activeRooms.map((room) => (
                    <Link href={`/study-room/${room.id}`} key={room.id}>
                        <GlassCard hoverEffect className="h-full flex flex-col justify-between group cursor-pointer">
                            <div>
                                <div className="flex items-start justify-between mb-4">
                                    <span className="px-3 py-1 rounded-full text-xs font-medium bg-blue-500/20 text-blue-400 border border-blue-500/30">
                                        {room.subject}
                                    </span>
                                    <div className="flex items-center gap-1 text-gray-400">
                                        <Users size={16} />
                                        <span className="text-sm">{room.members}/{room.maxMembers}</span>
                                    </div>
                                </div>
                                <h3 className="text-xl font-bold mb-2 group-hover:text-blue-400 transition-colors">
                                    {room.name}
                                </h3>
                                <p className="text-gray-500 text-sm">
                                    Join to collaborate on whiteboard and chat.
                                </p>
                            </div>

                            <div className="mt-6 flex items-center gap-3">
                                <div className="flex -space-x-2">
                                    {[...Array(3)].map((_, i) => (
                                        <div key={i} className="w-8 h-8 rounded-full bg-gray-700 border-2 border-[#0a0a0a]" />
                                    ))}
                                </div>
                                <div className="flex gap-2 ml-auto text-gray-500">
                                    <Video size={18} />
                                    <Mic size={18} />
                                </div>
                            </div>
                        </GlassCard>
                    </Link>
                ))}
            </div>
        </div>
    );
}
