import { motion } from 'framer-motion'
import { FaLinkedin, FaGithub } from 'react-icons/fa'
import about from '../data/about.json'

export default function Hero() {
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
          className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-6"
        >
          Hi, I'm {about.name} 👋
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-xl sm:text-2xl text-gray-700 dark:text-gray-300 mb-4"
        >
          {about.title}
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 mb-2"
        >
          {about.subtitle}
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="text-base sm:text-lg text-gray-500 dark:text-gray-500 mb-8"
        >
          {about.tagline}
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="flex flex-wrap gap-4 justify-center sm:justify-start"
        >
          <a
            href={about.links.resume}
            target="_blank"
            rel="noreferrer"
            className="px-6 py-3 rounded-md bg-accent text-white shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 font-medium flex items-center gap-2"
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
