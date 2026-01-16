import { useEffect, useState, useRef } from 'react'
import lottie from 'lottie-web'
import { motion, AnimatePresence } from 'framer-motion' 
import { useI18n } from '../i18n/index.jsx'
import { useTheme } from '../context/ThemeContext.jsx'

export default function Hero() {
  const { t, language } = useI18n();
  const { theme } = useTheme();
  const videoRef = useRef(null);
  const heroVidRef = useRef(null);
  const lottieContainerRef = useRef(null);
  const lottieAnimRef = useRef(null);
  const lottieFlameContainerRef = useRef(null);
  const lottieFlameAnimRef = useRef(null);
  const lottieLightBgContainerRef = useRef(null);
  const lottieLightBgAnimRef = useRef(null);

  const roles = t('hero.roles');
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    // rotate roles with a smooth fade
    if (!Array.isArray(roles) || roles.length === 0) return;
    setRoleIndex(0);
    const id = setInterval(() => {
      setRoleIndex((i) => (i + 1) % roles.length);
    }, 2000);
    return () => clearInterval(id);
  }, [roles, language]);

  // Background video disabled — no autoplay or rendering in any theme
  const showVideo = false;

  const handleHeroVideoClick = () => {
    const el = heroVidRef.current;
    if (!el) return;

    try {
      // increase playback speed for a short burst
      el.playbackRate = 2.0;

      // after 900ms restore normal speed
      setTimeout(() => {
        el.playbackRate = 1.0;
      }, 900);
    } catch (e) {
      // ignore
    }
  };

  const handleHeroLottieClick = () => {
    const anim = lottieAnimRef.current;
    if (!anim) return;
    try {
      anim.setSpeed(2.0);
      setTimeout(() => {
        anim.setSpeed(1.0);
      }, 900);
    } catch (e) {
      // ignore
    }
  };

  useEffect(() => {
    // load Lottie animation only for light theme (main hero lottie)
    if (theme !== 'dark' && lottieContainerRef.current) {
      const anim = lottie.loadAnimation({
        container: lottieContainerRef.current,
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: `${import.meta.env.BASE_URL}assets/animaciones/animacionhero.json`,
      });
      lottieAnimRef.current = anim;
      return () => {
        anim.destroy();
        lottieAnimRef.current = null;
      };
    }
  }, [theme]);

  useEffect(() => {
    // load a background Lottie for light theme behind the main animation
    if (theme !== 'dark' && lottieLightBgContainerRef.current) {
      const bg = lottie.loadAnimation({
        container: lottieLightBgContainerRef.current,
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: `${import.meta.env.BASE_URL}assets/animaciones/vivid-green-room-with-a-window.json`,
      });
      lottieLightBgAnimRef.current = bg;
      return () => {
        bg.destroy();
        lottieLightBgAnimRef.current = null;
      };
    }
  }, [theme]);

  useEffect(() => {
    // load a subtle starfield Lottie only for dark theme
    if (theme === 'dark' && lottieFlameContainerRef.current) {
      const flame = lottie.loadAnimation({
        container: lottieFlameContainerRef.current,
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: `${import.meta.env.BASE_URL}assets/animaciones/flame-480.json`,
      });
      lottieFlameAnimRef.current = flame;
      return () => {
        flame.destroy();
        lottieFlameAnimRef.current = null;
      };
    }
  }, [theme]);

  const lottieStyle = {
    cursor: 'pointer',
    filter:
      theme === 'dark'
        ? 'invert(1) hue-rotate(170deg) brightness(1.05) saturate(0.9)'
        : undefined,
  };

  const handleScrollToProjects = (e) => {
    if (e && e.preventDefault) e.preventDefault();
    const el = document.getElementById('projects');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
      // fallback: update hash (useful if element not mounted)
      window.location.hash = '#projects';
    }
  };

  const handleScrollToContact = (e) => {
    if (e && e.preventDefault) e.preventDefault();
    const el = document.getElementById('contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
      window.location.hash = '#contact';
    }
  };

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
          src={`${import.meta.env.BASE_URL}assets/Portfolio_Hero_Video_Generation.mp4`}
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

      {/* Decorative SVG background (positioned to the right) */}
      {/* decorative background removed */}

      {/* Subtle textured overlay (minimalist pattern) - always present */}
      <div
        className="absolute top-0 left-0 w-full h-full pointer-events-none"
        style={{
          zIndex: 5,
          backgroundImage:
            theme === 'dark'
              ? "repeating-linear-gradient(135deg, rgba(255,255,255,0.04) 0px, rgba(255,255,255,0.04) 1px, transparent 1px, transparent 18px)"
              : "repeating-linear-gradient(135deg, rgba(0,0,0,0.10) 0px, rgba(0,0,0,0.10) 1px, transparent 1px, transparent 18px)",
          opacity: theme === 'dark' ? 0.08 : 0.12,
          mixBlendMode: theme === 'dark' ? 'screen' : 'normal',
        }}
      />

      {/* Starfield background for dark theme (section-level, avoids clipping) */}
      <div
        ref={lottieFlameContainerRef}
        aria-hidden="true"
        className="pointer-events-none"
        style={{
          position: 'absolute',
          /* keep starfield below header to avoid clipping/obstruction; shifted up additional 7px */
          top: 'calc(var(--header-offset, 72px) - 39px)',
          left: 'calc(30% - 99px)',
          width: 'calc(95% + 55px)',
          height: 'calc(100% - var(--header-offset, 72px) + 39px)',
          zIndex: 2,
          mixBlendMode: 'screen',
          opacity: theme === 'dark' ? 0.45 : 0,
          filter: 'brightness(0.95) saturate(1.05)',
          transform: 'rotate(90deg)',
          transformOrigin: '50% 50%',
          transition: 'opacity 300ms ease, transform 400ms ease'
        }}
      />

      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className={'max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-8 text-left'}
        >
          <div className="md:w-6/12 w-full pr-4 md:pr-6 pl-4 md:pl-6 flex flex-col justify-center items-center md:items-start text-center md:text-left py-6 md:py-12">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className={`relative group text-5xl md:text-6xl lg:text-7xl font-extrabold ${theme === 'dark' ? 'text-white' : 'text-gray-900 dark:text-white'} transition-colors duration-500 ease-in-out cursor-pointer mb-6`}
            >
              <span className={`${theme === 'dark' ? 'text-white' : 'text-gray-900 dark:text-white'} dark:group-hover:text-[#079b98] transition-colors duration-500 ease-in-out block`}>Juan</span>
              <span className={`${theme === 'dark' ? 'text-white' : (theme === 'dark' ? 'text-blue-500 dark:text-blue-400' : 'text-primary')} dark:group-hover:text-[#079b98] transition-colors duration-500 ease-in-out block`}>Di Benedetto</span>
              {/* Decorative SVG placed over the name */}
              {/* overlay decorative element removed */}
            </motion.h1>

            <div className="text-3xl md:text-4xl lg:text-5xl font-extrabold hero-font text-gray-700 dark:text-gray-300 leading-normal min-h-[72px] md:min-h-[84px] mb-6 overflow-hidden pb-1">
              <div className="inline-block">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={roleIndex}
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }}
                    transition={{ duration: 0.45 }}
                    className="inline-block truncate whitespace-nowrap"
                  >
                    {Array.isArray(roles) ? roles[roleIndex] : roles}
                  </motion.span>
                </AnimatePresence>
              </div>
            </div>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="max-w-2xl text-lg md:text-xl text-gray-600 dark:text-white mb-10"
            >
              {t('hero.intro')}
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className={theme === 'dark' ? 'flex flex-col sm:flex-row gap-4 justify-center' : 'flex flex-col sm:flex-row gap-4'}
            >
              <a
                href="#projects"
                onClick={handleScrollToProjects}
                className="inline-flex items-center justify-center px-6 py-3 rounded-md bg-primary text-white hover:opacity-95 text-lg font-medium transition-all duration-300 hover:scale-105"
              >
                {t('hero.ctaProjects')}
              </a>
              <a 
                href="#contact"
                onClick={handleScrollToContact}
                className="inline-flex items-center justify-center px-6 py-3 rounded-md border-2 border-slate-300 dark:border-slate-600 text-lg font-medium transition-all duration-300 hover:scale-105 hover:bg-gray-100 dark:hover:bg-gray-800"
              >
                {t('hero.ctaContact')}
              </a>
            </motion.div>
          </div>

          <div className="md:w-6/12 w-full hidden md:flex relative items-center justify-center overflow-hidden rounded-xl pr-4 md:pr-6">
            {theme === 'dark' ? (
              <>
              <video
                ref={heroVidRef}
                onClick={handleHeroVideoClick}
                onMouseDown={(e) => e.preventDefault()}
                tabIndex={-1}
                aria-hidden="true"
                className="relative z-10 w-full max-w-[920px] h-[70vh] md:h-[90vh] lg:h-[95vh] object-contain transition-transform duration-300 mx-auto"
                src={`${import.meta.env.BASE_URL}assets/3d-hygge-isometric-view-of-designers-desk-with-laptop-tablet-and-notebook.webm`}
                autoPlay
                loop
                muted
                playsInline
                preload="auto"
              />
              </>
            ) : (
              <div className="w-full max-w-[920px] h-[70vh] md:h-[90vh] lg:h-[95vh] transition-transform duration-300 mx-auto relative">
                <div
                  ref={lottieLightBgContainerRef}
                  aria-hidden="true"
                  className="pointer-events-none"
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    zIndex: 0,
                    opacity: 0.95,
                    filter: 'brightness(0.98)'
                  }}
                />
                <div
                  ref={lottieContainerRef}
                  onClick={handleHeroLottieClick}
                  onMouseDown={(e) => e.preventDefault()}
                  tabIndex={-1}
                  aria-hidden="true"
                  className="w-full h-full relative z-10"
                  style={lottieStyle}
                />
              </div>
            )}
          </div>

        </motion.div>
      </div>
    </section>
  )
}