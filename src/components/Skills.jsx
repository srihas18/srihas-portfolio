import skills from '../data/skills.json'
import { motion } from 'framer-motion'

function Bar({ name, level }) {
  return (
    <div className="mb-4">
      <div className="flex justify-between text-sm mb-2">
        <span className="font-medium">{name}</span>
        <span className="text-accent font-semibold">{level}%</span>
      </div>
      <div className="h-2.5 bg-gray-200 dark:bg-gray-800 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="h-full bg-gradient-to-r from-accent to-accent/80 rounded-full"
        />
      </div>
    </div>
  )
}

export default function Skills() {
  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-3xl font-bold mb-8"
      >
        Skills
      </motion.h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {Object.entries(skills).map(([cat, items]) => (
          <motion.div
            key={cat}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-6 rounded-xl border border-gray-200 dark:border-gray-800 bg-white/70 dark:bg-gray-900/50 backdrop-blur shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <h3 className="font-semibold text-lg mb-4 text-accent">{cat}</h3>
            <div className="space-y-1">
              {items.map((s, i) => (
                <Bar key={i} name={s.name} level={s.level} />
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
