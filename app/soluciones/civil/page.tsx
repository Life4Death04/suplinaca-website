import { Metadata } from 'next';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';
import PageHero from '../../components/PageHero';
import SolutionDetail from '../../components/SolutionDetail';

export const metadata: Metadata = {
  title: 'Civil - Soluciones Suplimeca',
  description: 'Soluciones civiles para construcción y desarrollo de infraestructura.',
  keywords: 'civil, construcción, infraestructura, materiales, venezuela',
};

export default function CivilPage() {
  const civilSolutions = [
    { 
      name: 'Materiales de Construcción',
      description: 'Suministro de materiales de construcción de alta calidad: acero estructural, concreto, agregados y materiales especiales para obras civiles.',
      image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2070'
    },
    { 
      name: 'Estructuras Metálicas',
      description: 'Diseño, fabricación y montaje de estructuras metálicas para edificaciones industriales, comerciales y residenciales.',
      image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=2070'
    },
    { 
      name: 'Sistemas de Tuberías',
      description: 'Instalación de sistemas de tuberías para agua potable, aguas servidas, gas y otros fluidos en proyectos de construcción.',
      image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?q=80&w=2070'
    },
    { 
      name: 'Equipos de Excavación',
      description: 'Alquiler y venta de equipos de excavación y movimiento de tierra: retroexcavadoras, mini excavadoras y equipos auxiliares.',
      image: 'https://images.unsplash.com/photo-1581092918484-8623f0d0e55e?q=80&w=2070'
    },
    { 
      name: 'Hormigón y Cemento',
      description: 'Suministro de hormigón premezclado y cementos especiales para fundaciones, losas, columnas y elementos estructurales.',
      image: 'https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?q=80&w=2070'
    },
    { 
      name: 'Herramientas de Construcción',
      description: 'Venta y alquiler de herramientas y equipos de construcción: mezcladoras, vibradores, cortadoras y herramientas manuales.',
      image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=2070'
    },
    { 
      name: 'Sistemas de Drenaje',
      description: 'Diseño e instalación de sistemas de drenaje pluvial y sanitario para proyectos residenciales, comerciales e industriales.',
      image: 'https://images.unsplash.com/photo-1581092335397-9583eb92d232?q=80&w=2070'
    },
    { 
      name: 'Seguridad Industrial',
      description: 'Equipos de protección personal y sistemas de seguridad para obras de construcción: cascos, arneses, redes y señalización.',
      image: 'https://images.unsplash.com/photo-1581092162167-e90d4b76cd67?q=80&w=2070'
    },
  ];

  return (
    <main className="min-h-screen">
      <Navigation />
      
      <PageHero
        title="Civil"
        subtitle="Construcción & Infraestructura"
        backgroundImage="https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2070"
      />

      <SolutionDetail 
        title="Nuestras soluciones civiles"
        solutions={civilSolutions}
      />

      <Footer />
    </main>
  );
}
