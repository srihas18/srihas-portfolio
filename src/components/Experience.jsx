import { motion } from 'framer-motion'
import items from '../data/experience.json'
import { FaBriefcase } from 'react-icons/fa'

export default function Experience() {
  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-3xl font-bold mb-8"
      >
        Experience
      </motion.h2>
      <div className="relative pl-8 border-l-2 border-accent/30 dark:border-accent/50">
        {items.map((e, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="mb-8"
          >
            <div className="absolute -left-4 top-0 bg-accent text-white rounded-full p-2 shadow-lg">
              <FaBriefcase size={16} />
            </div>
            <div className="p-6 rounded-xl border border-gray-200 dark:border-gray-800 bg-white/70 dark:bg-gray-900/50 backdrop-blur hover:shadow-xl transition-all duration-300 hover:scale-[1.02]">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-3">
                <h3 className="font-semibold text-lg">
                  <span className="text-accent">{e.role}</span> — {e.company}
                </h3>
                <span className="text-sm text-gray-500 font-medium">{e.period}</span>
              </div>
              {e.highlights?.length > 0 && (
                <ul className="list-disc pl-5 space-y-2 text-sm text-gray-700 dark:text-gray-300">
                  {e.highlights.map((h, hi) => (
                    <li key={hi}>{h}</li>
                  ))}
                </ul>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
