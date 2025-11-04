import certs from '../data/certifications.json'
import { motion } from 'framer-motion'
import { FaCertificate } from 'react-icons/fa'

export default function Certifications() {
  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-3xl font-bold mb-8"
      >
        Certifications
      </motion.h2>
      <div className="grid md:grid-cols-2 gap-6">
        {certs.map((c, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            whileHover={{ scale: 1.03, y: -4 }}
            className="p-6 rounded-xl border border-gray-200 dark:border-gray-800 bg-white/70 dark:bg-gray-900/50 backdrop-blur shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <div className="flex items-start gap-4">
              <div className="p-3 bg-accent text-white rounded-lg shadow-lg">
                <FaCertificate size={24} />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-lg mb-2">{c.name}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">{c.issuer}</p>
                <span className="inline-block text-xs px-2 py-1 rounded-full bg-accent/10 text-accent border border-accent/20">
                  {c.status}
                </span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
