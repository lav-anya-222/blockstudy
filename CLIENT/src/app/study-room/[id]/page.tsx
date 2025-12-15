"use client";

import { InteractiveWhiteboard } from "@/components/learning/InteractiveWhiteboard";
import { GlassCard } from "@/components/ui/GlassCard";
import { Mic, Video, Settings, MessageSquare, Users, PhoneOff } from "lucide-react";
import { useParams } from "next/navigation";

export default function StudyRoomPage() {
    const params = useParams();

    return (
        <div className="h-[calc(100vh-6rem)] flex flex-col gap-4">
            {/* Room Header */}
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-2xl font-bold flex items-center gap-3">
                        Physics Group Alpha
                        <span className="text-sm font-normal text-gray-400 px-2 py-1 bg-white/5 rounded-md">ID: {params.id}</span>
                    </h1>
                </div>
                <div className="flex items-center gap-3">
                    <button className="p-3 rounded-full bg-white/5 hover:bg-white/10 transition-colors">
                        <Mic size={20} />
                    </button>
                    <button className="p-3 rounded-full bg-white/5 hover:bg-white/10 transition-colors">
                        <Video size={20} />
                    </button>
                    <button className="p-3 rounded-full bg-red-500/20 text-red-400 hover:bg-red-500/30 transition-colors">
                        <PhoneOff size={20} />
                    </button>
                </div>
            </div>

            {/* Main Workspace */}
            <div className="flex-1 grid grid-cols-1 lg:grid-cols-4 gap-4 min-h-0">
                {/* Whiteboard Area */}
                <div className="lg:col-span-3 h-full">
                    <InteractiveWhiteboard />
                </div>

                {/* Sidebar: Chat & Participants */}
                <div className="flex flex-col gap-4 h-full">
                    {/* Participants */}
                    <GlassCard className="flex-1 flex flex-col">
                        <div className="flex items-center gap-2 mb-4 text-gray-400">
                            <Users size={18} />
                            <span className="font-medium">Participants (4)</span>
                        </div>
                        <div className="space-y-3 overflow-y-auto flex-1">
                            {[1, 2, 3, 4].map((i) => (
                                <div key={i} className="flex items-center gap-3">
                                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-purple-500" />
                                    <span className="font-medium">Student {i}</span>
                                    {i === 1 && <span className="text-xs text-blue-400 bg-blue-500/10 px-2 py-0.5 rounded">Host</span>}
                                </div>
                            ))}
                        </div>
                    </GlassCard>

                    {/* Chat */}
                    <GlassCard className="flex-[2] flex flex-col">
                        <div className="flex items-center gap-2 mb-4 text-gray-400">
                            <MessageSquare size={18} />
                            <span className="font-medium">Chat</span>
                        </div>
                        <div className="flex-1 bg-black/20 rounded-lg mb-3 p-3 overflow-y-auto space-y-2">
                            <div className="text-sm">
                                <span className="font-bold text-blue-400">Student 1:</span>
                                <span className="text-gray-300 ml-2">Can someone explain the last equation?</span>
                            </div>
                            <div className="text-sm">
                                <span className="font-bold text-purple-400">You:</span>
                                <span className="text-gray-300 ml-2">Sure, I'll draw it on the board!</span>
                            </div>
                        </div>
                        <div className="flex gap-2">
                            <input
                                type="text"
                                placeholder="Type a message..."
                                className="flex-1 bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-blue-500"
                            />
                        </div>
                    </GlassCard>
                </div>
            </div>
        </div>
    );
}
