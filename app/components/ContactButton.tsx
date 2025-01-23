'use client';

import { useRouter } from 'next/navigation';

type Props = {
  className?: string;
  children?: React.ReactNode;
};

export default function ContactButton({ className = '', children }: Props) {
  const router = useRouter();

  return (
    <button
      onClick={() => router.push('/contact')}
      className={`${className} w-full sm:w-auto bg-primary text-white px-8 py-3 rounded-lg font-semibold shadow-lg hover:bg-primary/90 transition-colors`}
    >
      {children || 'Demander un devis'}
    </button>
  );
}
