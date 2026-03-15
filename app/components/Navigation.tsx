"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Link from "next/link";

export default function Navigation() {
    const [isOpen, setIsOpen] = useState(false);

    const menuItems = [
        { name: "Inicio", href: "/" },
        { name: "Nosotros", href: "/nosotros" },
        { name: "Soluciones", href: "/soluciones" },
        { name: "Contacto", href: "/contacto" },
    ];

    return (
        <motion.nav
            className="fixed left-0 right-0 top-0 z-50 bg-white/95 shadow-md backdrop-blur-sm"
        // initial={{ y: -100 }}
        // animate={{ y: 0 }}
        // transition={{ duration: 0.6 }}
        >
            <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">
                {/* Logo */}
                <motion.div
                    className="text-xl font-bold text-blue-900 md:text-2xl"
                // whileHover={{ scale: 1.05 }}
                >
                    SUPLINACA
                </motion.div>

                {/* Desktop Menu */}
                <div className="hidden space-x-8 md:flex">
                    {menuItems.map((item, index) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            className="font-medium text-gray-700 transition-colors hover:text-blue-900"
                        >
                            {item.name}
                        </Link>
                    ))}
                </div>

                {/* Contact Button (Desktop) */}
                <Link
                    href="/contacto"
                    className="hidden rounded-full bg-yellow-400 px-6 py-2 font-semibold text-blue-900 transition-all hover:bg-yellow-300 md:block"
                >
                    CONTACTO
                </Link>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Toggle menu"
                >
                    <div className="space-y-1.5">
                        <motion.span
                            className="block h-0.5 w-6 bg-blue-900"
                            animate={isOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
                        />
                        <motion.span
                            className="block h-0.5 w-6 bg-blue-900"
                            animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
                        />
                        <motion.span
                            className="block h-0.5 w-6 bg-blue-900"
                            animate={isOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
                        />
                    </div>
                </button>
            </div>

            {/* Mobile Menu */}
            <motion.div
                className="overflow-hidden md:hidden"
                // initial={false}
                animate={isOpen ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
            >
                <div className="space-y-4 bg-white px-4 py-6">
                    {menuItems.map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            className="block font-medium text-gray-700 hover:text-blue-900"
                            onClick={() => setIsOpen(false)}
                        >
                            {item.name}
                        </Link>
                    ))}
                    <Link 
                        href="/contacto"
                        className="block w-full text-center rounded-full bg-yellow-400 px-6 py-2 font-semibold text-blue-900"
                        onClick={() => setIsOpen(false)}
                    >
                        CONTACTO
                    </Link>
                </div>
            </motion.div>
        </motion.nav>
    );
}
