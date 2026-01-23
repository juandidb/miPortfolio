import { motion } from 'framer-motion';
import { useState } from 'react';
import useIsMobile from '../hooks/useIsMobile.jsx';
import { Github, ExternalLink } from 'lucide-react';
import { useI18n } from '../i18n/index.jsx';

export default function ProjectCard({ project, index }) {
  const [isHovered, setIsHovered] = useState(false);
  const { t } = useI18n();

  const cardVariants = {
    initial: { 
      opacity: 0, 
      y: 30,
      scale: 0.95 
    },
    animate: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
        delay: index * 0.1
      }
    },
    hover: {
      y: -8,
      scale: 1.02,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    }
  };

  const techVariants = {
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.2
      }
    }
  };

  const isMobile = useIsMobile();

  const Article = isMobile ? 'article' : motion.article;

  return (
    <Article
      {...(!isMobile ? { variants: cardVariants, initial: 'initial', animate: 'animate', whileHover: 'hover' } : {})}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative h-full rounded-2xl overflow-hidden bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-lg hover:shadow-2xl transition-all duration-300"
    >
      {/* Efecto de gradiente en hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      
      {/* Imagen del proyecto (opcional - agregar a tu data de proyectos) */}
      {project.image && (
        <div className="relative h-48 overflow-hidden">
          <motion.img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
            animate={{
              scale: isHovered ? 1.1 : 1
            }}
            transition={{ duration: 0.5 }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
        </div>
      )}

      <div className="p-6 relative z-10">
        {/* Header con icono */}
        <div className="flex items-start justify-between mb-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <div className="w-3 h-3 rounded-full bg-primary"></div>
              <span className="text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                {project.category || t('projects.card.categoryFallback')}
              </span>
            </div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-primary transition-colors duration-300">
              {project.title}
            </h3>
          </div>
          
          {/* Número de proyecto */}
          <span className="text-4xl font-black text-gray-100 dark:text-gray-700 group-hover:text-gray-200 dark:group-hover:text-gray-600 transition-colors duration-300">
            {String(index + 1).padStart(2, '0')}
          </span>
        </div>

        {/* Descripción */}
        <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
          {project.description}
        </p>

        {/* Tecnologías */}
        <div className="mb-6">
          <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-400 mb-3">{t('projects.card.techTitle')}</h4>
          <div className="flex flex-wrap gap-2">
            {project.tech.map((tech) => (
              <motion.span
                key={tech}
                variants={techVariants}
                whileHover="hover"
                className="px-3 py-1.5 text-xs font-medium bg-gradient-to-r from-gray-100 to-gray-50 dark:from-gray-700 dark:to-gray-800 text-gray-700 dark:text-gray-300 rounded-lg border border-gray-200 dark:border-gray-600 shadow-sm"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </div>

        {/* Links */}
        <div className="flex items-center justify-between pt-4 border-t border-gray-100 dark:border-gray-700">
          <div className="flex items-center gap-4">
            {project.github && (
              <motion.a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors duration-300"
                whileHover={{ x: 3 }}
              >
                <Github className="w-5 h-5" />
                {t('projects.card.code')}
              </motion.a>
            )}
            
            {project.live && (
              <motion.a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors duration-300"
                whileHover={{ x: 3 }}
              >
                <ExternalLink className="w-5 h-5" />
                {project.id === 'carmax' ? 'Live Demo' : project.id === 'divdev-landing' ? 'Link' : t('projects.card.live')}
              </motion.a>
            )}
            {!project.github && !project.live && (
              <span className="flex items-center gap-2 text-sm font-medium text-gray-500 dark:text-gray-400">
                <ExternalLink className="w-5 h-5 opacity-60" />
                En desarrollo
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Indicador de hover */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-purple-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
    </Article>
  );
}