import { useEffect, useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ThemeToggle from './ThemeToggle';
import { FiMenu, FiX, FiHome, FiUser, FiBriefcase, FiBook, FiMail, FiCode, FiChevronDown, FiGlobe } from 'react-icons/fi';
import { useI18n } from '../i18n/index.jsx';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('#hero');

  const logoUrl = `${import.meta.env.BASE_URL}logoJuan.png`;

  const { language, toggleLanguage, t } = useI18n();

  const navLinks = useMemo(
    () => [
      {
        href: '#hero',
        label: t('nav.home'),
        icon: <FiHome className="w-4 h-4" />
      },
      {
        href: '#about',
        label: t('nav.about'),
        icon: <FiUser className="w-4 h-4" />
      },
      {
        href: '#projects',
        label: t('nav.projects'),
        icon: <FiCode className="w-4 h-4" />
      },
      {
        href: '#work-experience',
        label: t('nav.experience'),
        icon: <FiBriefcase className="w-4 h-4" />
      },
      {
        href: '#education',
        label: t('nav.education'),
        icon: <FiBook className="w-4 h-4" />
      },
      {
        href: '#contact',
        label: t('nav.contact'),
        icon: <FiMail className="w-4 h-4" />
      }
    ],
    [t]
  );

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 20);
      
      // Update active section based on scroll position
      const sections = navLinks.map(link => link.href.substring(1));
      const scrollPosition = window.scrollY + 100;
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(`#${section}`);
            break;
          }
        }
      }
    }
    
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    // Close mobile menu on resize to desktop
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(false);
      }
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const navbarVariants = {
    hidden: { y: -100 },
    visible: { 
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const menuVariants = {
    closed: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    },
    open: {
      opacity: 1,
      height: "auto",
      transition: {
        duration: 0.4,
        ease: "easeInOut"
      }
    }
  };

  const navItemVariants = {
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.2
      }
    }
  };

  const scrollToSection = (href) => {
    setIsOpen(false);
    const element = document.getElementById(href.substring(1));
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  return (
    <motion.header
      initial="hidden"
      animate="visible"
      variants={navbarVariants}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl shadow-xl' 
          : 'bg-white/90 dark:bg-slate-900/90 backdrop-blur-lg'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo/Brand */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex-shrink-0"
          >
            <a 
              href="#hero" 
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('#hero');
              }}
              className="flex items-center gap-3 group"
            >
              {/* Logo Container */}
              <div className="relative">
                {/* Logo with subtle background for contrast */}
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-gray-100 to-gray-50 dark:from-gray-800 dark:to-gray-900 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-sm border border-gray-200 dark:border-gray-700">
                  <img 
                    src={logoUrl}
                    alt="Juan Di Benedetto Logo"
                    className="w-8 h-8 object-contain filter dark:invert dark:brightness-200"
                  />
                </div>
                
                {/* Availability indicator */}
                <div className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-green-500 border-2 border-white dark:border-gray-900"></div>
                <div className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-green-500 animate-ping opacity-75"></div>
              </div>
              
              {/* Brand Text */}
              <div className="hidden md:block">
                <div className="flex items-center gap-2">
                  <span className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-primary transition-colors duration-300">
                    Juan Di Benedetto
                  </span>
                  <div className="w-6 h-1 bg-gradient-to-r from-primary to-purple-600 rounded-full"></div>
                </div>
               
              </div>
            </a>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-4">
            {/* Navigation Links */}
            <div className="flex items-center bg-gray-100 dark:bg-gray-800 rounded-full px-1 py-1">
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(link.href);
                  }}
                  variants={navItemVariants}
                  whileHover="hover"
                  className={`relative px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    activeSection === link.href
                      ? 'text-white bg-gradient-to-r from-primary to-purple-600 shadow-lg'
                      : 'text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary'
                  }`}
                >
                  <div className="flex items-center gap-2">
                    {link.icon}
                    {link.label}
                  </div>
                  
                  {activeSection === link.href && (
                    <motion.div
                      layoutId="activeNavIndicator"
                      className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-primary rounded-full"
                    />
                  )}
                </motion.a>
              ))}
            </div>

            {/* Separator */}
            <div className="w-px h-8 bg-gradient-to-b from-gray-300 to-gray-400 dark:from-gray-700 dark:to-gray-600 mx-2"></div>

            {/* Theme Toggle */}
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="relative"
            >
              <ThemeToggle />
            </motion.div>

            {/* Language Toggle */}
            <motion.button
              type="button"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={toggleLanguage}
              aria-label={t('langSwitchAria')}
              className="p-2 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors flex items-center gap-2"
            >
              <FiGlobe className="w-4 h-4" />
              <span className="text-xs font-semibold">
                {language === 'en' ? 'ES' : 'EN'}
              </span>
            </motion.button>

            {/* CTA Button */}
            <motion.a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('#contact');
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="ml-2 px-5 py-2.5 bg-gradient-to-r from-primary to-purple-600 text-white rounded-full font-semibold text-sm hover:shadow-lg hover:shadow-primary/25 transition-all duration-300 flex items-center gap-2"
            >
              {t('navbar.hireMe')}
              <FiChevronDown className="w-4 h-4 rotate-270" />
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-4">
            <ThemeToggle />

            <motion.button
              type="button"
              whileTap={{ scale: 0.9 }}
              onClick={toggleLanguage}
              aria-label={t('langSwitchAria')}
              className="p-2 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors flex items-center gap-2"
            >
              <FiGlobe className="w-5 h-5" />
              <span className="text-xs font-semibold">
                {language === 'en' ? 'ES' : 'EN'}
              </span>
            </motion.button>
            
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <FiX className="w-6 h-6" />
              ) : (
                <FiMenu className="w-6 h-6" />
              )}
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              variants={menuVariants}
              initial="closed"
              animate="open"
              exit="closed"
              className="md:hidden overflow-hidden"
            >
              <div className="px-2 pt-2 pb-4 space-y-1 bg-white dark:bg-gray-800 rounded-2xl mt-2 shadow-2xl border border-gray-200 dark:border-gray-700">
                {navLinks.map((link) => (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(link.href);
                    }}
                    className={`flex items-center gap-3 px-4 py-3 rounded-lg text-base font-medium transition-all duration-200 ${
                      activeSection === link.href
                        ? 'bg-gradient-to-r from-primary to-purple-600 text-white shadow-lg'
                        : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                    }`}
                    whileHover={{ x: 5 }}
                  >
                    <div className={`p-2 rounded-lg ${
                      activeSection === link.href 
                        ? 'bg-white/20' 
                        : 'bg-gray-100 dark:bg-gray-700'
                    }`}>
                      {link.icon}
                    </div>
                    {link.label}
                    {activeSection === link.href && (
                      <div className="ml-auto w-2 h-2 rounded-full bg-white animate-pulse"></div>
                    )}
                  </motion.a>
                ))}
                
                {/* Mobile CTA */}
                <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
                  <motion.a
                    href="#contact"
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection('#contact');
                      setIsOpen(false);
                    }}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="block w-full px-4 py-3 text-center bg-gradient-to-r from-primary to-purple-600 text-white rounded-lg font-semibold shadow-lg"
                  >
                    {t('nav.contact')}
                  </motion.a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Active Section Indicator (Desktop) */}
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: scrolled ? '100%' : '0%' }}
        transition={{ duration: 0.5 }}
        className="hidden md:block absolute bottom-0 left-0 right-0 h-1 overflow-hidden"
      >
        <div className="h-full bg-gradient-to-r from-primary via-purple-600 to-primary"></div>
      </motion.div>
    </motion.header>
  );
}