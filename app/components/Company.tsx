"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Company() {
    return (
        <section className="bg-white px-4 py-16 lg:py-20">
            <div className="mx-auto max-w-7xl">
                {/* Two-column grid layout - stacks on mobile, side-by-side on desktop */}
                <div className="relative flex flex-col md:flex-row gap-12">
                    {/* Left Column - Text Content */}
                    <motion.div
                        className="flex flex-col justify-center gap-4 md:w-1/2"
                        // initial={{ opacity: 0, x: -50 }}
                        // whileInView={{ opacity: 1, x: 0 }}
                        // viewport={{ once: true }}
                        // transition={{ duration: 0.8 }}
                    >
                        {/* Section Label */}
                        <motion.p
                            className="text-sm font-bold uppercase tracking-wide text-orange-500"
                            // initial={{ opacity: 0 }}
                            // whileInView={{ opacity: 1 }}
                            // viewport={{ once: true }}
                            // transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            SUPLIDORA NACIONAL DE VENEZUELA C.A.
                        </motion.p>

                        {/* Main Heading */}
                        <motion.h2
                            className="text-4xl font-bold leading-tight text-gray-900 md:text-5xl"
                            // initial={{ opacity: 0, y: 20 }}
                            // whileInView={{ opacity: 1, y: 0 }}
                            // viewport={{ once: true }}
                            // transition={{ duration: 0.8, delay: 0.3 }}
                        >
                            Sobre Nosotros
                        </motion.h2>

                        {/* Description Paragraph 1 */}
                        <motion.p
                            className="text-base leading-relaxed text-gray-600"
                            // initial={{ opacity: 0, y: 20 }}
                            // whileInView={{ opacity: 1, y: 0 }}
                            // viewport={{ once: true }}
                            // transition={{ duration: 0.8, delay: 0.4 }}
                        >
                            Es una compañía de comercialización de tuberías, válvulas, bridas y accesorios, 
                            además fabricante de piezas especiales para el sector Petrolero, Hidrológico, 
                            Industrial, Gasífero, Construcción y Servicios.
                        </motion.p>

                        {/* Description Paragraph 2 */}
                        <motion.p
                            className="text-base leading-relaxed text-gray-600"
                            // initial={{ opacity: 0, y: 20 }}
                            // whileInView={{ opacity: 1, y: 0 }}
                            // viewport={{ once: true }}
                            // transition={{ duration: 0.8, delay: 0.5 }}
                        >
                            Ofrece eficacia en todos los procesos que conforman el Sistema Integrado de Gestión, 
                            fabricación y comercialización de nuestros productos, garantizando así, la satisfacción 
                            de nuestros clientes.
                        </motion.p>
                    </motion.div>

                    {/* Right Column - Image with Badge */}
                    <motion.div
                        className="w-full h-full"
                        // initial={{ opacity: 0, x: 50 }}
                        // whileInView={{ opacity: 1, x: 0 }}
                        // viewport={{ once: true }}
                        // transition={{ duration: 0.8 }}
                    >
                        {/* Image Container with diagonal orange overlay */}
                        <div className="relative overflow-hidden rounded-lg w-full">
                            {/* Industrial machinery image placeholder */}
                            <div className="relative h-[400px] bg-gradient-to-br from-gray-800 to-gray-600 lg:h-[550px]">
                                {/* Placeholder for actual image - you can replace this with a real image */}
                                <div className="flex h-full items-center justify-center text-white/50 h-full">
                                    <p className="text-center text-sm">
                                        [COLOCAR IMAGEN]
                                        <br />
                                        <span className="text-xs">
                                            (RECORDAR ALT TEXT DESCRIPTIVO PARA ACCESIBILIDAD)
                                        </span>
                                    </p>
                                </div>
                            </div>

                            {/* Diagonal Orange Overlay at bottom */}
                            <div className="absolute bottom-0 left-0 right-0">
                                <svg
                                    viewBox="0 0 400 100"
                                    className="w-full"
                                    preserveAspectRatio="none"
                                >
                                    <polygon
                                        points="0,50 0,100 400,100 400,0"
                                        fill="#ea580c"
                                        opacity="0.9"
                                    />
                                    <polygon
                                        points="0,30 0,100 350,100"
                                        fill="#dc2626"
                                        opacity="0.7"
                                    />
                                </svg>
                            </div>
                        </div>

                        {/* Years of Experience Badge - White circle with orange text */}
                        <motion.div
                            className="absolute bottom-8 right-8 flex h-32 w-32 items-center justify-center rounded-full bg-white shadow-2xl"
                            // initial={{ scale: 0, rotate: -180 }}
                            // whileInView={{ scale: 1, rotate: 0 }}
                            // viewport={{ once: true }}
                            // transition={{
                            //     duration: 0.8,
                            //     delay: 0.6,
                            //     type: "spring",
                            //     stiffness: 200,
                            // }}
                            // whileHover={{ scale: 1.05, rotate: 5 }}
                        >
                            <div className="text-center">
                                <div className="text-5xl font-bold text-orange-500">17+</div>
                                <div className="text-xs font-semibold uppercase text-gray-700">
                                    Años de
                                    <br />
                                    Experiencia
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
