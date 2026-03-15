import { Metadata } from 'next';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';
import PageHero from '../../components/PageHero';
import SolutionDetail from '../../components/SolutionDetail';

export const metadata: Metadata = {
  title: 'Mecánica - Soluciones Suplimeca',
  description: 'Soluciones mecánicas: fabricación y suministro de equipos industriales.',
  keywords: 'mecánica, fabricación, suministro, industrial, venezuela',
};

export default function MecanicaPage() {
  const mecanicaSolutions = [
    { 
      name: 'Meter Run',
      description: 'Suplinaca se especializa en suministro de componentes y fabricación de carreras de medición personalizadas para todos nuestros modelos de montaje de orificios y una variedad de otras aplicaciones de medición. Ofrecemos nuestros servicios desde 2" hasta 30" bien sea de alta o baja presión, servicio húmedo, seco o corrosivo, podemos montar un paquete de medidas que cumpla con las especificaciones y requerimientos del cliente. Los Meter Run se pueden diseñar según normas ANSI y API para varias clases de presión y distintos tamaños de tubería.',
      image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?q=80&w=2070'
    },
    { 
      name: 'Bridas',
      description: 'Ofrecemos una amplia gama de bridas industriales en diferentes materiales, tamaños y especificaciones para aplicaciones de alta presión. Nuestras bridas cumplen con los estándares ANSI, ASME y API.',
      image: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?q=80&w=2070'
    },
    { 
      name: 'Múltiples de producción',
      description: 'Diseñamos y fabricamos múltiples de producción personalizados para la industria petrolera, garantizando eficiencia en la distribución y control de fluidos.',
      image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=2070'
    },
    { 
      name: 'Fittings',
      description: 'Suministramos fittings de alta calidad en diversos materiales y configuraciones para satisfacer las necesidades de la industria. Incluye codos, tees, reductores y más.',
      image: 'https://images.unsplash.com/photo-1581092918484-8623f0d0e55e?q=80&w=2070'
    },
    { 
      name: 'Casing & Tubing',
      description: 'Proveemos tubería de revestimiento y producción para operaciones petroleras, cumpliendo con los más altos estándares de calidad y resistencia.',
      image: 'https://images.unsplash.com/photo-1581092162384-8987c1d64718?q=80&w=2070'
    },
    { 
      name: 'Butt Weld Fittings',
      description: 'Fittings para soldadura a tope en acero al carbono y acero inoxidable, ideales para aplicaciones de alta presión y temperatura.',
      image: 'https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?q=80&w=2070'
    },
    { 
      name: 'Sucker Rod',
      description: 'Varillas de bombeo de alta resistencia para sistemas de extracción artificial en la industria petrolera.',
      image: 'https://images.unsplash.com/photo-1581092162167-e90d4b76cd67?q=80&w=2070'
    },
    { 
      name: 'Iron, Bronze and Galvanized, Fittings & Branch Connections',
      description: 'Amplia variedad de conexiones en hierro, bronce y galvanizado para sistemas de tuberías industriales y comerciales.',
      image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=2070'
    },
    { 
      name: 'Válvulas',
      description: 'Suministro de válvulas industriales de diversos tipos: compuerta, globo, bola, mariposa, retención y control, en diferentes materiales y especificaciones.',
      image: 'https://images.unsplash.com/photo-1581092334651-ddf26d9a09d0?q=80&w=2070'
    },
  ];

  return (
    <main className="min-h-screen">
      <Navigation />
      
      <PageHero 
        title="Mecánica"
        subtitle="Fabricación & Suministro"
        backgroundImage="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070"
      />

      <SolutionDetail 
        title="Nuestras soluciones mecánicas"
        solutions={mecanicaSolutions}
      />

      <Footer />
    </main>
  );
}
