'use server';

import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendContactEmail(formData: FormData) {
  try {
    const nombre = formData.get('nombre') as string;
    const email = formData.get('email') as string;
    const mensaje = formData.get('mensaje') as string;
    const empresa = formData.get('empresa') as string || 'No especificada';
    const asunto = formData.get('asunto') as string || 'Contacto desde web';

    // Validate required fields
    if (!nombre || !email || !mensaje) {
      return { 
        success: false, 
        error: 'Por favor completa todos los campos requeridos' 
      };
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return { 
        success: false, 
        error: 'Por favor ingresa un email válido' 
      };
    }

    // Send email using Resend
    await resend.emails.send({
      from: 'Suplinaca Website <onboarding@resend.dev>', // This is Resend's test email
      to: 'santiagodrm@gmail.com',
      subject: `Nuevo contacto: ${asunto}`,
      replyTo: email,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #2563eb;">Nuevo mensaje de contacto</h2>
          <div style="background-color: #f3f4f6; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong>Nombre:</strong> ${nombre}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Empresa:</strong> ${empresa}</p>
            <p><strong>Asunto:</strong> ${asunto}</p>
          </div>
          <div style="background-color: #ffffff; padding: 20px; border-left: 4px solid #2563eb; margin: 20px 0;">
            <h3 style="margin-top: 0;">Mensaje:</h3>
            <p style="white-space: pre-wrap;">${mensaje}</p>
          </div>
          <p style="color: #6b7280; font-size: 12px; margin-top: 30px;">
            Este mensaje fue enviado desde el formulario de contacto de Suplinaca.
          </p>
        </div>
      `,
    });

    return { 
      success: true, 
      message: '¡Mensaje enviado exitosamente! Te contactaremos pronto.' 
    };
  } catch (error) {
    console.error('Error sending email:', error);
    return { 
      success: false, 
      error: 'Hubo un error al enviar el mensaje. Por favor intenta nuevamente.' 
    };
  }
}
