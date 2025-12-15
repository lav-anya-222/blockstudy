import { GlassCard } from "@/components/ui/GlassCard";
import { LucideIcon } from "lucide-react";

interface StatsCardProps {
    title: string;
    value: string | number;
    subtitle?: string;
    icon: LucideIcon;
    trend?: {
        value: number;
        isPositive: boolean;
    };
    color?: "blue" | "purple" | "green" | "orange";
}

export const StatsCard = ({
    title,
    value,
    subtitle,
    icon: Icon,
    trend,
    color = "blue"
}: StatsCardProps) => {
    const colorMap = {
        blue: "text-blue-400 bg-blue-500/10",
        purple: "text-purple-400 bg-purple-500/10",
        green: "text-green-400 bg-green-500/10",
        orange: "text-orange-400 bg-orange-500/10",
    };

    return (
        <GlassCard className="relative overflow-hidden">
            <div className="flex items-start justify-between mb-4">
                <div>
                    <p className="text-sm text-gray-400 font-medium mb-1">{title}</p>
                    <h3 className="text-3xl font-bold">{value}</h3>
                </div>
                <div className={`p-3 rounded-xl ${colorMap[color]}`}>
                    <Icon size={24} />
                </div>
            </div>

            {(subtitle || trend) && (
                <div className="flex items-center gap-2 text-sm">
                    {trend && (
                        <span className={trend.isPositive ? "text-green-400" : "text-red-400"}>
                            {trend.isPositive ? "+" : ""}{trend.value}%
                        </span>
                    )}
                    {subtitle && <span className="text-gray-500">{subtitle}</span>}
                </div>
            )}
        </GlassCard>
    );
};
