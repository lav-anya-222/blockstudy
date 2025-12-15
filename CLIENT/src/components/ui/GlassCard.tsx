"use client";

import { motion, HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils/utils";

interface GlassCardProps extends HTMLMotionProps<"div"> {
    children: React.ReactNode;
    className?: string;
    hoverEffect?: boolean;
}

export const GlassCard = ({
    children,
    className,
    hoverEffect = true,
    ...props
}: GlassCardProps) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            whileHover={hoverEffect ? { scale: 1.02, translateY: -5 } : {}}
            className={cn(
                "glass-card rounded-2xl p-6 transition-all duration-300",
                className
            )}
            {...props}
        >
            {children}
        </motion.div>
    );
};
