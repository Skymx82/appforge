'use client';

import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  BuildingOffice2Icon, 
  EnvelopeIcon, 
  PhoneIcon,
  DocumentTextIcon,
  CurrencyEuroIcon,
  CalendarIcon
} from '@heroicons/react/24/outline';
import ReCAPTCHA from 'react-google-recaptcha';
import Link from 'next/link';

type FormData = {
  name: string;
  email: string;
  phone: string;
  company: string;
  budget: string;
  timeline: string;
  projectType: string;
  description: string;
  features: string[];
  gdprConsent: boolean;
};

const initialFormData: FormData = {
  name: '',
  email: '',
  phone: '',
  company: '',
  budget: '',
  timeline: '',
  projectType: '',
  description: '',
  features: [],
  gdprConsent: false,
};

const projectTypes = [
  'Site Web',
  'E-commerce',
  'Application Mobile',
  'Application Premium',
  'Autre',
];

const budgetRanges = [
  'Moins de 2 000€',
  '2 000€ - 5 000€',
  '5 000€ - 10 000€',
  '10 000€ - 20 000€',
  'Plus de 20 000€'
];

const featuresList = [
  'Design sur mesure',
  'Authentification utilisateurs',
  'Paiement en ligne',
  'Notifications push',
  'Gestion de contenu',
  'Multi-langues',
  'Statistiques avancées',
  'API personnalisée',
  'Système de réservation',
  'Multi-plateformes'
];

const formVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0 }
};

