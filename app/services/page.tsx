'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Header from '../components/Header';
import Footer from '../components/Footer';

const otherServices = [
  {
    title: 'Site Sur Mesure',
    description: 'Pour les projets complexes nécessitant des fonctionnalités spécifiques',
    price: 'Sur devis',
    features: [
      'Architecture personnalisée',
      'Fonctionnalités sur mesure',
      'Intégrations spécifiques',
      'Base de données complexe',
      'API personnalisée',
      'Tests automatisés',
      'Documentation technique'
    ]
  },
  {
    title: 'Maintenance & Support',
    description: 'Pour les sites existants nécessitant une maintenance régulière',
    price: 'À partir de 99€/mois',
    features: [
      'Mises à jour de sécurité',
      'Sauvegardes régulières',
      'Monitoring 24/7',
      'Support prioritaire',
      'Modifications mineures',
      'Rapports mensuels',
      'Temps de réponse garanti'
    ]
  },
  {
    title: 'Consulting',
    description: 'Pour les entreprises ayant besoin de conseils techniques',
    price: '150€/heure',
    features: [
      'Audit technique',
      'Recommandations SEO',
      'Optimisation des performances',
      'Analyse de sécurité',
      'Formation équipe',
      'Plan d\'architecture',
      'Roadmap technique'
    ]
  }
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-gray-950">
      <Header />
      
      <section className="pt-24 md:pt-32 pb-16 px-4 md:px-6">
        <div className="container mx-auto">
          {/* En-tête */}
          <div className="text-center mb-16">
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="bg-primary/10 text-primary px-6 py-2 rounded-full text-sm mb-6 inline-block font-semibold"
            >
              Services Spécialisés
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl md:text-5xl font-bold text-white mb-6"
            >
              Solutions Sur Mesure<br />
              Pour Vos Besoins Spécifiques
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl text-gray-400 max-w-3xl mx-auto"
            >
              En plus de notre offre principale, nous proposons des services<br />
              adaptés aux projets plus complexes et spécifiques.
            </motion.p>
          </div>

          {/* Offre principale rappel */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-gray-900/50 rounded-xl p-8 mb-16 backdrop-blur-sm border border-primary/20 text-center"
          >
            <h2 className="text-2xl font-bold text-white mb-4">
              Vous cherchez notre offre principale ?
            </h2>
            <p className="text-gray-400 mb-6">
              Découvrez notre formule simple : 5% de votre CA, à partir de 500€.<br />
              Un site professionnel avec tout inclus.
            </p>
            <Link
              href="/"
              className="inline-flex items-center space-x-2 text-primary hover:text-primary/80 transition-colors"
            >
              <span>Voir l'offre principale</span>
              <ArrowRightIcon className="w-5 h-5" />
            </Link>
          </motion.div>

          {/* Services spécialisés */}
          <div className="grid md:grid-cols-3 gap-8">
            {otherServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                className="bg-gray-900 border border-gray-800 rounded-xl p-8 hover:border-primary/50 transition-all"
              >
                <h3 className="text-2xl font-bold text-white mb-3">{service.title}</h3>
                <p className="text-gray-400 mb-4">{service.description}</p>
                <div className="text-xl font-bold text-primary mb-6">{service.price}</div>
                <ul className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start space-x-3 text-gray-300">
                      <span className="text-primary mt-1">•</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="mt-16 text-center"
          >
            <p className="text-xl text-gray-400 mb-8">
              Besoin d'une solution sur mesure ?<br />
              Discutons de votre projet ensemble.
            </p>
            <Link
              href="/contact"
              className="px-8 py-4 bg-primary text-white rounded-lg hover:bg-primary/90 transition-all text-lg font-semibold inline-flex items-center space-x-3 group"
            >
              <span>Nous contacter</span>
              <ArrowRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
