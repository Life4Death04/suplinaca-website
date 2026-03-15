"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Brands() {
    // Brand logos with real company logo URLs
    const brands = [
        { 
            name: "EATON", 
            logo: "/icon.png",
            alt: "Eaton Cutler-Hammer Logo"
        },
        { 
            name: "SUNBELT", 
            logo: "/next.svg",
            alt: "Sunbelt Transformer Logo"
        },
        { 
            name: "Merla", 
            logo: "/icon.png",
            alt: "Merla Logo"
        },
        { 
            name: "GE", 
           logo: "/icon.png",
            alt: "GE General Electric Logo"
        },
        { 
            name: "3M", 
            logo: "/icon.png",
            alt: "3M Logo"
        },
        { 
            name: "WALWORTH", 
            logo: "/icon.png",
            alt: "Walworth Logo"
        },
        { 
            name: "NEWAY", 
            logo: "/icon.png",
            alt: "Neway Logo"
        },
        { 
            name: "Honeywell", 
            logo: "/icon.png",
            alt: "Honeywell Logo"
        },
        { 
            name: "BURNDY", 
            logo: "/icon.png",
            alt: "Burndy Logo"
        },
        { 
            name: "PURUS", 
            logo: "/icon.png",
            alt: "Purus Logo"
        },
        { 
            name: "PETRO FLORIDA", 
            logo: "/icon.png",
            alt: "Petro Florida Logo"
        },
        { 
            name: "Mobil", 
            logo: "/icon.png",
            alt: "Mobil Logo"
        },
    ];

    return (
        <section className="bg-white px-4 py-16">
            <div className="mx-auto max-w-6xl">
                {/* Section Heading */}
                <motion.div
                    className="text-center mb-12"
                // initial={{ opacity: 0, y: 20 }}
                // whileInView={{ opacity: 1, y: 0 }}
                // viewport={{ once: true }}
                // transition={{ duration: 0.6 }}
                >
                    <h2 className="mb-6 text-3xl font-bold text-gray-900 md:text-4xl">
                        Nuestro respaldo siempre será la<br />CALIDAD
                    </h2>
                    {/* Orange underline accent */}
                    <div className="mx-auto h-1 w-24 bg-blue-600" />
                </motion.div>

                {/* Brands Flexbox Layout */}
                <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
                    {brands.map((brand, index) => (
                        <motion.div
                            key={brand.name}
                            className="flex items-center justify-center p-4 grayscale hover:grayscale-0 transition-all duration-300"
                        // initial={{ opacity: 0, y: 30 }}
                        // whileInView={{ opacity: 1, y: 0 }}
                        // viewport={{ once: true, margin: "-50px" }}
                        // transition={{ duration: 0.5, delay: index * 0.1 }}
                        // whileHover={{ scale: 1.1 }}
                        >
                            {/* Brand Logo Image */}
                            <div className="relative w-32 h-20 flex items-center justify-center">
                                <Image
                                    src={brand.logo}
                                    alt={brand.alt}
                                    width={128}
                                    height={80}
                                    className="object-contain max-w-full max-h-full"
                                    onError={(e) => {
                                        // Fallback to text if image fails to load
                                        const target = e.target as HTMLImageElement;
                                        target.style.display = 'none';
                                        if (target.parentElement) {
                                            target.parentElement.innerHTML = `<span class="text-gray-800 font-bold text-lg">${brand.name}</span>`;
                                        }
                                    }}
                                />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
