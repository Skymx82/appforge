'use client';

import { useRouter } from 'next/navigation';
import { CheckIcon } from '@heroicons/react/24/solid';

const services = [
  {
    title: 'Site Web',
    features: [
      'Site vitrine responsive',
      'Design moderne',
      'Formulaire de contact',
      'SEO de base',
      'Hébergement inclus'
    ],
    price: {
      initial: '999€ HT',
      monthly: '29€ HT/mois'
    }
  },
  {
    title: 'E-commerce',
    features: [
      'Tout ce qui est inclus dans Site Web',
      'Boutique en ligne',
      'Paiement sécurisé',
      'Gestion des stocks',
      'Support téléphone'
    ],
    price: {
      initial: '2 499€ HT',
      monthly: '49€ HT/mois'
    }
  },
  {
    title: 'App Mobile',
    features: [
      'Application native',
      'Design personnalisé',
      'Notifications push',
      'Support technique',
      'Publication stores'
    ],
    price: {
      initial: 'À partir de 7 500€ HT',
      monthly: '150€ HT/mois'
    },
    highlighted: true
  },
  {
    title: 'App Premium',
    features: [
      'Tout ce qui est inclus dans App Mobile',
      'Design premium',
      'Paiement intégré',
      'Support prioritaire',
      'Multi-plateformes'
    ],
    price: {
      initial: 'À partir de 15 000€ HT',
      monthly: '250€ HT/mois'
    }
  }
];

const additionalOptions = [
  { 
    title: 'SMS', 
    price: '0,05€ HT/unité',
    description: 'Envoi de SMS à vos clients'
  },
  { 
    title: 'Développement', 
    price: '75€ HT/heure',
    description: 'Ajout de fonctionnalités'
  }
];

export default function ServicesSection() {
  const router = useRouter();

  return (
    <div id="services" className="container mx-auto px-4 md:px-6 py-16 md:py-24">
      <div className="text-center mb-12">
        <h3 className="text-3xl font-bold text-white mb-4">Autres Solutions</h3>
        <p className="text-gray-400">
          Découvrez nos offres standards pour les projets plus complexes
        </p>
        <p className="text-sm text-primary mt-2">
          Vous êtes une petite entreprise ? Découvrez notre programme adaptatif ci-dessus
        </p>
      </div>

      {/* Grille des services */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
        {services.map((service, index) => (
          <div
            key={index}
            className={`
              p-6 rounded-lg border transition-colors
              ${service.highlighted
                ? 'border-primary/30 bg-primary/5'
                : 'border-gray-800 bg-gray-900/50'}
            `}
          >
            <h4 className="text-xl font-bold text-white mb-4">{service.title}</h4>
            <div className="mb-6">
              <div className="text-2xl font-bold text-white">{service.price.initial}</div>
              <div className="text-sm text-gray-400">+ {service.price.monthly}</div>
            </div>
            <ul className="space-y-3 mb-6">
              {service.features.map((feature, featureIndex) => (
                <li key={featureIndex} className="flex items-start">
                  <CheckIcon className="w-5 h-5 text-primary shrink-0 mr-2 mt-0.5" />
                  <span className="text-gray-300">{feature}</span>
                </li>
              ))}
            </ul>
            <button
              onClick={() => router.push('/contact')}
              className="w-full px-4 py-2 bg-primary/10 hover:bg-primary/20 text-primary border border-primary/20 rounded-lg transition-colors"
            >
              Commencer un projet
            </button>
          </div>
        ))}
      </div>

      {/* Options additionnelles */}
      <div className="mt-16">
        <h4 className="text-2xl font-bold text-white mb-8 text-center">Options additionnelles</h4>
        <div className="grid sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
          {additionalOptions.map((option, index) => (
            <div
              key={index}
              className="p-6 rounded-lg border border-gray-800 bg-gray-900/50"
            >
              <h5 className="text-lg font-bold text-white mb-2">{option.title}</h5>
              <p className="text-gray-400 mb-2">{option.description}</p>
              <div className="text-primary font-bold">{option.price}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
