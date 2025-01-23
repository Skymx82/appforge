'use client';

import { useRouter } from 'next/navigation';
import { CheckIcon } from '@heroicons/react/24/solid';

const services = [
  {
    title: 'Démarrage',
    features: [
      'Carte de fidélité simple',
      'Notifications (100/mois)',
      'Design de base',
      'Support par email',
      'Hébergement inclus'
    ],
    price: {
      initial: '1 500€ HT',
      monthly: '50€ HT/mois'
    }
  },
  {
    title: 'Essentielle',
    features: [
      'Tout ce qui est inclus dans Démarrage',
      'Notifications illimitées',
      'Design personnalisé',
      'Support téléphone',
      'Statistiques clients'
    ],
    price: {
      initial: '3 000€ HT',
      monthly: '90€ HT/mois'
    }
  },
  {
    title: 'Avancée',
    features: [
      'Tout ce qui est inclus dans Essentielle',
      'Design premium',
      'Support prioritaire',
      'Promotions automatiques',
      'Paiement intégré'
    ],
    price: {
      initial: '5 000€ HT',
      monthly: '150€ HT/mois'
    },
    highlighted: true
  },
  {
    title: 'Premium',
    features: [
      'Tout ce qui est inclus dans Avancée',
      'Design sur mesure',
      'Support dédié',
      'Multi-boutiques',
      'Système de réservation'
    ],
    price: {
      initial: '7 000€ HT',
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
        <h3 className="text-3xl font-bold text-white mb-4">Nos Offres</h3>
        <p className="text-gray-400">
          Des solutions adaptées à tous les budgets
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
              <div className="text-2xl font-bold text-primary mb-1">
                {service.price.initial}
              </div>
              <div className="text-sm text-gray-400">
                + {service.price.monthly}
              </div>
            </div>
            <ul className="space-y-3">
              {service.features.map((feature, featureIndex) => (
                <li key={featureIndex} className="flex items-start">
                  <CheckIcon className="w-5 h-5 text-primary shrink-0 mt-0.5 mr-3" />
                  <span className="text-gray-300">{feature}</span>
                </li>
              ))}
            </ul>
            <button
              onClick={() => router.push('/contact')}
              className={`
                w-full mt-6 px-4 py-2 rounded-lg font-medium transition-colors
                ${service.highlighted
                  ? 'bg-primary text-white hover:bg-primary/90'
                  : 'bg-gray-800 text-white hover:bg-gray-700'}
              `}
            >
              Choisir cette offre
            </button>
          </div>
        ))}
      </div>

      {/* Options additionnelles */}
      <div className="mt-16">
        <h4 className="text-2xl font-bold text-white mb-8 text-center">Options additionnelles</h4>
        <div className="grid sm:grid-cols-2 gap-6">
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
