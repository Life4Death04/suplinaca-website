import { Metadata } from 'next';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import Solutions from '../components/Solutions';
import Company from '../components/Company';

export const metadata: Metadata = {
  title: 'Soluciones - Suplimeca | Servicios y Productos Industriales',
  description: 'Descubre todas nuestras soluciones industriales: suministros, equipos, mantenimiento y más. Productos de calidad para tu empresa.',
  keywords: 'soluciones, servicios, productos industriales, suministros, equipos, mantenimiento, venezuela',
  openGraph: {
    title: 'Soluciones - Suplimeca',
    description: 'Descubre todas nuestras soluciones y servicios industriales.',
    type: 'website',
  },
};

export default function SolucionesPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section 
        className="relative h-[400px] flex items-center justify-center text-white mt-14"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-blue-950/80" />
        <div className="relative z-10 text-center px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Soluciones</h1>
          <p className="text-xl md:text-2xl text-gray-200">Servicios y productos industriales de calidad</p>
        </div>
      </section>

      <Company />

      {/* Solutions Section */}
      <Solutions />

      {/* Additional Services */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4 text-gray-900">
            Servicios Adicionales
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Ofrecemos una amplia gama de servicios complementarios para satisfacer todas tus necesidades industriales
          </p>
          
          <div className="flex flex-wrap gap-6">
            {[
              {
                title: 'Asesoría Técnica',
                description: 'Expertos que te ayudan a encontrar la solución perfecta para tu proyecto.',
                icon: '🎯'
              },
              {
                title: 'Entrega Rápida',
                description: 'Sistema logístico eficiente para entregas puntuales en todo el país.',
                icon: '🚚'
              },
              {
                title: 'Soporte Post-Venta',
                description: 'Atención continua y garantía en todos nuestros productos y servicios.',
                icon: '💬'
              },
              {
                title: 'Cotizaciones Personalizadas',
                description: 'Presupuestos ajustados a tus necesidades y volumen de compra.',
                icon: '📋'
              },
              {
                title: 'Inventario Amplio',
                description: 'Miles de productos en stock listos para entrega inmediata.',
                icon: '📦'
              },
              {
                title: 'Calidad Certificada',
                description: 'Productos de marcas reconocidas con certificaciones internacionales.',
                icon: '✓'
              },
            ].map((service, index) => (
              <div 
                key={index}
                className="flex-1 min-w-[280px] max-w-[350px] bg-white p-6 rounded-lg shadow-md"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold mb-2 text-gray-900">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}{/* 
      PROBABLY I WOULDN'T NEED THIS, BUT I'LL LEAVE IT HERE IN CASE I WANT TO ADD IT LATER
      <section className="py-16 px-4 bg-gradient-to-r from-blue-900 to-blue-950">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            ¿Necesitas una solución específica?
          </h2>
          <p className="text-xl mb-8 text-gray-200">
            Contáctanos y nuestro equipo te ayudará a encontrar la mejor opción para tu empresa
          </p>
          <a 
            href="/contacto"
            className="inline-block bg-yellow-400 hover:bg-yellow-300 text-blue-900 font-semibold px-8 py-3 rounded-full transition-colors"
          >
            CONTACTAR AHORA
          </a>
        </div>
      </section>
 */}
      <Footer />
    </main>
  );
}
