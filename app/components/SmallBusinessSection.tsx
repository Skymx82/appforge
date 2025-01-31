'use client';

import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { 
  BuildingStorefrontIcon, 
  ArrowRightIcon,
  CheckIcon,
  ChartBarIcon,
  CurrencyEuroIcon,
  RocketLaunchIcon,
  SparklesIcon
} from '@heroicons/react/24/outline';

const features = [
  {
    title: 'Prix Adapté',
    description: '5% de votre CA seulement',
    icon: CurrencyEuroIcon,
    detail: 'Un prix juste qui évolue avec votre entreprise'
  },
  {
    title: 'Site Premium',
    description: 'Design pro et moderne',
    icon: SparklesIcon,
    detail: 'La même qualité premium pour tous'
  },
  {
    title: 'Tout Compris',
    description: 'Hébergement et maintenance',
    icon: BuildingStorefrontIcon,
    detail: 'Aucun frais caché, tout est inclus'
  },
  {
    title: 'Rapide',
    description: 'En ligne en 48h',
    icon: RocketLaunchIcon,
    detail: 'De la commande à la mise en ligne'
  }
];

const examples = [
  {
    revenue: '10 000€/an',
    price: '500€',
    note: 'Prix minimum garanti',
    detail: 'Idéal pour débuter'
  },
  {
    revenue: '20 000€/an',
    price: '1 000€',
    note: '5% de votre CA',
    detail: 'Pour les TPE/PME'
  },
  {
    revenue: '50 000€/an',
    price: '2 500€',
    note: '5% de votre CA',
    detail: 'Pour les entreprises établies'
  }
];

const included = [
  {
    title: 'Design & Développement',
    items: [
      'Design moderne sur mesure',
      'Responsive (mobile, tablette)',
      'Animations et interactions',
      'Formulaires de contact'
    ]
  },
  {
    title: 'Hébergement & Domaine',
    items: [
      'Hébergement premium inclus',
      'Nom de domaine offert',
      'Certificat SSL (HTTPS)',
      'Emails professionnels'
    ]
  },
  {
    title: 'SEO & Performance',
    items: [
      'Optimisation Google',
      'Site ultra rapide',
      'Statistiques de visites',
      'Mises à jour régulières'
    ]
  }
];

export default function SmallBusinessSection() {
  const router = useRouter();

  return (
    <section className="py-16 md:py-24 bg-gray-900" id="offre-principale">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            viewport={{ once: true, margin: "-100px" }}
            className="bg-primary/10 text-primary px-6 py-2 rounded-full text-sm mb-6 inline-block font-semibold"
          >
            Notre Offre Unique
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.1 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-4xl md:text-5xl font-bold text-white mb-6"
          >
            Un Site Pro au Prix<br />de Votre Réussite
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.2 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-xl text-gray-400 max-w-3xl mx-auto"
          >
            5% de votre chiffre d'affaires, c'est tout ce que vous payez.<br />
            Un prix qui s'adapte à votre croissance, avec la même qualité premium pour tous.
          </motion.p>
        </div>

        {/* Points clés */}
        <div className="grid md:grid-cols-4 gap-6 mb-16">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-100px" }}
              className="bg-gray-800 p-6 rounded-xl border border-gray-700 text-center hover:bg-gray-750 transition-all"
            >
              <feature.icon className="w-10 h-10 text-primary mx-auto mb-4" />
              <h4 className="text-xl font-bold text-white mb-2">{feature.title}</h4>
              <p className="text-gray-300 mb-3">{feature.description}</p>
              <p className="text-sm text-gray-400">{feature.detail}</p>
            </motion.div>
          ))}
        </div>

        {/* Exemples de prix et inclus */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Exemples de prix */}
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
            viewport={{ once: true, margin: "-100px" }}
            className="bg-gray-800 p-8 rounded-xl border border-gray-700"
          >
            <h3 className="text-2xl font-bold text-white mb-8">Exemples de Prix</h3>
            <div className="space-y-6">
              {examples.map((example, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-5 rounded-lg bg-gray-900 border border-gray-700 hover:border-primary/50 transition-all"
                >
                  <div>
                    <div className="text-lg font-bold text-white mb-1">{example.revenue}</div>
                    <div className="text-sm text-gray-400">{example.detail}</div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-primary">{example.price}</div>
                    <div className="text-sm text-gray-300">{example.note}</div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Ce qui est inclus */}
          <motion.div
            initial={{ opacity: 0, x: 10 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
            viewport={{ once: true, margin: "-100px" }}
            className="bg-gray-800 p-8 rounded-xl border border-gray-700"
          >
            <h3 className="text-2xl font-bold text-white mb-8">Tout Est Inclus</h3>
            <div className="space-y-8">
              {included.map((category, index) => (
                <div key={index}>
                  <h4 className="text-lg font-semibold text-primary mb-4">{category.title}</h4>
                  <div className="grid gap-3">
                    {category.items.map((item, itemIndex) => (
                      <div key={itemIndex} className="flex items-center space-x-3">
                        <CheckIcon className="w-5 h-5 text-primary flex-shrink-0" />
                        <span className="text-gray-300">{item}</span>
                      </div>
                    ))}
                  </div>
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
          <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
            Calculez votre prix en 30 secondes.<br />
            C'est simple, transparent, et sans engagement.
          </p>
          <div className="flex flex-col items-center space-y-6">
            <button
              onClick={() => router.push('/calculateur')}
              className="px-8 py-4 bg-primary text-white rounded-lg hover:bg-primary/90 transition-all text-lg font-semibold inline-flex items-center space-x-3 group"
            >
              <span>Calculer mon prix</span>
              <ArrowRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <a
              href="/services"
              className="text-sm text-gray-500 hover:text-gray-400 transition-colors underline-offset-4 hover:underline inline-flex items-center space-x-2"
            >
              <span>Voir nos services spécialisés</span>
              <ArrowRightIcon className="w-4 h-4" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
