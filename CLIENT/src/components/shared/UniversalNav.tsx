"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
    Search,
    LayoutDashboard,
    Orbit,
    BookOpen,
    Library,
    User,
    Settings,
    LogOut,
    Bot,
    Zap,
    Plus,
    Users,
    HelpCircle,
    Menu,
    X,
    ChevronRight,
    Sparkles
} from "lucide-react";
import { cn } from "@/lib/utils/utils";

const navItems = [
    { icon: LayoutDashboard, label: "Dashboard", href: "/dashboard" },
    { icon: Orbit, label: "Knowledge Galaxy", href: "/galaxy" },
    { icon: BookOpen, label: "Study Room", href: "/study-room" },
    { icon: Library, label: "Study Library", href: "/library" },
    { icon: Bot, label: "AI Tutor", href: "/ai-tutor" },
];

const quickActions = [
    { icon: Zap, label: "Start Session", action: "start_session" },
    { icon: Bot, label: "Ask AI Tutor", action: "ask_ai" },
    { icon: Plus, label: "New Flashcard", action: "create_flashcard" },
    { icon: Users, label: "Join Room", action: "join_room" },
];

export const UniversalNav = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isDesktop, setIsDesktop] = useState(false);
    const pathname = usePathname();

    // Handle responsive behavior
    useEffect(() => {
        const handleResize = () => {
            const width = window.innerWidth;
            const desktop = width > 1024;
            setIsDesktop(desktop);
            // On desktop, we might want it pinned open by default, 
            // but for now let's follow the "slide in" concept primarily
            // or respect the user's "Fixed Panel" request for desktop.
            if (desktop) setIsOpen(true);
            else setIsOpen(false);
        };

        // Initial check
        handleResize();

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const toggleNav = () => setIsOpen(!isOpen);

    return (
        <>
            {/* Constellation Menu Icon (Mobile/Tablet Trigger) */}
            <button
                onClick={toggleNav}
                className={cn(
                    "fixed top-6 right-6 z-50 p-3 rounded-full bg-black/20 backdrop-blur-md border border-white/10 text-white hover:bg-white/10 transition-all duration-300",
                    isDesktop ? "hidden" : "opacity-100"
                )}
            >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>

            {/* Overlay for mobile */}
            <AnimatePresence>
                {isOpen && !isDesktop && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setIsOpen(false)}
                        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
                    />
                )}
            </AnimatePresence>

            {/* Side Panel */}
            <motion.aside
                initial={false}
                animate={{
                    x: isOpen ? 0 : "100%",
                    width: isDesktop ? "280px" : "85%"
                }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                className={cn(
                    "fixed top-0 right-0 h-screen bg-[#0a0a0a]/95 border-l border-white/10 backdrop-blur-xl z-50 flex flex-col shadow-2xl shadow-purple-900/20",
                    isDesktop ? "right-0" : "right-0"
                )}
            >
                {/* Panel Header */}
                <div className="p-6 flex items-center justify-between border-b border-white/10">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-blue-500 to-purple-600 p-[2px]">
                            <div className="w-full h-full rounded-full bg-black flex items-center justify-center">
                                <span className="text-sm font-bold">JD</span>
                            </div>
                        </div>
                        <div>
                            <h3 className="font-bold text-sm">John Doe</h3>
                            <p className="text-xs text-blue-400">Lvl 5 Explorer</p>
                        </div>
                    </div>
                </div>

                {/* Scrollable Content */}
                <div className="flex-1 overflow-y-auto py-6 px-4 space-y-8">

                    {/* Search */}
                    <div className="relative group">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 group-hover:text-blue-400 transition-colors" size={16} />
                        <input
                            type="text"
                            placeholder="Search Universe..."
                            className="w-full bg-white/5 border border-white/10 rounded-xl py-2.5 pl-10 pr-4 text-sm focus:outline-none focus:border-blue-500/50 focus:bg-white/10 transition-all"
                        />
                    </div>

                    {/* Core Navigation */}
                    <div className="space-y-2">
                        <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wider px-2 mb-3">Navigation</h4>
                        {navItems.map((item) => {
                            const isActive = pathname === item.href;
                            return (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    className={cn(
                                        "flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 group relative overflow-hidden",
                                        isActive
                                            ? "bg-gradient-to-r from-blue-600/10 to-purple-600/10 text-blue-400 border border-blue-500/20"
                                            : "text-gray-400 hover:bg-white/5 hover:text-white"
                                    )}
                                >
                                    {isActive && (
                                        <motion.div
                                            layoutId="activeNav"
                                            className="absolute left-0 top-0 bottom-0 w-1 bg-blue-500"
                                        />
                                    )}
                                    <item.icon size={18} className={cn(
                                        "transition-colors",
                                        isActive ? "text-blue-400" : "text-gray-500 group-hover:text-white"
                                    )} />
                                    <span className="font-medium">{item.label}</span>
                                    {isActive && <Sparkles size={14} className="ml-auto text-blue-400 animate-pulse" />}
                                </Link>
                            );
                        })}
                    </div>

                    {/* Quick Actions */}
                    <div className="space-y-2">
                        <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wider px-2 mb-3">Quick Actions</h4>
                        <div className="grid grid-cols-2 gap-2">
                            {quickActions.map((action) => (
                                <button
                                    key={action.label}
                                    className="flex flex-col items-center justify-center p-3 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 hover:border-white/20 transition-all group"
                                >
                                    <action.icon size={20} className="mb-2 text-gray-400 group-hover:text-yellow-400 transition-colors" />
                                    <span className="text-[10px] text-gray-400 group-hover:text-white text-center leading-tight">{action.label}</span>
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Secondary Nav */}
                    <div className="space-y-1">
                        <Link href="/settings" className="flex items-center gap-3 px-4 py-2 rounded-lg text-sm text-gray-400 hover:text-white hover:bg-white/5 transition-colors">
                            <Settings size={16} />
                            <span>Settings</span>
                        </Link>
                        <Link href="/help" className="flex items-center gap-3 px-4 py-2 rounded-lg text-sm text-gray-400 hover:text-white hover:bg-white/5 transition-colors">
                            <HelpCircle size={16} />
                            <span>Help & Tutorial</span>
                        </Link>
                    </div>
                </div>

                {/* Footer */}
                <div className="p-4 border-t border-white/10">
                    <button className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-red-400 hover:bg-red-500/10 transition-all text-sm font-medium">
                        <LogOut size={18} />
                        <span>Logout</span>
                    </button>
                </div>
            </motion.aside>
        </>
    );
};
