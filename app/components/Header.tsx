'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useState } from 'react';
import Image from 'next/image';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

export default function Header() {
  const ref = useRef(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  const headerY = useTransform(scrollYProgress, [0, 1], [0, -25]);
  const headerOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0.9]);

  const menuItems = [
    { href: '#services', label: 'Services' },
    { href: '#projects', label: 'Projets' },
    { href: '#process', label: 'Processus' },
    { href: '#contact', label: 'Contact' }
  ];

  return (
    <motion.header
      ref={ref}
      style={{ y: headerY, opacity: headerOpacity }}
      className="fixed top-0 left-0 right-0 z-50 bg-gray-900 shadow-lg"
    >
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <div className="relative h-12 w-32">
            <Image
              src="/logo_transparent.png"
              alt="AppForge Logo"
              fill
              className="object-contain"
              priority
            />
          </div>
          <h1 className="text-2xl font-bold text-primary">AppForge</h1>
        </div>

        {/* Navigation desktop */}
        <nav className="hidden md:flex space-x-8">
          {menuItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-gray-400 hover:text-primary transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Bouton menu mobile */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-gray-400 hover:text-primary"
        >
          {isMenuOpen ? (
            <XMarkIcon className="h-6 w-6" />
          ) : (
            <Bars3Icon className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Menu mobile */}
      <motion.nav
        initial={false}
        animate={{ height: isMenuOpen ? 'auto' : 0, opacity: isMenuOpen ? 1 : 0 }}
        className={`md:hidden overflow-hidden bg-gray-900 border-t border-gray-800`}
      >
        <div className="container mx-auto px-6 py-4 space-y-4">
          {menuItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setIsMenuOpen(false)}
              className="block text-gray-400 hover:text-primary transition-colors"
            >
              {item.label}
            </a>
          ))}
        </div>
      </motion.nav>
    </motion.header>
  );
}
