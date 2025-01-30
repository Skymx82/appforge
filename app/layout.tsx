import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import { Analytics } from "@vercel/analytics/react";
import './globals.css';

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  preload: true,
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#000000',
};

export const metadata: Metadata = {
  metadataBase: new URL('https://www.appforge-tech.fr'),
  title: {
    default: 'AppForge | Création de Sites Web Professionnels à Toulouse',
    template: '%s | AppForge',
  },
  description: 'Expert en création de sites web à Toulouse. Développement sur mesure, prix adaptés aux PME. Devis gratuit en 2 minutes. Plus de 10 ans d\'expérience en développement web.',
  keywords: [
    'création site web Toulouse',
    'développeur web Toulouse',
    'agence web Toulouse',
    'prix site web Toulouse',
    'développement web Toulouse',
    'site web professionnel',
    'site internet entreprise Toulouse'
  ],
  icons: {
    icon: '/logo.jpeg',
    shortcut: '/logo.jpeg',
    apple: '/logo.jpeg',
    other: {
      rel: 'apple-touch-icon-precomposed',
      url: '/logo.jpeg',
    },
  },
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: 'https://www.appforge-tech.fr',
    siteName: 'AppForge',
    title: 'AppForge | N°1 de la Création de Sites Web à Toulouse',
    description: '🏆 Expert en création de sites web professionnels à Toulouse. Prix adaptés à votre CA, développement sur mesure, maintenance incluse.',
    images: [
      {
        url: '/logo.jpeg',
        width: 800,
        height: 800,
        alt: 'AppForge - Création de Sites Web à Toulouse',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AppForge | Création Sites Web Toulouse',
    description: 'Votre Site Web Professionnel à Prix Juste 🚀 Développement sur mesure à Toulouse',
    images: ['/logo.jpeg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'Gxmq_Akgz7nZUFiRYpRy_gQTiHYCpLVSJdTzAvMPctg',
  },
  alternates: {
    canonical: 'https://www.appforge-tech.fr',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body className={inter.className}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
