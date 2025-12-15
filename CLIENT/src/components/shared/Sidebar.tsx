"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils/utils";
import {
    LayoutDashboard,
    Orbit,
    BookOpen,
    Library,
    User,
    Settings,
    LogOut,
    Bot
} from "lucide-react";

const sidebarItems = [
    { icon: LayoutDashboard, label: "Dashboard", href: "/dashboard" },
    { icon: Orbit, label: "Galaxy", href: "/galaxy" },
    { icon: BookOpen, label: "Study Room", href: "/study-room" },
    { icon: Library, label: "Library", href: "/library" },
    { icon: Bot, label: "AI Tutor", href: "/ai-tutor" },
    { icon: User, label: "Profile", href: "/profile" },
];

export const Sidebar = () => {
    const pathname = usePathname();

    return (
        <aside className="fixed left-0 top-0 h-screen w-64 bg-[#0a0a0a]/95 border-r border-white/10 backdrop-blur-xl z-40 flex flex-col">
            <div className="p-6">
                <Link href="/" className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
                    StudySphere
                </Link>
            </div>

            <nav className="flex-1 px-4 space-y-2">
                {sidebarItems.map((item) => {
                    const isActive = pathname === item.href;
                    return (
                        <Link
                            key={item.href}
                            href={item.href}
                            className={cn(
                                "flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 group",
                                isActive
                                    ? "bg-gradient-to-r from-blue-600/20 to-purple-600/20 text-blue-400 border border-blue-500/30"
                                    : "text-gray-400 hover:bg-white/5 hover:text-white"
                            )}
                        >
                            <item.icon size={20} className={cn(
                                "transition-colors",
                                isActive ? "text-blue-400" : "text-gray-500 group-hover:text-white"
                            )} />
                            <span className="font-medium">{item.label}</span>
                        </Link>
                    );
                })}
            </nav>

            <div className="p-4 border-t border-white/10 space-y-2">
                <Link
                    href="/settings"
                    className="flex items-center gap-3 px-4 py-3 rounded-xl text-gray-400 hover:bg-white/5 hover:text-white transition-all"
                >
                    <Settings size={20} />
                    <span className="font-medium">Settings</span>
                </Link>
                <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-red-400 hover:bg-red-500/10 transition-all">
                    <LogOut size={20} />
                    <span className="font-medium">Logout</span>
                </button>
            </div>
        </aside>
    );
};
