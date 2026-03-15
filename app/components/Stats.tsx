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
}: {
    value: number;
    label: string;
    suffix?: string;
    delay?: number;
}) {
    const { count, setHasStarted } = useCounter(value);

    return (
        <motion.div
            className="flex flex-col items-center bg-white p-4"
        /* initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, delay }}
        onViewportEnter={() => setHasStarted(true)} */
        >
            <div className="mb-2 text-4xl font-bold text-blue-900 md:text-5xl">
                {count}
                {suffix}
            </div>
            <div className="text-center text-[12px] text-gray-600 md:text-base">
                {label}
            </div>
        </motion.div>
    );
}

export default function Stats() {
    return (
        <section className="bg-white px-4 py-8 lg:pb-12">
            <div className="mx-auto max-w-6xl">
                {/* Section intro */}
                <motion.div
                    className="mb-4 text-center"
                /* initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }} */
                >
                    <h2 className="mb-4 text-3xl font-bold text-blue-900 md:text-4xl">
                        En SUPLINACA garantizamos la satisfacción de nuestros clientes
                    </h2>
                    <p className="mx-auto max-w-3xl text-gray-700 text-sm">
                        Apegados a los procedimientos y normas de calidad, bajo una innovadora
                        gestión del Capital Humano Especializado y con recursos tecnológicos
                        actualizados.
                    </p>
                </motion.div>

                {/* Stats grid */}
                <div className="flex items-center justify-center gap-4 md:gap-16">
                    <StatCard value={15} label="Proyectos Realizados" delay={0.2} />
                    <StatCard value={50} label="Productos Entregados" delay={0.4} />
                    <StatCard value={25} label="Años Trabajando" delay={0.6} />
                </div>
            </div>
        </section>
    );
}
