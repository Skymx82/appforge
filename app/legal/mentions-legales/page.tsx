'use client';

import { motion } from 'framer-motion';

export default function MentionsLegales() {
  return (
    <main className="min-h-screen bg-gray-950 pt-24">
      <div className="container mx-auto px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="prose prose-invert max-w-none"
        >
          <h1 className="text-3xl md:text-4xl font-bold mb-8 text-white">Mentions Légales</h1>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-white">1. Éditeur du site</h2>
            <p className="text-white">
              AppForge<br />
              Entreprise individuelle<br />
              Siège social : Toulouse, France<br />
              Email : appforge.owner@gmail.com<br />
              Téléphone : +33 6 79 33 68 12<br />
              SIRET : En cours d&apos;immatriculation
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-white">2. Directeur de la publication</h2>
            <p className="text-white">
              Le directeur de la publication est le propriétaire de l&apos;entreprise individuelle AppForge.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-white">3. Hébergement</h2>
            <p className="text-white">
              Ce site est hébergé par :<br />
              Vercel Inc.<br />
              340 S Lemon Ave #4133<br />
              Walnut, CA 91789<br />
              États-Unis<br />
              <a href="https://vercel.com" className="text-primary hover:text-primary/80">https://vercel.com</a>
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-white">4. Propriété intellectuelle</h2>
            <p className="text-white">
              L&apos;ensemble du contenu de ce site (textes, images, vidéos, logos, etc.) est protégé par le droit d&apos;auteur.
              Toute reproduction ou représentation, totale ou partielle, de ce site ou de son contenu est interdite sans
              l&apos;autorisation expresse d&apos;AppForge.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-white">5. Protection des données personnelles</h2>
            <p className="text-white">
              Les informations collectées via notre formulaire de contact sont destinées à AppForge et sont utilisées pour
              répondre à vos demandes. Conformément au RGPD, vous disposez d&apos;un droit d&apos;accès, de rectification et de
              suppression de vos données. Pour plus d&apos;informations, consultez notre{' '}
              <a href="/legal/politique-confidentialite" className="text-primary hover:text-primary/80">
                politique de confidentialité
              </a>.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-white">6. Cookies</h2>
            <p className="text-white">
              Ce site utilise des cookies techniques essentiels à son fonctionnement. Ces cookies ne collectent
              aucune donnée personnelle. Pour plus d&apos;informations, consultez notre politique de confidentialité.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-white">7. Liens hypertextes</h2>
            <p className="text-white">
              Le site peut contenir des liens vers d&apos;autres sites. AppForge n&apos;est pas responsable du contenu
              ou des pratiques des sites tiers. La présence de liens vers ces sites ne constitue pas une
              validation de leur contenu.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-white">8. Droit applicable</h2>
            <p className="text-white">
              Les présentes mentions légales sont soumises au droit français. En cas de litige, les tribunaux
              français seront seuls compétents.
            </p>
          </section>
        </motion.div>
      </div>
    </main>
  );
}
