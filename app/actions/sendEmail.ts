'use server';

// Resend functionality temporarily disabled for deployment
// import { Resend } from 'resend';
// const resend = new Resend(process.env.RESEND_API_KEY);

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

    // Log the form data for debugging (instead of sending email)
    console.log('Contact form submission:', {
      nombre,
      email,
      empresa,
      asunto,
      mensaje: mensaje.substring(0, 50) + '...'
    });

    // Email sending temporarily disabled
    // await resend.emails.send({
    //   from: 'Suplinaca Website <onboarding@resend.dev>',
    //   to: 'santiagodrm@gmail.com',
    //   subject: `Nuevo contacto: ${asunto}`,
    //   replyTo: email,
    //   html: `...`
    // });

    return { 
      success: true, 
      message: '¡Mensaje recibido! Te contactaremos pronto.' 
    };
  } catch (error) {
    console.error('Error processing form:', error);
    return { 
      success: false, 
      error: 'Hubo un error al procesar el mensaje. Por favor intenta nuevamente.' 
    };
  }
}
