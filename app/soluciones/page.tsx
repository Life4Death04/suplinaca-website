import { Metadata } from 'next';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import Solutions from '../components/Solutions';
import Company from '../components/Company';
import PageHero from '../components/PageHero';
import FeatureCard from '../components/FeatureCard';
import SectionHeader from '../components/SectionHeader';

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
      
      <PageHero
        title="Soluciones"
        subtitle="Servicios y productos industriales de calidad"
        backgroundImage="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070"
      />

      <Company />

      {/* Solutions Section */}
      <Solutions />

      {/* Additional Services */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            title="Servicios Adicionales"
            subtitle="Ofrecemos una amplia gama de servicios complementarios para satisfacer todas tus necesidades industriales"
          />
          
          <div className="flex flex-wrap gap-6">
            <FeatureCard
              icon="🎯"
              title="Asesoría Técnica"
              description="Expertos que te ayudan a encontrar la solución perfecta para tu proyecto."
            />
            <FeatureCard
              icon="🚚"
              title="Entrega Rápida"
              description="Sistema logístico eficiente para entregas puntuales en todo el país."
            />
            <FeatureCard
              icon="💬"
              title="Soporte Post-Venta"
              description="Atención continua y garantía en todos nuestros productos y servicios."
            />
            <FeatureCard
              icon="📋"
              title="Cotizaciones Personalizadas"
              description="Presupuestos ajustados a tus necesidades y volumen de compra."
            />
            <FeatureCard
              icon="📦"
              title="Inventario Amplio"
              description="Miles de productos en stock listos para entrega inmediata."
            />
            <FeatureCard
              icon="✓"
              title="Calidad Certificada"
              description="Productos de marcas reconocidas con certificaciones internacionales."
            />
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
