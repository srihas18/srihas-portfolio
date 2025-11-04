import { useEffect, useState } from 'react'
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'
import DarkModeToggle from './DarkModeToggle'
import about from '../data/about.json'

const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'education', label: 'Education' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'certifications', label: 'Certifications' },
  { id: 'contact', label: 'Contact' },
]

export default function Navbar({ theme, setTheme }) {
  const [active, setActive] = useState('home')

  useEffect(() => {
    const handler = () => {
      const sections = navItems.map(n => document.getElementById(n.id))
      const scrollPos = window.scrollY + 120
      for (const section of sections) {
        if (!section) continue
        const { top, height } = section.getBoundingClientRect()
        const offsetTop = top + window.scrollY
        if (scrollPos >= offsetTop && scrollPos < offsetTop + height) {
          setActive(section.id)
          break
        }
      }
    }
    window.addEventListener('scroll', handler, { passive: true })
    handler()
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur bg-white/70 dark:bg-gray-950/70 border-b border-gray-200 dark:border-gray-800">
      <nav className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#home" className="font-semibold text-lg">Srihas Gullapalli</a>
        <div className="hidden md:flex items-center gap-6">
          {navItems.map(item => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`text-sm hover:text-accent transition-colors ${active === item.id ? 'text-accent' : 'text-gray-700 dark:text-gray-300'}`}
            >
              {item.label}
            </a>
          ))}
        </div>
        <div className="flex items-center gap-3">
          <a href={about.links.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="hover:text-accent"><FaLinkedin size={20} /></a>
          <a href={about.links.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="hover:text-accent"><FaGithub size={20} /></a>
          <a href={`mailto:${about.email}`} aria-label="Email" className="hover:text-accent"><FaEnvelope size={20} /></a>
          <DarkModeToggle theme={theme} setTheme={setTheme} />
        </div>
      </nav>
    </header>
  )
}


