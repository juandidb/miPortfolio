import { useEffect, useState } from 'react'
import { PlayCircle, PauseCircle } from 'lucide-react';
import { motion } from 'framer-motion'
import { TypeAnimation } from 'react-type-animation'
import { useI18n } from '../i18n/index.jsx'
import { useTheme } from '../context/ThemeContext.jsx'

export default function Hero() {
  const { t, language } = useI18n();
  const { theme } = useTheme();
  const [videoActive, setVideoActive] = useState(false);
  const handleVideoEnded = () => {
    setVideoActive(false);
  };

  const roles = t('hero.roles');
  const roleSequence = Array.isArray(roles)
    ? roles.flatMap((role) => [role, 1500, { delete: String(role).length }])
    : [];

  useEffect(() => {
    if (theme !== 'dark') {
      setVideoActive(false);
    }
  }, [theme]);

  const showVideo = theme === 'dark' && videoActive;

  return (
    <section
      id="hero"
      className="relative w-full overflow-hidden flex items-center justify-center min-h-[80vh] lg:min-h-screen py-16 md:py-20"
    >
      {/* Video de fondo */}
      {showVideo && (
        <div className="absolute top-0 left-0 w-full h-full z-0 overflow-hidden pointer-events-none">
          <video
            className="absolute top-0 left-0 w-full h-full object-cover brightness-110 contrast-110"
            src="assets/Portfolio_Hero_Video_Generation.mp4"
            autoPlay
            muted
            playsInline
            preload="auto"
            aria-hidden="true"
            onEnded={handleVideoEnded}
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
            className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-gray-900 dark:text-white hover:text-primary dark:hover:text-primary transition-colors duration-300 cursor-pointer mb-6"
          >
            Juan <span className="text-primary">Di Benedetto</span>
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
            className="max-w-2xl mx-auto text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-10"
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
          

          {/* Botón minimalista para activar/desactivar animación (solo en dark, solo en Hero) */}
          {theme === 'dark' && (
            <motion.button
              initial={{ opacity: 0, x: 70 }}
              animate={{ opacity: 0.85, x: 30 }}
              whileHover={{ opacity: 1, scale: 1.1 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              onClick={() => setVideoActive((v) => !v)}
              aria-label={videoActive ? 'Desactivar animación' : 'Activar animación'}
              className="absolute top-1/2 right-[22%] z-20 p-1.5 rounded-full bg-slate-900/40 text-white border border-white/10 hover:bg-slate-900/60 focus:outline-none transition-all duration-200 flex items-center justify-center"
              style={{ transform: 'translateY(calc(-50% - 15px))' }}
            >
              {videoActive ? <PauseCircle className="w-5 h-5" /> : <PlayCircle className="w-5 h-5" />}
            </motion.button>
          )}

        </motion.div>
      </div>
    </section>
  )
}