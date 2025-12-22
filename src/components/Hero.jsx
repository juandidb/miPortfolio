import { motion } from 'framer-motion'
import { TypeAnimation } from 'react-type-animation'

export default function Hero() {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative">
      {/* Fondo opcional si quieres agregar un efecto */}
      <div className="absolute inset-0 -z-10"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8, delay: 0.1 }}
          className="max-w-4xl mx-auto text-center"
        >
          {/* Nombre fijo */}
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-6xl lg:text-7xl font-extrabold hover:text-red-600 transition-colors duration-300 cursor-pointer mb-6"
          >
            Juan Di Benedetto
          </motion.h1>
          
          {/* Texto animado de profesiones */}
          <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-700 dark:text-gray-300 min-h-[80px] md:min-h-[90px] mb-8">
            <TypeAnimation
              sequence={[
                'Software Developer',
                2000,
                { delete: 19 },
                'IT Support',
                1500,
                { delete: 10 },
                'Web Development',
                1500,
                { delete: 15 },
                'UX/UI Design',
                1500,
                { delete: 12 },
                'QA Testing',
                1500,
                { delete: 10 },
                'Data Analysis',
                1500,
                { delete: 13 },
                '',
                1500,
              ]}
              wrapper="span"
              speed={50}
              cursor={true}
              repeat={Infinity}
            />
          </div>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="max-w-2xl mx-auto text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-10"
          >
           IT Support professional, web developer and System student. I build clean, functional web experiences and provide reliable technical support, always focused on clarity, performance, and real-world solutions.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a 
              href="#projects" 
              className="inline-flex items-center justify-center px-6 py-3 rounded-md bg-primary text-white hover:opacity-95 text-lg font-medium transition-all duration-300 hover:scale-105"
            >
              View Projects
            </a>
            <a 
              href="#contact" 
              className="inline-flex items-center justify-center px-6 py-3 rounded-md border-2 border-slate-300 dark:border-slate-600 text-lg font-medium transition-all duration-300 hover:scale-105 hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              Contact Me
            </a>
          </motion.div>
          
          {/* Scroll indicator opcional */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          >
            <div className="animate-bounce w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-gray-400 rounded-full mt-2"></div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}