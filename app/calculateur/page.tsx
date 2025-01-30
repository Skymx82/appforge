'use client';

import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowRightIcon, 
  DocumentTextIcon,
  ShieldCheckIcon,
  LockClosedIcon,
  CheckCircleIcon,
  XMarkIcon
} from '@heroicons/react/24/outline';
import ReCAPTCHA from 'react-google-recaptcha';

type Step = 'info' | 'review';

interface FormData {
  companyName: string;
  contactName: string;
  email: string;
  phone: string;
  revenue: number;
  projectDescription: string;
}

interface SuccessNotificationProps {
  show: boolean;
  onClose: () => void;
}

function SuccessNotification({ show, onClose }: SuccessNotificationProps) {
  if (!show) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-full max-w-lg"
    >
      <div className="bg-green-900/90 backdrop-blur-sm text-white px-6 py-4 rounded-lg shadow-xl border border-green-700/50 mx-4">
        <div className="flex items-center space-x-4">
          <CheckCircleIcon className="w-6 h-6 text-green-400 flex-shrink-0" />
          <div className="flex-grow">
            <h4 className="font-medium">Demande envoyée avec succès !</h4>
            <p className="text-sm text-green-200">
              Notre équipe vous contactera dans les plus brefs délais.
            </p>
          </div>
          <button
            onClick={onClose}
            className="text-green-200 hover:text-white transition-colors"
          >
            <XMarkIcon className="w-5 h-5" />
          </button>
        </div>
      </div>
    </motion.div>
  );
}

