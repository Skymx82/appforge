'use client';

import { motion } from 'framer-motion';
import { ChatBubbleOvalLeftEllipsisIcon, PaintBrushIcon, DevicePhoneMobileIcon, ArrowRightIcon } from '@heroicons/react/24/outline';
import { useRouter } from 'next/navigation';

const steps = [
  {
    icon: ChatBubbleOvalLeftEllipsisIcon,
    title: '1. Consultation',
    description: 'Évaluation gratuite de vos besoins',
    detail: 'Choix de l\'offre adaptée'
  },
  {
    icon: PaintBrushIcon,
    title: '2. Configuration',
    description: 'Personnalisation de votre application',
    detail: 'Validation du design et des fonctionnalités'
  },
  {
    icon: DevicePhoneMobileIcon,
    title: '3. Déploiement',
    description: 'Mise en ligne en 48h',
    detail: 'Formation et accompagnement inclus'
  }
];

export default function ProcessSection() {
  const router = useRouter();

  return (
    <section className="relative py-16 md:py-24 bg-gray-950" id="process">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900/50 to-transparent"></div>
      <div className="container mx-auto px-6 relative">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h3 className="text-3xl font-bold text-white mb-4">Comment ça marche ?</h3>
          <p className="text-gray-400">
            Un processus simple et transparent pour votre application mobile
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative mb-16">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
              viewport={{ once: true }}
              className="bg-gray-900/50 backdrop-blur-sm rounded-lg p-6 border border-gray-800/50 hover:border-primary/30 transition-all group"
            >
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2 z-10">
                  <ArrowRightIcon className="w-6 h-6 text-primary/60" />
                </div>
              )}
              
              <step.icon className="w-12 h-12 text-primary mb-4" />
              <h4 className="text-xl font-bold text-white mb-2">{step.title}</h4>
              <p className="text-gray-300 mb-2">{step.description}</p>
              <p className="text-sm text-primary">{step.detail}</p>
              <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-lg pointer-events-none"></div>
            </motion.div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative aspect-video max-w-4xl mx-auto rounded-xl overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent"></div>
            <video
              autoPlay
              muted
              loop
              playsInline
              preload="none"
              poster="/logo_transparent.png"
              className="w-full h-full object-cover"
            >
              <source src="/hero_video.mp4" type="video/mp4" />
            </video>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            viewport={{ once: true }}
            className="text-center md:text-left"
          >
            <h4 className="text-2xl font-bold text-white mb-4">
              Une Solution Clé en Main
            </h4>
            <p className="text-gray-400 mb-6">
              Démarrez rapidement avec une application de fidélité 
              professionnelle. Configuration simple, déploiement rapide 
              et support continu pour votre réussite.
            </p>
            <motion.a
              href="/contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-primary hover:bg-primary/90 text-white font-bold py-3 px-8 rounded-lg transition-colors inline-block"
            >
              Commencer maintenant
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
