"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export function ContactCTA() {
    return (
        <section className="bg-gradient-to-br from-slate-800 to-slate-900 px-4 py-8">
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
                    <Link 
                        href="/contacto"
                        className="inline-block bg-blue-600 px-10 py-4 text-sm font-bold uppercase tracking-wide text-white transition-all hover:bg-blue-700 hover:shadow-xl cursor-pointer"
                    >
                        Contacto
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}

export default function Footer() {
    return (
        <footer className="bg-slate-950 pb-10 text-white">
            <ContactCTA/>
            <div className="flex flex-wrap items-center justify-center gap-12 mt-8">
                {/* Top Section - Logo and Description */}
                <motion.div
                    className="text-center lg:text-left self-start px-4 border-b border-slate-800 lg:border-none pb-8 w-full md:w-auto lg:max-w-[400px]"
                // initial={{ opacity: 0, y: 20 }}
                // whileInView={{ opacity: 1, y: 0 }}
                // viewport={{ once: true }}
                // transition={{ duration: 0.6 }}
                >
                    <h2 className="mb-6 text-4xl font-bold italic text-blue-600">
                        Suplinaca
                    </h2>
                    <p className="mx-auto max-w-2xl text-sm leading-relaxed text-gray-400">
                        Comercialización de tuberías, válvulas, bridas y accesorios, además
                        fabricante de piezas especiales para el sector Petrolero, Hidrológico,
                        Industrial, Gasífero, Construcción y Servicios
                    </p>
                </motion.div>

                {/* Three Column Flexbox */}
                <div className="mb-12 flex flex-wrap lg:flex-nowrap gap-8 justify-center px-4">
                    <div className="w-full sm:w-auto">
                        {/* Column 1 - Compañía */}
                        <motion.div
                            className="w-full sm:w-auto"
                        // initial={{ opacity: 0, y: 20 }}
                        // whileInView={{ opacity: 1, y: 0 }}
                        // viewport={{ once: true }}
                        // transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            <h3 className="mb-4 text-lg font-bold">Compañía</h3>
                            <ul className="space-y-1">
                                <li>
                                    <a
                                        href="#"
                                        className="text-[12px] text-gray-400 transition-colors hover:text-blue-600"
                                    >
                                        ▪ Inicio
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#nosotros"
                                        className="text-[12px] text-gray-400 transition-colors hover:text-blue-600"
                                    >
                                        ▪ Nosotros
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#soluciones"
                                        className="text-[12px] text-gray-400 transition-colors hover:text-blue-600"
                                    >
                                        ▪ Soluciones
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#contacto"
                                        className="text-[12px] text-gray-400 transition-colors hover:text-blue-600"
                                    >
                                        ▪ Contacto
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="text-[12px] text-gray-400 transition-colors hover:text-blue-600"
                                    >
                                        ▪ Intranet
                                    </a>
                                </li>
                            </ul>
                        </motion.div>
                    </div>

                    {/* Column 2 - Contacto */}
                    <motion.div
                        className="w-full sm:w-auto"
                    // initial={{ opacity: 0, y: 20 }}
                    // whileInView={{ opacity: 1, y: 0 }}
                    // viewport={{ once: true }}
                    // transition={{ duration: 0.6, delay: 0.3 }}
                    >
                        <h3 className="mb-4 text-lg font-bold">Contacto</h3>
                        <ul className="space-y-1">
                            <li>
                                <a
                                    href="tel:+582617420228"
                                    className="text-[12px] text-gray-400 transition-colors hover:text-blue-600"
                                >
                                    ▪ +58 261 7420228
                                </a>
                            </li>
                            <li>
                                <a
                                    href="mailto:rochoa@suplinaca.com"
                                    className="text-[12px] text-gray-400 transition-colors hover:text-blue-600"
                                >
                                    ▪ rochoa@suplinaca.com
                                </a>
                            </li>
                            <li>
                                <a
                                    href="mailto:info@suplinaca.com"
                                    className="text-[12px] text-gray-400 transition-colors hover:text-blue-600"
                                >
                                    ▪ info@suplinaca.com
                                </a>
                            </li>
                            <li className="text-[12px] text-gray-400">
                                ▪ Sector Pueblo Nuevo, Maracaibo Edo Zulia
                            </li>
                        </ul>
                    </motion.div>

                    {/* Column 3 - Ubicación */}
                    <motion.div
                        className="w-full lg:max-w-[300px]"
                    // initial={{ opacity: 0, y: 20 }}
                    // whileInView={{ opacity: 1, y: 0 }}
                    // viewport={{ once: true }}
                    // transition={{ duration: 0.6, delay: 0.4 }}
                    >
                        <h3 className="mb-6 text-lg font-bold">Ubicación</h3>
                        <div className="overflow-hidden rounded-lg bg-slate-800">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3926.6284567890123!2d-71.6408!3d10.6423!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTDCsDM4JzMyLjMiTiA3McKwMzgnMjcuMSJX!5e0!3m2!1sen!2sve!4v1234567890"
                                width="100%"
                                height="192"
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Ubicación Suplimeca Maracaibo"
                            />
                        </div>
                    </motion.div>
                </div>
            </div>
            {/* Bottom Section - Copyright */}
            <motion.div
                className="border-t border-slate-800 pt-8 text-center"
            // initial={{ opacity: 0 }}
            // whileInView={{ opacity: 1 }}
            // viewport={{ once: true }}
            // transition={{ duration: 0.6, delay: 0.5 }}
            >
                <p className="text-xs text-gray-500">
                    Copyright © 2024 SUPLINACA, All rights reserved.
                </p>
                <p className="mt-2 text-xs text-gray-600">
                    Powered by{" "}
                    <a
                        href="https://paginasweb.com.ve"
                        className="text-gray-500 transition-colors hover:text-blue-600"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        paginasweb.com.ve
                    </a>
                </p>
            </motion.div>
        </footer>
    );
}
