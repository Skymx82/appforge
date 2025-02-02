'use client';

import { motion } from 'framer-motion';

export default function CGV() {
  return (
    <main className="min-h-screen bg-gray-950 pt-16 md:pt-24">
      <div className="container mx-auto px-4 py-6 md:py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="prose prose-invert max-w-none"
        >
          <h1 className="text-2xl md:text-4xl font-bold mb-6 md:mb-8 text-white">Conditions Générales de Vente</h1>
          
          <section className="mb-6 md:mb-8">
            <h2 className="text-xl md:text-2xl font-semibold mb-3 md:mb-4 text-white">1. Objet</h2>
            <p className="text-white text-sm md:text-base">
              Les présentes conditions générales de vente (CGV) régissent les relations contractuelles entre
              AppForge, entreprise individuelle, ci-après dénommée &quot;le Prestataire&quot;, et ses clients
              dans le cadre de la fourniture de services de développement de sites web professionnels.
            </p>
          </section>

          <section className="mb-6 md:mb-8">
            <h2 className="text-xl md:text-2xl font-semibold mb-3 md:mb-4 text-white">2. Services proposés</h2>
            <p className="text-white text-sm md:text-base">
              Le Prestataire propose les services suivants :
            </p>
            <ul className="text-white text-sm md:text-base">
              <li>Développement de sites web professionnels sur mesure</li>
              <li>Maintenance et support des sites web</li>
              <li>Hébergement des sites web</li>
              <li>Formation à l&apos;utilisation du site web</li>
            </ul>
          </section>

          <section className="mb-6 md:mb-8">
            <h2 className="text-xl md:text-2xl font-semibold mb-3 md:mb-4 text-white">3. Devis et commande</h2>
            <p className="text-white text-sm md:text-base">
              Toute demande fait l&apos;objet d&apos;un devis gratuit, valable 30 jours. La commande est considérée comme
              ferme après acceptation écrite du devis par le Client et versement de l&apos;acompte prévu.
            </p>
          </section>

          <section className="mb-6 md:mb-8">
            <h2 className="text-xl md:text-2xl font-semibold mb-3 md:mb-4 text-white">4. Prix et paiement</h2>
            <p className="text-white text-sm md:text-base">
              Les prix sont calculés en fonction du chiffre d'affaires de l'entreprise cliente, avec un minimum de 500€ HT.
              Les modalités de paiement sont les suivantes :
            </p>
            <ul className="text-white text-sm md:text-base">
              <li>60% à la signature du devis</li>
              <li>40% à la livraison finale</li>
            </ul>
            <p className="text-white text-sm md:text-base">
              Le paiement s&apos;effectue par virement bancaire dans un délai de 30 jours à compter de la date
              de facturation.
            </p>
          </section>

          <section className="mb-6 md:mb-8">
            <h2 className="text-xl md:text-2xl font-semibold mb-3 md:mb-4 text-white">5. Délais et livraison</h2>
            <p className="text-white text-sm md:text-base">
              Les délais de livraison sont donnés à titre indicatif. Un retard ne peut donner lieu à aucune
              pénalité, indemnité ou annulation de la commande. Le Prestataire s&apos;engage à tenir le Client
              informé de l&apos;avancement du projet.
            </p>
          </section>

          <section className="mb-6 md:mb-8">
            <h2 className="text-xl md:text-2xl font-semibold mb-3 md:mb-4 text-white">6. Propriété intellectuelle</h2>
            <p className="text-white text-sm md:text-base">
              Le Client devient propriétaire des droits d&apos;exploitation du site web après paiement intégral
              du prix. Le Prestataire conserve la propriété intellectuelle des méthodes, du savoir-faire et
              des outils utilisés.
            </p>
          </section>

          <section className="mb-6 md:mb-8">
            <h2 className="text-xl md:text-2xl font-semibold mb-3 md:mb-4 text-white">7. Maintenance</h2>
            <p className="text-white text-sm md:text-base">
              Les services de maintenance font l&apos;objet d&apos;un contrat séparé. Les conditions et tarifs sont
              définis dans notre grille tarifaire disponible sur demande.
            </p>
          </section>

          <section className="mb-6 md:mb-8">
            <h2 className="text-xl md:text-2xl font-semibold mb-3 md:mb-4 text-white">8. Garanties</h2>
            <p className="text-white text-sm md:text-base">
              Le Prestataire garantit le bon fonctionnement du site web pendant une durée de 12 mois
              à compter de la livraison finale. Cette garantie couvre la correction des bugs et erreurs
              de programmation.
            </p>
          </section>

          <section className="mb-6 md:mb-8">
            <h2 className="text-xl md:text-2xl font-semibold mb-3 md:mb-4 text-white">9. Responsabilité</h2>
            <p className="text-white text-sm md:text-base">
              La responsabilité du Prestataire est limitée au montant des sommes perçues pour les services
              fournis. Le Prestataire ne pourra être tenu responsable des dommages indirects subis par
              le Client.
            </p>
          </section>

          <section className="mb-6 md:mb-8">
            <h2 className="text-xl md:text-2xl font-semibold mb-3 md:mb-4 text-white">10. Résiliation</h2>
            <p className="text-white text-sm md:text-base">
              En cas de manquement par l&apos;une des parties à l&apos;une de ses obligations, le contrat pourra être
              résilié de plein droit 30 jours après mise en demeure restée sans effet. Les sommes déjà
              versées resteront acquises au Prestataire.
            </p>
          </section>

          <section className="mb-6 md:mb-8">
            <h2 className="text-xl md:text-2xl font-semibold mb-3 md:mb-4 text-white">11. Droit applicable</h2>
            <p className="text-white text-sm md:text-base">
              Les présentes CGV sont soumises au droit français. Tout litige relatif à leur interprétation
              ou leur exécution relève de la compétence exclusive des tribunaux de Toulouse.
            </p>
          </section>

          <section className="mb-6 md:mb-8">
            <h2 className="text-xl md:text-2xl font-semibold mb-3 md:mb-4 text-white">12. Contact</h2>
            <p className="text-white text-sm md:text-base">
              Pour toute question concernant ces CGV, vous pouvez nous contacter à :<br />
              Email : appforge.owner@gmail.com<br />
              Téléphone : +33 6 79 33 68 12
            </p>
          </section>
        </motion.div>
      </div>
    </main>
  );
}
