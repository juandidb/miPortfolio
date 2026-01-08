import { useEffect, useState, useRef } from 'react'
import { PlayCircle, PauseCircle } from 'lucide-react';
import { motion } from 'framer-motion'
import { TypeAnimation } from 'react-type-animation'
import { useI18n } from '../i18n/index.jsx'
import { useTheme } from '../context/ThemeContext.jsx'

export default function Hero() {
  const { t, language } = useI18n();
  const { theme } = useTheme();
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);

  const roles = t('hero.roles');
  const roleSequence = Array.isArray(roles)
    ? roles.flatMap((role) => [role, 1500, { delete: String(role).length }])
    : [];

  useEffect(() => {
    const el = videoRef.current;
    const handlePlay = () => setIsPlaying(true);
    const handlePause = () => setIsPlaying(false);

    if (el) {
      el.addEventListener('play', handlePlay);
      el.addEventListener('pause', handlePause);
      // when theme switches to dark, try to play; otherwise pause
      if (theme === 'dark') {
        el.play().catch(() => {});
      } else {
        el.pause();
      }
    }

    return () => {
      if (el) {
        el.removeEventListener('play', handlePlay);
        el.removeEventListener('pause', handlePause);
      }
    };
  }, [theme]);

  const showVideo = theme === 'dark';

  return (
    <section
      id="hero"
      className="relative w-full overflow-hidden flex items-center justify-center min-h-[80vh] lg:min-h-screen py-16 md:py-20"
    >
      {/* Video de fondo */}
          {showVideo && (
        <div className="absolute top-0 left-0 w-full h-full z-0 overflow-hidden pointer-events-none">
          <video
                ref={videoRef}
                className="absolute top-0 left-0 w-full h-full object-cover brightness-110 contrast-110"
                src="assets/Portfolio_Hero_Video_Generation.mp4"
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
            className={`group text-5xl md:text-6xl lg:text-7xl font-extrabold ${theme === 'dark' && isPlaying ? 'text-white' : 'text-gray-900 dark:text-white'} transition-colors duration-500 ease-in-out cursor-pointer mb-6`}
          >
            <span className={`${theme === 'dark' && isPlaying ? 'text-white' : 'text-gray-900 dark:text-white'} dark:group-hover:text-[#079b98] transition-colors duration-500 ease-in-out`}>Juan</span>
            {' '}
            <span className={`${theme === 'dark' && isPlaying ? 'text-white' : (theme === 'dark' ? 'text-blue-500 dark:text-blue-400' : 'text-primary')} dark:group-hover:text-[#079b98] transition-colors duration-500 ease-in-out`}>Di Benedetto</span>
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
          

          {/* Botón minimalista para activar/desactivar animación (solo en dark, solo en Hero) */}
          {theme === 'dark' && (
            <motion.button
              initial={{ opacity: 0, x: 70 }}
              animate={{ opacity: 0.85, x: 30 }}
              whileHover={{ opacity: 1, scale: 1.1 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              onClick={() => {
                const vid = videoRef.current;
                if (!vid) return;
                if (isPlaying) {
                  vid.pause();
                } else {
                  vid.play().catch(() => {});
                }
              }}
              aria-label={isPlaying ? 'Pausa video' : 'Reproducir video'}
              className={
                "absolute z-20 p-1.5 rounded-full bg-slate-900/40 text-white border border-white/10 " +
                "hover:bg-slate-900/60 focus:outline-none transition-all duration-200 flex items-center justify-center " +
                "left-1/2 -translate-x-1/2 bottom-6 md:left-auto md:right-[22%] md:bottom-auto md:top-1/2 md:translate-x-0 md:-translate-y-1/2"
              }
            >
              {isPlaying ? <PauseCircle className="w-5 h-5" /> : <PlayCircle className="w-5 h-5" />}
            </motion.button>
          )}

        </motion.div>
      </div>
    </section>
  )
}