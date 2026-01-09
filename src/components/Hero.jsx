import { useEffect, useState, useRef } from 'react'
// ...existing code...
import { motion } from 'framer-motion'
import { TypeAnimation } from 'react-type-animation'
import { useI18n } from '../i18n/index.jsx'
import { useTheme } from '../context/ThemeContext.jsx'

export default function Hero() {
  const { t, language } = useI18n();
  const { theme } = useTheme();
  const videoRef = useRef(null);

  const roles = t('hero.roles');
  const roleSequence = Array.isArray(roles)
    ? roles.flatMap((role) => [role, 1500, { delete: String(role).length }])
    : [];

  useEffect(() => {
    const el = videoRef.current;
    if (theme === 'dark' && el) {
      el.play().catch(() => {});
    }
  }, [theme]);

  const showVideo = theme === 'dark';

  return (
    <section
      id="hero"
      className="relative w-full overflow-hidden flex items-center justify-center min-h-screen py-16 md:py-20"
    >
      {/* Video de fondo */}
      {showVideo && (
        <div className="absolute top-0 left-0 w-full h-full z-0 overflow-hidden pointer-events-none">
          <video
            ref={videoRef}
            className="absolute top-0 left-0 w-full h-full object-cover brightness-110 contrast-110"
            src="/assets/Portfolio_Hero_Video_Generation.mp4"
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            aria-hidden="true"
          />
          <div className="absolute top-0 left-0 w-full h-full bg-slate-900/30 dark:bg-slate-950/40" />
        </div>
      )}

      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="max-w-4xl mx-auto text-center"
        >
          {/* Nombre fijo */}
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className={`group text-5xl md:text-6xl lg:text-7xl font-extrabold ${theme === 'dark' ? 'text-white' : 'text-gray-900 dark:text-white'} transition-colors duration-500 ease-in-out cursor-pointer mb-6`}
          >
            <span className={`${theme === 'dark' ? 'text-white' : 'text-gray-900 dark:text-white'} dark:group-hover:text-[#079b98] transition-colors duration-500 ease-in-out`}>Juan</span>
            {' '}
            <span className={`${theme === 'dark' ? 'text-white' : (theme === 'dark' ? 'text-blue-500 dark:text-blue-400' : 'text-primary')} dark:group-hover:text-[#079b98] transition-colors duration-500 ease-in-out`}>Di Benedetto</span>
          </motion.h1>

          {/* Texto animado de profesiones */}
          <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-700 dark:text-gray-300 min-h-[80px] md:min-h-[90px] mb-8">
            <TypeAnimation
              key={language}
              sequence={[...roleSequence, '', 1000]}
              wrapper="span"
              speed={50}
              cursor={true}
              repeat={Infinity}
            />
          </div>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="max-w-2xl mx-auto text-lg md:text-xl text-gray-600 dark:text-white mb-10"
          >
            {t('hero.intro')}
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a 
              href="#projects" 
              className="inline-flex items-center justify-center px-6 py-3 rounded-md bg-primary text-white hover:opacity-95 text-lg font-medium transition-all duration-300 hover:scale-105"
            >
              {t('hero.ctaProjects')}
            </a>
            <a 
              href="#contact" 
              className="inline-flex items-center justify-center px-6 py-3 rounded-md border-2 border-slate-300 dark:border-slate-600 text-lg font-medium transition-all duration-300 hover:scale-105 hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              {t('hero.ctaContact')}
            </a>
          </motion.div>

          {/* ...eliminado botón de play/pausa... */}

        </motion.div>
      </div>
    </section>
  )
}