import React from 'react';
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import WorkExperience from './components/WorkExperience'
import Education from './components/Education'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ThemeToggle from './components/ThemeToggle'

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900 dark:bg-slate-900 dark:text-slate-100 transition-colors">
      <Navbar />

      <main className="max-w-4xl mx-auto px-6 pb-24">
        <div className="pt-8">
          <ThemeToggle />
        </div>

        <Hero />
        <About />
        <Skills />
        <Projects />
        <WorkExperience />
        <Education />
        <Contact />
      </main>

      <Footer />
    </div>
  )
}

export default App
