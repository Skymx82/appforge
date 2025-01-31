'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRightIcon } from '@heroicons/react/24/outline';

export default function About() {
  return (
    <main className="min-h-screen bg-gray-950">
      <div className="container mx-auto px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-8 md:mb-12">
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
              L&apos;histoire d&apos;AppForge
            </h1>
            <p className="text-lg md:text-xl text-gray-400">
              D&apos;un projet étudiant à une entreprise innovante
            </p>
          </div>

          <div className="bg-gray-900/50 rounded-xl md:rounded-2xl p-6 md:p-12 mb-8 md:mb-12 backdrop-blur-sm border border-gray-800/50">
            <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8 mb-8 md:mb-12">
              <div className="w-32 h-32 md:w-48 md:h-48 relative rounded-full overflow-hidden border-4 border-primary/20">
                <Image
                  src="/mattias.JPG"
                  alt="Mattias"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <div className="text-center md:text-left">
                <h2 className="text-xl md:text-2xl font-bold text-white mb-4">
                  Bonjour, je suis Mattias !
                </h2>
                <p className="text-gray-300 text-base md:text-lg">
                  Étudiant en développement informatique basé à Toulouse et fondateur d&apos;AppForge.
                  Ma mission ? Créer des applications sur mesure qui donnent vie à vos projets.
                </p>
              </div>
            </div>

            <div className="space-y-6 md:space-y-8 text-gray-300">
              <div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  Une passion née tôt
                </h3>
                <p>
                  Tout a commencé à l&apos;âge de 11 ans sur Scratch, où j&apos;ai créé mes premiers jeux.
                  Cette plateforme m&apos;a permis d&apos;explorer les bases de la programmation et de développer
                  une dizaine de jeux différents, nourrissant ma passion pour la création numérique.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  De la passion au projet
                </h3>
                <p>
                  Au fil des années, cette passion est devenue mon métier. En parallèle de mes études,
                  j&apos;ai décidé de lancer AppForge pour mettre mes compétences au service des entrepreneurs
                  et des PME, les aidant à créer des applications adaptées à leurs besoins spécifiques.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  AppForge aujourd&apos;hui
                </h3>
                <p>
                  Basée à Toulouse, AppForge est une entreprise dynamique qui offre des solutions
                  digitales sur mesure. Du développement d&apos;applications web à l&apos;accompagnement
                  personnalisé, nous transformons vos idées en réalité numérique.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  Notre mission
                </h3>
                <p>
                  Je crois fermement que chaque idée mérite d&apos;être concrétisée, que chaque projet
                  mérite une application performante et intuitive. Que vous soyez une petite entreprise
                  ou un entrepreneur, je suis là pour vous accompagner dans la création de vos outils
                  numériques.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-8 md:mt-12 flex flex-col items-center text-center">
            <p className="text-lg md:text-xl text-primary font-semibold mb-4 md:mb-6">
              Vous avez un projet d&apos;application en tête ?
            </p>
            <Link
              href="/calculateur"
              className="w-full md:w-auto inline-flex items-center justify-center gap-2 px-6 md:px-8 py-3 md:py-4 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors text-base md:text-lg"
            >
              Calculer votre projet
              <ArrowRightIcon className="w-5 h-5" />
            </Link>
            <p className="text-gray-400 mt-4">
              Ensemble, nous pouvons créer quelque chose de grand.
            </p>
          </div>

          <div className="text-center text-gray-400 mt-8">
            <p>
              Merci à tous ceux qui me soutiennent dans cette aventure ! 
            </p>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
