import { motion } from 'framer-motion'
import about from '../data/about.json'

export default function About() {
  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl"
      >
        <motion.h2 
          className="text-3xl font-bold mb-4 text-gray-900 pb-2 border-b-2 border-gray-200"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          About
        </motion.h2>
        <motion.p 
          className="text-lg text-gray-700 leading-relaxed mt-6"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          {about.summary || `${about.title}. ${about.subtitle}. ${about.tagline}`}
        </motion.p>
      </motion.div>
    </section>
  )
}
