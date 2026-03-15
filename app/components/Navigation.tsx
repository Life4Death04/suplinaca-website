"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navigation() {
    const [isOpen, setIsOpen] = useState(false);
    const [isSolucionesOpen, setIsSolucionesOpen] = useState(false);
    const pathname = usePathname();

    const menuItems = [
        { name: "Inicio", href: "/" },
        { name: "Nosotros", href: "/nosotros" },
        { name: "Soluciones", href: "/soluciones" },
        { name: "Contacto", href: "/contacto" },
    ];

    const solucionesSubmenu = [
        { name: "Mecánica", href: "/soluciones/mecanica" },
        { name: "Eléctrica", href: "/soluciones/electrica" },
        { name: "Instrumentación", href: "/soluciones/instrumentacion" },
        { name: "Civil", href: "/soluciones/civil" },
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
                    {menuItems.map((item, index) => {
                        const isActive = item.name === "Soluciones" 
                            ? pathname === item.href || pathname.startsWith('/soluciones/')
                            : pathname === item.href;
                        
                        return item.name === "Soluciones" ? (
                            <div 
                                key={item.name}
                                className="relative"
                                onMouseEnter={() => setIsSolucionesOpen(true)}
                                onMouseLeave={() => setIsSolucionesOpen(false)}
                            >
                                <Link
                                    href={item.href}
                                    className={`font-bold transition-colors hover:text-blue-900 flex items-center ${
                                        isActive ? 'text-blue-600' : 'text-gray-700'
                                    }`}
                                >
                                    {item.name}
                                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                    </svg>
                                </Link>
                                
                                {/* Dropdown Menu */}
                                {isSolucionesOpen && (
                                    <motion.div 
                                        className="absolute top-full left-0 mt-0 pt-2 w-48 z-50"
                                        initial={{ opacity: 0, y: -10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        <div className="bg-white shadow-lg rounded-md py-2">
                                            {solucionesSubmenu.map((subItem) => {
                                                const isSubActive = pathname === subItem.href;
                                                return (
                                                    <Link
                                                        key={subItem.name}
                                                        href={subItem.href}
                                                        className={`block px-4 py-2 font-bold hover:bg-blue-50 hover:text-blue-600 transition-colors ${
                                                            isSubActive ? 'text-blue-600 bg-blue-50' : 'text-gray-700'
                                                        }`}
                                                    >
                                                        {subItem.name}
                                                    </Link>
                                                );
                                            })}
                                        </div>
                                    </motion.div>
                                )}
                            </div>
                        ) : (
                            <Link
                                key={item.name}
                                href={item.href}
                                className={`font-bold transition-colors hover:text-blue-900 ${
                                    isActive ? 'text-blue-600' : 'text-gray-700'
                                }`}
                            >
                                {item.name}
                            </Link>
                        );
                    })}
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
                    {menuItems.map((item) => {
                        const isActive = item.name === "Soluciones" 
                            ? pathname === item.href || pathname.startsWith('/soluciones/')
                            : pathname === item.href;
                        
                        return item.name === "Soluciones" ? (
                            <div key={item.name}>
                                <Link
                                    href={item.href}
                                    className={`block font-bold hover:text-blue-900 ${
                                        isActive ? 'text-blue-600' : 'text-gray-700'
                                    }`}
                                    onClick={() => setIsOpen(false)}
                                >
                                    {item.name}
                                </Link>
                                <div className="ml-4 mt-2 space-y-2">
                                    {solucionesSubmenu.map((subItem) => {
                                        const isSubActive = pathname === subItem.href;
                                        return (
                                            <Link
                                                key={subItem.name}
                                                href={subItem.href}
                                                className={`block text-sm font-bold ${
                                                    isSubActive ? 'text-blue-600' : 'text-gray-600 hover:text-blue-600'
                                                }`}
                                                onClick={() => setIsOpen(false)}
                                            >
                                                • {subItem.name}
                                            </Link>
                                        );
                                    })}
                                </div>
                            </div>
                        ) : (
                            <Link
                                key={item.name}
                                href={item.href}
                                className={`block font-bold hover:text-blue-900 ${
                                    isActive ? 'text-blue-600' : 'text-gray-700'
                                }`}
                                onClick={() => setIsOpen(false)}
                            >
                                {item.name}
                            </Link>
                        );
                    })}
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
