import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import about from '../data/about.json'

export default function Hero() {
  const titles = about.titleRotator
  const [idx, setIdx] = useState(0)
  useEffect(() => {
    const id = setInterval(() => setIdx(i => (i + 1) % titles.length), 1800)
    return () => clearInterval(id)
  }, [titles.length])

  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
        <p className="text-sm uppercase tracking-wider text-accent mb-2">Welcome</p>
        <h1 className="text-3xl sm:text-5xl font-extrabold mb-4">Hi, I'm {about.name} 👋</h1>
        <div className="h-8 sm:h-10 mb-6">
          <motion.div key={idx} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="text-xl sm:text-2xl font-medium text-gray-700 dark:text-gray-300">
            {titles[idx]}
          </motion.div>
        </div>
        <p className="max-w-2xl text-gray-600 dark:text-gray-400 mb-8">{about.summary}</p>
        <div className="flex gap-3">
          <a href={about.links.resume} target="_blank" rel="noreferrer" className="px-4 py-2 rounded-md bg-accent text-white shadow hover:shadow-lg">View Resume</a>
          <a href="#contact" className="px-4 py-2 rounded-md border border-accent text-accent hover:bg-accent/10">Contact Me</a>
        </div>
      </motion.div>
    </section>
  )
}


