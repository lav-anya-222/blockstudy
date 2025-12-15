"use client";

import { useState, useRef, useEffect } from "react";
import { GlassCard } from "@/components/ui/GlassCard";
import { Send, Bot, User, Sparkles, Calculator, Scroll, Dna } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface Message {
    id: string;
    role: "user" | "assistant";
    content: string;
    timestamp: Date;
}

export const AIChatInterface = () => {
    const [messages, setMessages] = useState<Message[]>([
        {
            id: "1",
            role: "assistant",
            content: "Hello! I'm your AI Study Buddy. How can I help you learn today?",
            timestamp: new Date(),
        },
    ]);
    const [input, setInput] = useState("");
    const [isTyping, setIsTyping] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    const generateMockResponse = (input: string) => {
        const lowerInput = input.toLowerCase();

        // --- Computer Science & Coding ---
        if (lowerInput.includes("python")) {
            return "Python is a high-level, interpreted programming language known for its readability. It's great for web development, data science, and AI. Key concepts include indentation, dynamic typing, and a vast standard library. Try printing 'Hello, World!' with: print('Hello, World!')";
        }
        if (lowerInput.includes("javascript") || lowerInput.includes("js")) {
            return "JavaScript is the programming language of the web. It allows you to implement complex features on web pages. It works with HTML and CSS to create interactive experiences. Modern JS (ES6+) includes features like arrow functions, classes, and promises.";
        }
        if (lowerInput.includes("react")) {
            return "React is a JavaScript library for building user interfaces, maintained by Meta. It uses a component-based architecture and a virtual DOM for efficient updates. Key concepts include JSX, components, props, state, and hooks (like useState and useEffect).";
        }
        if (lowerInput.includes("html")) {
            return "HTML (HyperText Markup Language) is the standard markup language for documents designed to be displayed in a web browser. It defines the structure of a web page using elements like <head>, <body>, <div>, <p>, and <img>.";
        }
        if (lowerInput.includes("css")) {
            return "CSS (Cascading Style Sheets) describes how HTML elements are to be displayed on screen. It handles layout, colors, fonts, and animations. Modern CSS includes Flexbox and Grid for powerful layout control.";
        }

        // --- Science ---
        if (lowerInput.includes("chemistry") || lowerInput.includes("atom")) {
            return "Chemistry is the study of matter and the changes it undergoes. An atom is the basic unit of a chemical element. It consists of a nucleus (protons and neutrons) surrounded by electrons. The Periodic Table organizes all known elements by atomic number.";
        }
        if (lowerInput.includes("biology") || lowerInput.includes("dna") || lowerInput.includes("cell") || lowerInput.includes("photosynthesis")) {
            return "Biology is the study of life. Cells are the basic structural and functional units of life. Photosynthesis is the process by which plants use sunlight to convert water and carbon dioxide into oxygen and energy (sugar). DNA carries genetic instructions.";
        }
        if (lowerInput.includes("physics") || lowerInput.includes("newton") || lowerInput.includes("gravity") || lowerInput.includes("force")) {
            return "Physics deals with matter, energy, motion, and force. Newton's Laws of Motion describe the relationship between a body and the forces acting upon it. Gravity is the universal force of attraction acting between all matter.";
        }

        // --- Mathematics ---
        if (lowerInput.includes("algebra") || lowerInput.includes("equation")) {
            return "Algebra is a branch of mathematics dealing with symbols and the rules for manipulating those symbols. It allows us to solve for unknown variables (like 'x') in equations. For example, in 2x + 4 = 10, x equals 3.";
        }
        if (lowerInput.includes("geometry") || lowerInput.includes("shape")) {
            return "Geometry is concerned with properties of space such as distance, shape, size, and relative position of figures. Key concepts include points, lines, planes, angles, triangles, and circles.";
        }
        if (lowerInput.includes("calculus") || lowerInput.includes("derivative") || lowerInput.includes("integral")) {
            return "Calculus is the mathematical study of continuous change. Differentiation finds the rate of change (slope), while integration finds the accumulation of quantities (area under a curve). It's essential for physics and engineering.";
        }

        // --- Humanities ---
        if (lowerInput.includes("history") || lowerInput.includes("war") || lowerInput.includes("revolution")) {
            return "History is the study of past events. Understanding history helps us comprehend how societies change. Major events like the Industrial Revolution, World Wars, and the Renaissance have shaped the modern world. Which specific era interests you?";
        }
        if (lowerInput.includes("literature") || lowerInput.includes("shakespeare") || lowerInput.includes("book")) {
            return "Literature explores the human experience through written works. William Shakespeare is considered the greatest writer in the English language, known for plays like 'Hamlet', 'Romeo and Juliet', and 'Macbeth'.";
        }

        // --- Study Tips ---
        if (lowerInput.includes("tip") || lowerInput.includes("study") || lowerInput.includes("focus") || lowerInput.includes("tired")) {
            return "Here are some study tips: 1. Use the Pomodoro Technique (25 min work, 5 min break). 2. Teach what you've learned to someone else (Feynman Technique). 3. Get enough sleep—it's when your brain consolidates memory! 4. Stay hydrated.";
        }

        // --- Greetings & General ---
        if (lowerInput.includes("hello") || lowerInput.includes("hi") || lowerInput.includes("hey")) {
            return "Hello! I'm your upgraded AI Study Buddy. I can help with Coding, Science, Math, History, and more. What are we learning today?";
        }
        if (lowerInput.includes("thank")) {
            return "You're very welcome! I'm here to help you succeed. Let me know if you have any other questions.";
        }

        // Generic fallback
        const fallbacks = [
            "That's an interesting topic! While I don't have a specific pre-programmed answer for that yet, I'd love to help you break it down. Could you ask a more specific question about it?",
            "I can help you with that! To give you the best explanation, could you tell me which part of this topic you find most confusing?",
            "Great question. This is a vast subject. Are you looking for a general overview or specific details?",
            "I'm listening! Tell me more about what you're working on, and I'll do my best to guide you."
        ];
        return fallbacks[Math.floor(Math.random() * fallbacks.length)];
    };

    const handleSend = async () => {
        if (!input.trim()) return;

        const userMessage: Message = {
            id: Date.now().toString(),
            role: "user",
            content: input,
            timestamp: new Date(),
        };

        setMessages((prev) => [...prev, userMessage]);
        setInput("");
        setIsTyping(true);

        // Simulate AI response
        setTimeout(() => {
            const responseContent = generateMockResponse(userMessage.content);

            const aiMessage: Message = {
                id: (Date.now() + 1).toString(),
                role: "assistant",
                content: responseContent,
                timestamp: new Date(),
            };
            setMessages((prev) => [...prev, aiMessage]);
            setIsTyping(false);
        }, 1500);
    };

    return (
        <GlassCard className="flex flex-col h-[600px] w-full max-w-4xl mx-auto overflow-hidden">
            {/* Header */}
            <div className="p-4 border-b border-white/10 flex items-center gap-3 bg-blue-500/5">
                <div className="p-2 rounded-full bg-blue-500/20 text-blue-400">
                    <Bot size={24} />
                </div>
                <div>
                    <h3 className="font-bold">AI Study Buddy</h3>
                    <p className="text-xs text-green-400 flex items-center gap-1">
                        <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                        Online
                    </p>
                </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
                {messages.map((message) => (
                    <motion.div
                        key={message.id}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className={`flex gap-3 ${message.role === "user" ? "flex-row-reverse" : ""}`}
                    >
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${message.role === "user" ? "bg-purple-500/20 text-purple-400" : "bg-blue-500/20 text-blue-400"
                            }`}>
                            {message.role === "user" ? <User size={16} /> : <Bot size={16} />}
                        </div>

                        <div className={`max-w-[80%] p-3 rounded-2xl ${message.role === "user"
                            ? "bg-purple-500/10 text-purple-100 rounded-tr-none"
                            : "bg-blue-500/10 text-blue-100 rounded-tl-none"
                            }`}>
                            <p className="text-sm leading-relaxed">{message.content}</p>
                            <span className="text-[10px] opacity-50 mt-1 block">
                                {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                            </span>
                        </div>
                    </motion.div>
                ))}

                {isTyping && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="flex gap-3"
                    >
                        <div className="w-8 h-8 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center">
                            <Bot size={16} />
                        </div>
                        <div className="bg-blue-500/10 p-3 rounded-2xl rounded-tl-none flex gap-1 items-center">
                            <span className="w-2 h-2 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
                            <span className="w-2 h-2 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
                            <span className="w-2 h-2 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
                        </div>
                    </motion.div>
                )}
                <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="p-4 border-t border-white/10 bg-black/20">
                <div className="flex gap-2">
                    <input
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        onKeyDown={(e) => e.key === "Enter" && handleSend()}
                        placeholder="Ask anything about your studies..."
                        className="flex-1 bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-blue-500 transition-colors"
                    />
                    <button
                        onClick={handleSend}
                        disabled={!input.trim() || isTyping}
                        className="p-3 bg-blue-600 hover:bg-blue-500 text-white rounded-xl transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        <Send size={20} />
                    </button>
                </div>
                <div className="mt-2 flex gap-2 overflow-x-auto pb-2">
                    <button className="text-xs px-3 py-2 rounded-xl bg-blue-500/10 hover:bg-blue-500/20 border border-blue-500/20 text-blue-300 whitespace-nowrap flex items-center gap-2 transition-colors">
                        <Calculator size={16} />
                        Explain Calculus
                    </button>
                    <button className="text-xs px-3 py-2 rounded-xl bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/20 text-amber-300 whitespace-nowrap flex items-center gap-2 transition-colors">
                        <Scroll size={16} />
                        History of Rome
                    </button>
                    <button className="text-xs px-3 py-2 rounded-xl bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/20 text-emerald-300 whitespace-nowrap flex items-center gap-2 transition-colors">
                        <Dna size={16} />
                        Biology Basics
                    </button>
                </div>
            </div>
        </GlassCard>
    );
};
