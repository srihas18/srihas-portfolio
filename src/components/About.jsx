import { motion } from 'framer-motion'
import about from '../data/about.json'

export default function About() {
  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-3xl"
      >
        <h2 className="text-3xl font-bold mb-6">About</h2>
        <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
          {about.summary || `${about.title}. ${about.subtitle}. ${about.tagline}`}
        </p>
      </motion.div>
    </section>
  )
}
