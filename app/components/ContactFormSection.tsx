"use client";

export default function ContactFormSection() {
  return (
    <div className="bg-white flex flex-wrap justify-start mt-8 lg:mt-0 lg:flex-col">
      {/* Contact Form Card */}
      <div className="bg-white p-8 rounded-lg shadow-lg flex-1 min-w-[260px]">
        <h3 className="text-2xl font-bold mb-4 text-gray-900">Contáctanos</h3>
        <p className="text-gray-600 mb-6">
          Envíanos un mensaje y con gusto te contactaremos.
        </p>

        <form className="space-y-6">
          <div>
            <label htmlFor="nombre" className="block text-sm font-medium text-gray-700 mb-2">
              Nombre
            </label>
            <input
              type="text"
              id="nombre"
              name="nombre"
              placeholder="Nombre"
              className="w-full px-4 py-3 bg-gray-50 border-0 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
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
              className="w-full px-4 py-3 bg-gray-50 border-0 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
          </div>

          <div>
            <label htmlFor="mensaje" className="block text-sm font-medium text-gray-700 mb-2">
              Mensaje
            </label>
            <textarea
              id="mensaje"
              name="mensaje"
              rows={4}
              placeholder="Mensaje"
              className="w-full px-4 py-3 bg-gray-50 border-0 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 resize-none"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-md transition-colors"
          >
            ENVIAR
          </button>
        </form>
      </div>

      {/* Help Section Below */}
      <div className="bg-gray-900 text-white p-8 rounded-lg flex-1 min-w-[260px]">
        <h3 className="text-xl font-bold mb-4">¿Necesitas más ayuda?</h3>
        <p className="text-gray-300 mb-6 text-sm">
          Tenemos varios medios para que te contactes con nosotros:
        </p>

        <div className="space-y-4">
          {/* Phone */}
          <div className="flex items-center gap-2">
            <div className="w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center flex-shrink-0">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </div>
            <div>
              <p className="text-sm text-gray-400">Servicio al Cliente</p>
              <a href="tel:+582617420228" className="text-lg font-semibold hover:text-blue-600 transition-colors">
                +58 261 7420228
              </a>
            </div>
          </div>

          {/* Email */}
          <div className="flex items-center gap-2">
            <div className="w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center flex-shrink-0">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <div>
              <p className="text-sm text-gray-400">Correo Electrónico</p>
              <a href="mailto:info@suplinaca.com" className="text-lg font-semibold hover:text-blue-600 transition-colors">
                info@suplinaca.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
