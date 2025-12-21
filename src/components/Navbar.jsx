import { useEffect, useState } from 'react'
import ThemeToggle from './ThemeToggle'

const links = [
  { href: '#hero', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#projects', label: 'Projects' },
  { href: '#work-experience', label: 'Experience' },
  { href: '#education', label: 'Education' },
  { href: '#contact', label: 'Contact' }
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 20)
    }
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`sticky top-0 z-50 backdrop-blur-md transition-shadow ${scrolled ? 'shadow-md' : ''}`}>
      <nav className="max-w-4xl mx-auto px-6 py-3 flex items-center justify-between">
        <a href="#hero" className="text-xl font-semibold">Juan Di Benedetto</a>
        <div className="hidden md:flex gap-6 items-center">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-sm text-slate-700 dark:text-slate-300 hover:text-primary">
              {l.label}
            </a>
          ))}
          <ThemeToggle />
        </div>
        <div className="md:hidden">
          <ThemeToggle />
        </div>
      </nav>
    </header>
  )
}