"use client";

import { motion } from "framer-motion";

export default function Hero() {
    return (
        <section 
            className="relative flex min-h-[70vh] items-center justify-center lg:justify-left overflow-hidden pt-24"
            style={{
                backgroundImage: 'url(https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?q=80&w=2070)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
        >
            {/* Background overlay for better text readability */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-900/70 via-blue-800/55 to-blue-950/90" />
            
            {/* Additional animated overlay */}
            <motion.div
                className="absolute inset-0 bg-black/20"
            // initial={{ opacity: 0 }}
            // animate={{ opacity: 1 }}
            // transition={{ duration: 1 }}
            />

            {/* Main content */}
            <div className="relative z-10 max-w-6xl text-center md:text-left md:mr-80">
                {/* Company name with fade-in animation */}
                <motion.h2
                    className="my-4 text-xs font-semibold uppercase tracking-widest text-blue-200 md:text-base"
                // initial={{ opacity: 0, y: -20 }}
                // animate={{ opacity: 1, y: 0 }}
                // transition={{ duration: 0.6, delay: 0.2 }}
                >
                    Suplidora Nacional de Venezuela C.A.
                </motion.h2>

                {/* Main heading with stagger animation */}
                <motion.h1
                    className="mb-6 md:mb-4 text-white"
                // initial={{ opacity: 0, y: 30 }}
                // animate={{ opacity: 1, y: 0 }}
                // transition={{ duration: 0.8, delay: 0.4 }}
                >
                    <span className="text-2xl md:text-5xl">SOLUCIONES INDUSTRIALES CON</span>
                    <p className="text-yellow-400 font-bold text-4xl md:text-5xl">ALTA EFICIENCIA</p>
                </motion.h1>

                {/* Description */}
                <motion.p
                    className="mx-auto mb-8 max-w-3xl text-base leading-relaxed text-blue-100 md:text-lg"
                // initial={{ opacity: 0, y: 30 }}
                // animate={{ opacity: 1, y: 0 }}
                // transition={{ duration: 0.8, delay: 0.6 }}
                >
                    Comercialización de tuberías, válvulas, bridas y accesorios, además
                    fabricante de piezas especiales para el sector Petrolero, Hidrológico,
                    Industrial, Gasífero, Construcción y Servicios
                </motion.p>

                {/* Call to action button */}
                <motion.div
                // initial={{ opacity: 0, scale: 0.8 }}
                // animate={{ opacity: 1, scale: 1 }}
                // transition={{ duration: 0.6, delay: 0.8 }}
                >
                    <button className="bg-yellow-400 px-8 py-3 font-semibold text-blue-900 transition-all hover:bg-yellow-300 hover:scale-105">
                        SABER MÁS
                    </button>
                </motion.div>
            </div>

            {/* Animated decorative element */}
            <motion.div
                className="absolute -bottom-20 -right-20 h-64 w-64 rounded-full bg-blue-500/10 blur-3xl"
            // animate={{
            //     scale: [1, 1.2, 1],
            //     rotate: [0, 90, 0],
            // }}
            // transition={{
            //     duration: 10,
            //     repeat: Infinity,
            //     ease: "linear",
            // }}
            />

            <motion.div
                className="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-yellow-400/10 blur-3xl"
            // animate={{
            //     scale: [1, 1.3, 1],
            //     rotate: [0, -90, 0],
            // }}
            // transition={{
            //     duration: 12,
            //     repeat: Infinity,
            //     ease: "linear",
            // }}
            />
        </section>
    );
}
