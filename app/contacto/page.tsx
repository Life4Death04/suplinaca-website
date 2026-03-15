import { Metadata } from 'next';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

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
      <section 
        className="relative h-[400px] flex items-center justify-center text-white mt-16"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-blue-950/80" />
        <div className="relative z-10 text-center px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Contacto</h1>
          <p className="text-xl md:text-2xl text-gray-200">Nos encantaría saber de ti</p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-8 lg:py-12 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
            No dude en contactarnos para más información.
          </h2>
          
          <div className="flex flex-wrap justify-center gap-6">
            {/* Oficina Central Card */}
            <div className="flex-1 min-w-[280px] max-w-[350px] bg-white rounded-lg shadow-md p-8 text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full border-2 border-orange-500 flex items-center justify-center">
                <svg className="w-8 h-8 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-900">Oficina Central</h3>
              <p className="text-gray-600">Maracaibo Edo Zulia</p>
            </div>

            {/* Mail Card */}
            <div className="flex-1 min-w-[280px] max-w-[350px] bg-white rounded-lg shadow-md p-8 text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full border-2 border-orange-500 flex items-center justify-center">
                <svg className="w-8 h-8 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-900">Mail</h3>
              <a href="mailto:info@suplinaca.com" className="text-gray-600 hover:text-orange-500 transition-colors">
                info@suplinaca.com
              </a>
            </div>

            {/* Phone Card */}
            <div className="flex-1 min-w-[280px] max-w-[350px] bg-white rounded-lg shadow-md p-8 text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full border-2 border-orange-500 flex items-center justify-center">
                <svg className="w-8 h-8 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-900">Llámanos</h3>
              <a href="tel:+582617420228" className="text-gray-600 hover:text-orange-500 transition-colors">
                +58 261 7420228
              </a>
            </div>
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
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 bg-gray-200 placeholder-gray-500"
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
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 bg-gray-200 placeholder-gray-500"
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
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 bg-gray-200 placeholder-gray-500"
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
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 bg-gray-200 placeholder-gray-500" 
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
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 resize-none bg-gray-200 placeholder-gray-500"
                  />
                </div>

                <button
                  type="submit"
                  className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-3 rounded-md transition-colors"
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
