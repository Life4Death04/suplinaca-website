"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

// Hook for animating numbers (counting effect)
function useCounter(end: number, duration: number = 2000) {
    const [count, setCount] = useState(0);
    const [hasStarted, setHasStarted] = useState(false);

    useEffect(() => {
        if (!hasStarted) return;

        let startTime: number;
        let animationFrame: number;

        const animate = (currentTime: number) => {
            if (!startTime) startTime = currentTime;
            const progress = (currentTime - startTime) / duration;

            if (progress < 1) {
                setCount(Math.floor(end * progress));
                animationFrame = requestAnimationFrame(animate);
            } else {
                setCount(end);
            }
        };

        animationFrame = requestAnimationFrame(animate);
        return () => cancelAnimationFrame(animationFrame);
    }, [end, duration, hasStarted]);

    return { count, setHasStarted };
}

// Individual stat card component
function StatCard({
    value,
    label,
    suffix = "+",
    delay = 0,
    hasCommas = false,
}: {
    value: number;
    label: string;
    suffix?: string;
    delay?: number;
    hasCommas?: boolean;
}) {
    const { count, setHasStarted } = useCounter(value);
    
    const formatNumber = (num: number) => {
        if (hasCommas) {
            return num.toLocaleString('en-US');
        }
        return num.toString();
    };

    return (
        <motion.div
            className="flex flex-col items-center p-4"
        /* initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, delay }}
        onViewportEnter={() => setHasStarted(true)} */
        >
            <div className="mb-2 text-5xl font-bold text-blue-600 md:text-6xl">
                {formatNumber(count)}
                {suffix}
            </div>
            <div className="text-center text-base font-medium text-gray-900 md:text-lg">
                {label}
            </div>
        </motion.div>
    );
}

export default function Stats() {
    return (
        <section 
            className="bg-gray-50 px-4 py-16 relative overflow-hidden"
            style={{
                backgroundImage: `radial-gradient(circle, #d1d5db 1px, transparent 1px)`,
                backgroundSize: '30px 30px',
            }}
        >
            {/* World map dotted pattern overlay effect */}
            <div className="absolute inset-0 opacity-30"
                style={{
                    backgroundImage: `radial-gradient(circle at 20% 50%, transparent 20%, rgba(209, 213, 219, 0.3) 21%, rgba(209, 213, 219, 0.3) 30%, transparent 31%),
                                     radial-gradient(circle at 80% 50%, transparent 20%, rgba(209, 213, 219, 0.3) 21%, rgba(209, 213, 219, 0.3) 30%, transparent 31%)`,
                }}
            />
            
            <div className="mx-auto max-w-6xl relative z-10">
                {/* Section intro */}
                <motion.div
                    className="mb-12 text-center"
                /* initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }} */
                >
                    <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
                        En SUPLINACA garantizamos<br className="hidden md:block" /> la satisfacción de nuestros clientes.
                    </h2>
                    <p className="mx-auto max-w-3xl text-gray-600 text-base md:text-lg">
                        Apegados a los procedimientos y normas de calidad, bajo una innovadora gestión del Capital Humano
                        <br className="hidden md:block" /> Especializado y con recursos tecnológicos actualizados.
                    </p>
                </motion.div>

                {/* Stats grid */}
                <div className="flex flex-wrap items-center justify-center gap-8 md:gap-20">
                    <StatCard value={48} label="Proyectos Realizados" delay={0.2} />
                    <StatCard value={8451} label="Productos Entregados" delay={0.4} hasCommas={true} />
                    <StatCard value={17} label="Años trabajando" delay={0.6} />
                </div>
            </div>
        </section>
    );
}
