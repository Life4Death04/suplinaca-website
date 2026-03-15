import { Metadata } from 'next';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';
import SolutionHero from '../../components/SolutionHero';
import SolutionDetail from '../../components/SolutionDetail';

export const metadata: Metadata = {
  title: 'Instrumentación - Soluciones Suplimeca',
  description: 'Soluciones de instrumentación industrial para control y medición.',
  keywords: 'instrumentación, medición, control, industrial, venezuela',
};

export default function InstrumentacionPage() {
  const instrumentacionSolutions = [
    { 
      name: 'Instrumentos de Medición',
      description: 'Instrumentos de medición de alta precisión para temperatura, presión, nivel y flujo, ideales para monitoreo y control de procesos industriales.',
      image: 'https://images.unsplash.com/photo-1581092918484-8623f0d0e55e?q=80&w=2070'
    },
    { 
      name: 'Válvulas de Control',
      description: 'Válvulas de control automático para regulación precisa de fluidos en procesos industriales, disponibles en diversas configuraciones.',
      image: 'https://images.unsplash.com/photo-1581092334651-ddf26d9a09d0?q=80&w=2070'
    },
    { 
      name: 'Transmisores de Presión',
      description: 'Transmisores de presión inteligentes con salida digital y analógica, certificados para aplicaciones en industrias de proceso.',
      image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=2070'
    },
    { 
      name: 'Sensores Industriales',
      description: 'Amplia gama de sensores industriales: proximidad, nivel, temperatura, presión y caudal para aplicaciones de automatización.',
      image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070'
    },
    { 
      name: 'Manómetros',
      description: 'Manómetros analógicos y digitales para medición de presión en gases y líquidos, disponibles en diversos rangos y materiales.',
      image: 'https://images.unsplash.com/photo-1581092162384-8987c1d64718?q=80&w=2070'
    },
    { 
      name: 'Medidores de Flujo',
      description: 'Medidores de flujo másicos y volumétricos de última tecnología: electromagnéticos, ultrasónicos, tipo vortex y coriolis.',
      image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?q=80&w=2070'
    },
    { 
      name: 'Controladores',
      description: 'Controladores de procesos industriales con algoritmos PID avanzados para control preciso de temperatura, presión y nivel.',
      image: 'https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?q=80&w=2070'
    },
    { 
      name: 'Sistemas SCADA',
      description: 'Sistemas de supervisión, control y adquisición de datos (SCADA) para monitoreo en tiempo real de procesos industriales complejos.',
      image: 'https://images.unsplash.com/photo-1581092162167-e90d4b76cd67?q=80&w=2070'
    },
  ];

  return (
    <main className="min-h-screen">
      <Navigation />
      
      <SolutionHero 
        title="Instrumentación"
        subtitle="Control & Medición"
        backgroundImage="https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070"
      />

      <SolutionDetail 
        title="Nuestras soluciones de instrumentación"
        solutions={instrumentacionSolutions}
      />

      <Footer />
    </main>
  );
}
