"use client";

import { motion } from "framer-motion";
import Image from "next/image";

// Service card component
interface ServiceCardProps {
    icon: React.ReactNode;
    title: string;
    subtitle: string;
    description: string;
    imagePlaceholder?: string;
    delay?: number;
}

function ServiceCard({
    icon,
    title,
    subtitle,
    description,
    imagePlaceholder,
    delay = 0,
}: ServiceCardProps) {
    return (
        <motion.div
            className="overflow-hidden rounded-lg bg-white shadow-lg"
        // initial={{ opacity: 0, y: 50 }}
        // whileInView={{ opacity: 1, y: 0 }}
        // viewport={{ once: true }}
        // transition={{ duration: 0.8, delay }}
        // whileHover={{ y: -10, transition: { duration: 0.3 } }}
        >
            {/* Card Header */}
            <div className="p-6">
                <div className="mb-4 flex items-center gap-4">
                    {/* Icon */}
                    <div className="flex-shrink-0 text-blue-600">{icon}</div>
                    {/* Title and subtitle */}
                    <div>
                        <h3 className="text-2xl font-bold text-gray-900">{title}</h3>
                        <p className="text-sm text-gray-600">{subtitle}</p>
                    </div>
                </div>

                {/* Image placeholder */}
                <div className="mb-4 overflow-hidden rounded-lg">
                    <div className="relative h-64 w-full bg-gradient-to-br from-gray-200 to-gray-300">
                        {/* Placeholder - replace with actual images */}
                        <div className="flex h-full items-center justify-center text-gray-500">
                            <div className="text-center text-sm">
                                <p>[{imagePlaceholder || "Service Image"}]</p>
                                <p className="mt-1 text-xs">Add image to public/ folder</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Description */}
                <p className="mb-6 text-sm leading-relaxed text-gray-700">
                    {description}
                </p>

                {/* CTA Button */}
                <button className="w-full rounded bg-blue-600 py-3 text-sm font-bold uppercase tracking-wide text-white transition-all hover:bg-blue-700 hover:shadow-lg">
                    Saber Más
                </button>
            </div>
        </motion.div>
    );
}

export default function Solutions() {
    // Service data - you can expand this array with more services
    const services = [
        {
            icon: (
                <svg
                    className="h-12 w-12"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                    />
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                </svg>
            ),
            title: "Mecánica",
            subtitle: "Fabricación y Suministro",
            description:
                "Nos especializamos en el suministro de componentes y fabricación de meter run, múltiples de producción, casing & tubing, sucker rod, válvulas, bridas, fittings, butt weld fittings, entre otros.",
            imagePlaceholder: "Mechanical Equipment",
        },
        // You can add more services here
        // {
        //   icon: <svg>...</svg>,
        //   title: "Another Service",
        //   subtitle: "Service Subtitle",
        //   description: "Service description...",
        //   imagePlaceholder: "Service Image",
        // },
    ];

    return (
        <section className="bg-gradient-to-br from-slate-800 to-slate-900 px-4 py-8 lg:pb-12">
            <div className="mx-auto max-w-7xl">
                {/* Section Header */}
                <motion.div
                    className="mb-12 text-center"
                // initial={{ opacity: 0, y: 30 }}
                // whileInView={{ opacity: 1, y: 0 }}
                // viewport={{ once: true }}
                // transition={{ duration: 0.6 }}
                >
                    <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">
                        Soluciones Eficientes
                    </h2>
                    {/* Blue underline accent */}
                    <div className="mx-auto mb-8 h-1 w-24 bg-blue-600" />
                    <p className="mx-auto max-w-3xl text-base leading-relaxed text-gray-300">
                        Ingeniería de servicios, suministro, construcción y alquiler de todo
                        tipo de maquinaria adecuados para los equipos de ingeniería y
                        transporte en general
                    </p>
                </motion.div>

                {/* Services Grid - Adjust columns based on number of services */}
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {services.map((service, index) => (
                        <ServiceCard
                            key={service.title}
                            icon={service.icon}
                            title={service.title}
                            subtitle={service.subtitle}
                            description={service.description}
                            imagePlaceholder={service.imagePlaceholder}
                            delay={index * 0.2}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
