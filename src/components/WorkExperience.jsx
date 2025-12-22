import React from 'react';
import { motion } from 'framer-motion';
import { FiBriefcase, FiCalendar, FiMapPin, FiCode, FiTool, FiCpu } from 'react-icons/fi';

export default function WorkExperience() {
  const items = [
    { 
      title: 'IT Support Specialist',
      company: 'OktaTech',
      period: '2022 — 2024', 
      location: 'La Plata, Buenos Aires',
      type: 'Full-time',
      desc: 'Responsible for diagnosing and resolving issues related to billing systems, management software, and hardware. I analyzed technical incidents, identified root causes, and provided effective solutions to ensure the smooth and reliable operation of critical systems.',
      achievements: [
        'Reduced system downtime by 40% through proactive monitoring and rapid incident response',
        'Implemented automated troubleshooting scripts that decreased resolution time by 35%',
        'Improved customer satisfaction scores from 85% to 96% through enhanced support protocols'
      ],
      technologies: ['Software Development', 'System Administration', 'Troubleshooting', 'Hardware Support', 'Database Management', 'Networking'],
      industry: 'IT Services & Consulting'
    },
    { 
      title: 'FrontEnd Developer Freelance',
      company: 'Self-Employed',
      period: '2021 — 2023',
      location: 'Remote',
      type: 'Freelance',
      desc: 'Developed and maintained responsive websites and web applications for various clients, ensuring optimal performance and user experience across devices. Collaborated closely with clients to understand their requirements and deliver tailored solutions that met their business goals.',
      achievements: [
        'Successfully delivered over 6 projects with a 100% client satisfaction rate',
        'Optimized website load times by an average of 30% through efficient coding practices and asset management',
        'Implemented responsive design patterns that improved mobile user engagement.'
      ],
      technologies: ['JavaScript', 'React', 'HTML/CSS', 'UI/UX Design', 'Web Development', 'Int', 'PostgreSQL'],
      industry: 'Web Development'
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

  const cardVariants = {
    hover: {
      y: -8,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    }
  };

  return (
    <section id="work-experience" className="min-h-screen py-20 md:py-28 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-950">
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
            Work <span className="text-primary">Experience</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Professional journey through roles that have shaped my technical expertise and 
            problem-solving approach in real-world environments.
          </p>
          
          <div className="mt-8 flex justify-center gap-4">
            <div className="w-12 h-1 bg-gradient-to-r from-primary to-purple-600 rounded-full"></div>
            <div className="w-8 h-1 bg-gradient-to-r from-purple-600 to-blue-500 rounded-full"></div>
            <div className="w-12 h-1 bg-gradient-to-r from-blue-500 to-primary rounded-full"></div>
          </div>
        </motion.div>

        {/* Experience Timeline */}
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
                  bg-primary
                  ${index % 2 === 0 ? 'left-[-34px] md:left-[-8px]' : 'left-[-34px] md:right-[-8px]'}
                `}></div>

                {/* Experience Card */}
                <motion.div
                  variants={cardVariants}
                  whileHover="hover"
                  className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-lg hover:shadow-xl transition-all duration-300 p-6 ml-8 md:ml-0 group"
                >
                  {/* Header with Company and Duration */}
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4">
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <div className="p-2 rounded-lg bg-primary/10">
                          {index === 0 ? <FiTool className="w-4 h-4 text-primary" /> : <FiCode className="w-4 h-4 text-primary" />}
                        </div>
                        <span className="text-xs font-semibold text-primary uppercase tracking-wider">
                          {item.type}
                        </span>
                      </div>
                      
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-primary transition-colors duration-300">
                        {item.title}
                      </h3>
                      
                      <div className="flex items-center gap-2 mt-1">
                        <FiBriefcase className="w-4 h-4 text-gray-500 dark:text-gray-400" />
                        <span className="text-lg font-medium text-gray-700 dark:text-gray-300">
                          {item.company}
                        </span>
                      </div>
                    </div>
                    
                    {/* Duration Badge */}
                    <div className="mt-2 sm:mt-0 px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-lg">
                      <div className="flex items-center gap-1 text-sm font-medium text-gray-700 dark:text-gray-300">
                        <FiCalendar className="w-3 h-3" />
                        {item.period}
                      </div>
                    </div>
                  </div>

                  {/* Location and Industry */}
                  <div className="flex flex-wrap gap-4 mb-6">
                    <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                      <FiMapPin className="w-3 h-3" />
                      {item.location}
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                      <FiCpu className="w-3 h-3" />
                      {item.industry}
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                    {item.desc}
                  </p>

                  {/* Key Achievements */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-700 dark:text-gray-300 mb-3 flex items-center gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      Key Achievements
                    </h4>
                    <ul className="space-y-2">
                      {item.achievements.map((achievement, aIndex) => (
                        <li key={aIndex} className="flex items-start gap-2 text-gray-600 dark:text-gray-400">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div>
                    <h4 className="font-semibold text-gray-700 dark:text-gray-300 mb-3">Technologies & Skills</h4>
                    <div className="flex flex-wrap gap-2">
                      {item.technologies.map((tech, tIndex) => (
                        <span 
                          key={tIndex}
                          className="px-3 py-1.5 bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-700 dark:to-gray-800 
                            text-gray-700 dark:text-gray-300 rounded-lg border border-gray-200 dark:border-gray-600 
                            text-sm font-medium shadow-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Gradient Bottom Line */}
                  <div className="mt-6 pt-4 border-t border-gray-100 dark:border-gray-700">
                    <div className="h-1 w-16 bg-gradient-to-r from-primary to-purple-600 rounded-full"></div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Stats and CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-20"
        >
          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 border border-gray-200 dark:border-gray-700 shadow-sm">
              <div className="text-3xl font-bold text-primary mb-2">3+</div>
              <div className="text-gray-700 dark:text-gray-300 font-medium">Years Experience</div>
              <div className="text-sm text-gray-500 dark:text-gray-500">Combined professional experience</div>
            </div>
            
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 border border-gray-200 dark:border-gray-700 shadow-sm">
              <div className="text-3xl font-bold text-primary mb-2">8+</div>
              <div className="text-gray-700 dark:text-gray-300 font-medium">Technologies Mastered</div>
              <div className="text-sm text-gray-500 dark:text-gray-500">Across different roles and projects</div>
            </div>
            
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 border border-gray-200 dark:border-gray-700 shadow-sm">
              <div className="text-3xl font-bold text-primary mb-2">100%</div>
              <div className="text-gray-700 dark:text-gray-300 font-medium">Problem Solving</div>
              <div className="text-sm text-gray-500 dark:text-gray-500">Track record of delivering solutions</div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center pt-10 border-t border-gray-200 dark:border-gray-800">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Ready to Bring My Experience to Your Team
            </h3>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-6">
              With hands-on experience in both IT support and backend engineering, 
              I bring a unique perspective to solving complex technical challenges.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-lg font-semibold hover:bg-gray-800 dark:hover:bg-gray-100 transition-all duration-300 hover:scale-105"
              >
                See My Projects
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg font-semibold hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-300 hover:scale-105"
              >
                Contact Me
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}