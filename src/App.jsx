import { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Education from './components/Education'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Certifications from './components/Certifications'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  const [theme, setTheme] = useState('light')

  useEffect(() => {
    const saved = localStorage.getItem('theme')
    const preferred = saved || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')
    setTheme(preferred)
  }, [])

  useEffect(() => {
    const root = document.documentElement
    if (theme === 'dark') root.classList.add('dark')
    else root.classList.remove('dark')
    localStorage.setItem('theme', theme)
  }, [theme])

  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100">
      <Navbar theme={theme} setTheme={setTheme} />
      <main className="flex-1">
        <section id="home" className="pt-20"><Hero /></section>
        <section id="about"><About /></section>
        <section id="education"><Education /></section>
        <section id="experience"><Experience /></section>
        <section id="projects"><Projects /></section>
        <section id="skills"><Skills /></section>
        <section id="certifications"><Certifications /></section>
        <section id="contact"><Contact /></section>
      </main>
      <Footer />
    </div>
  )
}
