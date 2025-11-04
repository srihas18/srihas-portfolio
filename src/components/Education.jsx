import { motion } from 'framer-motion'
import items from '../data/education.json'
import { FaGraduationCap } from 'react-icons/fa'

export default function Education() {
  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h2 className="text-2xl font-bold mb-8">Education</h2>
      <div className="relative pl-8 border-l border-gray-200 dark:border-gray-800">
        {items.map((e, i) => (
          <motion.div key={i} initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="mb-8 group">
            <div className="absolute -left-3 top-1 bg-accent text-white rounded-full p-2 shadow"><FaGraduationCap size={14} /></div>
            <div className="p-4 rounded-lg border border-gray-200 dark:border-gray-800 bg-white/70 dark:bg-gray-900/50 backdrop-blur hover:shadow-lg transition-shadow">
              <div className="flex items-center justify-between gap-3 flex-wrap">
                <h3 className="font-semibold">{e.degree} · <span className="text-accent">{e.institution}</span></h3>
                <span className="text-sm text-gray-500">{e.period}</span>
              </div>
              {e.details?.length ? (
                <ul className="list-disc pl-5 mt-2 text-sm text-gray-600 dark:text-gray-400">
                  {e.details.map((d, di) => <li key={di}>{d}</li>)}
                </ul>
              ) : null}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}


