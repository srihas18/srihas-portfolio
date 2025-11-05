import { motion } from 'framer-motion'
import { FaLinkedin, FaGithub } from 'react-icons/fa'
import about from '../data/about.json'
import { useState } from 'react'

export default function Hero() {
  const [resumeError, setResumeError] = useState(false)

  const handleResumeClick = (e) => {
    e.preventDefault()
    const resumePath = '/Srihas_Gullapalli_Resume.pdf'
    fetch(resumePath, { method: 'HEAD' })
      .then(res => {
        if (res.ok) {
          window.open(resumePath, '_blank')
          setResumeError(false)
        } else {
          setResumeError(true)
          console.error('Resume file not found:', resumePath)
          setTimeout(() => setResumeError(false), 3000)
        }
      })
      .catch(() => {
        setResumeError(true)
        console.error('Error checking resume file:', resumePath)
        setTimeout(() => setResumeError(false), 3000)
      })
  }

  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-center sm:text-left"
      >
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-sm uppercase tracking-wider text-accent mb-4"
        >
          Welcome
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-6 text-gray-900"
        >
          Hi, I'm {about.name} 👋
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-xl sm:text-2xl text-gray-700 mb-4"
        >
          {about.title}
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="text-lg sm:text-xl text-gray-600 mb-2"
        >
          {about.subtitle}
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="text-base sm:text-lg text-gray-500 mb-8"
        >
          {about.tagline}
        </motion.p>
        {resumeError && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-4 p-3 bg-red-50 border border-red-200 rounded-md text-red-700 text-sm"
          >
            Resume file not found. Please ensure Srihas_Gullapalli_Resume.pdf is in the /public folder.
          </motion.div>
        )}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="flex flex-wrap gap-4 justify-center sm:justify-start"
        >
          <a
            href="/Srihas_Gullapalli_Resume.pdf"
            onClick={handleResumeClick}
            className="px-6 py-3 rounded-md bg-accent text-white shadow-lg hover:shadow-xl hover:scale-105 hover:bg-[#9C1333] transition-all duration-300 font-medium flex items-center gap-2"
          >
            📄 View Résumé
          </a>
          <a
            href={about.links.linkedin}
            target="_blank"
            rel="noreferrer"
            className="px-6 py-3 rounded-md border-2 border-accent text-accent hover:bg-accent hover:text-white transition-all duration-300 font-medium flex items-center gap-2"
          >
            <FaLinkedin /> LinkedIn
          </a>
          <a
            href={about.links.github}
            target="_blank"
            rel="noreferrer"
            className="px-6 py-3 rounded-md border-2 border-accent text-accent hover:bg-accent hover:text-white transition-all duration-300 font-medium flex items-center gap-2"
          >
            <FaGithub /> GitHub
          </a>
        </motion.div>
      </motion.div>
    </section>
  )
}
