"use client";

import { motion } from "framer-motion";

export default function ContactCTA() {
    return (
        <div className="bg-gradient-to-br from-slate-800 to-slate-900">
            <div className="flex flex-wrap justify-center items-center mx-auto sm:text-center md:text-left">
                <div className="text-center md:text-left max-w-2xl">
                    {/* Heading */}
                    <motion.h3
                        className="mb-4 text-sm font-semibold uppercase tracking-widest text-gray-300"
                    // initial={{ opacity: 0, y: 20 }}
                    // whileInView={{ opacity: 1, y: 0 }}
                    // viewport={{ once: true }}
                    // transition={{ duration: 0.6 }}
                    >
                        ¿Necesitas Asesoría?
                    </motion.h3>

                    {/* Main text */}
                    <motion.p
                        className="mb-4 text-xl leading-tight text-white md:text-3xl md:text-left"
                    // initial={{ opacity: 0, y: 20 }}
                    // whileInView={{ opacity: 1, y: 0 }}
                    // viewport={{ once: true }}
                    // transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        No dudes en contactarnos a través de nuestros medios de contacto.
                    </motion.p>
                </div>

                {/* CTA Button */}
                <motion.div
                    // initial={{ opacity: 0, scale: 0.9 }}
                    // whileInView={{ opacity: 1, scale: 1 }}
                    // viewport={{ once: true }}
                    // transition={{ duration: 0.6, delay: 0.4 }}
                    className="my-auto lg:ml-8"
                >
                    <button className="bg-blue-600 px-10 py-4 text-sm font-bold uppercase tracking-wide text-white transition-all hover:bg-blue-700 hover:shadow-xl">
                        Contacto
                    </button>
                </motion.div>
            </div>
        </div>
    );
}
