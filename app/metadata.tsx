import { Metadata } from 'next';

const defaultKeywords = [
  // Mots-clés principaux
  'développement web',
  'création application web',
  'développeur web Toulouse',
  'agence web Toulouse',
  'création site internet',
  'développement application',
  'application sur mesure',
  'développement logiciel',
  
  // Services
  'développement frontend',
  'développement backend',
  'applications React',
  'applications Next.js',
  'site web responsive',
  'site web professionnel',
  'site web entreprise',
  'site vitrine',
  'site e-commerce',
  'application mobile',
  'progressive web app',
  'PWA',
  
  // Technologies
  'React',
  'Next.js',
  'TypeScript',
  'JavaScript',
  'Tailwind CSS',
  'Node.js',
  'API REST',
  'base de données',
  'cloud computing',
  'hébergement web',
  
  // Expertise
  'expert développement web',
  'développeur fullstack',
  'consultant IT',
  'conseil digital',
  'transformation digitale',
  'solutions numériques',
  
  // Secteurs
  'startup',
  'PME',
  'entreprise',
  'commerce',
  'industrie',
  'service',
  
  // Géolocalisation
  'Toulouse',
  'Occitanie',
  'France',
  
  // Qualités
  'professionnel',
  'sur mesure',
  'qualité',
  'innovation',
  'performance',
  'sécurité',
  'fiabilité',
  'maintenance',
  'support technique'
];

export const defaultMetadata: Metadata = {
  title: 'AppForge | Développement Web & Applications Sur Mesure à Toulouse',
  description: 'AppForge, votre partenaire en développement web et création d\'applications sur mesure à Toulouse. Experts en React, Next.js et solutions digitales innovantes pour entreprises et startups.',
  keywords: defaultKeywords.join(', '),
  authors: [{ name: 'AppForge', url: 'https://appforge.fr' }],
  creator: 'AppForge',
  publisher: 'AppForge',
  robots: 'index, follow',
  alternates: {
    canonical: 'https://appforge.fr',
  },
  openGraph: {
    type: 'website',
    url: 'https://appforge.fr',
    title: 'AppForge | Développement Web & Applications Sur Mesure',
    description: 'Création d\'applications web professionnelles et sites internet sur mesure. Expertise en React, Next.js et solutions digitales innovantes.',
    siteName: 'AppForge',
    locale: 'fr_FR',
    images: [{
      url: '/og-image.jpg',
      width: 1200,
      height: 630,
      alt: 'AppForge - Développement Web Professionnel',
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AppForge | Développement Web & Applications Sur Mesure',
    description: 'Création d\'applications web professionnelles et sites internet sur mesure. Expertise en React, Next.js et solutions digitales innovantes.',
    images: ['/twitter-image.jpg'],
    creator: '@AppForge',
  },
  other: {
    'google-site-verification': 'VOTRE_CODE_VERIFICATION',
    'msvalidate.01': 'VOTRE_CODE_BING',
  },
};

// Métadonnées spécifiques pour la page d'accueil
export const homeMetadata: Metadata = {
  ...defaultMetadata,
  title: 'AppForge | Création d\'Applications Web Sur Mesure à Toulouse',
  description: 'Développement d\'applications web professionnelles et sites internet sur mesure à Toulouse. Experts en React, Next.js et solutions digitales innovantes.',
};

// Métadonnées pour la page de contact
export const contactMetadata: Metadata = {
  ...defaultMetadata,
  title: 'Contact | AppForge - Développeur Web à Toulouse',
  description: 'Contactez AppForge pour vos projets de développement web et d\'applications sur mesure à Toulouse. Devis gratuit et conseil personnalisé.',
};

// Métadonnées pour la page de services
export const servicesMetadata: Metadata = {
  ...defaultMetadata,
  title: 'Services | AppForge - Solutions Web Professionnelles',
  description: 'Découvrez nos services de développement web, création de sites internet et d\'applications sur mesure. Solutions adaptées à vos besoins professionnels.',
};

// Métadonnées pour la page de projets
export const projectsMetadata: Metadata = {
  ...defaultMetadata,
  title: 'Projets | AppForge - Réalisations Web',
  description: 'Découvrez nos réalisations en développement web et création d\'applications. Portfolio de sites internet et applications sur mesure.',
};

// Structure de données JSON-LD pour l'organisation
export const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'AppForge',
  url: 'https://appforge.fr',
  logo: 'https://appforge.fr/logo.png',
  description: 'AppForge est une entreprise de développement web spécialisée dans la création d\'applications et de sites internet sur mesure à Toulouse.',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Toulouse',
    addressRegion: 'Occitanie',
    addressCountry: 'FR'
  },
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+33679336812',
    email: 'appforge.owner@gmail.com',
    contactType: 'customer service'
  },
  sameAs: [
    'https://twitter.com/AppForge',
    'https://www.linkedin.com/company/appforge',
    'https://github.com/AppForge'
  ]
};
