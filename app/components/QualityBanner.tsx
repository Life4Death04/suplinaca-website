"use client";

import { motion } from "framer-motion";

export default function QualityBanner() {
    return (
        <section className="relative flex flex-wrap items-center justify-center md:justify-start overflow-hidden px-4 py-12 md:py-30">
            {/* Background Image - You can replace this with your actual image */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{
                    backgroundImage:
                        "url('https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=2070')",
                }}
            >
                {/* Dark overlay for better text readability */}
                <div className="absolute inset-0 bg-black/60" />
            </div>

            {/* Content */}
            <div className="relative z-10 text-center md:text-left md:px-75">
                <motion.h2
                    className="mb-8 text-4xl font-light leading-tight text-white"
                // initial={{ opacity: 0, y: 30 }}
                // whileInView={{ opacity: 1, y: 0 }}
                // viewport={{ once: true }}
                // transition={{ duration: 0.8 }}
                >
                    Nuestro respaldo
                    <br />
                    siempre sera la{" "}
                    <span className="font-bold">CALIDAD</span>
                </motion.h2>

                <motion.div
                // initial={{ opacity: 0, scale: 0.9 }}
                // whileInView={{ opacity: 1, scale: 1 }}
                // viewport={{ once: true }}
                // transition={{ duration: 0.6, delay: 0.3 }}
                >
                    <button className="bg-blue-600 px-10 py-4 text-sm font-bold uppercase tracking-wide text-white transition-all hover:bg-blue-700 hover:shadow-xl">
                        Contacto
                    </button>
                </motion.div>
            </div>
        </section>
    );
}
