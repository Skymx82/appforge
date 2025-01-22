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
    const response = await fetch('https://www.google.com/recaptcha/api/siteverify', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: `secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${token}`,
    });

    const data = await response.json();
    console.log('Réponse CAPTCHA:', data);
    return data.success;
  } catch (error) {
    console.error('Erreur lors de la vérification du CAPTCHA:', error);
    return false;
  }
}

export async function POST(req: Request) {
  try {
    const data = await req.json();
    console.log('Données reçues:', data);
    
    // Vérifier le CAPTCHA
    if (!data.captchaToken) {
      console.error('Token CAPTCHA manquant');
      return NextResponse.json(
        { error: 'Token CAPTCHA manquant' },
        { status: 400 }
      );
    }

    const isCaptchaValid = await verifyCaptcha(data.captchaToken);
    if (!isCaptchaValid) {
      console.error('CAPTCHA invalide');
      return NextResponse.json(
        { error: 'CAPTCHA invalide' },
        { status: 400 }
      );
    }

    // Formatage des données pour l'email
    const emailContent = `
      Nouvelle demande de contact:
      
      Nom: ${data.name || 'Non renseigné'}
      Email: ${data.email || 'Non renseigné'}
      Téléphone: ${data.phone || 'Non renseigné'}
      Entreprise: ${data.company || 'Non renseigné'}
      Budget: ${data.budget || 'Non renseigné'}
      Délai: ${data.timeline || 'Non renseigné'}
      Type de projet: ${data.projectType || 'Non renseigné'}
      Description: ${data.description || 'Non renseigné'}
      Fonctionnalités: ${(data.features || []).join(', ') || 'Aucune sélectionnée'}
      
      Date de la demande: ${new Date().toLocaleString('fr-FR')}
    `;

    console.log('Tentative d\'envoi d\'email avec le contenu:', emailContent);

    // Envoi de l'email
    const info = await transporter.sendMail({
      from: 'appforge.owner@gmail.com',
      to: 'appforge.owner@gmail.com',
      subject: `Nouvelle demande de contact - ${data.name || 'Anonyme'}`,
      text: emailContent
    });

    console.log('Email envoyé avec succès:', info);
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Erreur détaillée lors de l\'envoi de l\'email:', error);
    return NextResponse.json(
      { error: 'Erreur lors de l\'envoi du message', details: error instanceof Error ? error.message : 'Erreur inconnue' },
      { status: 500 }
    );
  }
}
