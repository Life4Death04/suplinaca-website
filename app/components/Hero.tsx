"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const heroImages = [
    "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?q=80&w=2070", // Industrial pipes
    "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?q=80&w=2070", // Factory worker
    "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?q=80&w=2070", // Industrial machinery
    "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070", // Warehouse
];

export default function Hero() {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
        }, 3000); // Change image every 3 seconds

        return () => clearInterval(interval);
    }, []);

    return (
        <section className="relative flex min-h-[70vh] items-center justify-center lg:justify-left overflow-hidden pt-24">
            {/* Background Image Carousel with Zoom Animation */}
            <AnimatePresence mode="wait">
                <motion.div
                    key={currentImageIndex}
                    className="absolute inset-0"
                    initial={{ opacity: 0, scale: 1.2 }}
                    animate={{ opacity: 1, scale: 1.1 }}
                    exit={{ opacity: 0.8, scale: 1 }}
                    transition={{ 
                        opacity: { duration: 1.5 },
                        scale: { duration: 4, ease: "linear" }
                    }}
                    style={{
                        backgroundImage: `url(${heroImages[currentImageIndex]})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                />
            </AnimatePresence>

            {/* Background overlay for better text readability */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-900/70 via-blue-800/55 to-blue-950/90" />
            
            {/* Additional animated overlay */}
            <motion.div
                className="absolute inset-0 bg-black/20"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
            />

            {/* Main content */}
            <div className="relative z-10 max-w-6xl text-center md:text-left md:mr-80 px-4">
                {/* Company name with fade-in animation */}
                <motion.h2
                    className="my-4 text-xs font-semibold uppercase tracking-widest text-blue-200 md:text-base"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    Suplidora Nacional de Venezuela C.A.
                </motion.h2>

                {/* Main heading with fade-in-up animation */}
                <motion.h1
                    className="mb-6 md:mb-4 text-white"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                >
                    <span className="text-2xl md:text-5xl">SOLUCIONES INDUSTRIALES CON</span>
                    <p className="text-yellow-400 font-bold text-4xl md:text-5xl">ALTA EFICIENCIA</p>
                </motion.h1>

                {/* Description with fade-in-up animation */}
                <motion.p
                    className="mx-auto mb-8 max-w-3xl text-base leading-relaxed text-blue-100 md:text-lg"
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                >
                    Comercialización de tuberías, válvulas, bridas y accesorios, además
                    fabricante de piezas especiales para el sector Petrolero, Hidrológico,
                    Industrial, Gasífero, Construcción y Servicios
                </motion.p>

                {/* Call to action button with fade-in-up and scale animation */}
                <motion.div
                    initial={{ opacity: 0, y: 30, scale: 0.8 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                >
                    <Link 
                        href="/soluciones"
                        className="inline-block bg-yellow-400 px-8 py-3 font-semibold text-blue-900 transition-all hover:bg-yellow-300 hover:scale-105 cursor-pointer"
                    >
                        SABER MÁS
                    </Link>
                </motion.div>
            </div>

            {/* Animated decorative elements */}
            <motion.div
                className="absolute -bottom-20 -right-20 h-64 w-64 rounded-full bg-blue-500/10 blur-3xl"
                animate={{
                    scale: [1, 1.2, 1],
                    rotate: [0, 90, 0],
                }}
                transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "linear",
                }}
            />

            <motion.div
                className="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-yellow-400/10 blur-3xl"
                animate={{
                    scale: [1, 1.3, 1],
                    rotate: [0, -90, 0],
                }}
                transition={{
                    duration: 12,
                    repeat: Infinity,
                    ease: "linear",
                }}
            />
        </section>
    );
}
