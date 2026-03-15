"use client";

import { motion } from "framer-motion";

export default function InfoBoxes() {
    return (
        <section className="bg-white px-2 py-6 lg:pb-12">
            <motion.div 
                className="mx-auto max-w-7xl shadow-lg"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
            >
                {/* Flexbox container - items arranged horizontally on desktop, vertically on mobile */}
                <div className="flex flex-col md:flex-wrap md:flex-row gap-0 lg:flex-row">
                    {/* Experiencia Box */}
                    <motion.div
                        className="flex flex-1 items-start p-6 gap-4 min-h-full"
                    /* initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }} */
                    >
                        {/* Icon */}
                        <div className="flex-shrink-0">
                            <div className="flex h-14 w-14 items-center justify-center rounded-full border-2 border-blue-600">
                                <svg
                                    className="h-8 w-8 text-blue-600"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
                                    />
                                </svg>
                            </div>
                        </div>
                        {/* Content */}
                        <div>
                            <h3 className="mb-0 text-2xl font-bold text-gray-900">
                                Experiencia
                            </h3>
                            <p className="text-gray-600 text-sm">
                                Tenemos más de 17 años en el mercado Nacional asegurando la mejor
                                solución en el menor tiempo.
                            </p>
                        </div>
                    </motion.div>

                    {/* Misión Box */}
                    <motion.div
                        className="flex flex-1 items-start gap-4 min-h-full p-6"
                    /* initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }} */
                    >
                        {/* Icon */}
                        <div className="flex-shrink-0">
                            <div className="flex h-14 w-14 items-center justify-center rounded-full border-2 border-blue-600">
                                <svg
                                    className="h-8 w-8 text-blue-600"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                                    />
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                                    />
                                </svg>
                            </div>
                        </div>
                        {/* Content */}
                        <div>
                            <h3 className="mb-0 text-2xl font-bold text-gray-900">Misión</h3>
                            <p className="text-gray-600 text-sm">
                                Nuestro primer objetivo sera siempre la satisfacción de nuestro
                                cliente.
                            </p>
                        </div>
                    </motion.div>

                    {/* Descargar Brochure Box - Orange/Red background */}
                    <motion.div
                        className="flex flex-1 items-start gap-6 bg-gradient-to-br from-blue-600 to-blue-700 min-h-full p-6"
                    /* initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    whileHover={{ scale: 1.02 }} */
                    >
                        {/* Icon */}
                        <div className="flex-shrink-0">
                            <div className="flex h-14 w-14 items-center justify-center rounded-full border-2 border-white">
                                <svg
                                    className="h-8 w-8 text-white"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                                    />
                                </svg>
                            </div>
                        </div>
                        {/* Content */}
                        <div>
                            <h3 className="mb-0 text-2xl font-bold text-white">
                                Descargar Brochure
                            </h3>
                            <p className="text-white/90 text-sm">
                                Conoce más de nosotros descargando nuestro Brochure corporativo.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </motion.div>
        </section>
    );
}
