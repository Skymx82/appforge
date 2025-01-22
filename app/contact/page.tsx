'use client';

import { motion } from 'framer-motion';
import { 
  BuildingOffice2Icon, 
  EnvelopeIcon, 
  PhoneIcon 
} from '@heroicons/react/24/outline';
import ContactForm from '../components/ContactForm';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

export default function Contact() {
  return (
    <div className="min-h-screen bg-gray-950">
      <div className="relative py-24">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900/50 to-transparent"></div>
        
        <div className="relative container mx-auto px-6">
          {/* En-tête */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Démarrez votre projet
            </h1>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Remplissez le formulaire ci-dessous pour nous parler de votre projet.
              Notre équipe vous contactera dans les 24 heures.
            </p>
          </motion.div>

          {/* Grille principale */}
          <div className="grid lg:grid-cols-3 gap-12 items-start">
            {/* Informations de contact */}
            <div className="lg:col-span-1 space-y-8">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                whileHover={{ scale: 1.02 }}
                className="bg-gray-900/50 backdrop-blur-sm p-6 rounded-lg border border-gray-800 hover:border-primary/30 transition-all"
              >
                <h3 className="text-xl font-semibold text-white mb-6">
                  Informations de contact
                </h3>
                <div className="space-y-4">
                  <motion.div
                    whileHover={{ x: 5 }}
                    className="flex items-center"
                  >
                    <EnvelopeIcon className="h-6 w-6 text-primary mr-3" />
                    <a href="mailto:appforge.owner@gmail.com" className="text-gray-300 hover:text-white transition-colors">
                      appforge.owner@gmail.com
                    </a>
                  </motion.div>
                  <motion.div
                    whileHover={{ x: 5 }}
                    className="flex items-center"
                  >
                    <PhoneIcon className="h-6 w-6 text-primary mr-3" />
                    <a href="tel:+33679336812" className="text-gray-300 hover:text-white transition-colors">
                      +33 6 79 33 68 12
                    </a>
                  </motion.div>
                  <motion.div
                    whileHover={{ x: 5 }}
                    className="flex items-center"
                  >
                    <BuildingOffice2Icon className="h-6 w-6 text-primary mr-3" />
                    <span className="text-gray-300">
                      Toulouse, France
                    </span>
                  </motion.div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                whileHover={{ scale: 1.02 }}
                className="bg-gray-900/50 backdrop-blur-sm p-6 rounded-lg border border-gray-800 hover:border-primary/30 transition-all"
              >
                <h3 className="text-xl font-semibold text-white mb-4">
                  Horaires de disponibilité
                </h3>
                <div className="space-y-2 text-gray-300">
                  <p>Lundi - Vendredi</p>
                  <p className="text-primary font-medium">9:00 - 18:00</p>
                </div>
              </motion.div>
            </div>

            {/* Formulaire de contact */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="lg:col-span-2 bg-gray-900/50 backdrop-blur-sm p-8 rounded-lg border border-gray-800"
            >
              <ContactForm />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
