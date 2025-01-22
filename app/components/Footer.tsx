'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400">
      <div className="container mx-auto px-6 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contact */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li>
                <a href="mailto:appforge.owner@gmail.com" className="hover:text-primary transition-colors">
                  appforge.owner@gmail.com
                </a>
              </li>
              <li>
                <a href="tel:+33679336812" className="hover:text-primary transition-colors">
                  +33 6 79 33 68 12
                </a>
              </li>
              <li>Toulouse, France</li>
            </ul>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Navigation</h3>
            <ul className="space-y-2">
              <li>
                <a href="#services" className="hover:text-primary transition-colors">Services</a>
              </li>
              <li>
                <a href="#projects" className="hover:text-primary transition-colors">Projets</a>
              </li>
              <li>
                <a href="#process" className="hover:text-primary transition-colors">Processus</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-primary transition-colors">Contact</a>
              </li>
            </ul>
          </div>

          {/* Légal */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Informations légales</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/legal/mentions-legales" className="hover:text-primary transition-colors">
                  Mentions légales
                </Link>
              </li>
              <li>
                <Link href="/legal/politique-confidentialite" className="hover:text-primary transition-colors">
                  Politique de confidentialité
                </Link>
              </li>
              <li>
                <Link href="/legal/cgv" className="hover:text-primary transition-colors">
                  CGV
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p>© {new Date().getFullYear()} AppForge. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
}
