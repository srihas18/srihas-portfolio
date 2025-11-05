import { useEffect, useState } from 'react'
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'
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

export default function Navbar() {
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

  const handleNavClick = (e, id) => {
    e.preventDefault()
    const element = document.getElementById(id)
    if (element) {
      const offsetTop = element.offsetTop - 80
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      })
    }
  }

  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-white/90 border-b border-gray-200 shadow-sm">
      <nav className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a 
          href="#home" 
          onClick={(e) => handleNavClick(e, 'home')}
          className="font-semibold text-lg text-gray-900 hover:text-accent transition-colors"
        >
          Srihas Gullapalli
        </a>
        <div className="hidden md:flex items-center gap-6">
          {navItems.map(item => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={(e) => handleNavClick(e, item.id)}
              className={`text-sm transition-colors ${
                active === item.id 
                  ? 'text-accent font-medium' 
                  : 'text-gray-700 hover:text-accent'
              }`}
            >
              {item.label}
            </a>
          ))}
        </div>
        <div className="flex items-center gap-3">
          <a 
            href={about.links.linkedin} 
            target="_blank" 
            rel="noreferrer" 
            aria-label="LinkedIn" 
            className="text-gray-700 hover:text-accent transition-colors"
          >
            <FaLinkedin size={20} />
          </a>
          <a 
            href={about.links.github} 
            target="_blank" 
            rel="noreferrer" 
            aria-label="GitHub" 
            className="text-gray-700 hover:text-accent transition-colors"
          >
            <FaGithub size={20} />
          </a>
          <a 
            href={`mailto:${about.email}`} 
            aria-label="Email" 
            className="text-gray-700 hover:text-accent transition-colors"
          >
            <FaEnvelope size={20} />
          </a>
        </div>
      </nav>
    </header>
  )
}


