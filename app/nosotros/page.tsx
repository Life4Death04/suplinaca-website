"use client";

import { motion } from 'framer-motion';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import Stats from '../components/Stats';
import Brands from '../components/Brands';
import PageHero from '../components/PageHero';
import ImageWithBadge from '../components/ImageWithBadge';

export default function NosotrosPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      
      <PageHero
        title="Nosotros"
        subtitle="Somos Soluciones Indutriales con Alta Eficiencia"
        backgroundImage="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070"
      />
      
      {/* Sobre Nosotros Section - 4 Box Layout */}
      <section className="bg-white px-4 py-8 overflow-hidden">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-wrap gap-8">
            {/* Box 1 - Sobre Nosotros Text (Top Left) */}
            <motion.div 
              className="flex-1 min-w-[300px] flex flex-col"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <p className="text-sm font-bold uppercase tracking-wide text-blue-600 mb-4">
                SUPLIDORA NACIONAL DE VENEZUELA C.A.
              </p>
              <h2 className="text-4xl font-bold leading-tight text-gray-900 md:text-5xl mb-6">
                Sobre Nosotros
              </h2>
              <p className="text-base leading-relaxed text-gray-600 mb-4">
                Es una compañía de comercialización de tuberías, válvulas, bridas y accesorios, 
                además fabricante de piezas especiales para el sector Petrolero, Hidrológico, 
                Industrial, Gasífero, Construcción y Servicios.
              </p>
              <p className="text-base leading-relaxed text-gray-600">
                Ofrece eficacia en todos los procesos que conforman el Sistema Integrado de Gestión, 
                fabricación y comercialización de nuestros productos, garantizando así, la satisfacción 
                de nuestros clientes.
              </p>
              <p className="text-base leading-relaxed text-gray-600">
                Ofrece eficacia en todos los procesos que conforman el Sistema Integrado de Gestión, 
                fabricación y comercialización de nuestros productos, garantizando así, la satisfacción 
                de nuestros clientes.
              </p>
            </motion.div>

            {/* Box 2 - Image with Badge (Top Right) */}
            <motion.div 
              className="flex-1 min-w-[300px] relative"
              initial={{ opacity: 0, y: -50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <ImageWithBadge
                imageUrl="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070"
                imageAlt="Industrial warehouse with organized inventory and equipment"
              />
            </motion.div>
          </div>

          {/* Second Row - Services and Mission */}
          <div className="flex flex-wrap gap-8 mt-8">
            {/* Box 3 - Services Text (Bottom Left) */}
            <motion.div 
              className="flex-1 min-w-[300px]"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <p className="text-gray-600 leading-relaxed mb-6">
                Nuestros servicios asegurarán el rápido y eficiente manejo de las necesidades 
                materiales y servicios para el desarrollo efectivo de las actividades de 
                mantenimiento, sustitución de equipos, la logística y la seguridad empresarial.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Nuestra experiencia en las áreas del proyecto, seguridad, gestión de inventario y 
                mantenimiento, entre otros, están a la mano para asegurar la mejor solución en el 
                menor tiempo posible, en caso necesario, con el cuidado y la seguridad de un 
                servicio multinacional empresa a nuestros clientes.
              </p>
            </motion.div>

            {/* Box 4 - Mission Text (Bottom Right) */}
            <motion.div 
              className="flex-1 min-w-[300px]"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <p className="text-gray-700 leading-relaxed mb-4">
                <span className="font-bold text-gray-900">Nuestra misión</span> es tener como primer objetivo la satisfacción de nuestros 
                clientes, brindándoles <span className="font-semibold">la mejor ingeniería de servicios, suministro, construcción 
                y alquiler de todo tipo de maquinaria adecuados para los equipos de ingeniería 
                y transporte en general</span>, con el fin de satisfacer las necesidades de un amplio 
                público interesado en ese campo.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Para ser una solución eficaz, eficiente y productiva en el ámbito de la inspección, 
                Suministros y la construcción en los sectores público y privado nacional e 
                internacional conforme a los procedimientos y normas de calidad, innovadora 
                capital humano, especializado y recursos tecnológicos
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <Stats />

      {/* Brands Section */}
      <Brands />

      <Footer />
    </main>
  );
}
