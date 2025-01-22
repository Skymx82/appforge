'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import '../styles/swiper.css';

const projects = [
  {
    title: "BBDBuy",
    description: "Une application qui facilite l'importation de produit réservé exclusivement aux chinois",
    mainImage: "/BBDBuy1.png",
    images: [
      "/BBDBuy2.png",
      "/BBDBuy3.png",
      "/BBDBuy4.png"
    ]
  },
  {
    title: "Portfolio",
    description: "Portfolio en ligne moderne avec une interface utilisateur intuitive et dynamique.",
    mainImage: "/Portfolio1.png",
    images: [
      "/Portfolio1.png",
      "/Portfolio2.png",
      "/Portfolio3.png",
    ]
  },
  // Vous pouvez ajouter autant de projets que vous voulez ici
];

export default function ProjectsSection() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleProject = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section className="py-16 md:py-24 bg-gray-950" id="projects">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h3 className="text-3xl font-bold text-white mb-4">Nos Projets</h3>
          <p className="text-gray-400">
            Découvrez nos réalisations et projets récents
          </p>
        </motion.div>

        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={24}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: Math.min(3, projects.length) }
          }}
          className="!pb-12"
        >
          {projects.map((project, projectIndex) => (
            <SwiperSlide key={projectIndex}>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
                viewport={{ once: true }}
                onClick={() => toggleProject(projectIndex)}
                className={`bg-gray-900 rounded-lg p-6 border border-gray-800 transition-all h-full cursor-pointer ${
                  expandedIndex === projectIndex ? 'ring-1 ring-primary/50' : 'hover:border-primary/30'
                }`}
              >
                <div className="flex flex-col h-full">
                  <div className="relative aspect-video rounded-lg overflow-hidden mb-4 border border-gray-800">
                    <Image
                      src={project.mainImage}
                      alt={project.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <h4 className="text-2xl font-bold text-white mb-4">{project.title}</h4>
                  <p className="text-gray-400 mb-4">{project.description}</p>

                  <AnimatePresence>
                    {expandedIndex === projectIndex && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="grid grid-cols-3 gap-2 mt-4"
                      >
                        {project.images.map((image, imageIndex) => (
                          <div key={imageIndex} className="relative aspect-video rounded-lg overflow-hidden border border-gray-800">
                            <Image
                              src={image}
                              alt={`${project.title} ${imageIndex + 1}`}
                              fill
                              className="object-cover"
                            />
                          </div>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
