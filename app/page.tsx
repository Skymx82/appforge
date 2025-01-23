import dynamic from 'next/dynamic';
import Header from './components/Header';
import Footer from './components/Footer';
import ContactButton from './components/ContactButton';

const VideoSection = dynamic(() => import('./components/VideoSection'));
const ServicesSection = dynamic(() => import('./components/ServicesSection'));
const ProjectsSection = dynamic(() => import('./components/ProjectsSection'));
const TestimonialsSection = dynamic(() => import('./components/TestimonialsSection'));

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-950">
      <Header />

      {/* Hero Section */}
      <section className="pt-24 md:pt-32 pb-16 px-4 md:px-6 bg-gray-950">
        <div className="container mx-auto">
          <div className="text-center">
            <span className="bg-primary/10 text-primary px-4 py-1 rounded-full text-sm mb-6 inline-block">
              Applications de fidélisation
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-6xl font-bold mb-4 md:mb-6 leading-tight text-white">
              Votre Application<br className="hidden md:block" /> Sur Mesure
            </h2>
            <p className="text-lg md:text-xl text-gray-400 mb-8 max-w-2xl mx-auto px-4">
              Du commerce local à la grande entreprise,<br className="hidden md:block" />
              nous créons votre application à partir de 1 500€ HT
            </p>
            <ContactButton />
          </div>

          {/* Prix indicatifs */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mt-12 md:mt-16">
            {[
              {
                title: 'Démarrage',
                price: '1 500€ HT',
                monthly: '50€ HT/mois'
              },
              {
                title: 'Essentielle',
                price: '3 000€ HT',
                monthly: '90€ HT/mois'
              },
              {
                title: 'Avancée',
                price: '5 000€ HT',
                monthly: '150€ HT/mois',
                highlighted: true
              },
              {
                title: 'Premium',
                price: '7 000€ HT',
                monthly: '250€ HT/mois'
              }
            ].map((plan, index) => (
              <div
                key={index}
                className={`
                  p-6 rounded-lg border transition-colors
                  ${plan.highlighted
                    ? 'border-primary/30 bg-primary/5'
                    : 'border-gray-800 bg-gray-900/50'}
                `}
              >
                <h3 className="text-xl font-bold text-white mb-2">{plan.title}</h3>
                <div className="flex flex-col">
                  <span className="text-2xl font-bold text-primary">{plan.price}</span>
                  <span className="text-sm text-gray-400">+ {plan.monthly}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <VideoSection />
      <ServicesSection />
      <ProjectsSection />
      <TestimonialsSection />
      <Footer />
    </main>
  );
}
