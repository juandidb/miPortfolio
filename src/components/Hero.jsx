import { motion } from 'framer-motion'
import { TypeAnimation } from 'react-type-animation'

export default function Hero() {
  return (
    <section id="hero" className="pt-12 pb-12">
      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
        {/* Nombre fijo */}
        <h1 className="text-4xl md:text-5xl font-extrabold hover:text-red-600 transition-colors duration-300 cursor-pointer mb-4">
          Juan Di Benedetto
        </h1>
        
        {/* Texto animado de profesiones */}
        <div className="text-3xl md:text-4xl font-bold text-gray-700 dark:text-gray-300 min-h-[60px] md:min-h-[70px]">
          <TypeAnimation
            sequence={[
              'Software Development',
              2000,
              { delete: 19 }, // Borrar 'Software Development' (19 chars)
              'IT Support',
              1500,
              { delete: 10 }, // Borrar 'IT Support' (10 chars)
              'Web Development',
              1500,
              { delete: 15 }, // Borrar 'Web Development' (15 chars)
              'UX/UI Design',
              1500,
              { delete: 12 }, // Borrar 'UX/UI Design' (12 chars)
              'QA Testing',
              1500,
              { delete: 10 }, // Borrar 'QA Testing' (10 chars)
              'Data Analysis',
              1500,
              { delete: 13 }, // Borrar 'Data Analysis' (13 chars)
              '', // Estado vacío al final
              1500,
            ]}
            wrapper="span"
            speed={50}
            cursor={true}
            repeat={Infinity}
          />
        </div>
        
        <p className="max-w-2xl prose mt-6">
          I build reliable, maintainable web applications with a systems-oriented approach. I focus on writing clean, testable code, and shipping features that solve real user problems. Currently open to mid/senior roles where I can help teams deliver high-quality software.
        </p>
        <div className="mt-6 flex gap-3">
          <a href="#projects" className="inline-flex items-center px-4 py-2 rounded-md bg-primary text-white hover:opacity-95">View Projects</a>
          <a href="#contact" className="inline-flex items-center px-4 py-2 rounded-md border border-slate-200 dark:border-slate-700">Contact</a>
        </div>
      </motion.div>
    </section>
  )
}