export default function JsonLd() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'AppForge',
    url: 'https://www.appforge-tech.fr',
    logo: 'https://www.appforge-tech.fr/logo.jpeg',
    description: 'Expert en création d\'applications web et mobiles sur mesure. Solutions innovantes pour votre entreprise.',
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'FR',
      addressLocality: 'France'
    },
    sameAs: [
      'https://twitter.com/appforge',
      'https://www.linkedin.com/company/appforge-inc',
      'https://github.com/appforge'
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '',
      contactType: 'customer service',
      areaServed: 'FR',
      availableLanguage: ['French', 'English'],
      email: 'contact@appforge.ovh'
    },
    offers: {
      '@type': 'Offer',
      description: 'Développement d\'applications web et mobiles sur mesure'
    },
    serviceType: [
      'Développement Web',
      'Applications Mobiles',
      'Sites Web Professionnels',
      'Solutions Sur Mesure'
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
