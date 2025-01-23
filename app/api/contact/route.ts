import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// Configuration du transporteur email
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

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, company, projectType, description, features, budget, timeline, captchaToken } = body;

    // Validation des champs requis
    if (!name || !email || !projectType || !description) {
      return NextResponse.json(
        { error: 'Champs requis manquants' },
        { status: 400 }
      );
    }

    // Validation de l'email
    if (!validateEmail(email)) {
      return NextResponse.json(
        { error: 'Email invalide' },
        { status: 400 }
      );
    }

    // Vérification du CAPTCHA
    if (!captchaToken) {
      return NextResponse.json(
        { error: 'CAPTCHA requis' },
        { status: 400 }
      );
    }

    const isCaptchaValid = await verifyCaptcha(captchaToken);
    if (!isCaptchaValid) {
      return NextResponse.json(
        { error: 'CAPTCHA invalide' },
        { status: 400 }
      );
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

    return NextResponse.json(
      { message: 'Message envoyé avec succès' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Erreur lors de l\'envoi du message:', error);
    return NextResponse.json(
      { error: 'Erreur lors de l\'envoi du message' },
      { status: 500 }
    );
  }
}
