import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Calendar, Book, Award, MapPin, X } from 'lucide-react';
import { useI18n } from '../i18n/index.jsx';

export default function Education() {
  const { language, t } = useI18n();
  const [activeCredential, setActiveCredential] = React.useState(null);
  const [showAdditionalCertificates, setShowAdditionalCertificates] = React.useState(false);

  React.useEffect(() => {
    if (typeof window === 'undefined' || typeof document === 'undefined') {
      return undefined;
    }

    if (!activeCredential) {
      document.body.style.overflow = '';
      return undefined;
    }

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setActiveCredential(null);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [activeCredential]);

  const openCredential = (item) => {
    if (!item?.credential?.asset) {
      return;
    }
    setActiveCredential({
      ...item.credential,
      title: item.title,
      institution: item.institution
    });
  };

  const closeCredential = () => setActiveCredential(null);

  const items = [
    { 
      title: {
        en: 'B.Degree in Computer Science',
        es: 'Licenciatura en Ciencias de la Computación'
      },
      institution: 'Universidad Nacional de La Plata',
      period: {
        en: '2022 — Present',
        es: '2022 — Actualidad'
      },
      location: 'La Plata, Argentina',
      desc: {
        en: 'Bachelor in distributed systems and software engineering.',
        es: 'Formación orientada a sistemas distribuidos e ingeniería de software.'
      },
      status: 'inProgress',
      tags: ['Distributed Systems', 'Software Engineering', 'Algorithms', 'Data Structures']
    },
    { 
      title: 'Google IT Support Professional Certificate',
      institution: 'Google Career Certificates',
      period: '2025', 
      location: {
        en: 'Online',
        es: 'Online'
      },
      desc: {
        en: 'Eight-month IT support program, developed by Google, that covers troubleshooting, customer service, networking, operating systems, system administration, and security, and includes hands-on labs.',
        es: 'Programa de soporte IT de ocho meses desarrollado por Google. Cubre troubleshooting, atención al cliente, redes, sistemas operativos, administración de sistemas y seguridad, con laboratorios prácticos.'
      },
      credential: {
        asset: `${import.meta.env.BASE_URL}certificados/googleITcertificate.jpeg`,
        type: 'image',
        alt: 'Google IT Support Professional Certificate'
      },
      status: 'completed',
      tags: ['IT Support', 'Networking', 'System Administration', 'Security']
    },
    { 
      title: 'Google Advanced Data Analytics Capstone',
      institution: 'Google Career Certificates',
      period: '2025',
      location: {
        en: 'Online',
        es: 'Online'
      },
      desc: {
        en: 'Capstone project from Google\'s Advanced Data Analytics program, focused on applying statistical analysis, data modeling, and insight generation using real-world datasets.',
        es: 'Proyecto final del programa Advanced Data Analytics de Google, enfocado en aplicar análisis estadístico, modelado de datos y generación de insights sobre datasets reales.'
      },
      credential: {
        asset: `${import.meta.env.BASE_URL}certificados/googledataanalysis.jpeg`,
        type: 'image',
        alt: 'Google Advanced Data Analytics Capstone Certificate'
      },
      status: 'completed',
      tags: ['Data Analytics', 'Statistical Analysis', 'Data Modeling', 'Machine Learning']
    },
    { 
      title: 'Data Analysis Program',
      institution: 'Institute Of Management, Technology and Finance',
      period: '2025',
      location: {
        en: 'Lisbon, Portugal (Hybrid)',
        es: 'Lisboa, Portugal (Híbrido)'
      },
      desc: {
        en: 'Four-month program at the educational and research institute with HQ at Lisbon, Portugal, focused on business & professional hybrid (on-campus and online) education at areas: Business & Administration, Science & Technology, Banking & Finance.',
        es: 'Programa intensivo de cuatro meses en un instituto educativo y de investigación con sede en Lisboa, Portugal, orientado a formación híbrida (presencial y online) en áreas de Negocios y Administración, Ciencia y Tecnología, Banca y Finanzas.'
      },
      credential: {
        asset: `${import.meta.env.BASE_URL}certificados/1765741380183.pdf`,
        type: 'pdf',
        alt: 'Data Analysis Program Certificate'
      },
      status: 'completed',
      tags: ['Business Analytics', 'Financial Analysis', 'Data Science', 'Business Intelligence']
    },
    { 
      title: 'Back-End Development with Node.js',
      institution: 'Ministerio de Educación de Buenos Aires',
      period: '2025',
      location: 'Buenos Aires, Argentina',
      desc: {
        en: 'Backend development program focused on Node.js, covering REST APIs, databases, authentication, server-side architecture, and security, with hands-on projects and real-world use cases.',
        es: 'Programa de desarrollo backend con foco en Node.js. Cubre APIs REST, bases de datos, autenticación, arquitectura server-side y seguridad, con proyectos prácticos y casos reales.'
      },
      credential: {
        asset: `${import.meta.env.BASE_URL}certificados/Node_-_Certificacin.pdf`,
        type: 'pdf',
        alt: 'Back-End Development with Node.js Certificate'
      },
      status: 'completed',
      tags: ['Node.js', 'REST APIs', 'Database Design', 'Authentication']
    },
   { 
      title: 'Programming with Java',
      institution: 'Coderhouse',
      period: '2023',
      location: 'Buenos Aires, Argentina',
      desc: {
        en: 'Java programming course from the ground up, covering object-oriented concepts, data structures, and building real-world applications.',
        es: 'Curso de programación en Java desde cero, cubriendo conceptos orientados a objetos, estructuras de datos y desarrollo de aplicaciones reales.'
      },
      credential: {
        asset: `${import.meta.env.BASE_URL}certificados/javaprogramming.jpeg`,
        type: 'image',
        alt: 'Programming with Java Certificate'
      },
      status: 'completed',
      tags: ['Java', 'OOP', 'Software Development', 'Spring Framework']
    },
   { 
      title: 'UX/UI Design',
      institution: 'Coderhouse',
      period: '2022',
      location: 'Buenos Aires, Argentina',
      desc: {
        en: 'UX/UI Design course to design intuitive and engaging digital experiences, covering user research, wireframing, prototyping, and visual design principles',
        es: 'Curso de UX/UI para diseñar experiencias digitales intuitivas y atractivas, cubriendo investigación de usuarios, wireframes, prototipado y principios de diseño visual.'
      },
      credential: {
        asset: `${import.meta.env.BASE_URL}certificados/uxuidesign.jpeg`,
        type: 'image',
        alt: 'UX/UI Design Certificate'
      },
      status: 'completed',
      tags: ['UX Design', 'UI Design', 'User Experience', 'Product Design']
    }
  ];

  const additionalCertificates = [
    {
      title: {
        en: 'IIA Certification',
        es: 'Certificación IIA'
      },
      institution: 'Ministerio de Educación de Buenos Aires',
      credential: {
        asset: `${import.meta.env.BASE_URL}certificados/IIA-_Certificacin.pdf`,
        type: 'pdf',
        alt: 'IIA Certification'
      }
    },
    {
      title: {
        en: 'Professional Certificate 1765140628372',
        es: 'Certificado profesional 1765140628372'
      },
      institution: 'Cambridge International School of English',
      credential: {
        asset: `${import.meta.env.BASE_URL}certificados/1765140628372.pdf`,
        type: 'pdf',
        alt: 'Professional Certificate 1765140628372'
      }
    },
    {
      title: {
        en: 'Professional Certificate 1765141826193',
        es: 'Certificado profesional 1765141826193'
      },
      institution: 'Cambridge International School of English',
      credential: {
        asset: `${import.meta.env.BASE_URL}certificados/1765141826193.pdf`,
        type: 'pdf',
        alt: 'Professional Certificate 1765141826193'
      }
    },
    {
      title: {
        en: 'React + TypeScript (v3)',
        es: 'React + TypeScript (v3)'
      },
      institution: 'Frontend Masters',
      credential: {
        asset: `${import.meta.env.BASE_URL}certificados/react-typescript-v3.pdf`,
        type: 'pdf',
        alt: 'React + TypeScript Certificate'
      }
    },
    {
      title: {
        en: 'Backend System Design',
        es: 'Diseño de Sistemas Backend'
      },
      institution: 'Frontend Masters',
      credential: {
        asset: `${import.meta.env.BASE_URL}certificados/backend-system-design-dark.pdf`,
        type: 'pdf',
        alt: 'Backend System Design Certificate'
      }
    }
  ];

  const totalPrograms = items.length + additionalCertificates.length;

  const localizedItems = items.map((item) => ({
    ...item,
    title: typeof item.title === 'object' ? (item.title?.[language] ?? item.title?.en ?? '') : item.title,
    desc: typeof item.desc === 'object' ? (item.desc?.[language] ?? item.desc?.en ?? '') : item.desc,
    location: typeof item.location === 'object' ? (item.location?.[language] ?? item.location?.en ?? '') : item.location,
    period: typeof item.period === 'object' ? (item.period?.[language] ?? item.period?.en ?? '') : item.period
  }));

  const localizedAdditionalCertificates = additionalCertificates.map((item) => ({
    ...item,
    title: typeof item.title === 'object' ? (item.title?.[language] ?? item.title?.en ?? '') : item.title,
    institution: typeof item.institution === 'object' ? (item.institution?.[language] ?? item.institution?.en ?? '') : item.institution
  }));

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
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
    <section id="education" className="min-h-screen py-20 md:py-28 bg-gradient-to-b from-gray-50 to-white dark:from-slate-900 dark:to-slate-900">
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
            {t('education.titleA')} <span className="text-primary">{t('education.titleB')}</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            {t('education.subtitle')}
          </p>
          
          <div className="mt-8 flex justify-center">
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-purple-600 rounded-full"></div>
          </div>
        </motion.div>

        {/* Education Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Timeline Line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary/20 via-primary to-primary/20 rounded-full"></div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="space-y-12"
          >
            {localizedItems.map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`relative ${index % 2 === 0 ? 'md:pr-8 md:ml-auto md:w-1/2' : 'md:pl-8 md:w-1/2'}`}
                style={{ [index % 2 === 0 ? 'marginLeft' : 'marginRight']: 'auto' }}
              >
                {/* Timeline Dot */}
                <div className={`
                  absolute top-6 w-4 h-4 rounded-full border-4 border-white dark:border-gray-900
                  ${item.status === 'inProgress' ? 'bg-yellow-500' : 'bg-green-500'}
                  ${index % 2 === 0 ? 'left-[-34px] md:left-[-8px]' : 'left-[-34px] md:right-[-8px]'}
                `}></div>

                {/* Card */}
                <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-lg hover:shadow-xl transition-all duration-300 p-6 ml-8 md:ml-0 group">
                  {/* Status Badge */}
                  <div className="flex justify-between items-start mb-4">
                    <span className={`
                      inline-flex items-center px-3 py-1 rounded-full text-xs font-medium
                      ${item.status === 'inProgress' 
                        ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300' 
                        : 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300'}
                    `}>
                      {item.status === 'inProgress' ? t('education.status.inProgress') : t('education.status.completed')}
                    </span>
                    
                    {/* Year Badge */}
                    <span className="text-sm font-semibold text-gray-500 dark:text-gray-400">
                      {item.period}
                    </span>
                  </div>

                  {/* Title and Institution */}
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-primary transition-colors duration-300 mb-2">
                    {item.title}
                  </h3>
                  
                  <div className="flex items-center gap-2 text-gray-700 dark:text-gray-300 mb-4">
                      <Book className="w-4 h-4" />
                    <span className="font-medium">{item.institution}</span>
                  </div>

                  {/* Location and Period */}
                  <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400 mb-4">
                    <div className="flex items-center gap-1">
                      <MapPin className="w-3 h-3" />
                      {item.location}
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {item.period}
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                    {item.desc}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {item.tags.map((tag, tagIndex) => (
                      <span 
                        key={tagIndex}
                        className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg text-xs font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Credential Button */}
                  {item.credential?.asset && (
                    <motion.button
                      type="button"
                      onClick={() => openCredential(item)}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-dark transition-all duration-300 font-medium"
                      aria-label={`Show credential for ${item.title}`}
                    >
                      <ExternalLink className="w-4 h-4" />
                      {t('education.viewCredential')}
                    </motion.button>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

          {additionalCertificates.length > 0 && (
            <>
              <div className="mt-12 flex justify-center">
                <button
                  type="button"
                  onClick={() => setShowAdditionalCertificates((prev) => !prev)}
                  className="inline-flex items-center gap-2 rounded-full border border-primary/30 px-6 py-3 text-primary font-semibold transition-all duration-300 hover:bg-primary hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/60"
                  aria-expanded={showAdditionalCertificates}
                >
                  {showAdditionalCertificates ? t('education.viewLess') : t('education.viewMore')}
                </button>
              </div>

              <AnimatePresence initial={false}>
                {showAdditionalCertificates && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.4 }}
                    className="max-w-5xl mx-auto mt-10 overflow-hidden"
                  >
                    <div className="text-center mb-8">
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                        {t('education.additionalTitle')}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mt-2">
                        {t('education.additionalSubtitle')}
                      </p>
                    </div>

                    <div className="grid gap-6 md:grid-cols-2">
                      {localizedAdditionalCertificates.map((cert, index) => (
                        <motion.div
                          key={cert.credential.asset}
                          initial={{ opacity: 0, y: 30 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 30 }}
                          transition={{ duration: 0.4, delay: index * 0.1 }}
                          className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl p-5 shadow-lg"
                        >
                          <div>
                            <p className="text-xs uppercase tracking-wide text-primary/80">
                              {cert.institution}
                            </p>
                            <h4 className="text-lg font-semibold text-gray-900 dark:text-white mt-1">
                              {cert.title}
                            </h4>
                          </div>

                          <div className="mt-4 h-64 rounded-xl border border-dashed border-gray-200 dark:border-gray-600 overflow-hidden bg-gray-50 dark:bg-gray-900">
                            {cert.credential.type === 'pdf' ? (
                              <iframe
                                src={cert.credential.asset}
                                title={`${cert.title} preview`}
                                className="w-full h-full"
                                loading="lazy"
                              />
                            ) : (
                              <img
                                src={cert.credential.asset}
                                alt={cert.credential.alt ?? cert.title}
                                className="w-full h-full object-contain bg-white dark:bg-gray-900"
                                loading="lazy"
                              />
                            )}
                          </div>

                          <motion.button
                            type="button"
                            onClick={() => openCredential(cert)}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="mt-4 inline-flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-lg font-medium hover:bg-primary-dark transition-all duration-300"
                            aria-label={`Show credential for ${cert.title}`}
                          >
                            <ExternalLink className="w-4 h-4" />
                            {t('education.viewCredential')}
                          </motion.button>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </>
          )}

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center mt-16 pt-10 border-t border-gray-200 dark:border-gray-800"
        >
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-gray-100 dark:bg-gray-800 rounded-full mb-6">
            <Award className="w-5 h-5 text-primary" />
            <span className="text-gray-700 dark:text-gray-300 font-medium">
              {t('education.programsCount', '+10')}
            </span>
          </div>
          
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            {t('education.ctaTitle')}
          </h3>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-6">
            {t('education.ctaText')}
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="#contact"
              onClick={(e) => { e.preventDefault(); const el = document.getElementById('contact'); if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' }); else window.location.hash = '#contact'; }}
              className="inline-flex items-center gap-2 px-6 py-3 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-lg font-semibold hover:bg-gray-800 dark:hover:bg-gray-100 transition-all duration-300 hover:scale-105"
            >
              {t('education.ctaContact')}
            </a>
            <a
              href="#projects"
              onClick={(e) => { e.preventDefault(); const el = document.getElementById('projects'); if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' }); else window.location.hash = '#projects'; }}
              className="inline-flex items-center gap-2 px-6 py-3 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg font-semibold hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-300 hover:scale-105"
            >
              {t('education.ctaProjects')}
            </a>
          </div>
        </motion.div>
      </div>

      <AnimatePresence>
        {activeCredential && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeCredential}
          >
            <motion.div
              className="relative w-full max-w-4xl bg-white dark:bg-gray-900 rounded-2xl shadow-2xl p-6"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ type: 'spring', stiffness: 260, damping: 25 }}
              onClick={(event) => event.stopPropagation()}
            >
              <button
                type="button"
                onClick={closeCredential}
                className="absolute top-4 right-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 text-gray-600 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700"
                aria-label="Close credential viewer"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="pr-10">
                <p className="text-sm font-semibold uppercase tracking-wide text-primary">
                  {activeCredential.institution}
                </p>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                  {activeCredential.title}
                </h3>
              </div>

              <div className="mt-6 h-[70vh] w-full overflow-hidden rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800">
                {activeCredential.type === 'pdf' ? (
                  <iframe
                    src={activeCredential.asset}
                    title={`${activeCredential.title} credential`}
                    className="h-full w-full"
                    loading="lazy"
                  />
                ) : (
                  <img
                    src={activeCredential.asset}
                    alt={activeCredential.alt ?? activeCredential.title}
                    className="h-full w-full object-contain bg-white dark:bg-gray-900"
                    loading="lazy"
                  />
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}