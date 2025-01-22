'use client';

import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { CheckIcon, PlusIcon } from '@heroicons/react/24/solid';

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
      'Statistiques clients',
      'Système de points'
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
      'Paiement intégré',
      'Tableau de bord pro'
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
      'Système de réservation',
      'Connexion à votre caisse'
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
    title: 'Emails', 
    price: '0,02€ HT/unité',
    description: 'Campagnes email marketing'
  },
  { 
    title: 'Développement', 
    price: '75€ HT/heure',
    description: 'Ajout de fonctionnalités'
  },
  { 
    title: 'Maintenance', 
    price: '50€ HT/mois',
    description: 'Mises à jour et support'
  }
];

export default function ServicesSection() {
  const router = useRouter();

  return (
    <div id="services" className="container mx-auto px-4 md:px-6 py-16 md:py-24">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
        viewport={{ once: true }}
        className="text-center mb-12 md:mb-16"
      >
        <span className="text-primary/80 font-medium">Nos Offres</span>
        <h3 className="text-3xl md:text-4xl font-bold text-white mt-2 mb-4">
          Solutions sur mesure
        </h3>
      </motion.div>

      {/* Services en scroll horizontal sur mobile */}
      <div className="flex flex-nowrap md:grid md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-12 md:mb-16 overflow-x-auto pb-4 md:pb-0 -mx-4 px-4 md:mx-0 md:px-0 snap-x snap-mandatory">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            viewport={{ once: true }}
            className={`
              flex-none w-[80vw] sm:w-[45vw] md:w-auto
              bg-gray-900 rounded-lg p-6 md:p-8
              border border-gray-800 hover:border-primary/30
              ${service.highlighted 
                ? 'ring-1 ring-primary/50'
                : 'hover:ring-1 hover:ring-primary/20'}
              transition-all snap-center
            `}
          >
            {service.highlighted && (
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <span className="bg-primary text-white text-xs px-3 py-1 rounded-full whitespace-nowrap">
                  Populaire
                </span>
              </div>
            )}
            <div className="text-primary/90 font-medium mb-4">{service.title}</div>
            <div className="text-2xl md:text-3xl font-bold text-white mb-2">
              {service.price.initial}
            </div>
            <div className="text-gray-400 mb-6">{service.price.monthly}</div>
            <ul className="space-y-3 mb-8">
              {service.features.map((feature, featureIndex) => (
                <li key={featureIndex} className="flex items-center text-gray-300">
                  <CheckIcon className="w-5 h-5 text-primary/80 mr-2 flex-shrink-0" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6">
              <a
                href="/contact"
                className="w-full py-2 px-4 bg-primary hover:bg-primary/90 text-white rounded-lg transition-colors"
              >
                Choisir
              </a>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Options additionnelles */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {additionalOptions.map((option, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="bg-gray-900 rounded-lg p-4 border border-gray-800 hover:border-primary/30 transition-colors"
          >
            <div className="flex items-center justify-between">
              <span className="text-gray-300">{option.title}</span>
              <span className="text-primary font-medium">{option.price}</span>
            </div>
            <p className="text-gray-400 text-sm">{option.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
