'use client';

import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { 
  BuildingStorefrontIcon, 
  ArrowRightIcon,
  CheckIcon,
  ChartBarIcon,
  CurrencyEuroIcon,
  RocketLaunchIcon
} from '@heroicons/react/24/outline';

const features = [
  {
    title: 'Site Pro',
    description: 'Le même site pro pour tous',
    icon: BuildingStorefrontIcon
  },
  {
    title: 'Prix Mini',
    description: 'À partir de 500€',
    icon: CurrencyEuroIcon
  },
  {
    title: 'Sans Surprise',
    description: '5% de votre CA, c\'est tout',
    icon: ChartBarIcon
  },
  {
    title: 'Rapide',
    description: 'En ligne en quelques jours',
    icon: RocketLaunchIcon
  }
];

const examples = [
  {
    revenue: '10 000€',
    price: '500€',
    note: 'Prix minimum'
  },
  {
    revenue: '20 000€',
    price: '1 000€',
    note: 'Prix adapté'
  },
  {
    revenue: '50 000€',
    price: '2 500€',
    note: 'Prix adapté'
  }
];

const included = [
  'Design moderne personnalisé',
  'Adapté mobile et tablette',
  'Hébergement inclus',
  'Nom de domaine offert',
  'Emails professionnels',
  'Site sécurisé (HTTPS)',
  'Optimisation Google',
  'Maintenance incluse',
  'Support réactif',
  'Formation incluse'
];

export default function SmallBusinessSection() {
  const router = useRouter();

  return (
    <section className="py-16 md:py-24 bg-gray-950" id="small-business">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            viewport={{ once: true, margin: "-100px" }}
            className="bg-primary/10 text-primary px-4 py-1 rounded-full text-sm mb-6 inline-block"
          >
            Un Site Web Pour Tous
          </motion.span>
          <motion.h3
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.1 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-3xl font-bold text-white mb-4"
          >
            Votre Site Web Pro<br />Au Prix Qui Vous Convient
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.2 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-gray-400 max-w-2xl mx-auto"
          >
            Un vrai site professionnel ne devrait pas coûter une fortune.
            C'est pourquoi nous adaptons nos prix à vos moyens.
          </motion.p>
        </div>

        {/* Grille des caractéristiques */}
        <div className="grid md:grid-cols-4 gap-6 mb-16">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-100px" }}
              className="bg-gray-900/50 backdrop-blur-sm p-6 rounded-lg border border-gray-800/50 text-center"
            >
              <feature.icon className="w-8 h-8 text-primary mx-auto mb-4" />
              <h4 className="text-lg font-bold text-white mb-2">{feature.title}</h4>
              <p className="text-gray-400">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Exemples de prix */}
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
            viewport={{ once: true, margin: "-100px" }}
            className="bg-gray-900/50 backdrop-blur-sm p-8 rounded-lg border border-gray-800/50"
          >
            <h4 className="text-2xl font-bold text-white mb-6">Exemples Concrets</h4>
            <div className="space-y-6">
              {examples.map((example, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-4 rounded-lg bg-gray-800/50 border border-gray-700/50"
                >
                  <div>
                    <div className="text-sm text-gray-400 mb-1">Si vous gagnez</div>
                    <div className="text-lg font-bold text-white">{example.revenue}</div>
                  </div>
                  <div className="text-right">
                    <div className="text-xl font-bold text-primary">{example.price}</div>
                    <div className="text-sm text-gray-400">{example.note}</div>
                  </div>
                </div>
              ))}
              <button
                onClick={() => router.push('/calculateur')}
                className="w-full mt-4 bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors flex items-center justify-center space-x-2"
              >
                <span>Calculer mon prix</span>
                <ArrowRightIcon className="w-4 h-4" />
              </button>
            </div>
          </motion.div>

          {/* Ce qui est inclus */}
          <motion.div
            initial={{ opacity: 0, x: 10 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
            viewport={{ once: true, margin: "-100px" }}
            className="bg-gray-900/50 backdrop-blur-sm p-8 rounded-lg border border-gray-800/50"
          >
            <h4 className="text-2xl font-bold text-white mb-6">Tout Est Compris</h4>
            <p className="text-gray-400 mb-6">
              Quel que soit le prix que vous payez, vous avez accès à toutes ces fonctionnalités :
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {included.map((feature, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckIcon className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-gray-300">{feature}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Call to action */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mt-16 text-center"
        >
          <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
            Découvrez en 30 secondes combien coûterait votre site web professionnel.
            C'est simple, transparent, et sans engagement.
          </p>
          <button
            onClick={() => router.push('/calculateur')}
            className="px-8 py-4 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors inline-flex items-center space-x-2"
          >
            <span>Commencer mon projet</span>
            <ArrowRightIcon className="w-5 h-5" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
