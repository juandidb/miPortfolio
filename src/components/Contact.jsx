import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Send, MapPin, Phone, CheckCircle, AlertCircle, Github, Linkedin, User, MessageSquare } from 'lucide-react';
import { useI18n } from '../i18n';

export default function Contact() {
  const { t, language } = useI18n();
  const [form, setForm] = useState({ 
    name: '', 
    email: '', 
    subject: '', 
    message: '' 
  });
  
  const [status, setStatus] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
    if (status) setStatus(null);
  };

  const validate = () => {
    if (!form.name.trim()) return t('contact.validation.nameRequired');
    if (!form.email.match(/^[^@\s]+@[^@\s]+\.[^@\s]+$/)) return t('contact.validation.emailInvalid');
    if (form.message.trim().length < 10) return t('contact.validation.messageTooShort');
    return null;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const err = validate();
    if (err) {
      setStatus({ type: 'error', message: err });
      return;
    }

    setIsSubmitting(true);

    const redirectMessage = language === 'es'
      ? 'Se ha redireccionado a WhatsApp.'
      : 'Redirected to WhatsApp chat.';

    const whatsappNumber = '+549 (2317) 471695';
    const composedMessage = [
      `Hola Juan, soy ${form.name}.`,
      `Mi correo es ${form.email}.`,
      form.subject ? `Asunto: ${form.subject}.` : null,
      `Mensaje: ${form.message}`
    ]
      .filter(Boolean)
      .join(' ');

    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(composedMessage)}`;

    setStatus({ type: 'success', message: redirectMessage });
    setForm({ name: '', email: '', subject: '', message: '' });
    window.location.href = whatsappUrl;
    setIsSubmitting(false);
  };

  const contactInfo = [
    {
      icon: <Mail className="w-5 h-5" />,
      title: t('contact.info.email'),
      value: 'juandidb@gmail.com',
      link: 'mailto:juandibenedetto99@gmail.com',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: <Phone className="w-5 h-5" />,
      title: t('contact.info.phone'),
      value: '+54 9 2317 471695',
      link: 'tel:+5492317 471695',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      title: t('contact.info.location'),
      value: t('contact.info.locationValue'),
      link: 'https://maps.google.com/?q=Buenos+Aires',
      color: 'from-red-500 to-orange-500'
    }
  ];

  // no Lottie background in Contact (handled in Hero and global LightMobileBg)

  const socialLinks = [
      {
        icon: <Github className="w-5 h-5" />,
        label: 'GitHub',
        url: 'https://github.com/juandidb',
        color: 'hover:bg-gray-800 hover:text-white dark:hover:bg-gray-700'
      },
      {
        icon: <Linkedin className="w-5 h-5" />,
        label: 'LinkedIn',
        url: 'https://linkedin.com/in/juan-di-benedetto',
        color: 'hover:bg-blue-600 hover:text-white'
      }
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

  const formVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const infoVariants = {
    hidden: { opacity: 0, x: 30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="contact" className="min-h-screen py-20 md:py-28 bg-gradient-to-b from-gray-50 to-white dark:from-slate-900 dark:to-slate-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            {t('contact.titleA')} <span className="text-primary">{t('contact.titleB')}</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            {t('contact.subtitle')}
          </p>
          
          <div className="mt-8 flex justify-center gap-4">
            <div className="w-12 h-1 bg-gradient-to-r from-primary to-purple-600 rounded-full"></div>
            <div className="w-6 h-1 bg-gradient-to-r from-purple-600 to-blue-500 rounded-full"></div>
            <div className="w-12 h-1 bg-gradient-to-r from-blue-500 to-primary rounded-full"></div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <motion.div
            variants={formVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 md:p-10 border border-gray-200 dark:border-gray-700"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-gradient-to-br from-primary to-purple-600">
                <MessageSquare className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                {t('contact.formTitle')}
              </h3>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    {t('contact.name')}
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder={t('contact.placeholderName')}
                      className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 
                        bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white 
                        focus:ring-2 focus:ring-primary focus:border-transparent 
                        transition-all duration-200"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    {t('contact.email')}
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder={t('contact.placeholderEmail')}
                      className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 
                        bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white 
                        focus:ring-2 focus:ring-primary focus:border-transparent 
                        transition-all duration-200"
                    />
                  </div>
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  {t('contact.subject')}
                </label>
                <input
                  type="text"
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  placeholder={t('contact.placeholderSubject')}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 
                    bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white 
                    focus:ring-2 focus:ring-primary focus:border-transparent 
                    transition-all duration-200"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  {t('contact.message')}
                </label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows="6"
                  placeholder={t('contact.placeholderMessage')}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 
                    bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white 
                    focus:ring-2 focus:ring-primary focus:border-transparent 
                    transition-all duration-200 resize-none"
                />
              </div>

              {/* Status Message */}
              <AnimatePresence>
                {status && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className={`p-4 rounded-lg border ${
                      status.type === 'error' 
                        ? 'bg-red-50 dark:bg-red-900/30 border-red-200 dark:border-red-800' 
                        : 'bg-green-50 dark:bg-green-900/30 border-green-200 dark:border-green-800'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      {status.type === 'error' ? (
                        <AlertCircle className="w-5 h-5 text-red-500" />
                      ) : (
                        <CheckCircle className="w-5 h-5 text-green-500" />
                      )}
                      <span className={`font-medium ${
                        status.type === 'error' 
                          ? 'text-red-700 dark:text-red-300' 
                          : 'text-green-700 dark:text-green-300'
                      }`}>
                        {status.message}
                      </span>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
              
              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`w-full py-4 px-6 bg-gradient-to-r from-primary to-purple-600 text-white font-semibold 
                  rounded-lg transition-all duration-300 flex items-center justify-center gap-3
                  ${isSubmitting ? 'opacity-75 cursor-not-allowed' : 'hover:shadow-lg hover:shadow-primary/25'}`}
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    {t('contact.sending')}
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    {t('contact.send')}
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            variants={infoVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="space-y-8"
          >
            {/* Contact Info Cards */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                {t('contact.infoTitle')}
              </h3>
              
              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="space-y-4"
              >
                {contactInfo.map((info, index) => (
                  <motion.a
                    key={index}
                    href={info.link}
                    variants={itemVariants}
                    whileHover={{ x: 10 }}
                    className="block group"
                  >
                    <div className="flex items-center gap-4 p-4 rounded-xl border border-gray-200 dark:border-gray-700 
                      bg-white dark:bg-gray-800 hover:shadow-lg transition-all duration-300"
                    >
                      <div className={`p-3 rounded-lg bg-gradient-to-br ${info.color}`}>
                        {info.icon}
                      </div>
                      <div className="flex-1">
                        <div className="text-sm font-medium text-gray-500 dark:text-gray-400">
                          {info.title}
                        </div>
                        <div className="text-lg font-semibold text-gray-900 dark:text-white">
                          {info.value}
                        </div>
                      </div>
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="w-2 h-2 rounded-full bg-primary"></div>
                      </div>
                    </div>
                  </motion.a>
                ))}
              </motion.div>
            </div>

            {/* Social Links */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                {t('contact.connectTitle')}
              </h3>
              
              <div className="flex flex-wrap gap-3">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`flex items-center gap-2 px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 
                      text-gray-700 dark:text-gray-300 font-medium transition-all duration-300 ${social.color}`}
                  >
                    {social.icon}
                    {social.label}
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Availability Status */}
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 dark:from-gray-800 dark:to-gray-900 rounded-2xl p-6 text-white">
              <div className="flex items-center gap-3 mb-4">
                <div className="relative">
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-ping absolute"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full relative"></div>
                </div>
                <span className="font-semibold">{t('contact.availabilityBadge')}</span>
              </div>
              
              <h4 className="text-xl font-bold mb-3">{t('contact.availabilityTitle')}</h4>
              <p className="text-gray-300 mb-6">
                {t('contact.availabilityText')}
              </p>
              
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-sm">{t('contact.availabilityBullets.responseTime')}</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  <span className="text-sm">{t('contact.availabilityBullets.availability')}</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span className="text-sm">{t('contact.availabilityBullets.timezone')}</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Footer Note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center mt-16 pt-10 border-t border-gray-200 dark:border-gray-800"
        >
          <p className="text-gray-600 dark:text-gray-400">
            {t('contact.footerNote')}{' '}
            <a href="mailto:juandibenedetto@gmail.com" className="text-primary hover:underline font-medium">
              juandibenedetto99@gmail.com
            </a>
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-500 mt-2">
            {t('contact.footerSubNote')}
          </p>
        </motion.div>
      </div>
    </section>
  );
}