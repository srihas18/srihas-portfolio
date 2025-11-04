import skills from '../data/skills.json'
import { motion } from 'framer-motion'

function Bar({ name, level }) {
  return (
    <div>
      <div className="flex justify-between text-sm mb-1"><span>{name}</span><span>{level}%</span></div>
      <div className="h-2 bg-gray-200 dark:bg-gray-800 rounded">
        <motion.div initial={{ width: 0 }} whileInView={{ width: `${level}%` }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="h-full bg-accent rounded" />
      </div>
    </div>
  )
}

export default function Skills() {
  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h2 className="text-2xl font-bold mb-8">Skills</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {Object.entries(skills).map(([cat, items]) => (
          <div key={cat} className="p-5 rounded-xl border border-gray-200 dark:border-gray-800 bg-white/70 dark:bg-gray-900/50 backdrop-blur">
            <h3 className="font-semibold mb-4">{cat}</h3>
            <div className="space-y-3">
              {items.map((s, i) => <Bar key={i} name={s.name} level={s.level} />)}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}


