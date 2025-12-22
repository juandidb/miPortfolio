import React from 'react';
import { motion } from 'framer-motion';
import { FiUser, FiCode, FiUsers, FiTarget, FiBarChart2, FiBookOpen } from 'react-icons/fi';

export default function About() {
  const values = [
    {
      icon: <FiCode className="w-6 h-6" />,
      title: "Clean Architecture",
      description: "Applying clean architecture principles to build maintainable and well-structured applications",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: <FiTarget className="w-6 h-6" />,
      title: "Pragmatic Solutions",
      description: "Focusing on real impact and practical trade-offs instead of perfect abstractions",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: <FiUsers className="w-6 h-6" />,
      title: "Team Collaboration",
      description: "Knowledge sharing, clear communication, and effective collaboration within teams",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: <FiBarChart2 className="w-6 h-6" />,
      title: "Observability",
      description: "Writing debuggable code and using logging to better understand system behavior",
      color: "from-orange-500 to-red-500"
    }
  ];

  const principles = [
    {
      title: "Systems Thinking",
      description: "Understanding how components interact and optimizing the whole system",
      icon: "🧠"
    },
    {
      title: "Iterative Improvement",
      description: "Shipping value quickly and refining based on feedback and metrics",
      icon: "🔄"
    },
    {
      title: "Developer Experience",
      description: "Prioritizing tools and workflows that empower engineering teams",
      icon: "⚡"
    },
    {
      title: "Technical Leadership",
      description: "Guiding technical decisions and setting quality standards",
      icon: "🎯"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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

  const textVariants = {
    hidden: { opacity: 0, x: -20 },
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
    <section id="about" className="min-h-screen py-20 md:py-28 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-950">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-gray-100 dark:bg-gray-800 rounded-full mb-6">
            <FiUser className="w-5 h-5 text-primary" />
            <span className="text-gray-700 dark:text-gray-300 font-medium">
              Professional Profile
            </span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            About <span className="text-primary">Me</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            I'm a Systems-oriented engineer focused on building reliable, maintainable software 
            and empowering development teams through better tools and processes.
          </p>
          
          <div className="mt-8 flex justify-center gap-4">
            <div className="w-12 h-1 bg-gradient-to-r from-primary to-purple-600 rounded-full"></div>
            <div className="w-6 h-1 bg-gradient-to-r from-purple-600 to-blue-500 rounded-full"></div>
            <div className="w-12 h-1 bg-gradient-to-r from-blue-500 to-primary rounded-full"></div>
          </div>
        </motion.div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Left Column - Introduction */}
          <motion.div
            variants={textVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="space-y-8"
          >
            {/* Main Description */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 p-8 shadow-lg">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-xl bg-gradient-to-br from-primary to-purple-600">
                  <FiBookOpen className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                  Engineering Philosophy
                </h3>
              </div>
              
              <div className="space-y-6">
                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed"
                >
                  I have a background in systems (UNLP) and software engineering, building scalable services and developer tools. I enjoy breaking down complex problems into simple, testable components and iterating quickly with clear goals. My work emphasizes maintainability, observability, and pragmatic trade-offs.
                </motion.p>
                
                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed"
                >
                  I prioritize learning and collaboration: mentoring teammates, writing clear documentation, and improving developer experience. I'm comfortable across the stack and enjoy contributing where I have the most impact—often at the API-contract, performance bottleneck, or developer workflow level.
                </motion.p>
              </div>
            </div>

            {/* Principles */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Core Principles
              </h3>
              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="grid grid-cols-1 sm:grid-cols-2 gap-4"
              >
                {principles.map((principle, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="bg-gray-50 dark:bg-gray-800 rounded-xl p-5 border border-gray-200 dark:border-gray-700 hover:border-primary/30 transition-colors duration-300 group"
                  >
                    <div className="flex items-start gap-3">
                      <span className="text-2xl">{principle.icon}</span>
                      <div>
                        <h4 className="font-semibold text-gray-900 dark:text-white group-hover:text-primary transition-colors duration-300">
                          {principle.title}
                        </h4>
                        <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                          {principle.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.div>

          {/* Right Column - Values & Focus Areas */}
          <div className="space-y-8">
            {/* Core Values */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Core Values
              </h3>
              
              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="space-y-4"
              >
                {values.map((value, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="group"
                  >
                    <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 p-5 hover:shadow-xl transition-all duration-300">
                      <div className="flex items-start gap-4">
                        <div className={`p-3 rounded-xl bg-gradient-to-br ${value.color}`}>
                          {value.icon}
                        </div>
                        <div className="flex-1">
                          <h4 className="text-lg font-bold text-gray-900 dark:text-white group-hover:text-primary transition-colors duration-300">
                            {value.title}
                          </h4>
                          <p className="text-gray-600 dark:text-gray-300 mt-2">
                            {value.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            {/* Focus Areas */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-gradient-to-br from-gray-900 to-gray-800 dark:from-gray-800 dark:to-gray-900 rounded-2xl p-8 text-white"
            >
              <h3 className="text-2xl font-bold mb-6">Areas of Impact</h3>
              
              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-semibold text-primary-light mb-3">Technical Foundations</h4>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-primary"></div>
                      <span>Contributing to architecture decisions and technical discussions</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-primary"></div>
                      <span>Writing high-quality, maintainable code and participating in code reviews</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-primary"></div>
                      <span>Performance awareness and basic scalability considerations</span>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold text-primary-light mb-3">Team Collaboration</h4>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-primary"></div>
                      <span>Knowledge sharing and clear technical documentation</span>
                    </li>
                   <li className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-primary"></div>
                      <span>Encouraging best practices and collective problem-solvings</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-primary"></div>
                      <span>Improving developer experience and workflows</span>
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Philosophy Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="max-w-4xl mx-auto mt-16"
        >
          <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 p-8 shadow-lg">
            <div className="text-center">
              <div className="inline-flex items-center gap-3 px-6 py-3 bg-gray-100 dark:bg-gray-700 rounded-full mb-6">
                <FiTarget className="w-5 h-5 text-primary" />
                <span className="text-gray-700 dark:text-gray-300 font-medium">
                  My Approach to Coding
                </span>
              </div>
              
              <blockquote className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-6 italic max-w-3xl mx-auto">
                “Building software that is easy to understand, maintain, and work with.”
              </blockquote>
              
              <div className="flex items-center justify-center gap-4">
                <div className="w-24 h-1 bg-gradient-to-r from-primary to-purple-600 rounded-full"></div>
                <div className="text-gray-500 dark:text-gray-400 font-medium">Juan Di Benedetto</div>
                <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-primary rounded-full"></div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16 pt-10 border-t border-gray-200 dark:border-gray-800"
        >
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Interested in Working Together?
          </h3>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-6">
            If you’re looking for support in software development, IT operations, 
            or building clean and reliable web solutions, I’m open to discussing how I can contribute.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-lg font-semibold hover:bg-gray-800 dark:hover:bg-gray-100 transition-all duration-300 hover:scale-105"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg font-semibold hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-300 hover:scale-105"
            >
              Get In Touch
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}