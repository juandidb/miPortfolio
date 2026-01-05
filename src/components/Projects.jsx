import React from 'react';
import ProjectCard from './ProjectCard';
import { projects } from '../data/projects';
import { motion } from 'framer-motion';
import { Github } from 'lucide-react';
import { useI18n } from '../i18n/index.jsx';

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
        {/* Header con animación */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            {t('projects.titleA')} <span className="text-primary">{t('projects.titleB')}</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            {t('projects.subtitle')}
          </p>
          
          {/* Indicador de sección */}
          <div className="mt-8 inline-block">
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-purple-600 rounded-full"></div>
            <div className="w-16 h-1 bg-gradient-to-r from-purple-600 to-primary rounded-full mt-1 ml-auto"></div>
          </div>
        </motion.div>

        {/* Grid de proyectos */}
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