'use client';

import dynamic from 'next/dynamic';
import Header from './components/Header';
import Footer from './components/Footer';
import ContactButton from './components/ContactButton';
import { ArrowRightIcon, SparklesIcon } from '@heroicons/react/24/outline';
import SEOContent from './components/seo';

const VideoSection = dynamic(() => import('./components/VideoSection'));
const ServicesSection = dynamic(() => import('./components/ServicesSection'));
const ProjectsSection = dynamic(() => import('./components/ProjectsSection'));
const TestimonialsSection = dynamic(() => import('./components/TestimonialsSection'));
const SmallBusinessSection = dynamic(() => import('./components/SmallBusinessSection'));

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-950">
      <Header />

      {/* Hero Section */}
      <section className="pt-24 md:pt-32 pb-16 px-4 md:px-6 bg-gray-950">
        <div className="container mx-auto">
          <div className="text-center">
            <span className="bg-primary/10 text-primary px-4 py-1 rounded-full text-sm mb-6 inline-block">
              Expert en Création de Sites Web à Toulouse
            </span>
            <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold mb-4 md:mb-6 leading-tight text-white">
              Création de Sites Web<br className="hidden md:block" /> Professionnels à Toulouse
            </h1>
            <p className="text-lg md:text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
              Développeur web expert à Toulouse, je crée votre site professionnel<br className="hidden md:block" />
              avec un prix adapté à votre budget, à partir de 500€.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="/calculateur"
                className="px-8 py-4 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors inline-flex items-center space-x-2 text-lg"
              >
                <span>Voir mon prix</span>
                <ArrowRightIcon className="w-5 h-5" />
              </a>
              <a
                href="/about"
                className="px-8 py-4 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors text-lg"
              >
                Notre histoire
              </a>
              <ContactButton />
            </div>
          </div>

          {/* Points clés */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-16">
            {[
              {
                title: 'Prix Accessible',
                description: 'Seulement 5% de votre CA, minimum 500€. Si vous gagnez peu, vous payez peu.',
                icon: SparklesIcon
              },
              {
                title: 'Qualité Garantie',
                description: 'Le même site pro pour tous, avec le même soin apporté quel que soit le prix',
                icon: SparklesIcon
              },
              {
                title: 'On S\'occupe de Tout',
                description: 'Design, hébergement, maintenance... On gère tout pour vous',
                icon: SparklesIcon
              }
            ].map((feature, index) => (
              <div
                key={index}
                className="p-6 rounded-lg border border-gray-800 bg-gray-900/50 flex flex-col items-center text-center"
              >
                <feature.icon className="w-8 h-8 text-primary mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>

          {/* Explication */}
          <div className="mt-24 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
              Comment Ça Marche ?
            </h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="bg-gray-900/30 p-6 rounded-lg border border-gray-800">
                <h3 className="text-xl font-bold text-white mb-3">Un Prix Adapté à Vos Moyens</h3>
                <p className="text-gray-400">
                  On garde ça simple : vous payez 5% de votre chiffre d'affaires annuel.
                  Par exemple, si vous faites 20 000€ de CA, votre site coûtera 1 000€.
                  On commence à 500€ minimum, et tout est inclus.
                </p>
              </div>
              <div className="bg-gray-900/30 p-6 rounded-lg border border-gray-800">
                <h3 className="text-xl font-bold text-white mb-3">La Même Qualité Pour Tous</h3>
                <p className="text-gray-400">
                  Que vous payiez 500€ ou 2 500€, vous avez droit au même site professionnel.
                  Design moderne, adaptation mobile, hébergement, maintenance... 
                  On ne fait pas de différence.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <SmallBusinessSection />
      <ServicesSection />
      <VideoSection />
      <ProjectsSection />
      <TestimonialsSection />
      <SEOContent />
      <Footer />
    </main>
  );
}
