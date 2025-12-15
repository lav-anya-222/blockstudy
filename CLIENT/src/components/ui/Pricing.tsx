"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";

const plans = [
    {
        name: "Beginner",
        price: "199",
        description: "Individuals new to blockchain",
        features: ["Access to basic blockchain guides", "Email support", "Community access"],
        color: "neon-blue",
        borderColor: "border-neon-blue",
        shadowColor: "shadow-neon-blue",
    },
    {
        name: "Intermediate",
        price: "349",
        description: "Users with some blockchain knowledge",
        features: ["Everything in Beginner", "Access to advanced tutorials", "Priority support", "Certificate of completion"],
        color: "neon-purple",
        borderColor: "border-neon-purple",
        shadowColor: "shadow-neon-purple",
        popular: true,
    },
    {
        name: "Advanced",
        price: "495",
        description: "Professionals looking for advanced tools",
        features: ["Everything in Intermediate", "1-on-1 Mentorship", "Job placement assistance", "Access to private network"],
        color: "neon-green",
        borderColor: "border-neon-green",
        shadowColor: "shadow-neon-green",
    },
];

export const Pricing = () => {
    return (
        <section id="pricing" className="py-20 px-4 relative">
            <div className="container mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">
                        Pricing <span className="text-neon-blue">Plans</span>
                    </h2>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        Choose the plan that fits your needs and start exploring the power of blockchain today.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
                    {plans.map((plan, index) => (
                        <motion.div
                            key={plan.name}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            whileHover={{ y: -10 }}
                            className={`relative p-8 rounded-2xl bg-[#0a0a0a]/80 backdrop-blur-sm border-2 ${plan.popular ? "border-neon-purple shadow-[0_0_30px_rgba(188,19,254,0.3)]" : "border-white/10"
                                } hover:border-opacity-100 transition-all duration-300 group`}
                        >
                            {plan.popular && (
                                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-neon-purple text-white px-4 py-1 rounded-full text-sm font-bold shadow-[0_0_10px_rgba(188,19,254,0.5)]">
                                    Most Popular
                                </div>
                            )}

                            <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                            <div className="flex items-baseline gap-1 mb-4">
                                <span className="text-4xl font-bold text-white group-hover:text-neon-blue transition-colors duration-300">
                                    ${plan.price}
                                </span>
                                <span className="text-gray-400">/month</span>
                            </div>
                            <p className="text-gray-400 mb-8 text-sm">{plan.description}</p>

                            <ul className="space-y-4 mb-8">
                                {plan.features.map((feature) => (
                                    <li key={feature} className="flex items-start gap-3 text-gray-300">
                                        <Check className={`w-5 h-5 ${plan.popular ? "text-neon-purple" : "text-neon-blue"} shrink-0`} />
                                        <span className="text-sm">{feature}</span>
                                    </li>
                                ))}
                            </ul>

                            <button
                                className={`w-full py-3 rounded-lg font-bold transition-all duration-300 ${plan.popular
                                        ? "bg-neon-purple text-white hover:bg-neon-purple/80 shadow-[0_0_20px_rgba(188,19,254,0.4)]"
                                        : "bg-transparent border border-white/20 text-white hover:bg-white/10 hover:border-white/40"
                                    }`}
                            >
                                Choose Plan
                            </button>
                        </motion.div>
                    ))}
                </div>

                {/* Simple comparison & guarantee */}
                <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-[2fr,1.5fr] gap-6 text-sm text-gray-300">
                    <div className="rounded-2xl border border-white/10 bg-[#050510]/80 p-5">
                        <h3 className="text-base font-semibold mb-3">Which plan is right for me?</h3>
                        <ul className="space-y-2 list-disc list-inside text-xs md:text-sm">
                            <li><span className="font-semibold">Beginner</span> – You&apos;re new to blockchain and want guided explanations.</li>
                            <li><span className="font-semibold">Intermediate</span> – You&apos;ve explored basics and want projects and certificates.</li>
                            <li><span className="font-semibold">Advanced</span> – You&apos;re aiming for roles, mentorship, and a strong portfolio.</li>
                        </ul>
                    </div>
                    <div className="rounded-2xl border border-neon-green/40 bg-neon-green/5 p-5">
                        <h3 className="text-base font-semibold mb-2 text-neon-green">14‑day money‑back guarantee</h3>
                        <p className="text-xs md:text-sm text-gray-200">
                            Try BlockStudy risk‑free. If you don&apos;t feel more confident about blockchain
                            within 14 days, contact us and we&apos;ll make it right.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};