export default function CalculatorPage() {
  const [currentStep, setCurrentStep] = useState<Step>('info');
  const [showSuccess, setShowSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<{[key: string]: string}>({});
  const [formData, setFormData] = useState<FormData>({
    companyName: '',
    contactName: '',
    email: '',
    phone: '',
    revenue: 0,
    projectDescription: ''
  });

  const recaptchaRef = useRef<ReCAPTCHA>(null);

  const validateFields = (step: Step): boolean => {
    const newErrors: {[key: string]: string} = {};

    if (step === 'info') {
      if (!formData.contactName) newErrors.contactName = 'Votre nom est requis';
      if (!formData.email) {
        newErrors.email = 'Votre email est requis';
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
        newErrors.email = 'L\'email n\'est pas valide';
      }
      if (!formData.revenue) newErrors.revenue = 'Votre chiffre d\'affaires est requis';
      if (!formData.projectDescription) newErrors.projectDescription = 'Une brève description est requise';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNextStep = () => {
    if (validateFields(currentStep)) {
      setCurrentStep('review');
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrors({});

    try {
      const captchaToken = recaptchaRef.current?.getValue();
      if (!captchaToken) {
        setErrors({ captcha: 'Veuillez valider le CAPTCHA' });
        return;
      }

      const price = calculatePrice();
      
      const contactData = {
        name: formData.contactName,
        email: formData.email,
        phone: formData.phone,
        company: formData.companyName,
        projectType: "Site Web Pro",
        description: `
Chiffre d'affaires: ${formData.revenue}€
Prix estimé: ${price}€

Description du projet:
${formData.projectDescription}`,
        features: [],
        budget: `${price}€`,
        timeline: "À définir",
        captchaToken
      };

      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(contactData),
      });

      if (!response.ok) {
        const errorData = await response.text();
        throw new Error(errorData || 'Une erreur est survenue');
      }

      const data = await response.json();
      if (data.error) {
        throw new Error(data.error);
      }

      setShowSuccess(true);
      
      setTimeout(() => {
        setFormData({
          companyName: '',
          contactName: '',
          email: '',
          phone: '',
          revenue: 0,
          projectDescription: ''
        });
        setCurrentStep('info');
        recaptchaRef.current?.reset();
      }, 2000);
    } catch (error: any) {
      console.error('Erreur lors de l\'envoi:', error);
      setErrors({ submit: error.message || 'Une erreur est survenue lors de l\'envoi. Veuillez réessayer.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  const calculatePrice = () => {
    // Prix de base minimum
    const basePrice = 500;
    
    // Calcul en fonction du CA
    let price = formData.revenue * 0.05;
    
    // On prend le maximum entre le prix calculé et le prix de base
    price = Math.max(basePrice, price);
    
    // Arrondir au multiple de 100 le plus proche
    price = Math.round(price / 100) * 100;
    
    return price.toLocaleString('fr-FR');
  };

  const renderStep = () => {
    switch (currentStep) {
      case 'info':
        return (
          <motion.div
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.2 }}
            className="space-y-6"
          >
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Votre nom
                </label>
                <input
                  type="text"
                  value={formData.contactName}
                  onChange={e => setFormData(prev => ({ ...prev, contactName: e.target.value }))}
                  className={`w-full px-4 py-2 bg-gray-900 border rounded-lg text-white ${
                    errors.contactName ? 'border-red-500' : 'border-gray-700'
                  }`}
                  placeholder="Prénom Nom"
                />
                {errors.contactName && (
                  <p className="mt-1 text-sm text-red-500">{errors.contactName}</p>
                )}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={e => setFormData(prev => ({ ...prev, email: e.target.value }))}
                  className={`w-full px-4 py-2 bg-gray-900 border rounded-lg text-white ${
                    errors.email ? 'border-red-500' : 'border-gray-700'
                  }`}
                  placeholder="votre@email.fr"
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-500">{errors.email}</p>
                )}
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Téléphone (optionnel)
                </label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={e => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                  className="w-full px-4 py-2 bg-gray-900 border border-gray-700 rounded-lg text-white"
                  placeholder="06 12 34 56 78"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Entreprise (optionnel)
                </label>
                <input
                  type="text"
                  value={formData.companyName}
                  onChange={e => setFormData(prev => ({ ...prev, companyName: e.target.value }))}
                  className="w-full px-4 py-2 bg-gray-900 border border-gray-700 rounded-lg text-white"
                  placeholder="Nom de votre entreprise"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Chiffre d'affaires annuel (€)
              </label>
              <input
                type="number"
                value={formData.revenue || ''}
                onChange={e => setFormData(prev => ({ ...prev, revenue: Number(e.target.value) }))}
                className={`w-full px-4 py-2 bg-gray-900 border rounded-lg text-white ${
                  errors.revenue ? 'border-red-500' : 'border-gray-700'
                }`}
                placeholder="10000"
              />
              {errors.revenue && (
                <p className="mt-1 text-sm text-red-500">{errors.revenue}</p>
              )}
              <p className="mt-1 text-sm text-gray-400">
                Cette information nous permet de calculer un prix adapté à votre budget
              </p>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Décrivez brièvement votre projet
              </label>
              <textarea
                value={formData.projectDescription}
                onChange={e => setFormData(prev => ({ ...prev, projectDescription: e.target.value }))}
                className={`w-full px-4 py-2 bg-gray-900 border rounded-lg text-white ${
                  errors.projectDescription ? 'border-red-500' : 'border-gray-700'
                } h-32`}
                placeholder="Dites-nous en quelques mots ce que vous souhaitez pour votre site web..."
              />
              {errors.projectDescription && (
                <p className="mt-1 text-sm text-red-500">{errors.projectDescription}</p>
              )}
            </div>

            <div className="flex justify-end">
              <button
                onClick={handleNextStep}
                className="px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors inline-flex items-center space-x-2"
              >
                <span>Voir mon devis</span>
                <ArrowRightIcon className="w-5 h-5" />
              </button>
            </div>
          </motion.div>
        );

      case 'review':
        return (
          <motion.div
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.2 }}
            className="space-y-8"
          >
            <div className="bg-gray-900/50 p-8 rounded-lg border border-gray-800">
              <h3 className="text-2xl font-bold text-white mb-6">Récapitulatif</h3>
              
              <div className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-sm font-medium text-gray-400 mb-1">Contact</h4>
                    <p className="text-white">{formData.contactName}</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-gray-400 mb-1">Email</h4>
                    <p className="text-white">{formData.email}</p>
                  </div>
                </div>

                <div>
                  <h4 className="text-sm font-medium text-gray-400 mb-1">Description du projet</h4>
                  <p className="text-white">{formData.projectDescription}</p>
                </div>

                <div className="pt-6 border-t border-gray-800">
                  <div className="text-center">
                    <h4 className="text-sm font-medium text-gray-400 mb-2">Prix estimé de votre site</h4>
                    <div className="text-4xl font-bold text-primary">{calculatePrice()}€ HT</div>
                    <p className="text-sm text-gray-400 mt-2">
                      Ce prix inclut le design, le développement, l'hébergement et la maintenance
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-900/50 p-6 rounded-lg border border-gray-800">
              <h4 className="text-lg font-bold text-white mb-4">Ce qui est inclus</h4>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  'Design personnalisé',
                  'Responsive (mobile, tablette, PC)',
                  'Hébergement premium',
                  'Nom de domaine offert',
                  'Emails professionnels',
                  'Certificat SSL (HTTPS)',
                  'Maintenance technique',
                  'Support prioritaire'
                ].map((feature, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <CheckCircleIcon className="w-5 h-5 text-primary" />
                    <span className="text-gray-300">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              {errors.submit && (
                <div className="bg-red-900/50 border border-red-800 text-red-200 px-4 py-3 rounded">
                  {errors.submit}
                </div>
              )}

              <div className="flex justify-center">
                <ReCAPTCHA
                  ref={recaptchaRef}
                  sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!}
                  theme="dark"
                />
              </div>

              <div className="flex justify-between">
                <button
                  onClick={() => setCurrentStep('info')}
                  className="px-6 py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors"
                >
                  Retour
                </button>
                <button
                  onClick={handleSubmit}
                  disabled={isSubmitting}
                  className={`
                    px-8 py-3 bg-primary text-white rounded-lg transition-colors inline-flex items-center space-x-2
                    ${isSubmitting ? 'opacity-50 cursor-not-allowed' : 'hover:bg-primary/90'}
                  `}
                >
                  <span>{isSubmitting ? 'Envoi en cours...' : 'Valider mon projet'}</span>
                  <ArrowRightIcon className="w-5 h-5" />
                </button>
              </div>
            </div>
          </motion.div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gray-950 py-16 px-4">
      <AnimatePresence>
        {showSuccess && (
          <SuccessNotification 
            show={showSuccess} 
            onClose={() => setShowSuccess(false)} 
          />
        )}
      </AnimatePresence>

      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8 md:mb-12">
          <h1 className="text-2xl md:text-4xl font-bold text-white mb-4">
            Calculez le Prix de Votre Site Web
          </h1>
          <p className="text-gray-400 text-sm md:text-base">
            Un prix adapté à votre budget, sans compromis sur la qualité
          </p>
        </div>

        {/* Progress Steps */}
        <div className="mb-8 md:mb-12">
          <div className="flex items-center justify-center space-x-2 md:space-x-4">
            {[
              { id: 'info', label: 'Informations' },
              { id: 'review', label: 'Récapitulatif' }
            ].map((step, index) => (
              <div key={step.id} className="flex items-center">
                <div
                  className={`
                    w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center text-sm md:text-base
                    ${currentStep === step.id ? 'bg-primary text-white' : 'bg-gray-800 text-gray-400'}
                  `}
                >
                  {index + 1}
                </div>
                <span className="ml-2 text-xs md:text-sm font-medium text-gray-400">{step.label}</span>
                {index < 1 && (
                  <div className="w-8 md:w-12 h-px bg-gray-800 mx-2 md:mx-4" />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Contenu du formulaire */}
        <div className="bg-gray-900/30 backdrop-blur-sm p-8 rounded-xl border border-gray-800/50">
          {renderStep()}
        </div>
      </div>
    </div>
  );
}
