import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import projects from '../data/projects.json'
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa'
import GitHubRepos from './GitHubRepos'

function ProjectCard({ p, onOpen }) {
  return (
    <motion.div whileHover={{ y: -4 }} className="rounded-xl border border-gray-200 dark:border-gray-800 p-5 bg-white/70 dark:bg-gray-900/50 backdrop-blur shadow-sm hover:shadow-lg transition-shadow">
      <h3 className="font-semibold text-lg mb-2">{p.title}</h3>
      <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">{p.description}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {p.stack.map((s, i) => (
          <span key={i} className="text-xs px-2 py-1 rounded-full bg-accent/10 text-accent border border-accent/20">{s}</span>
        ))}
      </div>
      <div className="flex items-center gap-3">
        {p.github && (
          <a className="inline-flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300 hover:text-accent" href={p.github} target="_blank" rel="noreferrer"><FaGithub /> GitHub</a>
        )}
        {p.demo && (
          <a className="inline-flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300 hover:text-accent" href={p.demo} target="_blank" rel="noreferrer"><FaExternalLinkAlt /> Live Demo</a>
        )}
        <button onClick={() => onOpen(p)} className="ml-auto text-sm text-accent hover:underline">Details</button>
      </div>
    </motion.div>
  )
}

export default function Projects() {
  const [modal, setModal] = useState(null)
  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h2 className="text-2xl font-bold mb-8">Projects</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((p, i) => (
          <ProjectCard key={i} p={p} onOpen={setModal} />
        ))}
      </div>

      <AnimatePresence>
        {modal && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4">
            <motion.div initial={{ y: 30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: 30, opacity: 0 }} className="max-w-2xl w-full rounded-xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 p-6">
              <div className="flex items-start justify-between gap-4 mb-4">
                <h3 className="text-xl font-semibold">{modal.title}</h3>
                <button onClick={() => setModal(null)} className="text-sm text-gray-500 hover:text-accent">Close</button>
              </div>
              <p className="text-gray-700 dark:text-gray-300 mb-4">{modal.description}</p>
              {modal.embed ? (
                <div className="aspect-video w-full overflow-hidden rounded-lg border border-gray-200 dark:border-gray-800 mb-4">
                  <iframe src={modal.embed} className="w-full h-full" allowFullScreen title="Project Embed" />
                </div>
              ) : null}
              {modal.architecture ? (
                <img src={modal.architecture} alt="Architecture diagram" className="rounded-lg border border-gray-200 dark:border-gray-800 mb-4" />
              ) : null}
              <div className="flex items-center gap-3">
                {modal.github && (
                  <a className="inline-flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300 hover:text-accent" href={modal.github} target="_blank" rel="noreferrer"><FaGithub /> GitHub</a>
                )}
                {modal.demo && (
                  <a className="inline-flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300 hover:text-accent" href={modal.demo} target="_blank" rel="noreferrer"><FaExternalLinkAlt /> Live Demo</a>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <GitHubRepos username="srihasgullapalli" />
    </section>
  )
}


