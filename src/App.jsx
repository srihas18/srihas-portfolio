import { useEffect } from 'react'
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
import ScrollToTop from './components/ScrollToTop'

export default function App() {
  useEffect(() => {
    // Ensure light theme is always applied
    document.documentElement.classList.remove('dark')
    document.body.style.backgroundColor = '#ffffff'
  }, [])

  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-900 relative overflow-hidden">
      {/* Background gradient animation */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-white via-gray-50 to-white opacity-50" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(122,0,25,0.05),transparent_50%)]" />
      </div>
      <Navbar />
      <main className="flex-1 relative z-10">
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
      <ScrollToTop />
    </div>
  )
}
