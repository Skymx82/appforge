import { Handler } from '@netlify/functions';
import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'appforge.owner@gmail.com',
    pass: process.env.EMAIL_PASSWORD
  }
});

async function verifyCaptcha(token: string): Promise<boolean> {
  try {
    if (!process.env.RECAPTCHA_SECRET_KEY) {
      console.error('RECAPTCHA_SECRET_KEY non définie');
      return false;
    }

    const url = new URL('https://www.google.com/recaptcha/api/siteverify');
    const params = new URLSearchParams({
      secret: process.env.RECAPTCHA_SECRET_KEY,
      response: token
    });

    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: params.toString()
    });

    if (!response.ok) {
      console.error('Erreur reCAPTCHA:', response.status, response.statusText);
      return false;
    }

    const data = await response.json();
    
    if (!data.success) {
      console.error('Échec reCAPTCHA:', data['error-codes']);
      return false;
    }

    return true;
  } catch (error) {
    console.error('Erreur lors de la vérification du CAPTCHA:', error);
    return false;
  }
}

function validateEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

export const handler: Handler = async (event) => {
  // Vérifier la méthode HTTP
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: 'Méthode non autorisée' })
    };
  }

  try {
    const data = JSON.parse(event.body || '{}');

    // Validation des champs requis
    if (!data.name?.trim()) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: 'Le nom est requis' })
      };
    }

    if (!data.email?.trim()) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: 'L\'email est requis' })
      };
    }

    if (!validateEmail(data.email)) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: 'Format d\'email invalide' })
      };
    }

    if (!data.projectType?.trim()) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: 'Le type de projet est requis' })
      };
    }

    if (!data.description?.trim()) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: 'La description du projet est requise' })
      };
    }

    // Vérification du CAPTCHA
    if (!data.captchaToken) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: 'Le CAPTCHA est requis' })
      };
    }

    const isCaptchaValid = await verifyCaptcha(data.captchaToken);
    if (!isCaptchaValid) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: 'CAPTCHA invalide ou expiré' })
      };
    }

    // Vérification des variables d'environnement pour l'email
    if (!process.env.EMAIL_PASSWORD) {
      console.error('EMAIL_PASSWORD non définie');
      return {
        statusCode: 500,
        body: JSON.stringify({ error: 'Erreur de configuration du serveur' })
      };
    }

    // Préparer le contenu de l'email
    const emailContent = `
      Nouvelle demande de contact:
      
      Informations personnelles:
      ------------------------
      Nom: ${data.name}
      Email: ${data.email}
      Téléphone: ${data.phone || 'Non renseigné'}
      Entreprise: ${data.company || 'Non renseigné'}
      
      Détails du projet:
      ----------------
      Type de projet: ${data.projectType}
      Budget estimé: ${data.budget || 'Non renseigné'}
      Délai souhaité: ${data.timeline || 'Non renseigné'}
      Description: ${data.description}
      
      Fonctionnalités souhaitées:
      ------------------------
      ${data.features?.length > 0 ? data.features.join('\n- ') : 'Aucune fonctionnalité sélectionnée'}
    `.trim();

    // Envoyer l'email
    try {
      await transporter.sendMail({
        from: '"AppForge Contact" <appforge.owner@gmail.com>',
        to: 'appforge.owner@gmail.com',
        subject: `Nouvelle demande de contact - ${data.name}`,
        text: emailContent,
      });

      return {
        statusCode: 200,
        body: JSON.stringify({ message: 'Message envoyé avec succès' })
      };
    } catch (error) {
      console.error('Erreur d\'envoi d\'email:', error);
      return {
        statusCode: 500,
        body: JSON.stringify({ error: 'Erreur lors de l\'envoi de l\'email' })
      };
    }
  } catch (error) {
    console.error('Erreur générale:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Une erreur est survenue' })
    };
  }
};
