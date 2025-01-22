'use client';

import dynamic from 'next/dynamic';
import { motion } from 'framer-motion';
import Header from './components/Header';
import Footer from './components/Footer';
import Head from 'next/head';

const VideoSection = dynamic(() => import('./components/VideoSection'));
const ServicesSection = dynamic(() => import('./components/ServicesSection'));
const ProjectsSection = dynamic(() => import('./components/ProjectsSection'));
const TestimonialsSection = dynamic(() => import('./components/TestimonialsSection'));

export default function Home() {
  return (
    <>
      <Head>
        <title>AppForge - Création d&apos;applications sur mesure</title>
        <meta name="description" content="AppForge crée des applications mobiles sur mesure pour votre entreprise. Du commerce local à la grande entreprise, nous développons votre application à partir de 1 500€ HT." />
        <meta name="keywords" content="application mobile, développement, react native, fidélisation, commerce" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://appforge.fr/" />
        <meta property="og:title" content="AppForge - Applications sur mesure" />
        <meta property="og:description" content="Créez votre application mobile sur mesure à partir de 1 500€ HT" />
        <meta property="og:image" content="https://appforge.fr/og-image.jpg" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://appforge.fr/" />
        <meta property="twitter:title" content="AppForge - Applications sur mesure" />
        <meta property="twitter:description" content="Créez votre application mobile sur mesure à partir de 1 500€ HT" />
        <meta property="twitter:image" content="https://appforge.fr/og-image.jpg" />
      </Head>

      <main className="min-h-screen bg-gray-950">
        <Header />

        {/* Hero Section */}
        <section className="pt-24 md:pt-32 pb-16 px-4 md:px-6 bg-gray-950">
          <div className="container mx-auto">
            <div className="text-center">
              <motion.span
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-primary/10 text-primary px-4 py-1 rounded-full text-sm mb-6 inline-block"
              >
                Applications de fidélisation
              </motion.span>
              <motion.h2
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-3xl md:text-4xl lg:text-6xl font-bold mb-4 md:mb-6 leading-tight text-white"
              >
                Votre Application<br className="hidden md:block" /> Sur Mesure
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-lg md:text-xl text-gray-400 mb-8 max-w-2xl mx-auto px-4"
              >
                Du commerce local à la grande entreprise,<br className="hidden md:block" />
                nous créons votre application à partir de 1 500€ HT
              </motion.p>
              <motion.button
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => window.location.href = '/contact'}
                className="w-full sm:w-auto bg-primary text-white px-8 py-3 rounded-lg font-semibold shadow-lg hover:bg-primary/90 transition-all"
              >
                Demander un devis
              </motion.button>
            </div>

            {/* Prix indicatifs */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mt-12 md:mt-16">
              {[
                {
                  title: 'Démarrage',
                  price: '1 500€ HT',
                  monthly: '50€ HT/mois',
                  delay: 0.4
                },
                {
                  title: 'Essentielle',
                  price: '3 000€ HT',
                  monthly: '90€ HT/mois',
                  delay: 0.5
                },
                {
                  title: 'Avancée',
                  price: '5 000€ HT',
                  monthly: '150€ HT/mois',
                  delay: 0.6,
                  popular: true
                },
                {
                  title: 'Premium',
                  price: '7 000€ HT',
                  monthly: '250€ HT/mois',
                  delay: 0.7
                }
              ].map((plan, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: plan.delay }}
                  whileHover={{ y: -5 }}
                  className={`relative bg-gray-900/50 backdrop-blur-sm rounded-lg p-6 md:p-8 text-center border ${
                    plan.popular ? 'border-primary/20' : 'border-gray-800/50'
                  } hover:border-primary/30 transition-all`}
                >
                  {plan.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <span className="bg-primary text-white text-xs px-4 py-1 rounded-full whitespace-nowrap shadow-lg">
                        Populaire
                      </span>
                    </div>
                  )}
                  <div className="text-primary/90 font-medium mb-3">{plan.title}</div>
                  <div className="text-2xl md:text-3xl font-bold text-white mb-2">{plan.price}</div>
                  <div className="text-base text-gray-400 mb-4">{plan.monthly}</div>
                  <div className="text-sm text-gray-500">Engagement 12 mois</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Autres sections */}
        <VideoSection />
        <ServicesSection />
        <ProjectsSection />
        <TestimonialsSection />

        <Footer />
      </main>
    </>
  );
}
