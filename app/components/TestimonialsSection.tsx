'use client';

import { motion } from 'framer-motion';
import { StarIcon } from '@heroicons/react/24/solid';

const testimonials = [
  {
    name: 'Sophie Martin',
    role: 'CEO, TechStart',
    image: '/Sophie.jpg',
    content: 'AppForge a transformé notre idée en une application. Leur expertise technique et leur approche ont dépassé nos attentes.',
    rating: 5,
  },
  {
    name: 'Thomas Bernard',
    role: 'Founder, InnovLab',
    image: '/thomas.jpg',
    content: 'Une équipe incroyable qui a su comprendre nos besoins et livrer un produit de qualité dans les délais. Je recommande vivement !',
    rating: 5,
  },
  {
    name: 'Marie Dubois',
    role: 'CTO, DataFlow',
    image: '/Marie.jpg',
    content: 'La qualité du code et l\'attention aux détails sont impressionnantes. AppForge a vraiment élevé notre présence digitale à un autre niveau.',
    rating: 5,
  },
];

export default function TestimonialsSection() {
  return (
    <section className="relative py-16 md:py-24 bg-gray-950">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900/50 to-transparent"></div>
      <div className="container mx-auto px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h3 className="text-3xl font-bold text-white mb-4">Ce que disent nos clients</h3>
          <p className="text-gray-400">
            Découvrez les retours de nos clients satisfaits
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="relative bg-gray-900/50 backdrop-blur-sm p-6 rounded-lg border border-gray-800/50 hover:border-primary/30 transition-all"
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full overflow-hidden mr-4 border border-gray-800/50">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-bold text-white">{testimonial.name}</h4>
                  <p className="text-gray-400 text-sm">{testimonial.role}</p>
                </div>
              </div>
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <StarIcon key={i} className="h-5 w-5 text-primary/80" />
                ))}
              </div>
              <p className="text-gray-300 leading-relaxed">{testimonial.content}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