const stepVariants = {
  enter: { opacity: 0, x: 20 },
  center: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -20 }
};

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [showCaptchaError, setShowCaptchaError] = useState(false);
  const [error, setError] = useState<string>('');
  const recaptchaRef = useRef<ReCAPTCHA>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData(prev => ({ ...prev, [name]: checked }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleFeatureToggle = (feature: string) => {
    setFormData(prev => ({
      ...prev,
      features: prev.features.includes(feature)
        ? prev.features.filter(f => f !== feature)
        : [...prev.features, feature]
    }));
  };

  const validateStep = (currentStep: number): boolean => {
    setError('');
    
    switch (currentStep) {
      case 1:
        if (!formData.name || !formData.email) {
          setError('Le nom et l\'email sont obligatoires');
          return false;
        }
        // Validation email
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
          setError('Veuillez entrer une adresse email valide');
          return false;
        }
        break;
      case 2:
        if (!formData.projectType) {
          setError('Veuillez sélectionner un type de projet');
          return false;
        }
        break;
      case 3:
        if (!formData.description) {
          setError('La description du projet est obligatoire');
          return false;
        }
        if (!formData.gdprConsent) {
          setError('Veuillez accepter la politique de confidentialité');
          return false;
        }
        break;
    }
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    
    if (step !== 3) {
      if (validateStep(step)) {
        setStep(step + 1);
      }
      return;
    }

    if (!validateStep(3)) {
      return;
    }

    // Vérification du CAPTCHA
    const captchaToken = recaptchaRef.current?.getValue();
    if (!captchaToken) {
      setShowCaptchaError(true);
      setError('Veuillez valider le CAPTCHA');
      return;
    }

    setShowCaptchaError(false);
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          captchaToken
        }),
      });

      if (!response.ok) {
        const errorData = await response.text();
        console.error('Erreur serveur:', response.status, errorData);
        throw new Error(errorData || 'Une erreur est survenue');
      }

      const data = await response.json();
      if (data.error) {
        setError(data.error);
      } else {
        setSubmitStatus('success');
        setFormData(initialFormData);
        recaptchaRef.current?.reset();
      }
    } catch (error: any) {
      console.error('Erreur:', error);
      setError(error.message || 'Une erreur est survenue lors de l\'envoi du message');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleNext = () => {
    if (validateStep(step)) {
      setStep(step + 1);
      setShowCaptchaError(false);
    }
  };

  const handleBack = () => {
    setError('');
    setStep(step - 1);
    setShowCaptchaError(false);
  };

  return (
    <div className="max-w-4xl mx-auto">
      {/* Étapes */}
      <div className="mb-8">
        <div className="flex justify-between items-center">
          {[1, 2, 3].map((stepNumber) => (
            <motion.div
              key={stepNumber}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: stepNumber * 0.1 }}
              className="flex-1 relative"
            >
              <div className={`
                h-2 ${stepNumber === 1 ? 'rounded-l-full' : stepNumber === 3 ? 'rounded-r-full' : ''}
                ${step >= stepNumber ? 'bg-primary' : 'bg-gray-700'}
                transition-colors duration-300
              `} />
              <div className={`
                absolute top-4 left-1/2 transform -translate-x-1/2
                text-sm font-medium
                ${step >= stepNumber ? 'text-primary' : 'text-gray-500'}
              `}>
                {stepNumber === 1 ? 'Informations' : stepNumber === 2 ? 'Projet' : 'Détails'}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-8">
        <AnimatePresence mode="wait">
          {/* Étape 1: Informations de base */}
          {step === 1 && (
            <motion.div
              key="step1"
              variants={stepVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.3 }}
              className="space-y-6"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300">
                    Nom complet
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="mt-1 block w-full rounded-lg bg-gray-900 border border-gray-800 py-2 px-3 text-white placeholder-gray-400 focus:border-primary focus:ring-primary sm:text-sm"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300">
                    Email professionnel
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="mt-1 block w-full rounded-lg bg-gray-900 border border-gray-800 py-2 px-3 text-white placeholder-gray-400 focus:border-primary focus:ring-primary sm:text-sm"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-300">
                    Téléphone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="mt-1 block w-full rounded-lg bg-gray-900 border border-gray-800 py-2 px-3 text-white placeholder-gray-400 focus:border-primary focus:ring-primary sm:text-sm"
                  />
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-300">
                    Entreprise
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="mt-1 block w-full rounded-lg bg-gray-900 border border-gray-800 py-2 px-3 text-white placeholder-gray-400 focus:border-primary focus:ring-primary sm:text-sm"
                  />
                </div>
              </div>
            </motion.div>
          )}

          {/* Étape 2: Type de projet et budget */}
          {step === 2 && (
            <motion.div
              key="step2"
              variants={stepVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.3 }}
              className="space-y-6"
            >
              <div>
                <label htmlFor="projectType" className="block text-sm font-medium text-gray-300">
                  Type de projet
                </label>
                <select
                  id="projectType"
                  name="projectType"
                  value={formData.projectType}
                  onChange={handleInputChange}
                  className="mt-1 block w-full rounded-lg bg-gray-900 border border-gray-800 py-2 px-3 text-white placeholder-gray-400 focus:border-primary focus:ring-primary sm:text-sm"
                >
                  <option value="">Sélectionnez un type</option>
                  {projectTypes.map(type => (
                    <option key={type} value={type}>{type}</option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="budget" className="block text-sm font-medium text-gray-300">
                  Budget estimé
                </label>
                <select
                  id="budget"
                  name="budget"
                  value={formData.budget}
                  onChange={handleInputChange}
                  className="mt-1 block w-full rounded-lg bg-gray-900 border border-gray-800 py-2 px-3 text-white placeholder-gray-400 focus:border-primary focus:ring-primary sm:text-sm"
                >
                  <option value="">Sélectionnez un budget</option>
                  {budgetRanges.map(budget => (
                    <option key={budget} value={budget}>{budget}</option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="timeline" className="block text-sm font-medium text-gray-300">
                  Délai souhaité
                </label>
                <select
                  id="timeline"
                  name="timeline"
                  value={formData.timeline}
                  onChange={handleInputChange}
                  className="mt-1 block w-full rounded-lg bg-gray-900 border border-gray-800 py-2 px-3 text-white placeholder-gray-400 focus:border-primary focus:ring-primary sm:text-sm"
                >
                  <option value="">Sélectionnez un délai</option>
                  <option value="1-2-months">1-2 mois</option>
                  <option value="2-3-months">2-3 mois</option>
                  <option value="3-6-months">3-6 mois</option>
                  <option value="6+-months">6+ mois</option>
                </select>
              </div>
            </motion.div>
          )}

          {/* Étape 3: Description et fonctionnalités */}
          {step === 3 && (
            <motion.div
              key="step3"
              variants={stepVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.3 }}
              className="space-y-6"
            >
              <div>
                <label htmlFor="description" className="block text-sm font-medium text-gray-300">
                  Description du projet
                </label>
                <textarea
                  id="description"
                  name="description"
                  rows={4}
                  value={formData.description}
                  onChange={handleInputChange}
                  className="mt-1 block w-full rounded-lg bg-gray-900 border border-gray-800 py-2 px-3 text-white placeholder-gray-400 focus:border-primary focus:ring-primary sm:text-sm"
                  placeholder="Décrivez votre projet en détail..."
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-3">
                  Fonctionnalités souhaitées
                </label>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {featuresList.map(feature => (
                    <div
                      key={feature}
                      onClick={() => handleFeatureToggle(feature)}
                      className={`
                        p-3 rounded-lg border cursor-pointer transition-all
                        ${formData.features.includes(feature)
                          ? 'border-primary bg-primary/10 text-white'
                          : 'border-gray-800 bg-gray-900 text-gray-400 hover:border-primary/30'}
                      `}
                    >
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Consentement RGPD */}
              <div className="space-y-2">
                <div className="flex items-start space-x-2">
                  <input
                    type="checkbox"
                    id="gdprConsent"
                    name="gdprConsent"
                    checked={formData.gdprConsent}
                    onChange={handleInputChange}
                    className="mt-1"
                  />
                  <label htmlFor="gdprConsent" className="text-sm text-gray-400">
                    J&apos;accepte que mes données soient traitées conformément à la{' '}
                    <Link href="/legal/politique-confidentialite" className="text-primary hover:text-primary/80 underline">
                      politique de confidentialité
                    </Link>
                    .
                  </label>
                </div>
              </div>

              {/* reCAPTCHA */}
              <div className="mt-6" role="complementary" aria-label="Vérification CAPTCHA">
                <ReCAPTCHA
                  ref={recaptchaRef}
                  sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || '6Lfmf78qAAAAAEgD0ZdQYBPwHSJyySy9cssA1W5Q'}
                  theme="dark"
                  hl="fr"
                  size="normal"
                  tabIndex={0}
                />
                {showCaptchaError && (
                  <p className="text-red-500 text-sm mt-2" role="alert">
                    Veuillez valider le CAPTCHA avant d'envoyer le formulaire
                  </p>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Navigation */}
        <div className="flex justify-between pt-6">
          {step > 1 && (
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="button"
              onClick={handleBack}
              className="px-6 py-2 border border-gray-800 rounded-lg text-white hover:bg-gray-800 transition-colors"
            >
              Précédent
            </motion.button>
          )}
          
          {step < 3 ? (
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="button"
              onClick={handleNext}
              className="ml-auto px-6 py-2 bg-primary rounded-lg text-white hover:bg-primary/90 transition-colors"
            >
              Suivant
            </motion.button>
          ) : (
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              disabled={isSubmitting}
              className={`
                ml-auto px-6 py-2 rounded-lg text-white transition-colors
                ${isSubmitting 
                  ? 'bg-gray-600 cursor-not-allowed' 
                  : 'bg-primary hover:bg-primary/90'}
              `}
            >
              {isSubmitting ? 'Envoi en cours...' : 'Envoyer'}
            </motion.button>
          )}
        </div>
      </form>

      {/* Affichage des erreurs */}
      {error && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="mt-4 p-4 bg-red-900/50 border border-red-500 rounded-lg text-red-400"
        >
          {error}
        </motion.div>
      )}

      {/* Message de statut */}
      <AnimatePresence>
        {submitStatus === 'success' && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="mt-6 p-4 bg-green-900/50 border border-green-500 rounded-lg text-green-400"
          >
            Votre demande a été envoyée avec succès ! Nous vous contacterons dans les plus brefs délais.
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
