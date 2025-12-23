import React, { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';

const STORAGE_KEY = 'portfolio.lang';

const translations = {
  en: {
    langLabel: 'EN',
    langSwitchAria: 'Switch language to Spanish',
    nav: {
      home: 'Home',
      about: 'About',
      projects: 'Projects',
      experience: 'Experience',
      education: 'Education',
      contact: 'Contact'
    },
    navbar: {
      hireMe: 'Hire Me'
    },
    hero: {
      roles: [
        'Software Developer',
        'IT Support',
        'Web Development',
        'UX/UI Design',
        'QA Testing',
        'Data Analysis'
      ],
      intro:
        'IT Support professional, web developer and Systems student. I build clean, functional web experiences and provide reliable technical support, always focused on clarity, performance, and real-world solutions.',
      ctaProjects: 'View Projects',
      ctaContact: 'Contact Me'
    },
    about: {
      badge: 'Professional Profile',
      titleA: 'About',
      titleB: 'Me',
      subtitle:
        "I'm a Systems-oriented engineer focused on building reliable, maintainable software and empowering development teams through better tools and processes.",
      philosophyTitle: 'Coding Philosophy',
      p1:
        'I have a background in systems and software engineering (UNLP), building scalable services and developer tools. I enjoy breaking down complex problems into simple, testable components and iterating quickly with clear goals. My work emphasizes maintainability, observability, and pragmatic trade-offs.',
      p2:
        "I prioritize learning and collaboration: mentoring teammates, writing clear documentation, and improving developer experience. I'm comfortable across the stack and enjoy contributing where I have the most impact—often at the API-contract, performance bottleneck, or developer workflow level.",
      principlesTitle: 'Core Principles',
      valuesTitle: 'Core Values',
      impactTitle: 'Areas of Impact',
      values: [
        {
          title: 'Clean Architecture',
          description:
            'Applying clean architecture principles to build maintainable and well-structured applications'
        },
        {
          title: 'Pragmatic Solutions',
          description: 'Focusing on real impact and practical trade-offs instead of perfect abstractions'
        },
        {
          title: 'Team Collaboration',
          description: 'Knowledge sharing, clear communication, and effective collaboration within teams'
        },
        {
          title: 'Observability',
          description: 'Writing debuggable code and using logging to better understand system behavior'
        }
      ],
      principles: [
        {
          title: 'Systems Thinking',
          description: 'Understanding how components interact and optimizing the whole system'
        },
        {
          title: 'Iterative Improvement',
          description: 'Shipping value quickly and refining based on feedback and metrics'
        },
        {
          title: 'Developer Experience',
          description: 'Prioritizing tools and workflows that empower engineering teams'
        },
        {
          title: 'Technical Leadership',
          description: 'Guiding technical decisions and setting quality standards'
        }
      ]
      ,
      impactTechnicalTitle: 'Technical Foundations',
      impactTeamTitle: 'Team Collaboration',
      impactTechnicalBullets: [
        'Contributing to architecture decisions and technical discussions',
        'Writing high-quality, maintainable code and participating in code reviews',
        'Performance awareness and basic scalability considerations'
      ],
      impactTeamBullets: [
        'Knowledge sharing and clear technical documentation',
        'Encouraging best practices and collective problem-solving',
        'Improving developer experience and workflows'
      ],
      approachBadge: 'My Approach to Coding',
      quote: '“Building software that is easy to understand, maintain, and work with.”',
      ctaTitle: 'Interested in Working Together?',
      ctaText:
        'If you’re looking for support in software development, IT operations, or building clean and reliable web solutions, I’m open to discussing how I can contribute.',
      ctaWork: 'View My Work',
      ctaContact: 'Get In Touch'
    },
    skills: {
      titleA: 'Technical',
      titleB: 'Skills',
      subtitle:
        'A comprehensive overview of my technical expertise, developed through years of hands-on experience and continuous learning.',
      coreSkillsCount: (n) => `${n} core skills`,
      proficiency: 'Proficiency',
      averageLevel: (pct) => `Average level: ${pct}%`,
      years: (n) => `${n} years`,
      levels: {
        expert: 'Expert',
        advanced: 'Advanced',
        intermediate: 'Intermediate',
        learning: 'Learning'
      },
      complementaryTitle: 'Complementary Skills',
      complementaryProblemSolving: 'Problem Solving',
      complementaryTeam: 'Team Collaboration',
      complementaryProblemBullets: [
        'Analytical Thinking & Debugging',
        'System Architecture Design',
        'Performance Optimization'
      ],
      complementaryTeamBullets: [
        'Agile/Scrum Methodologies',
        'Code Review & Mentoring',
        'Technical Documentation'
      ],
      stats: {
        technologies: 'Technologies',
        avgProficiency: 'Average Proficiency',
        yearsExperience: 'Years Experience',
        categories: 'Skill Categories'
      },
      ctaBadge: 'Continuously expanding skill set',
      ctaTitle: 'Ready to Apply My Skills to Your Projects',
      ctaText:
        'I can support different stages of a project, contributing with development, troubleshooting, and well-structured solutions.',
      ctaProjects: 'See Projects',
      ctaContact: 'Discuss Skills'
    },
    projects: {
      titleA: 'Featured',
      titleB: 'Projects',
      subtitle:
        'A selection of recent work showcasing my approach to problem-solving, clean architecture, and user-centric design.',
      ctaText: 'Interested in seeing more? Check out my complete portfolio on GitHub.',
      ctaButton: 'View Full Portfolio',
      card: {
        categoryFallback: 'Web Development',
        techTitle: 'Technologies Used',
        code: 'Code',
        live: 'Live Demo',
        details: 'View Details'
      }
    },
    experience: {
      titleA: 'Work',
      titleB: 'Experience',
      subtitle:
        'Professional journey through roles that have shaped my technical expertise and problem-solving approach in real-world environments.',
      keyAchievements: 'Key Achievements',
      technologies: 'Technologies & Skills',
      stats: {
        years: 'Years Experience',
        yearsSub: 'Combined professional experience',
        tech: 'Technologies Mastered',
        techSub: 'Across different roles and projects',
        solving: 'Problem Solving',
        solvingSub: 'Track record of delivering solutions'
      },
      ctaTitle: 'Ready to Bring My Experience to Your Team',
      ctaText:
        'With hands-on experience in both IT support and backend engineering, I bring a unique perspective to solving complex technical challenges.',
      ctaProjects: 'See My Projects',
      ctaContact: 'Contact Me'
    },
    education: {
      titleA: 'Education &',
      titleB: 'Certifications',
      subtitle:
        'A journey of continuous learning and professional growth through accredited programs and hands-on projects.',
      viewCredential: 'View Credential',
      programsCount: (n) => `${n} Programs & Certifications`,
      ctaTitle: 'Always Learning, Always Growing',
      ctaText:
        'I believe in continuous education and regularly update my skills with the latest technologies and industry best practices.',
      ctaContact: 'Discuss Learning Opportunities',
      ctaProjects: 'View Projects',
      status: {
        inProgress: 'In Progress',
        completed: 'Completed'
      }
    },
    contact: {
      titleA: 'Get In',
      titleB: 'Touch',
      subtitle:
        "Have a project in mind or want to discuss opportunities? I'm always open to talking about technology, design, and new challenges.",
      formTitle: 'Send me a message',
      name: 'Name *',
      email: 'Email *',
      subject: 'Subject',
      message: 'Message *',
      placeholderName: 'Your name',
      placeholderEmail: 'you@example.com',
      placeholderSubject: 'How can I help you?',
      placeholderMessage: 'Tell me about your project or inquiry...',
      send: 'Send Message',
      sending: 'Sending...',
      validation: {
        nameRequired: 'Please enter your name.',
        emailInvalid: 'Please enter a valid email address.',
        messageTooShort: 'Message must be at least 10 characters.'
      },
      success: "Message sent successfully! I'll get back to you within 24 hours.",
      infoTitle: 'Contact Information',
      connectTitle: 'Connect With Me',
      availabilityBadge: 'Currently Available',
      availabilityTitle: "Let's work together",
      availabilityText:
        "I'm currently open to new opportunities, collaborations, and interesting projects. Whether it's a full-time role or a freelance project, let's discuss how we can create something amazing.",
      availabilityBullets: {
        responseTime: 'Response time: Within 24 hours',
        availability: 'Available for: Full-time & Contract roles',
        timezone: 'Timezone: ART (UTC-3)'
      },
      footerNote: 'Prefer a more direct approach? Feel free to email me directly at',
      footerSubNote: 'I typically respond within a few hours during business days.',
      info: {
        email: 'Email',
        phone: 'Phone',
        location: 'Location',
        locationValue: 'Argentina'
      }
    },
    footer: {
      role: 'Developer & IT Support Professional',
      blurb:
        'Building reliable, maintainable applications with clean architecture and exceptional user experiences. Passionate about solving complex problems with elegant solutions.',
      techStack: 'Tech Stack',
      connect: 'Connect With Me',
      statsTitle: 'Professional Stats',
      stats: {
        years: 'Years Experience',
        projects: 'Projects Completed',
        satisfaction: 'Client Satisfaction',
        response: 'Response Time'
      },
      bottom: {
        copyright: (year) => `© ${year} Juan Di Benedetto. All rights reserved.`,
        craftedWithPassion: 'Crafted with passion',
        andEndlessCoffee: 'and endless coffee',
        accessibility: 'Accessible',
        responsive: 'Responsive',
        performant: 'Performant',
        builtWithTech: 'Built with React & Tailwind',
        backToTopAria: 'Scroll to top',
        builtWith: 'Built with',
        madeWith: 'Made with',
        and: 'and',
        backToTop: 'Back to top'
      }
    }
  },
  es: {
    langLabel: 'ES',
    langSwitchAria: 'Cambiar idioma a inglés',
    nav: {
      home: 'Inicio',
      about: 'Sobre mí',
      projects: 'Proyectos',
      experience: 'Experiencia',
      education: 'Educación',
      contact: 'Contacto'
    },
    navbar: {
      hireMe: 'Contratame'
    },
    hero: {
      roles: [
        'Desarrollador de Software',
        'Soporte IT',
        'Desarrollo Web',
        'Diseño UX/UI',
        'Testing QA',
        'Análisis de Datos'
      ],
      intro:
        'Profesional de Soporte IT, desarrollador web y estudiante de Sistemas. Construyo experiencias web limpias y funcionales y brindo soporte técnico confiable, siempre enfocado en claridad, rendimiento y soluciones reales.',
      ctaProjects: 'Ver Proyectos',
      ctaContact: 'Contactarme'
    },
    about: {
      badge: 'Perfil Profesional',
      titleA: 'Sobre',
      titleB: 'mí',
      subtitle:
        'Soy un perfil orientado a sistemas, enfocado en construir software confiable y mantenible, y en potenciar a los equipos de desarrollo con mejores herramientas y procesos.',
      philosophyTitle: 'Filosofía de Programación',
      p1:
        'Tengo formación en sistemas e ingeniería de software (UNLP), construyendo servicios escalables y herramientas para desarrolladores. Disfruto descomponer problemas complejos en componentes simples y testeables, e iterar rápidamente con objetivos claros. Mi trabajo prioriza la mantenibilidad, la observabilidad y los trade-offs pragmáticos.',
      p2:
        'Priorizo el aprendizaje y la colaboración: mentoría, documentación clara y mejora de la experiencia de desarrollo. Me siento cómodo en todo el stack y disfruto aportar donde más impacto genero—muchas veces en contratos de API, cuellos de botella de performance o flujos de trabajo.',
      principlesTitle: 'Principios',
      valuesTitle: 'Valores',
      impactTitle: 'Áreas de impacto',
      values: [
        {
          title: 'Arquitectura Limpia',
          description:
            'Aplicando principios de arquitectura limpia para construir aplicaciones mantenibles y bien estructuradas'
        },
        {
          title: 'Soluciones Pragmáticas',
          description: 'Enfocado en impacto real y trade-offs prácticos, no en abstracciones perfectas'
        },
        {
          title: 'Colaboración en Equipo',
          description: 'Compartir conocimiento, comunicación clara y colaboración efectiva dentro del equipo'
        },
        {
          title: 'Observabilidad',
          description: 'Escribir código depurable y usar logging para entender mejor el comportamiento del sistema'
        }
      ],
      principles: [
        {
          title: 'Pensamiento Sistémico',
          description: 'Entender cómo interactúan los componentes y optimizar el sistema completo'
        },
        {
          title: 'Mejora Iterativa',
          description: 'Entregar valor rápido y refinar con feedback y métricas'
        },
        {
          title: 'Experiencia de Desarrollo',
          description: 'Priorizar herramientas y workflows que potencien a los equipos de ingeniería'
        },
        {
          title: 'Liderazgo Técnico',
          description: 'Guiar decisiones técnicas y establecer estándares de calidad'
        }
      ]
      ,
      impactTechnicalTitle: 'Bases Técnicas',
      impactTeamTitle: 'Colaboración en Equipo',
      impactTechnicalBullets: [
        'Aportar en decisiones de arquitectura y discusiones técnicas',
        'Escribir código mantenible y participar en code reviews',
        'Conciencia de performance y consideraciones básicas de escalabilidad'
      ],
      impactTeamBullets: [
        'Compartir conocimiento y documentación técnica clara',
        'Fomentar buenas prácticas y resolución colectiva de problemas',
        'Mejorar la experiencia de desarrollo y los flujos de trabajo'
      ],
      approachBadge: 'Mi enfoque al programar',
      quote: '“Construir software fácil de entender, mantener y actualizar.”',
      ctaTitle: '¿Trabajamos juntos?',
      ctaText:
        'Si buscás soporte IT para tus sistemas,  o soluciones web limpias y confiables, escribime y conversamos.',
      ctaWork: 'Ver Mi Trabajo',
      ctaContact: 'Contactarme'
    },
    skills: {
      titleA: 'Habilidades',
      titleB: 'Técnicas',
      subtitle:
        'Una visión general de mi experiencia técnica, desarrollada a través de años de práctica y aprendizaje continuo.',
      coreSkillsCount: (n) => `${n} habilidades clave`,
      proficiency: 'Dominio',
      averageLevel: (pct) => `Nivel promedio: ${pct}%`,
      years: (n) => `${n} años`,
      levels: {
        expert: 'Experto',
        advanced: 'Avanzado',
        intermediate: 'Intermedio',
        learning: 'Aprendiendo'
      },
      complementaryTitle: 'Habilidades Complementarias',
      complementaryProblemSolving: 'Resolución de Problemas',
      complementaryTeam: 'Colaboración en Equipo',
      complementaryProblemBullets: [
        'Pensamiento Analítico y Debugging',
        'Diseño de Arquitectura de Sistemas',
        'Optimización de Performance'
      ],
      complementaryTeamBullets: [
        'Metodologías Agile/Scrum',
        'Code Review y Mentoría',
        'Documentación Técnica'
      ],
      stats: {
        technologies: 'Tecnologías',
        avgProficiency: 'Dominio Promedio',
        yearsExperience: 'Años de Experiencia',
        categories: 'Categorías'
      },
      ctaBadge: 'Aprendizaje y mejora continua',
      ctaTitle: 'Listo para aplicar mis habilidades en tus proyectos',
      ctaText:
        'Puedo aportar en distintas etapas de un proyecto, contribuyendo con desarrollo, troubleshooting y soluciones bien estructuradas.',
      ctaProjects: 'Ver Proyectos',
      ctaContact: 'Hablar de habilidades'
    },
    projects: {
      titleA: 'Proyectos',
      titleB: 'Destacados',
      subtitle:
        'Una selección de trabajos recientes que muestran mi enfoque para resolver problemas, arquitectura limpia y diseño centrado en el usuario.',
      ctaText: '¿Querés ver más? Mirá mi portfolio completo en GitHub.',
      ctaButton: 'Ver Portfolio Completo',
      card: {
        categoryFallback: 'Desarrollo Web',
        techTitle: 'Tecnologías Usadas',
        code: 'Código',
        live: 'Demo',
        details: 'Ver Detalles'
      }
    },
    experience: {
      titleA: 'Experiencia',
      titleB: 'Laboral',
      subtitle:
        'Recorrido profesional por roles que moldearon mi experiencia técnica y mi forma de resolver problemas en entornos reales.',
      keyAchievements: 'Logros Clave',
      technologies: 'Tecnologías y Habilidades',
      stats: {
        years: 'Años de experiencia',
        yearsSub: 'Experiencia profesional combinada',
        tech: 'Tecnologías dominadas',
        techSub: 'En distintos roles y proyectos',
        solving: 'Resolución de problemas',
        solvingSub: 'Historial de entrega de soluciones'
      },
      ctaTitle: 'Listo para sumar mi experiencia a tu equipo',
      ctaText:
        'Con experiencia práctica tanto en soporte IT como en ingeniería, aporto una perspectiva única para resolver desafíos técnicos complejos.',
      ctaProjects: 'Ver Mis Proyectos',
      ctaContact: 'Contactarme'
    },
    education: {
      titleA: 'Educación y',
      titleB: 'Certificaciones',
      subtitle:
        'Un camino de aprendizaje continuo y crecimiento profesional a través de programas acreditados y proyectos prácticos.',
      viewCredential: 'Ver Certificado',
      programsCount: (n) => `${n} Programas y Certificaciones`,
      ctaTitle: 'Siempre aprendiendo, siempre creciendo',
      ctaText:
        'Creo en la educación continua y actualizo mis habilidades con las últimas tecnologías y buenas prácticas de la industria.',
      ctaContact: 'Hablar sobre oportunidades',
      ctaProjects: 'Ver Proyectos',
      status: {
        inProgress: 'En curso',
        completed: 'Finalizado'
      }
    },
    contact: {
      titleA: 'Hablemos',
      titleB: 'Hoy',
      subtitle:
        '¿Tenés un proyecto en mente o querés conversar oportunidades? Siempre estoy abierto a hablar sobre tecnología, diseño y nuevos desafíos.',
      formTitle: 'Enviame un mensaje',
      name: 'Nombre *',
      email: 'Email *',
      subject: 'Asunto',
      message: 'Mensaje *',
      placeholderName: 'Tu nombre',
      placeholderEmail: 'tu@email.com',
      placeholderSubject: '¿En qué puedo ayudarte?',
      placeholderMessage: 'Contame sobre tu proyecto o consulta...',
      send: 'Enviar Mensaje',
      sending: 'Enviando...',
      validation: {
        nameRequired: 'Por favor ingresá tu nombre.',
        emailInvalid: 'Por favor ingresá un email válido.',
        messageTooShort: 'El mensaje debe tener al menos 10 caracteres.'
      },
      success: '¡Mensaje enviado! Te respondo dentro de las próximas 24 horas.',
      infoTitle: 'Información de contacto',
      connectTitle: 'Conectá conmigo',
      availabilityBadge: 'Disponible',
      availabilityTitle: 'Trabajemos juntos',
      availabilityText:
        'Actualmente estoy abierto a nuevas oportunidades, colaboraciones y proyectos interesantes. Ya sea un rol full-time o un proyecto freelance, hablemos sobre cómo podemos crear algo increíble.',
      availabilityBullets: {
        responseTime: 'Tiempo de respuesta: Dentro de 24 horas',
        availability: 'Disponible para: roles full-time y contratos',
        timezone: 'Zona horaria: ART (UTC-3)'
      },
      footerNote: '¿Preferís un contacto más directo? Podés escribirme a',
      footerSubNote: 'Normalmente respondo dentro de unas horas en días hábiles.',
      info: {
        email: 'Email',
        phone: 'Teléfono',
        location: 'Ubicación',
        locationValue: 'Argentina'
      }
    },
    footer: {
      role: 'Desarrollador y Profesional de Soporte IT',
      blurb:
        'Construyendo aplicaciones confiables y mantenibles con arquitectura limpia y excelentes experiencias de usuario. Apasionado por resolver problemas complejos con soluciones elegantes.',
      techStack: 'Stack Tecnológico',
      connect: 'Conectá conmigo',
      statsTitle: 'Estadísticas',
      stats: {
        years: 'Años de experiencia',
        projects: 'Proyectos completados',
        satisfaction: 'Satisfacción',
        response: 'Tiempo de respuesta'
      },
      bottom: {
        copyright: (year) => `© ${year} Juan Di Benedetto. Todos los derechos reservados.`,
        craftedWithPassion: 'Hecho con pasión',
        andEndlessCoffee: 'y mucho café',
        accessibility: 'Accesible',
        responsive: 'Responsive',
        performant: 'Rápido',
        builtWithTech: 'Hecho con React y Tailwind',
        backToTopAria: 'Volver arriba',
        builtWith: 'Hecho con',
        madeWith: 'Con',
        and: 'y',
        backToTop: 'Volver arriba'
      }
    }
  }
};

function getInitialLanguage() {
  try {
    const saved = window.localStorage.getItem(STORAGE_KEY);
    if (saved === 'en' || saved === 'es') return saved;
  } catch {
    // ignore
  }

  const browser = (typeof navigator !== 'undefined' && navigator.language) ? navigator.language.toLowerCase() : '';
  return browser.startsWith('es') ? 'es' : 'en';
}

function getByPath(obj, path) {
  if (!path) return obj;
  return path.split('.').reduce((acc, key) => (acc && acc[key] !== undefined ? acc[key] : undefined), obj);
}

const I18nContext = createContext(null);

export function I18nProvider({ children }) {
  const [language, setLanguage] = useState(getInitialLanguage);

  useEffect(() => {
    try {
      window.localStorage.setItem(STORAGE_KEY, language);
    } catch {
      // ignore
    }
    if (typeof document !== 'undefined') {
      document.documentElement.lang = language;
    }
  }, [language]);

  const toggleLanguage = useCallback(() => {
    setLanguage((prev) => (prev === 'en' ? 'es' : 'en'));
  }, []);

  const t = useCallback(
    (key, params) => {
      const pack = translations[language] || translations.en;
      const fallbackPack = translations.en;

      const value = getByPath(pack, key);
      const fallbackValue = getByPath(fallbackPack, key);

      const resolved = value !== undefined ? value : fallbackValue;

      if (typeof resolved === 'function') return resolved(params);
      return resolved ?? key;
    },
    [language]
  );

  const value = useMemo(
    () => ({
      language,
      setLanguage,
      toggleLanguage,
      t
    }),
    [language, toggleLanguage, t]
  );

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) {
    throw new Error('useI18n must be used within <I18nProvider>.');
  }
  return ctx;
}
