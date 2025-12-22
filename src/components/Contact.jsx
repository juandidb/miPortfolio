import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMail, FiSend, FiMapPin, FiPhone, FiCheckCircle, FiAlertCircle, FiGithub, FiLinkedin, FiUser, FiMessageSquare } from 'react-icons/fi';

export default function Contact() {
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
    if (!form.name.trim()) return 'Please enter your name.';
    if (!form.email.match(/^[^@\s]+@[^@\s]+\.[^@\s]+$/)) return 'Please enter a valid email address.';
    if (form.message.trim().length < 10) return 'Message must be at least 10 characters.';
    return null;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const err = validate();
    if (err) {
      setStatus({ type: 'error', message: err });
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setStatus({ 
      type: 'success', 
      message: 'Message sent successfully! I\'ll get back to you within 24 hours.' 
    });
    
    setForm({ name: '', email: '', subject: '', message: '' });
    setIsSubmitting(false);
  };

  const contactInfo = [
    {
      icon: <FiMail className="w-5 h-5" />,
      title: 'Email',
      value: 'juan@example.com',
      link: 'mailto:juan@example.com',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: <FiPhone className="w-5 h-5" />,
      title: 'Phone',
      value: '+54 9 2317 1471695',
      link: 'tel:+54923171471695',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: <FiMapPin className="w-5 h-5" />,
      title: 'Location',
      value: 'Argentina',
      link: 'https://maps.google.com/?q=Buenos+Aires',
      color: 'from-red-500 to-orange-500'
    }
  ];

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
    <section id="contact" className="min-h-screen py-20 md:py-28 bg-gradient-to-b from-gray-50 to-white dark:from-gray-950 dark:to-gray-900">
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
            Get In <span className="text-primary">Touch</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Have a project in mind or want to discuss opportunities? 
            I'm always open to talking about technology, design, and new challenges.
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
                <FiMessageSquare className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                Send me a message
              </h3>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Name *
                  </label>
                  <div className="relative">
                    <FiUser className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 
                        bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white 
                        focus:ring-2 focus:ring-primary focus:border-transparent 
                        transition-all duration-200"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Email *
                  </label>
                  <div className="relative">
                    <FiMail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="you@example.com"
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
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  placeholder="How can I help you?"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 
                    bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white 
                    focus:ring-2 focus:ring-primary focus:border-transparent 
                    transition-all duration-200"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Message *
                </label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows="6"
                  placeholder="Tell me about your project or inquiry..."
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
                        <FiAlertCircle className="w-5 h-5 text-red-500" />
                      ) : (
                        <FiCheckCircle className="w-5 h-5 text-green-500" />
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
                    Sending...
                  </>
                ) : (
                  <>
                    <FiSend className="w-5 h-5" />
                    Send Message
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
                Contact Information
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
                Connect With Me
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
                <span className="font-semibold">Currently Available</span>
              </div>
              
              <h4 className="text-xl font-bold mb-3">Let's work together</h4>
              <p className="text-gray-300 mb-6">
                I'm currently open to new opportunities, collaborations, and interesting projects. 
                Whether it's a full-time role or a freelance project, let's discuss how we can create something amazing.
              </p>
              
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-sm">Response time: Within 24 hours</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  <span className="text-sm">Available for: Full-time & Contract roles</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span className="text-sm">Timezone: ART (UTC-3)</span>
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
            Prefer a more direct approach? Feel free to email me directly at{' '}
            <a href="mailto:juandibenedetto@gmail.com" className="text-primary hover:underline font-medium">
              juandibenedetto99@gmail.com
            </a>
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-500 mt-2">
            I typically respond within a few hours during business days.
          </p>
        </motion.div>
      </div>
    </section>
  );
}