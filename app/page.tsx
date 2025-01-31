'use client';

import dynamic from 'next/dynamic';
import Header from './components/Header';
import Footer from './components/Footer';
import ContactButton from './components/ContactButton';
import SEOContent from './components/seo';
import { ArrowRightIcon } from '@heroicons/react/24/outline';

const SmallBusinessSection = dynamic(() => import('./components/SmallBusinessSection'));
const ProcessSection = dynamic(() => import('./components/VideoSection'));
const ProjectsSection = dynamic(() => import('./components/ProjectsSection'));
const TestimonialsSection = dynamic(() => import('./components/TestimonialsSection'));

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-950">
      <Header />

      {/* Hero Section - Accroche principale */}
      <section className="pt-24 md:pt-32 pb-16 px-4 md:px-6 bg-gray-950">
        <div className="container mx-auto">
          <div className="text-center">
            <span className="bg-primary/10 text-primary px-4 py-1 rounded-full text-sm mb-6 inline-block">
              Développeur Web à Toulouse
            </span>
            <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold mb-4 md:mb-6 leading-tight text-white">
              Un Site Web Pro<br className="hidden md:block" />
              au Prix de Votre Réussite
            </h1>
            <p className="text-lg md:text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
              5% de votre chiffre d'affaires, c'est tout ce que vous payez.<br className="hidden md:block" />
              La même qualité premium pour tous, à partir de 500€.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="/calculateur"
                className="px-8 py-4 bg-primary text-white rounded-lg hover:bg-primary/90 transition-all inline-flex items-center space-x-2 text-lg group"
              >
                <span>Calculer mon prix</span>
                <ArrowRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <ContactButton />
            </div>
          </div>
        </div>
      </section>

      {/* Offre Principale */}
      <SmallBusinessSection />

      {/* Notre Processus */}
      <ProcessSection />

      {/* Nos Réalisations */}
      <ProjectsSection />

      {/* Témoignages */}
      <TestimonialsSection />

      <SEOContent />
      <Footer />
    </main>
  );
}
