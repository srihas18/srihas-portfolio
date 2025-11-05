import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import projects from '../data/projects.json'
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa'

function ProjectCard({ p, onOpen, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      whileHover={{ y: -8, scale: 1.02, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
      className="rounded-xl border border-gray-200 p-6 bg-white shadow-lg hover:shadow-2xl transition-all duration-300"
    >
      <h3 className="font-semibold text-xl mb-3 text-accent">{p.title}</h3>
      <p className="text-sm text-gray-600 mb-4 leading-relaxed">{p.description}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {p.stack.map((s, i) => (
          <span
            key={i}
            className="text-xs px-3 py-1 rounded-full bg-accent/10 text-accent border border-accent/20 font-medium"
          >
            {s}
          </span>
        ))}
      </div>
      <div className="flex items-center gap-3 pt-2 border-t border-gray-200">
        {p.github && (
          <a
            className="inline-flex items-center gap-2 text-sm text-gray-700 hover:text-accent transition-colors"
            href={p.github}
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub /> GitHub
          </a>
        )}
        {p.demo && (
          <a
            className="inline-flex items-center gap-2 text-sm text-gray-700 hover:text-accent transition-colors"
            href={p.demo}
            target="_blank"
            rel="noreferrer"
          >
            <FaExternalLinkAlt /> Live Demo
          </a>
        )}
        <button
          onClick={() => onOpen(p)}
          className="ml-auto text-sm text-accent hover:underline font-medium"
        >
          Details →
        </button>
      </div>
    </motion.div>
  )
}

export default function Projects() {
  const [modal, setModal] = useState(null)

  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-3xl font-bold mb-4 text-gray-900 pb-2 border-b-2 border-gray-200"
      >
        Projects
      </motion.h2>
      <div className="grid sm:grid-cols-2 gap-6 mt-8">
        {projects.map((p, i) => (
          <ProjectCard key={i} p={p} onOpen={setModal} index={i} />
        ))}
      </div>

      <AnimatePresence>
        {modal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setModal(null)}
          >
            <motion.div
              initial={{ y: 30, opacity: 0, scale: 0.95 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ y: 30, opacity: 0, scale: 0.95 }}
              onClick={(e) => e.stopPropagation()}
              className="max-w-2xl w-full rounded-xl bg-white border border-gray-200 p-6 shadow-2xl"
            >
              <div className="flex items-start justify-between gap-4 mb-4">
                <h3 className="text-2xl font-semibold text-accent">{modal.title}</h3>
                <button
                  onClick={() => setModal(null)}
                  className="text-gray-500 hover:text-accent transition-colors text-lg font-bold"
                >
                  ×
                </button>
              </div>
              <p className="text-gray-700 mb-4 leading-relaxed">{modal.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {modal.stack.map((s, i) => (
                  <span
                    key={i}
                    className="text-xs px-3 py-1 rounded-full bg-accent/10 text-accent border border-accent/20"
                  >
                    {s}
                  </span>
                ))}
              </div>
              {modal.embed && (
                <div className="aspect-video w-full overflow-hidden rounded-lg border border-gray-200 mb-4">
                  <iframe
                    src={modal.embed}
                    className="w-full h-full"
                    allowFullScreen
                    title="Project Embed"
                  />
                </div>
              )}
              {modal.architecture && (
                <img
                  src={modal.architecture}
                  alt="Architecture diagram"
                  className="rounded-lg border border-gray-200 mb-4 w-full"
                />
              )}
              <div className="flex items-center gap-3 pt-4 border-t border-gray-200">
                {modal.github && (
                  <a
                    className="inline-flex items-center gap-2 text-sm text-gray-700 hover:text-accent transition-colors font-medium"
                    href={modal.github}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaGithub /> GitHub
                  </a>
                )}
                {modal.demo && (
                  <a
                    className="inline-flex items-center gap-2 text-sm text-gray-700 hover:text-accent transition-colors font-medium"
                    href={modal.demo}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaExternalLinkAlt /> Live Demo
                  </a>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
