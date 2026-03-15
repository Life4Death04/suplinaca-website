import { Metadata } from 'next';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';
import SolutionHero from '../../components/SolutionHero';
import SolutionDetail from '../../components/SolutionDetail';

export const metadata: Metadata = {
  title: 'Eléctrica - Soluciones Suplimeca',
  description: 'Soluciones eléctricas industriales para su empresa.',
  keywords: 'eléctrica, electricidad, industrial, equipos, venezuela',
};

export default function ElectricaPage() {
  const electricaSolutions = [
    { 
      name: 'Tableros Eléctricos',
      description: 'Diseño y fabricación de tableros eléctricos de distribución y control, personalizados según las necesidades específicas de cada proyecto industrial.',
      image: 'https://images.unsplash.com/photo-1621905251918-48416bd8575a?q=80&w=2070'
    },
    { 
      name: 'Transformadores',
      description: 'Suministro e instalación de transformadores de potencia y distribución, desde unidades pequeñas hasta grandes transformadores industriales.',
      image: 'https://images.unsplash.com/photo-1473186578172-c141e6798cf4?q=80&w=2070'
    },
    { 
      name: 'Motores Eléctricos',
      description: 'Motores eléctricos industriales de alta eficiencia para diversas aplicaciones, incluyendo bombas, compresores y equipos de producción.',
      image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=2070'
    },
    { 
      name: 'Cableado Industrial',
      description: 'Cables de potencia y control para instalaciones industriales, certificados y diseñados para operar en condiciones extremas.',
      image: 'https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?q=80&w=2070'
    },
    { 
      name: 'Sistemas de Iluminación',
      description: 'Soluciones de iluminación industrial LED de alta eficiencia, resistentes a ambientes hostiles y con larga vida útil.',
      image: 'https://images.unsplash.com/photo-1513828583688-c52646db42da?q=80&w=2070'
    },
    { 
      name: 'Protección Eléctrica',
      description: 'Equipos de protección eléctrica: breakers, fusibles, relés de protección y sistemas de puesta a tierra para garantizar la seguridad.',
      image: 'https://images.unsplash.com/photo-1581092335397-9583eb92d232?q=80&w=2070'
    },
    { 
      name: 'Equipos de Medición',
      description: 'Instrumentos de medición eléctrica de precisión: multímetros, analizadores de calidad de energía y medidores de consumo.',
      image: 'https://images.unsplash.com/photo-1581092918484-8623f0d0e55e?q=80&w=2070'
    },
    { 
      name: 'Automatización Industrial',
      description: 'Sistemas de automatización y control industrial: PLCs, HMIs, variadores de velocidad y sistemas de control distribuido.',
      image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070'
    },
  ];

  return (
    <main className="min-h-screen">
      <Navigation />
      
      <SolutionHero 
        title="Eléctrica"
        subtitle="Equipos & Sistemas Eléctricos"
        backgroundImage="https://images.unsplash.com/photo-1473186578172-c141e6798cf4?q=80&w=2070"
      />

      <SolutionDetail 
        title="Nuestras soluciones eléctricas"
        solutions={electricaSolutions}
      />

      <Footer />
    </main>
  );
}
