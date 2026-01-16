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
import LightMobileBg from './components/LightMobileBg'

import { Routes, Route } from 'react-router-dom';
import CaseDeli from './pages/CaseDeli';

function Home() {
  return (
    <div className="relative min-h-screen bg-white text-slate-900 dark:bg-slate-900 dark:text-slate-100 transition-colors">
      <LightMobileBg />
      <Navbar />
      <Hero />

      <main className="max-w-6xl mx-auto px-6 pb-24">
        <div className="pt-8">
          <ThemeToggle />
        </div>

        <Education />
        <WorkExperience />
        <Projects />
        <About />
        <Skills />
        <Contact />
      </main>

      <Footer />
    </div>
  )
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/case/deli-app" element={<CaseDeli />} />
    </Routes>
  )
}

export default App
