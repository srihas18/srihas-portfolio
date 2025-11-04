import { motion } from 'framer-motion'
import about from '../data/about.json'

export default function About() {
  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <motion.h2 initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-2xl font-bold mb-6">About</motion.h2>
      <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.1 }} className="text-gray-700 dark:text-gray-300 max-w-3xl">{about.summary}</motion.p>
    </section>
  )
}


