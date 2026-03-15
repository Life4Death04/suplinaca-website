"use client";

import { motion } from "framer-motion";

export default function Brands() {
    // Brand names - you can add actual logo images later
    const brands = [
        { name: "EATON", subtitle: "Cutler-Hammer" },
        { name: "SUNBELT" },
        { name: "Merla", subtitle: "INDUSTRIAL SUPPLIES" },
        { name: "GE" },
        { name: "3M" },
        { name: "WALWORTH" },
        { name: "NEWAY" },
        { name: "Honeywell" },
        { name: "BURNDY" },
        { name: "PURUS" },
        { name: "NAPHTHA" },
        { name: "Mobil" },
    ];

    return (
        <section className="bg-white px-4 py-8">
            <div className="mx-auto max-w-6xl">
                {/* Section Heading */}
                <motion.div
                    className="text-center"
                // initial={{ opacity: 0, y: 20 }}
                // whileInView={{ opacity: 1, y: 0 }}
                // viewport={{ once: true }}
                // transition={{ duration: 0.6 }}
                >
                    <h2 className="mb-8 text-3xl font-bold text-gray-900 md:text-4xl">
                        Trabajamos con las mejores marcas
                    </h2>
                    {/* Blue underline accent */}
                    <div className="mx-auto h-1 w-24 bg-blue-600" />
                </motion.div>

                {/* Brands Grid - 2 columns on mobile, 4 on desktop */}
                <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
                    {brands.map((brand, index) => (
                        <motion.div
                            key={brand.name}
                            className="flex items-center justify-center rounded-lg bg-white p-6 transition-all hover:border-blue-600 hover:shadow-lg"
                        // initial={{ opacity: 0, y: 30 }}
                        // whileInView={{ opacity: 1, y: 0 }}
                        // viewport={{ once: true, margin: "-50px" }}
                        // transition={{ duration: 0.5, delay: index * 0.1 }}
                        // whileHover={{ scale: 1.05 }}
                        >
                            {/* Brand placeholder - you can replace with actual logo images */}
                            <div className="text-center">
                                <div
                                    className={`text-xl font-bold ${brand.name === "3M"
                                        ? "text-red-600"
                                        : brand.name === "GE"
                                            ? "text-blue-600"
                                            : brand.name === "Honeywell"
                                                ? "text-red-500"
                                                : brand.name === "Mobil"
                                                    ? "text-blue-700"
                                                    : brand.name === "EATON"
                                                        ? "text-blue-900"
                                                        : brand.name === "NEWAY"
                                                            ? "text-red-600"
                                                            : "text-gray-800"
                                        }`}
                                >
                                    {brand.name}
                                </div>
                                {brand.subtitle && (
                                    <div className="mt-1 text-xs text-gray-500">{brand.subtitle}</div>
                                )}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
