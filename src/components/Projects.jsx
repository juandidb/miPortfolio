import React from 'react';
import ProjectCard from './ProjectCard';
import { projects } from '../data/projects';
import { motion } from 'framer-motion';
import { Github } from 'lucide-react';
import { useI18n } from '../i18n/index.jsx';
import { Link } from 'react-router-dom';

export default function Projects() {
  const { language, t } = useI18n();

  const localizedProjects = projects.map((p) => ({
    ...p,
    title: typeof p.title === 'object' ? (p.title?.[language] ?? p.title?.en ?? '') : p.title,
    description:
      typeof p.description === 'object'
        ? (p.description?.[language] ?? p.description?.en ?? '')
        : p.description,
    category: typeof p.category === 'object' ? (p.category?.[language] ?? p.category?.en ?? '') : p.category
  }));
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="projects" className="min-h-screen py-20 md:py-28 bg-gradient-to-b from-white to-gray-50 dark:from-slate-900 dark:to-slate-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header con animación (texto + SVG) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <div className="w-full">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              {t('projects.titleA')} <span className="text-primary">{t('projects.titleB')}</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              {t('projects.subtitle')}
            </p>

            {/* Indicador de sección */}
            <div className="mt-8 inline-block">
              <div className="w-24 h-1 bg-gradient-to-r from-primary to-purple-600 rounded-full mx-auto"></div>
              <div className="w-16 h-1 bg-gradient-to-r from-purple-600 to-primary rounded-full mt-1 mx-auto"></div>
            </div>
          </div>
        </motion.div>

        {/* Grid de proyectos */}
        {/* Caso destacado (Featured) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="mb-12"
        >
          <div className="bg-white dark:bg-slate-800 rounded-2xl overflow-hidden shadow-lg dark:shadow-none group transform transition-all duration-500 hover:scale-[1.02]">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
              <div className="md:col-span-1 relative">
                <img
                  src={`${import.meta.env.BASE_URL}assets/proyectos/9delivery.png`}
                  alt="Caso destacado - interfaz tablet con paleta oscura"
                  className="w-full h-56 md:h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/35 to-transparent dark:from-black/40 pointer-events-none" />
              </div>
              <div className="p-6 md:col-span-2 flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-2">
                  <span className="inline-block text-sm font-semibold text-primary">{t('projects.featured.badge')}</span>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-3">
                  {t('projects.featured.title')}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {t('projects.featured.short')}
                </p>
                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {((t('projects.featured.chips') || [])).map((d, i) => (
                      <span key={i} className="text-sm px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-700 text-gray-700 dark:text-gray-200">{d}</span>
                    ))}
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Link to="/case/deli-app" className="inline-flex items-center px-5 py-2 rounded-md bg-primary text-white font-medium hover:opacity-95 transition">{t('projects.featured.cta')}</Link>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8"
        >
          {localizedProjects.map((project, index) => (
            <motion.div key={project.id} variants={itemVariants}>
              <ProjectCard 
                project={project} 
                index={index}
              />
            </motion.div>
          ))}
        </motion.div>



        {/* CTA adicional */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center mt-20 pt-10 border-t border-gray-200 dark:border-gray-800"
        >
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            {t('projects.ctaText')}
          </p>
          <a
            href="https://github.com/juandidb"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-lg font-semibold hover:bg-gray-800 dark:hover:bg-gray-100 transition-all duration-300 hover:scale-105 hover:shadow-lg"
          >
            <Github className="w-5 h-5" />
            {t('projects.ctaButton')}
          </a>
        </motion.div>
      </div>
    </section>
  );
}