import { Metadata } from 'next';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import Stats from '../components/Stats';
import Brands from '../components/Brands';

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
        className="relative h-[400px] flex items-center justify-center text-white mt-14"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-blue-950/80" />
        <div className="relative z-10 text-center px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Nosotros</h1>
          <p className="text-xl md:text-2xl text-gray-200">Somos Soluciones Indutriales con Alta Eficiencia</p>
        </div>
      </section>
      
      {/* Sobre Nosotros Section - 4 Box Layout */}
      <section className="bg-white px-4 py-8">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-wrap gap-8">
            {/* Box 1 - Sobre Nosotros Text (Top Left) */}
            <div className="flex-1 min-w-[300px] flex flex-col justify-center">
              <p className="text-sm font-bold uppercase tracking-wide text-orange-500 mb-4">
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
            </div>

            {/* Box 2 - Image with Badge (Top Right) */}
            <div className="flex-1 min-w-[300px] relative">
              <div className="relative overflow-hidden rounded-lg w-full">
                {/* Industrial warehouse image */}
                <div className="relative h-[300px] bg-gradient-to-br from-gray-800 to-gray-600 lg:h-[400px]">
                  <div className="flex h-full items-center justify-center text-white/50">
                    <p className="text-center text-sm">
                      [IMAGEN: WAREHOUSE]
                      <br />
                      <span className="text-xs">Industrial warehouse with orange shelving</span>
                    </p>
                  </div>
                </div>

                {/* Diagonal Orange Overlay at bottom */}
                <div className="absolute bottom-0 left-0 right-0">
                  <svg
                    viewBox="0 0 400 100"
                    className="w-full"
                    preserveAspectRatio="none"
                  >
                    <polygon
                      points="0,50 0,100 400,100 400,0"
                      fill="#ea580c"
                      opacity="0.9"
                    />
                    <polygon
                      points="0,30 0,100 350,100"
                      fill="#dc2626"
                      opacity="0.7"
                    />
                  </svg>
                </div>
              </div>

              {/* 17+ Years Badge - Reused from Company component */}
              <div className="absolute bottom-8 right-8 flex h-32 w-32 items-center justify-center rounded-full bg-white shadow-2xl">
                <div className="text-center">
                  <div className="text-5xl font-bold text-orange-500">17+</div>
                  <div className="text-xs font-semibold uppercase text-gray-700">
                    Años de
                    <br />
                    Experiencia
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Second Row - Services and Mission */}
          <div className="flex flex-wrap gap-8 mt-8">
            {/* Box 3 - Services Text (Bottom Left) */}
            <div className="flex-1 min-w-[300px]">
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
            </div>

            {/* Box 4 - Mission Text (Bottom Right) */}
            <div className="flex-1 min-w-[300px]">
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
            </div>
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
