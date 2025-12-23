import React from 'react';
import { motion } from 'framer-motion';
import { FiHeart, FiCoffee, FiCode, FiGithub, FiLinkedin, FiMail, FiArrowUp, FiMapPin, FiPhone } from 'react-icons/fi';
import { useI18n } from '../i18n';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const { t } = useI18n();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const socialLinks = [
    {
      icon: <FiGithub className="w-5 h-5" />,
      label: 'GitHub',
      url: 'https://github.com/juandidb',
      color: 'hover:bg-gray-800 hover:text-white dark:hover:bg-gray-700'
    },
    {
      icon: <FiLinkedin className="w-5 h-5" />,
      label: 'LinkedIn',
      url: 'https://linkedin.com/in/juan-di-benedetto',
      color: 'hover:bg-blue-600 hover:text-white'
    },
    {
      icon: <FiMail className="w-5 h-5" />,
      label: 'Email',
      url: 'mailto:juandibenedetto99@gmail.com',
      color: 'hover:bg-red-500 hover:text-white'
    }
  ];

  const contactInfo = [
    {
      icon: <FiMail className="w-4 h-4" />,
      value: 'juandibenedetto99@gmail.com',
      link: 'mailto:juandibenedetto99@gmail.com'
    },
    {
      icon: <FiPhone className="w-4 h-4" />,
      value: '+54 2317 471695',
      link: 'tel:+542317471695'
    },
    {
      icon: <FiMapPin className="w-4 h-4" />,
      value: t('contact.info.locationValue'),
      link: 'https://maps.google.com/?q=Buenos+Aires'
    }
  ];

  const techStack = [
    { name: 'React', icon: '⚛️', color: 'bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300' },
    { name: 'Tailwind CSS', icon: '🎨', color: 'bg-cyan-100 dark:bg-cyan-900/30 text-cyan-800 dark:text-cyan-300' },
    { name: 'Vite', icon: '⚡', color: 'bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-300' },
    { name: 'Framer Motion', icon: '✨', color: 'bg-pink-100 dark:bg-pink-900/30 text-pink-800 dark:text-pink-300' }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <footer className="relative bg-gradient-to-b from-white to-gray-50 dark:from-slate-900 dark:to-slate-900">
      {/* Gradient accent line */}
      <div className="h-1 w-full bg-gradient-to-r from-primary via-purple-600 to-primary"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="max-w-6xl mx-auto"
        >
          {/* Top Section with Logo */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            {/* Brand Section with Logo */}
            <motion.div variants={itemVariants} className="space-y-6">
              <div className="flex items-center gap-4">
                {/* Logo Container */}
                <div className="relative">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-gray-100 to-gray-50 dark:from-gray-800 dark:to-gray-900 flex items-center justify-center shadow-lg border border-gray-200 dark:border-gray-700">
                    {/* TU LOGO */}
                    <img 
                      src="/miPortfolio/logoJuan.png" 
                      alt="Juan Di Benedetto Logo"
                      className="w-10 h-10 object-contain filter dark:invert dark:brightness-200"
                    />
                  </div>
                  {/* Availability indicator */}
                  <div className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-green-500 border-2 border-white dark:border-gray-900"></div>
                </div>
                
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                    Juan Di Benedetto
                  </h3>
                  <div className="flex items-center gap-2 mt-1">
                    <div className="w-8 h-1 bg-gradient-to-r from-primary to-purple-600 rounded-full"></div>
                    <div className="w-4 h-1 bg-gradient-to-r from-purple-600 to-primary rounded-full"></div>
                  </div>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                    {t('footer.role')}
                  </p>
                </div>
              </div>
              
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                {t('footer.blurb')}
              </p>

              {/* Contact Info */}
              <div className="space-y-3">
                {contactInfo.map((info, index) => (
                  <a
                    key={index}
                    href={info.link}
                    className="flex items-center gap-3 text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors group"
                  >
                    <div className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 group-hover:bg-primary/10 transition-colors">
                      {info.icon}
                    </div>
                    <span className="text-sm font-medium">{info.value}</span>
                  </a>
                ))}
              </div>
            </motion.div>

            {/* Quick Links & Tech */}
            <motion.div variants={itemVariants} className="space-y-8">
              {/* Tech Stack */}
              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                  {t('footer.techStack')}
                </h4>
                <div className="grid grid-cols-2 gap-3">
                  {techStack.map((tech, index) => (
                    <div 
                      key={index}
                      className={`flex items-center gap-2 px-3 py-2 rounded-lg ${tech.color} border border-gray-200 dark:border-gray-700`}
                    >
                      <span className="text-lg">{tech.icon}</span>
                      <span className="text-sm font-medium">
                        {tech.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Social Links */}
              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                  {t('footer.connect')}
                </h4>
                <div className="flex gap-3">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      whileTap={{ scale: 0.9 }}
                      className={`p-3 rounded-xl border border-gray-300 dark:border-gray-700 
                        text-gray-700 dark:text-gray-300 transition-all duration-300 ${social.color}`}
                      aria-label={social.label}
                    >
                      {social.icon}
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Stats Section */}
            <motion.div variants={itemVariants}>
              <div className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 rounded-2xl p-6 border border-gray-200 dark:border-gray-700">
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">
                  {t('footer.statsTitle')}
                </h4>
                
                <div className="space-y-4">
                  {[
                    { label: t('footer.stats.years'), value: '5+', color: 'from-blue-500 to-cyan-500' },
                    { label: t('footer.stats.projects'), value: '50+', color: 'from-green-500 to-emerald-500' },
                    { label: t('footer.stats.satisfaction'), value: '100%', color: 'from-purple-500 to-pink-500' },
                    { label: t('footer.stats.response'), value: '< 24h', color: 'from-orange-500 to-red-500' }
                  ].map((stat, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</span>
                        <span className="text-lg font-bold text-gray-900 dark:text-white">{stat.value}</span>
                      </div>
                      <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                        <div 
                          className={`h-full rounded-full bg-gradient-to-r ${stat.color}`}
                          style={{ width: `${index === 3 ? '90' : index === 2 ? '100' : '80'}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Middle Separator */}
          <motion.div 
            variants={itemVariants}
            className="my-8 flex justify-center"
          >
            <div className="w-24 h-1 bg-gradient-to-r from-primary via-purple-600 to-primary rounded-full"></div>
          </motion.div>

          {/* Bottom Section */}
          <div className="pt-8 border-t border-gray-200 dark:border-gray-800">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
              {/* Copyright */}
              <motion.div
                variants={itemVariants}
                className="flex flex-col md:flex-row items-center gap-3 text-gray-600 dark:text-gray-400 text-sm"
              >
                <span>{t('footer.bottom.copyright', currentYear)}</span>
                
                <div className="hidden md:flex items-center gap-2">
                  <span className="text-xs">•</span>
                  <div className="flex items-center gap-1">
                    <FiHeart className="w-3 h-3 text-red-500 animate-pulse" />
                    <span>{t('footer.bottom.craftedWithPassion')}</span>
                  </div>
                  <span className="text-xs">•</span>
                  <div className="flex items-center gap-1">
                    <FiCoffee className="w-3 h-3 text-yellow-600" />
                    <span>{t('footer.bottom.andEndlessCoffee')}</span>
                  </div>
                </div>
              </motion.div>

              {/* Tech Badge */}
              <motion.div
                variants={itemVariants}
                className="flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-full border border-gray-200 dark:border-gray-700"
              >
                <FiCode className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  {t('footer.bottom.builtWithTech')}
                </span>
                <div className="ml-2 flex gap-1">
                  <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></div>
                  <div className="w-1.5 h-1.5 rounded-full bg-yellow-500"></div>
                  <div className="w-1.5 h-1.5 rounded-full bg-red-500"></div>
                </div>
              </motion.div>

              {/* Back to Top Button */}
              <motion.button
                onClick={scrollToTop}
                variants={itemVariants}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="group flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-primary to-purple-600 text-white rounded-full font-medium text-sm hover:shadow-lg hover:shadow-primary/25 transition-all duration-300"
                aria-label={t('footer.bottom.backToTopAria')}
              >
                <span>{t('footer.bottom.backToTop')}</span>
                <FiArrowUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform duration-300" />
              </motion.button>
            </div>

            {/* Mobile only text */}
            <motion.div
              variants={itemVariants}
              className="mt-6 md:hidden text-center text-xs text-gray-500 dark:text-gray-500"
            >
              <div className="flex items-center justify-center gap-2 mb-2">
                <FiHeart className="w-3 h-3 text-red-500" />
                <span>{t('footer.bottom.craftedWithPassion')}</span>
                <FiCoffee className="w-3 h-3 text-yellow-600" />
                <span>{t('footer.bottom.andEndlessCoffee')}</span>
              </div>
              <div className="flex items-center justify-center gap-3 text-xs text-gray-400 dark:text-gray-600">
                <span>{t('footer.bottom.accessibility')}</span>
                <div className="w-1 h-1 rounded-full bg-gray-400"></div>
                <span>{t('footer.bottom.responsive')}</span>
                <div className="w-1 h-1 rounded-full bg-gray-400"></div>
                <span>{t('footer.bottom.performant')}</span>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Floating back to top button for mobile */}
      <motion.button
        onClick={scrollToTop}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-6 right-6 md:hidden p-3 bg-gradient-to-br from-primary to-purple-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 z-40"
        aria-label={t('footer.bottom.backToTopAria')}
      >
        <FiArrowUp className="w-5 h-5" />
      </motion.button>
    </footer>
  );
}