import React from 'react';
import { motion } from 'framer-motion';
import { FiCode, FiServer, FiTool, FiStar, FiTrendingUp, FiTarget } from 'react-icons/fi';
import { useI18n } from '../i18n/index.jsx';

export default function Skills() {
  const { t } = useI18n();

  const skills = {
    Frontend: [
      { name: 'React', level: 95, icon: '⚛️', years: '4 years' },
      { name: 'Vite', level: 90, icon: '⚡', years: '3 years' },
      { name: 'Tailwind CSS', level: 95, icon: '🎨', years: '3 years' },
      { name: 'TypeScript', level: 85, icon: '📘', years: '3 years' },
      { name: 'JavaScript', level: 90, icon: '🟨', years: '5 years' },
      { name: 'HTML5/CSS3', level: 95, icon: '🎯', years: '6 years' }
    ],
    Backend: [
      { name: 'Node.js', level: 90, icon: '🟢', years: '4 years' },
      { name: 'Express.js', level: 88, icon: '🚂', years: '3 years' },
      { name: 'PostgreSQL', level: 85, icon: '🐘', years: '3 years' },
      { name: 'Go', level: 75, icon: '🐹', years: '2 years' },
      { name: 'REST APIs', level: 90, icon: '🔗', years: '4 years' },
      { name: 'Microservices', level: 85, icon: '🧩', years: '3 years' }
    ],
    Tools: [
      { name: 'Git/GitHub', level: 95, icon: '📊', years: '5 years' },
      { name: 'Docker', level: 85, icon: '🐳', years: '3 years' },
      { name: 'CI/CD', level: 80, icon: '🔄', years: '3 years' },
      { name: 'OpenTelemetry', level: 75, icon: '📈', years: '2 years' },
      { name: 'AWS', level: 70, icon: '☁️', years: '2 years' },
      { name: 'Testing', level: 85, icon: '🧪', years: '3 years' }
    ]
  };

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

  const categoryVariants = {
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

  const skillVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.3
      }
    }
  };

  const progressBarVariants = {
    hidden: { width: 0 },
    visible: (level) => ({
      width: `${level}%`,
      transition: {
        duration: 1,
        ease: "easeOut",
        delay: 0.5
      }
    })
  };

  const getCategoryIcon = (category) => {
    switch(category) {
      case 'Frontend': return <FiCode className="w-6 h-6" />;
      case 'Backend': return <FiServer className="w-6 h-6" />;
      case 'Tools': return <FiTool className="w-6 h-6" />;
      default: return <FiStar className="w-6 h-6" />;
    }
  };

  const getCategoryColor = (category) => {
    switch(category) {
      case 'Frontend': return 'from-blue-500 to-cyan-500';
      case 'Backend': return 'from-green-500 to-emerald-500';
      case 'Tools': return 'from-purple-500 to-pink-500';
      default: return 'from-gray-500 to-gray-600';
    }
  };

  const getLevelColor = (level) => {
    if (level >= 90) return 'bg-green-500';
    if (level >= 80) return 'bg-blue-500';
    if (level >= 70) return 'bg-yellow-500';
    return 'bg-orange-500';
  };

  const getLevelBadgeClasses = (level) => {
    if (level >= 90) return 'bg-green-500/10 text-green-700 dark:text-green-300';
    if (level >= 80) return 'bg-blue-500/10 text-blue-700 dark:text-blue-300';
    if (level >= 70) return 'bg-yellow-500/10 text-yellow-800 dark:text-yellow-300';
    return 'bg-orange-500/10 text-orange-700 dark:text-orange-300';
  };

  const getLevelText = (level) => {
    if (level >= 90) return t('skills.levels.expert');
    if (level >= 80) return t('skills.levels.advanced');
    if (level >= 70) return t('skills.levels.intermediate');
    return t('skills.levels.learning');
  };

  return (
    <section id="skills" className="min-h-screen py-20 md:py-28 bg-gradient-to-b from-gray-50 to-white dark:from-slate-900 dark:to-slate-900">
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
            {t('skills.titleA')} <span className="text-primary">{t('skills.titleB')}</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            {t('skills.subtitle')}
          </p>
          
          <div className="mt-8 flex justify-center gap-4">
            <div className="w-12 h-1 bg-gradient-to-r from-primary to-purple-600 rounded-full"></div>
            <div className="w-6 h-1 bg-gradient-to-r from-purple-600 to-blue-500 rounded-full"></div>
            <div className="w-12 h-1 bg-gradient-to-r from-blue-500 to-primary rounded-full"></div>
          </div>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
        >
          {Object.entries(skills).map(([category, skillList], categoryIndex) => (
            <motion.div
              key={category}
              variants={categoryVariants}
              className="group"
            >
              {/* Category Card */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-lg hover:shadow-xl transition-all duration-300 p-6 h-full">
                {/* Category Header */}
                <div className="flex items-center gap-4 mb-6 pb-4 border-b border-gray-100 dark:border-gray-700">
                  <div className={`p-3 rounded-xl bg-gradient-to-br ${getCategoryColor(category)}`}>
                    {getCategoryIcon(category)}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                      {category}
                    </h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      {t('skills.coreSkillsCount', skillList.length)}
                    </p>
                  </div>
                </div>

                {/* Skills List */}
                <div className="space-y-5">
                  {skillList.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      variants={skillVariants}
                      custom={skillIndex}
                      className="space-y-2"
                    >
                      {/* Skill Header */}
                      <div className="flex justify-between items-start gap-3">
                        <div className="flex items-center gap-2 min-w-0">
                          <span className="text-lg">{skill.icon}</span>
                          <span className="font-medium text-gray-800 dark:text-gray-200">
                            {skill.name}
                          </span>
                        </div>
                        <div className="flex flex-wrap items-center justify-end gap-2">
                          <span className="text-xs font-medium px-2 py-1 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 whitespace-nowrap">
                            {(() => {
                              const n = parseInt(String(skill.years), 10);
                              return Number.isFinite(n) ? t('skills.years', n) : skill.years;
                            })()}
                          </span>
                          <span className={`text-xs font-semibold px-2 py-1 rounded-full whitespace-nowrap ${getLevelBadgeClasses(skill.level)}`}>
                            {getLevelText(skill.level)}
                          </span>
                        </div>
                      </div>

                      {/* Progress Bar */}
                      <div className="space-y-1">
                        <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400">
                          <span>{t('skills.proficiency')}</span>
                          <span className="font-semibold">{skill.level}%</span>
                        </div>
                        <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                          <motion.div
                            custom={skill.level}
                            variants={progressBarVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            className={`h-full rounded-full ${getLevelColor(skill.level)}`}
                          />
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Category Footer */}
                <div className="mt-6 pt-4 border-t border-gray-100 dark:border-gray-700">
                  <div className="flex items-center justify-between">
                    <div className="text-sm text-gray-500 dark:text-gray-400">
                      {t(
                        'skills.averageLevel',
                        Math.round(skillList.reduce((acc, s) => acc + s.level, 0) / skillList.length)
                      )}
                    </div>
                    <div className="w-8 h-1 bg-gradient-to-r from-primary to-purple-600 rounded-full"></div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Skills & CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-16"
        >
          {/* Soft Skills */}
          <div className="max-w-4xl mx-auto mb-12">
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 dark:from-gray-800 dark:to-gray-900 rounded-2xl p-8 text-white">
              <div className="flex items-center gap-3 mb-6">
                <FiTarget className="w-8 h-8 text-primary" />
                <h3 className="text-2xl font-bold">{t('skills.complementaryTitle')}</h3>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-lg font-semibold mb-3 text-primary-light">{t('skills.complementaryProblemSolving')}</h4>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                      <span>{(t('skills.complementaryProblemBullets')?.[0]) ?? 'Analytical Thinking & Debugging'}</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                      <span>{(t('skills.complementaryProblemBullets')?.[1]) ?? 'System Architecture Design'}</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                      <span>{(t('skills.complementaryProblemBullets')?.[2]) ?? 'Performance Optimization'}</span>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold mb-3 text-primary-light">{t('skills.complementaryTeam')}</h4>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                      <span>{(t('skills.complementaryTeamBullets')?.[0]) ?? 'Agile/Scrum Methodologies'}</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                      <span>{(t('skills.complementaryTeamBullets')?.[1]) ?? 'Code Review & Mentoring'}</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                      <span>{(t('skills.complementaryTeamBullets')?.[2]) ?? 'Technical Documentation'}</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 max-w-4xl mx-auto">
            <div className="bg-white dark:bg-gray-800 rounded-xl p-4 text-center border border-gray-200 dark:border-gray-700">
              <div className="text-2xl font-bold text-primary mb-1">15+</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">{t('skills.stats.technologies')}</div>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-xl p-4 text-center border border-gray-200 dark:border-gray-700">
              <div className="text-2xl font-bold text-primary mb-1">85%</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">{t('skills.stats.avgProficiency')}</div>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-xl p-4 text-center border border-gray-200 dark:border-gray-700">
              <div className="text-2xl font-bold text-primary mb-1">5+</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">{t('skills.stats.yearsExperience')}</div>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-xl p-4 text-center border border-gray-200 dark:border-gray-700">
              <div className="text-2xl font-bold text-primary mb-1">3</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">{t('skills.stats.categories')}</div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center pt-10 border-t border-gray-200 dark:border-gray-800">
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-gray-100 dark:bg-gray-800 rounded-full mb-6">
              <FiTrendingUp className="w-5 h-5 text-primary" />
              <span className="text-gray-700 dark:text-gray-300 font-medium">
                {t('skills.ctaBadge')}
              </span>
            </div>
            
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              {t('skills.ctaTitle')}
            </h3>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-6">
              {t('skills.ctaText')}
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-lg font-semibold hover:bg-gray-800 dark:hover:bg-gray-100 transition-all duration-300 hover:scale-105"
              >
                {t('skills.ctaProjects')}
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg font-semibold hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-300 hover:scale-105"
              >
                {t('skills.ctaContact')}
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}