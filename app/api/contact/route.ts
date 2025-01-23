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

export async function POST(req: Request) {
  try {
    if (req.method !== 'POST') {
      return NextResponse.json(
        { error: 'Méthode non autorisée' },
        { status: 405 }
      );
    }

    const data = await req.json();
    
    // Validation des champs requis
    if (!data.name?.trim()) {
      return NextResponse.json(
        { error: 'Le nom est requis' },
        { status: 400 }
      );
    }

    if (!data.email?.trim()) {
      return NextResponse.json(
        { error: 'L\'email est requis' },
        { status: 400 }
      );
    }

    if (!validateEmail(data.email)) {
      return NextResponse.json(
        { error: 'Format d\'email invalide' },
        { status: 400 }
      );
    }

    if (!data.projectType?.trim()) {
      return NextResponse.json(
        { error: 'Le type de projet est requis' },
        { status: 400 }
      );
    }

    if (!data.description?.trim()) {
      return NextResponse.json(
        { error: 'La description du projet est requise' },
        { status: 400 }
      );
    }

    // Vérification du CAPTCHA
    if (!data.captchaToken) {
      return NextResponse.json(
        { error: 'Le CAPTCHA est requis' },
        { status: 400 }
      );
    }

    const isCaptchaValid = await verifyCaptcha(data.captchaToken);
    if (!isCaptchaValid) {
      return NextResponse.json(
        { error: 'CAPTCHA invalide ou expiré' },
        { status: 400 }
      );
    }

    // Vérification des variables d'environnement pour l'email
    if (!process.env.EMAIL_PASSWORD) {
      console.error('EMAIL_PASSWORD non définie');
      return NextResponse.json(
        { error: 'Erreur de configuration du serveur' },
        { status: 500 }
      );
    }

    // Préparer le contenu de l'email avec les nouvelles informations
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

      return NextResponse.json(
        { message: 'Message envoyé avec succès' },
        { status: 200 }
      );
    } catch (error) {
      console.error('Erreur d\'envoi d\'email:', error);
      return NextResponse.json(
        { error: 'Erreur lors de l\'envoi de l\'email' },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error('Erreur générale:', error);
    return NextResponse.json(
      { error: 'Une erreur est survenue' },
      { status: 500 }
    );
  }
}
