"use client";

import { useRef, useState, useEffect } from "react";
import { GlassCard } from "@/components/ui/GlassCard";
import { Eraser, Pen, Undo, Redo, Save } from "lucide-react";

export const InteractiveWhiteboard = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [isDrawing, setIsDrawing] = useState(false);
    const [color, setColor] = useState("#ffffff");
    const [lineWidth, setLineWidth] = useState(2);
    const [tool, setTool] = useState<"pen" | "eraser">("pen");

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        // Set canvas size to parent size
        const resizeCanvas = () => {
            const parent = canvas.parentElement;
            if (parent) {
                canvas.width = parent.clientWidth;
                canvas.height = parent.clientHeight;
                ctx.lineCap = "round";
                ctx.lineJoin = "round";
                ctx.strokeStyle = color;
                ctx.lineWidth = lineWidth;
            }
        };

        resizeCanvas();
        window.addEventListener("resize", resizeCanvas);
        return () => window.removeEventListener("resize", resizeCanvas);
    }, []);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        ctx.strokeStyle = tool === "eraser" ? "#0a0a0a" : color; // Assuming dark background
        ctx.lineWidth = tool === "eraser" ? 20 : lineWidth;
    }, [color, lineWidth, tool]);

    const startDrawing = (e: React.MouseEvent | React.TouchEvent) => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        setIsDrawing(true);
        const { offsetX, offsetY } = getCoordinates(e);
        ctx.beginPath();
        ctx.moveTo(offsetX, offsetY);
    };

    const draw = (e: React.MouseEvent | React.TouchEvent) => {
        if (!isDrawing) return;
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        const { offsetX, offsetY } = getCoordinates(e);
        ctx.lineTo(offsetX, offsetY);
        ctx.stroke();
    };

    const stopDrawing = () => {
        setIsDrawing(false);
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;
        ctx.closePath();
    };

    const getCoordinates = (e: React.MouseEvent | React.TouchEvent) => {
        const canvas = canvasRef.current;
        if (!canvas) return { offsetX: 0, offsetY: 0 };

        if ("touches" in e) {
            const rect = canvas.getBoundingClientRect();
            return {
                offsetX: e.touches[0].clientX - rect.left,
                offsetY: e.touches[0].clientY - rect.top,
            };
        } else {
            return {
                offsetX: (e as React.MouseEvent).nativeEvent.offsetX,
                offsetY: (e as React.MouseEvent).nativeEvent.offsetY,
            };
        }
    };

    return (
        <GlassCard className="flex flex-col h-full p-4">
            <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                    <button
                        onClick={() => setTool("pen")}
                        className={`p-2 rounded-lg transition-colors ${tool === "pen" ? "bg-blue-600 text-white" : "hover:bg-white/10"}`}
                    >
                        <Pen size={20} />
                    </button>
                    <button
                        onClick={() => setTool("eraser")}
                        className={`p-2 rounded-lg transition-colors ${tool === "eraser" ? "bg-blue-600 text-white" : "hover:bg-white/10"}`}
                    >
                        <Eraser size={20} />
                    </button>
                    <div className="w-px h-6 bg-white/10 mx-2" />
                    <input
                        type="color"
                        value={color}
                        onChange={(e) => setColor(e.target.value)}
                        className="w-8 h-8 rounded cursor-pointer bg-transparent border-none"
                    />
                    <input
                        type="range"
                        min="1"
                        max="10"
                        value={lineWidth}
                        onChange={(e) => setLineWidth(parseInt(e.target.value))}
                        className="w-24 accent-blue-500"
                    />
                </div>
                <div className="flex items-center gap-2">
                    <button className="p-2 rounded-lg hover:bg-white/10 transition-colors">
                        <Undo size={20} />
                    </button>
                    <button className="p-2 rounded-lg hover:bg-white/10 transition-colors">
                        <Redo size={20} />
                    </button>
                    <button className="p-2 rounded-lg hover:bg-white/10 transition-colors">
                        <Save size={20} />
                    </button>
                </div>
            </div>

            <div className="flex-1 bg-[#0a0a0a] rounded-xl overflow-hidden border border-white/10 cursor-crosshair">
                <canvas
                    ref={canvasRef}
                    onMouseDown={startDrawing}
                    onMouseMove={draw}
                    onMouseUp={stopDrawing}
                    onMouseLeave={stopDrawing}
                    onTouchStart={startDrawing}
                    onTouchMove={draw}
                    onTouchEnd={stopDrawing}
                    className="w-full h-full touch-none"
                />
            </div>
        </GlassCard>
    );
};
