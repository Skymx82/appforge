'use client';

import { motion } from 'framer-motion';

export default function PolitiqueConfidentialite() {
  return (
    <main className="min-h-screen bg-gray-950 pt-24">
      <div className="container mx-auto px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="prose prose-invert max-w-none"
        >
          <h1 className="text-3xl md:text-4xl font-bold mb-8 text-white">Politique de Confidentialité</h1>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-white">1. Collecte des données</h2>
            <p className="text-gray-200">
              Nous collectons uniquement les données que vous nous fournissez volontairement via notre calculateur de prix :
            </p>
            <ul className="text-gray-200">
              <li>Nom et prénom</li>
              <li>Adresse email</li>
              <li>Numéro de téléphone (optionnel)</li>
              <li>Nom de l'entreprise (optionnel)</li>
              <li>Chiffre d'affaires annuel</li>
              <li>Description du projet</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-white">2. Utilisation des données</h2>
            <p className="text-gray-200">
              Vos données sont utilisées exclusivement pour :
            </p>
            <ul className="text-gray-200">
              <li>Calculer un prix adapté à votre budget</li>
              <li>Vous recontacter concernant votre projet</li>
              <li>Établir une proposition personnalisée</li>
              <li>Assurer le suivi de votre projet</li>
            </ul>
            <p className="text-gray-200">
              Les données sont stockées de manière sécurisée et ne sont accessibles qu'aux personnes habilitées d'AppForge.
              Elles sont conservées pendant une durée maximale de 3 ans après notre dernier contact.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-white">3. Stockage des données</h2>
            <p className="text-gray-200">
              Les données collectées sont :
            </p>
            <ul className="text-gray-200">
              <li>Envoyées par email sécurisé à notre équipe</li>
              <li>Stockées dans un fichier sécurisé accessible uniquement par l'équipe AppForge</li>
              <li>Jamais partagées avec des tiers sans votre consentement explicite</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-white">4. Vos droits</h2>
            <p className="text-gray-200">
              Conformément au RGPD, vous disposez des droits suivants :
            </p>
            <ul className="text-gray-200">
              <li>Droit d'accès à vos données</li>
              <li>Droit de rectification</li>
              <li>Droit à l'effacement ("droit à l'oubli")</li>
              <li>Droit à la limitation du traitement</li>
              <li>Droit à la portabilité</li>
            </ul>
            <p className="text-gray-200">
              Pour exercer ces droits, contactez-nous à : appforge.owner@gmail.com
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-white">5. Cookies</h2>
            <p className="text-gray-200">
              Notre site utilise uniquement :
            </p>
            <ul className="text-gray-200">
              <li>Des cookies techniques essentiels au fonctionnement du site</li>
              <li>Un cookie reCAPTCHA pour la protection contre le spam</li>
            </ul>
            <p className="text-gray-200">
              Ces cookies ne collectent aucune donnée personnelle à des fins de traçage ou de publicité.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-white">6. Contact</h2>
            <p className="text-gray-200">
              Pour toute question concernant notre politique de confidentialité ou pour exercer vos droits,
              vous pouvez nous contacter par email à appforge.owner@gmail.com
            </p>
          </section>
        </motion.div>
      </div>
    </main>
  );
}
