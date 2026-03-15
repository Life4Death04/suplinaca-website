import { Metadata } from 'next';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import Company from '../components/Company';
import QualityBanner from '../components/QualityBanner';

export const metadata: Metadata = {
  title: 'Nosotros - Suplimeca | Conoce Nuestra Empresa',
  description: 'Conoce más sobre Suplimeca, nuestra historia, misión y visión. Más de 30 años de experiencia en suministros industriales en Venezuela.',
  keywords: 'nosotros, suplimeca, empresa, historia, misión, visión, venezuela, maracaibo',
  openGraph: {
    title: 'Nosotros - Suplimeca',
    description: 'Conoce más sobre Suplimeca, nuestra histor ia, misión y visión.',
    type: 'website',
  },
};

export default function NosotrosPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section 
        className="relative h-[400px] flex items-center justify-center text-white mt-20"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?q=80&w=2070)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-blue-950/80" />
        <div className="relative z-10 text-center px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Nosotros</h1>
          <p className="text-xl md:text-2xl text-gray-200">Conoce nuestra historia y trayectoria</p>
        </div>
      </section>

      {/* Company Section */}
      <Company />

      {/* Quality Banner */}
      <QualityBanner />

      {/* Mission & Vision */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap gap-8">
            {/* Misión */}
            <div className="flex-1 min-w-[300px] p-8 bg-blue-50 rounded-lg">
              <h2 className="text-3xl font-bold mb-4 text-blue-900">Misión</h2>
              <p className="text-gray-700 leading-relaxed">
                Proporcionar soluciones integrales de suministros industriales con los más altos estándares de calidad, 
                garantizando la satisfacción de nuestros clientes mediante un servicio eficiente y productos de primera categoría 
                que contribuyan al desarrollo industrial del país.
              </p>
            </div>

            {/* Visión */}
            <div className="flex-1 min-w-[300px] p-8 bg-blue-50 rounded-lg">
              <h2 className="text-3xl font-bold mb-4 text-blue-900">Visión</h2>
              <p className="text-gray-700 leading-relaxed">
                Ser la empresa líder en Venezuela en el suministro de productos y servicios industriales, 
                reconocidos por nuestra excelencia, innovación y compromiso con el desarrollo industrial sostenible, 
                expandiendo nuestra presencia a nivel nacional e internacional.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">Nuestros Valores</h2>
          
          <div className="flex flex-wrap justify-center gap-6">
            {[
              { title: 'Calidad', description: 'Compromiso con la excelencia en cada producto y servicio.' },
              { title: 'Integridad', description: 'Actuamos con honestidad y transparencia en todas nuestras operaciones.' },
              { title: 'Innovación', description: 'Buscamos constantemente mejoras y soluciones creativas.' },
              { title: 'Responsabilidad', description: 'Cumplimos nuestros compromisos con clientes y la sociedad.' },
            ].map((value, index) => (
              <div 
                key={index}
                className="flex-1 min-w-[250px] max-w-[280px] bg-white p-6 rounded-lg shadow-md text-center"
              >
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-blue-600 flex items-center justify-center">
                  <span className="text-2xl font-bold text-white">{value.title[0]}</span>
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-900">{value.title}</h3>
                <p className="text-gray-600 text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
