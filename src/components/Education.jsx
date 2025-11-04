import { motion } from 'framer-motion'
import items from '../data/education.json'
import { FaGraduationCap } from 'react-icons/fa'

export default function Education() {
  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-3xl font-bold mb-8"
      >
        Education
      </motion.h2>
      <div className="relative pl-8 border-l-2 border-accent/30 dark:border-accent/50">
        {items.map((e, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="mb-8 group"
          >
            <div className="absolute -left-4 top-0 bg-accent text-white rounded-full p-2 shadow-lg">
              <FaGraduationCap size={16} />
            </div>
            <div className="p-6 rounded-xl border border-gray-200 dark:border-gray-800 bg-white/70 dark:bg-gray-900/50 backdrop-blur hover:shadow-xl transition-all duration-300 hover:scale-[1.02]">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-2">
                <h3 className="font-semibold text-lg">
                  <span className="text-accent">{e.degree}</span> — {e.institution}
                </h3>
                <span className="text-sm text-gray-500 font-medium">{e.period}</span>
              </div>
              {e.gpa && (
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                  <span className="font-semibold">GPA:</span> {e.gpa}
                </p>
              )}
              {e.details?.length > 0 && (
                <ul className="list-disc pl-5 mt-3 text-sm text-gray-600 dark:text-gray-400 space-y-1">
                  {e.details.map((d, di) => (
                    <li key={di}>{d}</li>
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
