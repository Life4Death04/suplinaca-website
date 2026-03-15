"use client";

import FormInput from './FormInput';
import FormTextarea from './FormTextarea';

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
          <FormInput
            label="Nombre"
            id="nombre"
            name="nombre"
            type="text"
            variant="light"
          />

          <FormInput
            label="Email"
            id="email"
            name="email"
            type="email"
            variant="light"
          />

          <FormTextarea
            label="Mensaje"
            id="mensaje"
            name="mensaje"
            rows={4}
            variant="light"
          />

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
