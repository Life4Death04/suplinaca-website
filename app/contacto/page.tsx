import { Metadata } from 'next';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import ContactInfoCard from '../components/ContactInfoCard';
import SolutionHero from '../components/SolutionHero';

export const metadata: Metadata = {
  title: 'Contacto - Suplimeca | Contáctanos',
  description: 'Ponte en contacto con Suplimeca. Oficina Central en Maracaibo Edo Zulia. Email: info@suplinaca.com, Teléfono: +58 261 7420228',
  keywords: 'contacto, suplimeca, maracaibo, zulia, venezuela, email, teléfono, ubicación',
  openGraph: {
    title: 'Contacto - Suplimeca',
    description: 'Nos encantaría saber de ti. Contáctanos para más información.',
    type: 'website',
  },
};

export default function ContactoPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <SolutionHero 
        title="Contacto"
        subtitle="Nos encantaría saber de ti"
        backgroundImage="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070"
      />

      {/* Contact Info Cards */}
      <section className="py-8 lg:py-12 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
            No dude en contactarnos para más información.
          </h2>
          
          <div className="flex flex-wrap justify-center gap-6">
            {/* Oficina Central Card */}
            <ContactInfoCard
              icon={
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              }
              title="Oficina Central"
              content={<p>Maracaibo Edo Zulia</p>}
            />

            {/* WhatsApp Card */}
            <ContactInfoCard
              icon={
                <svg className="w-8 h-8 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
              }
              title="WhatsApp"
              content={
                <a 
                  href="https://wa.me/582617420228" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-blue-600 transition-colors cursor-pointer"
                >
                  +58 261 7420228
                </a>
              }
            />

            {/* Mail Card */}
            <ContactInfoCard
              icon={
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              }
              title="Mail"
              content={
                <a href="mailto:info@suplinaca.com" className="hover:text-blue-600 transition-colors cursor-pointer">
                  info@suplinaca.com
                </a>
              }
            />

            {/* Phone Card */}
            <ContactInfoCard
              icon={
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              }
              title="Llámanos"
              content={
                <a href="tel:+582617420228" className="hover:text-blue-600 transition-colors cursor-pointer">
                  +58 261 7420228
                </a>
              }
            />
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap items-center gap-8">
            {/* Image Side */}
            <div className="flex-1 min-w-[300px]">
              <div 
                className="w-full h-[500px]"
                style={{
                  backgroundImage: 'url(https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070)',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              />
            </div>

            {/* Form Side */}
            <div className="flex-1 min-w-[300px]">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
                Envíanos un mensaje
              </h2>
              <p className="text-gray-600 mb-8">
                Déjanos un mensaje y un representante te estará contactando tan pronto como pueda.
              </p>

              <form className="space-y-6">
                <div className="flex flex-wrap gap-4">
                  <div className="flex-1 min-w-[200px]">
                    <label htmlFor="nombre" className="block text-sm font-medium text-gray-700 mb-2">
                      Nombre
                    </label>
                    <input
                      type="text"
                      id="nombre"
                      name="nombre"
                      placeholder="Nombre"
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 bg-gray-200 placeholder-gray-500"
                    />
                  </div>
                  <div className="flex-1 min-w-[200px]">
                    <label htmlFor="empresa" className="block text-sm font-medium text-gray-700 mb-2">
                      Empresa
                    </label>
                    <input
                      type="text"
                      id="empresa"
                      name="empresa"
                      placeholder="Empresa"
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 bg-gray-200 placeholder-gray-500"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 bg-gray-200 placeholder-gray-500"
                  />
                </div>

                <div>
                  <label htmlFor="asunto" className="block text-sm font-medium text-gray-700 mb-2">
                    Asunto
                  </label>
                  <input
                    type="text"
                    id="asunto"
                    name="asunto"
                    placeholder="Asunto"
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 bg-gray-200 placeholder-gray-500" 
                  />
                </div>

                <div>
                  <label htmlFor="mensaje" className="block text-sm font-medium text-gray-700 mb-2">
                    Mensaje
                  </label>
                  <textarea
                    id="mensaje"
                    name="mensaje"
                    rows={5}
                    placeholder="Mensaje"
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 resize-none bg-gray-200 placeholder-gray-500"
                  />
                </div>

                <button
                  type="submit"
                  className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-md transition-colors"
                >
                  ENVIAR
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="h-[500px] w-full">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3926.6284567890123!2d-71.6408!3d10.6423!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTDCsDM4JzMyLjMiTiA3McKwMzgnMjcuMSJX!5e0!3m2!1sen!2sve!4v1234567890"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Ubicación Suplimeca Maracaibo"
        />
      </section>

      <Footer />
    </main>
  );
}
