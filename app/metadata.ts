import { Metadata } from 'next'

export const metadata: Metadata = {
  metadataBase: new URL('https://appforge.vercel.app'),
  title: {
    default: 'AppForge - Création d\'Applications Web Professionnelles',
    template: '%s | AppForge'
  },
  description: 'AppForge - Expert en création d\'applications web et mobiles sur mesure. Développement professionnel, conseil et maintenance. Solutions innovantes pour votre entreprise.',
  keywords: ['développement web', 'applications mobiles', 'site web professionnel', 'développeur Next.js', 'création site internet', 'applications sur mesure', 'développement France'],
  authors: [{ name: 'AppForge Team' }],
  creator: 'AppForge',
  publisher: 'AppForge',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: 'https://appforge.vercel.app',
    title: 'AppForge - Création d\'Applications Web Professionnelles',
    description: 'Expert en création d\'applications web et mobiles sur mesure. Solutions innovantes pour votre entreprise.',
    siteName: 'AppForge',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'AppForge - Applications Web Professionnelles',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AppForge - Applications Web Professionnelles',
    description: 'Expert en création d\'applications web et mobiles sur mesure',
    images: ['/images/twitter-image.jpg'],
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
    // Remplacez cette ligne avec votre code de vérification Google Search Console
    // Exemple: google: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnop'
    google: 'google-site-verification: google0e1b7478e5c1e4a1.html',
  },
  alternates: {
    canonical: 'https://appforge.vercel.app',
  },
}
