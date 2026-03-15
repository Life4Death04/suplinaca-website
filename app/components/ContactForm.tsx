"use client";

import { useState } from 'react';
import { sendContactEmail } from '../actions/sendEmail';

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitting(true);
    setMessage(null);

    const formData = new FormData(event.currentTarget);
    const result = await sendContactEmail(formData);

    if (result.success) {
      setMessage({ type: 'success', text: result.message! });
      event.currentTarget.reset();
    } else {
      setMessage({ type: 'error', text: result.error! });
    }

    setIsSubmitting(false);
  }

  return (
    <>
      <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
        Envíanos un mensaje
      </h2>
      <p className="text-gray-600 mb-8">
        Déjanos un mensaje y un representante te estará contactando tan pronto como pueda.
      </p>

      {message && (
        <div
          className={`mb-6 p-4 rounded-md ${
            message.type === 'success'
              ? 'bg-green-50 text-green-800 border border-green-200'
              : 'bg-red-50 text-red-800 border border-red-200'
          }`}
        >
          {message.text}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="flex flex-wrap gap-4">
          <div className="flex-1 min-w-[200px]">
            <label htmlFor="nombre" className="block text-sm font-medium text-gray-700 mb-2">
              Nombre *
            </label>
            <input
              type="text"
              id="nombre"
              name="nombre"
              placeholder="Nombre"
              required
              className="w-full px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 bg-gray-50 placeholder-gray-400"
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
              className="w-full px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 bg-gray-50 placeholder-gray-400"
            />
          </div>
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
            Email *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Email"
            required
            className="w-full px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 bg-gray-50 placeholder-gray-400"
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
            className="w-full px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 bg-gray-50 placeholder-gray-400" 
          />
        </div>

        <div>
          <label htmlFor="mensaje" className="block text-sm font-medium text-gray-700 mb-2">
            Mensaje *
          </label>
          <textarea
            id="mensaje"
            name="mensaje"
            rows={5}
            placeholder="Mensaje"
            required
            className="w-full px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 resize-none bg-gray-50 placeholder-gray-400"
          />
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-md transition-colors disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
        >
          {isSubmitting ? 'ENVIANDO...' : 'ENVIAR'}
        </button>
      </form>
    </>
  );
}
