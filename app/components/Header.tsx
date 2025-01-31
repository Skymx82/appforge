'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import ContactButton from './ContactButton';

export default function Header() {
  const [mounted, setMounted] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const menuItems = [
    { href: '#services', label: 'Services' },
    { href: '#projects', label: 'Projets' },
    { href: '#process', label: 'Processus' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gray-900 shadow-lg">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center space-x-4">
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
        </Link>

        <nav className="hidden md:flex items-center space-x-8">
          {menuItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-gray-400 hover:text-primary transition-colors"
            >
              {item.label}
            </a>
          ))}
          <ContactButton className="!w-auto">Contact</ContactButton>
        </nav>

        {mounted && (
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
        )}
      </div>

      <div 
        className={`md:hidden bg-gray-900 border-t border-gray-800 transition-all duration-300 ${
          mounted ? (isMenuOpen ? 'opacity-100 h-auto' : 'opacity-0 h-0 overflow-hidden') : 'hidden'
        }`}
      >
        <nav className="container mx-auto px-6 py-4 space-y-4">
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
          <ContactButton className="w-full">Contact</ContactButton>
        </nav>
      </div>
    </header>
  );
}
