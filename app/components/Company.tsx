"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import ImageWithBadge from "./ImageWithBadge";

export default function Company() {
    return (
        <section className="bg-white px-4 py-16 lg:py-20">
            <div className="mx-auto max-w-7xl">
                {/* Two-column grid layout - stacks on mobile, side-by-side on desktop */}
                <div className="relative flex flex-col md:flex-row gap-12">
                    {/* Left Column - Text Content */}
                    <motion.div
                        className="flex flex-col justify-center gap-4 md:w-1/2"
                        initial={{ opacity: 0, y: -50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        {/* Section Label */}
                        <motion.p
                            className="text-sm font-bold uppercase tracking-wide text-blue-600"
                            // initial={{ opacity: 0 }}
                            // whileInView={{ opacity: 1 }}
                            // viewport={{ once: true }}
                            // transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            LA EMPRESA
                        </motion.p>

                        {/* Main Heading */}
                        <motion.h2
                            className="text-3xl font-bold text-gray-900 md:text-4xl lg:text-5xl"
                            // initial={{ opacity: 0, y: 20 }}
                            // whileInView={{ opacity: 1, y: 0 }}
                            // viewport={{ once: true }}
                            // transition={{ duration: 0.8, delay: 0.3 }}
                        >
                            Eficacia en todos los procesos del Sistema Integrado de Gestión
                        </motion.h2>

                        {/* Description */}
                        <motion.p
                            className="text-base leading-relaxed text-gray-600 md:text-lg"
                            // initial={{ opacity: 0, y: 20 }}
                            // whileInView={{ opacity: 1, y: 0 }}
                            // viewport={{ once: true }}
                            // transition={{ duration: 0.8, delay: 0.4 }}
                        >
                            Ofrecemos eficacia en todos los procesos que conforman el Sistema
                            Integrado de Gestión, fabricación y comercialización de nuestros
                            productos, garantizando así, la satisfacción de nuestros clientes.
                        </motion.p>

                        {/* Call to Action Button */}
                        <motion.div
                            // initial={{ opacity: 0, y: 20 }}
                            // whileInView={{ opacity: 1, y: 0 }}
                            // viewport={{ once: true }}
                            // transition={{ duration: 0.8, delay: 0.5 }}
                        >
                            <Link 
                                href="/soluciones"
                                className="inline-block bg-blue-600 hover:bg-blue-700 px-8 py-4 font-bold uppercase tracking-wide text-white transition-all hover:shadow-lg"
                            >
                                SABER MÁS
                            </Link>
                        </motion.div>
                    </motion.div>

                    {/* Right Column - Image with Badge */}
                    <motion.div
                        className="w-full h-full"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <ImageWithBadge
                            imageUrl="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070"
                            imageAlt="Industrial warehouse with organized inventory and equipment"
                            height="h-[400px] lg:h-[550px]"
                        />
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
