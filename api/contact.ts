import type { VercelRequest, VercelResponse } from '@vercel/node';
import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'appforge.owner@gmail.com',
    pass: process.env.EMAIL_PASSWORD
  }
});

async function verifyCaptcha(token: string) {
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

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Méthode non autorisée' });
  }

  try {
    const { name, email, phone, company, projectType, description, features, budget, timeline, captchaToken } = req.body;

    // Validation des champs requis
    if (!name || !email || !projectType || !description) {
      return res.status(400).json({ error: 'Champs requis manquants' });
    }

    // Validation de l'email
    if (!validateEmail(email)) {
      return res.status(400).json({ error: 'Email invalide' });
    }

    // Vérification du CAPTCHA
    if (!captchaToken) {
      return res.status(400).json({ error: 'CAPTCHA requis' });
    }

    const isCaptchaValid = await verifyCaptcha(captchaToken);
    if (!isCaptchaValid) {
      return res.status(400).json({ error: 'CAPTCHA invalide' });
    }

    // Construction du contenu de l'email
    const emailContent = `
      Nouveau contact depuis le site AppForge :
      
      Nom: ${name}
      Email: ${email}
      Téléphone: ${phone || 'Non renseigné'}
      Entreprise: ${company || 'Non renseigné'}
      
      Type de projet: ${projectType}
      Description: ${description}
      
      Budget: ${budget || 'Non renseigné'}
      Délai souhaité: ${timeline || 'Non renseigné'}
      
      Fonctionnalités souhaitées:
      ${features ? features.join('\n') : 'Aucune fonctionnalité spécifiée'}
    `;

    // Envoi de l'email
    await transporter.sendMail({
      from: 'appforge.owner@gmail.com',
      to: 'appforge.owner@gmail.com',
      subject: `Nouvelle demande de contact - ${name}`,
      text: emailContent,
    });

    return res.status(200).json({ message: 'Message envoyé avec succès' });
  } catch (error) {
    console.error('Erreur lors de l\'envoi du message:', error);
    return res.status(500).json({ error: 'Erreur lors de l\'envoi du message' });
  }
}
