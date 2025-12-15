import { Sidebar } from "@/components/shared/Sidebar";
import { AnimatedParticles } from "@/components/3d/AnimatedParticles";

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="min-h-screen bg-[#0a0a0a] text-white flex">
            <div className="fixed inset-0 z-0 opacity-50">
                <AnimatedParticles />
            </div>

            <Sidebar />

            <main className="flex-1 ml-64 relative z-10 p-8">
                <div className="max-w-7xl mx-auto">
                    {children}
                </div>
            </main>
        </div>
    );
}
