'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircleIcon, XMarkIcon } from '@heroicons/react/24/outline';

interface SuccessNotificationProps {
  show: boolean;
  onClose: () => void;
}

export default function SuccessNotification({ show, onClose }: SuccessNotificationProps) {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50"
        >
          <div className="bg-green-900/90 backdrop-blur-sm text-white px-6 py-4 rounded-lg shadow-xl border border-green-700/50 flex items-center space-x-4">
            <CheckCircleIcon className="w-6 h-6 text-green-400" />
            <div>
              <h4 className="font-medium">Demande envoyée avec succès !</h4>
              <p className="text-sm text-green-200">
                Notre équipe vous contactera dans les plus brefs délais.
              </p>
            </div>
            <button
              onClick={onClose}
              className="ml-4 text-green-200 hover:text-white transition-colors"
            >
              <XMarkIcon className="w-5 h-5" />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
