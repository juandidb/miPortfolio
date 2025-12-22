import React from 'react';
import { motion } from 'framer-motion';
import { FiExternalLink, FiCalendar, FiBook, FiAward, FiMapPin } from 'react-icons/fi';

export default function Education() {
  const items = [
    { 
      title: 'B.Degree in Computer Science',
      institution: 'Universidad Nacional de La Plata',
      period: '2022 — Present', 
      location: 'La Plata, Argentina',
      desc: 'Bachelor in distributed systems and software engineering.',
      status: 'In Progress',
      tags: ['Distributed Systems', 'Software Engineering', 'Algorithms', 'Data Structures']
    },
    { 
      title: 'Google IT Support Professional Certificate',
      institution: 'Google Career Certificates',
      period: '2025', 
      location: 'Online',
      desc: 'Eight-month IT support program, developed by Google, that covers troubleshooting, customer service, networking, operating systems, system administration, and security, and includes hands-on labs.',
      credential: 'https://coursera.org/share/97732f9da1ee1d5306cf1da8b332174f',
      status: 'Completed',
      tags: ['IT Support', 'Networking', 'System Administration', 'Security']
    },
    { 
      title: 'Google Advanced Data Analytics Capstone',
      institution: 'Google Career Certificates',
      period: '2025',
      location: 'Online',
      desc: 'Capstone project from Google\'s Advanced Data Analytics program, focused on applying statistical analysis, data modeling, and insight generation using real-world datasets.',
      credential: 'https://coursera.org/share/97732f9da1ee1d5306cf1da8b332174f',
      status: 'Completed',
      tags: ['Data Analytics', 'Statistical Analysis', 'Data Modeling', 'Machine Learning']
    },
    { 
      title: 'Data Analysis Program',
      institution: 'Institute Of Management, Technology and Finance',
      period: '2025',
      location: 'Lisbon, Portugal (Hybrid)',
      desc: 'Four-month program at the educational and research institute with HQ at Lisbon, Portugal, focused on business & professional hybrid (on-campus and online) education at areas: Business & Administration, Science & Technology, Banking & Finance.',
      credential: 'https://edu.gtf.pt/pluginfile.php/1/tool_certificate/issues/1765740135/3262015396JD.pdf',
      status: 'Completed',
      tags: ['Business Analytics', 'Financial Analysis', 'Data Science', 'Business Intelligence']
    },
    { 
      title: 'Back-End Development with Node.js',
      institution: 'Ministerio de Educación de Buenos Aires',
      period: '2025',
      location: 'Buenos Aires, Argentina',
      desc: 'Backend development program focused on Node.js, covering REST APIs, databases, authentication, server-side architecture, and security, with hands-on projects and real-world use cases.',
      credential: 'https://aulasvirtuales.bue.edu.ar/mod/customcert/view.php?id=701082&downloadown=1',
      status: 'Completed',
      tags: ['Node.js', 'REST APIs', 'Database Design', 'Authentication']
    },
   { 
      title: 'Programming with Java',
      institution: 'Coderhouse',
      period: '2023',
      location: 'Buenos Aires, Argentina',
      desc: 'Java programming course from the ground up, covering object-oriented concepts, data structures, and building real-world applications.',
      credential: 'https://www.coderhouse.com/ar/certificados/65e08bc04634637e3?lang',
      status: 'Completed',
      tags: ['Java', 'OOP', 'Software Development', 'Spring Framework']
    },
   { 
      title: 'UX/UI Design',
      institution: 'Coderhouse',
      period: '2022',
      location: 'Buenos Aires, Argentina',
      desc: 'UX/UI Design course to design intuitive and engaging digital experiences, covering user research, wireframing, prototyping, and visual design principles',
      credential: 'https://www.coderhouse.com/ar/certificados/6448bc5235237e3?lang',
      status: 'Completed',
      tags: ['UX Design', 'UI Design', 'User Experience', 'Product Design']
    }
  ];

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
    <section id="education" className="min-h-screen py-20 md:py-28 bg-gradient-to-b from-gray-50 to-white dark:from-gray-950 dark:to-gray-900">
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
            Education & <span className="text-primary">Certifications</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            A journey of continuous learning and professional growth through accredited programs
            and hands-on projects.
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
            {items.map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`relative ${index % 2 === 0 ? 'md:pr-8 md:ml-auto md:w-1/2' : 'md:pl-8 md:w-1/2'}`}
                style={{ [index % 2 === 0 ? 'marginLeft' : 'marginRight']: 'auto' }}
              >
                {/* Timeline Dot */}
                <div className={`
                  absolute top-6 w-4 h-4 rounded-full border-4 border-white dark:border-gray-900
                  ${item.status === 'In Progress' ? 'bg-yellow-500' : 'bg-green-500'}
                  ${index % 2 === 0 ? 'left-[-34px] md:left-[-8px]' : 'left-[-34px] md:right-[-8px]'}
                `}></div>

                {/* Card */}
                <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-lg hover:shadow-xl transition-all duration-300 p-6 ml-8 md:ml-0 group">
                  {/* Status Badge */}
                  <div className="flex justify-between items-start mb-4">
                    <span className={`
                      inline-flex items-center px-3 py-1 rounded-full text-xs font-medium
                      ${item.status === 'In Progress' 
                        ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300' 
                        : 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300'}
                    `}>
                      {item.status}
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
                    <FiBook className="w-4 h-4" />
                    <span className="font-medium">{item.institution}</span>
                  </div>

                  {/* Location and Period */}
                  <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400 mb-4">
                    <div className="flex items-center gap-1">
                      <FiMapPin className="w-3 h-3" />
                      {item.location}
                    </div>
                    <div className="flex items-center gap-1">
                      <FiCalendar className="w-3 h-3" />
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
                  {item.credential && (
                    <motion.a
                      href={item.credential}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-dark transition-all duration-300 font-medium"
                    >
                      <FiExternalLink className="w-4 h-4" />
                      View Credential
                    </motion.a>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center mt-16 pt-10 border-t border-gray-200 dark:border-gray-800"
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-gray-100 dark:bg-gray-800 rounded-full mb-6">
            <FiAward className="w-5 h-5 text-primary" />
            <span className="text-gray-700 dark:text-gray-300 font-medium">
              {items.length} Programs & Certifications
            </span>
          </div>
          
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Always Learning, Always Growing
          </h3>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-6">
            I believe in continuous education and regularly update my skills with the latest 
            technologies and industry best practices.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-lg font-semibold hover:bg-gray-800 dark:hover:bg-gray-100 transition-all duration-300 hover:scale-105"
            >
              Discuss Learning Opportunities
            </a>
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-6 py-3 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg font-semibold hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-300 hover:scale-105"
            >
              See My Projects
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}