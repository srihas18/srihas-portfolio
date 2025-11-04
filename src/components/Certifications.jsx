import certs from '../data/certifications.json'
import { motion } from 'framer-motion'
import { FaCertificate } from 'react-icons/fa'

export default function Certifications() {
  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h2 className="text-2xl font-bold mb-8">Certifications</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {certs.map((c, i) => (
          <motion.div key={i} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="p-5 rounded-xl border border-gray-200 dark:border-gray-800 bg-white/70 dark:bg-gray-900/50 backdrop-blur">
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2 bg-accent text-white rounded-md"><FaCertificate /></div>
              <h3 className="font-semibold">{c.name}</h3>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400">{c.issuer}</p>
            <p className="text-xs text-gray-500 mt-1">{c.status}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}


