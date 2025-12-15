"use client";

import { AIChatInterface } from "@/components/ai/AIChatInterface";

export default function AITutorPage() {
    return (
        <div className="flex flex-col items-center justify-center min-h-[calc(100vh-6rem)]">
            <div className="text-center mb-8">
                <h1 className="text-3xl font-bold mb-2">AI Study Buddy 🤖</h1>
                <p className="text-gray-400">Your personal 24/7 tutor for any subject.</p>
            </div>
            <AIChatInterface />
        </div>
    );
}
