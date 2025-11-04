import { useState } from 'react'
import { motion } from 'framer-motion'
import about from '../data/about.json'
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'

const FORMSPREE_ENDPOINT = 'https://formspree.io/f/your-form-id' // Replace with your Formspree form ID

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    // You can use Formspree, EmailJS, or Netlify Forms here
    // For now, using Formspree
    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })
      if (response.ok) {
        setSubmitted(true)
        setFormData({ name: '', email: '', message: '' })
        setTimeout(() => setSubmitted(false), 3000)
      }
    } catch (error) {
      console.error('Form submission error:', error)
    }
  }

  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-3xl font-bold mb-8"
      >
        Contact
      </motion.h2>
      <div className="grid md:grid-cols-2 gap-8">
        <motion.form
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          onSubmit={handleSubmit}
          className="space-y-4 p-6 rounded-xl border border-gray-200 dark:border-gray-800 bg-white/70 dark:bg-gray-900/50 backdrop-blur shadow-lg"
        >
          <div>
            <input
              type="text"
              name="name"
              required
              placeholder="Your name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-accent transition-all"
            />
          </div>
          <div>
            <input
              type="email"
              name="email"
              required
              placeholder="Your email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-accent transition-all"
            />
          </div>
          <div>
            <textarea
              name="message"
              required
              placeholder="Your message"
              rows="5"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-accent transition-all resize-none"
            />
          </div>
          <button
            type="submit"
            className="w-full px-6 py-3 rounded-lg bg-accent text-white hover:bg-accent/90 hover:shadow-xl hover:scale-105 transition-all duration-300 font-medium"
          >
            {submitted ? 'Message Sent! ✓' : 'Send Message'}
          </button>
        </motion.form>
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="p-6 rounded-xl border border-gray-200 dark:border-gray-800 bg-white/70 dark:bg-gray-900/50 backdrop-blur shadow-lg"
        >
          <h3 className="text-xl font-semibold mb-4">Let's Connect</h3>
          <p className="text-gray-700 dark:text-gray-300 mb-6">
            I'd love to hear from you! Reach out via email or connect on social media.
          </p>
          <div className="space-y-4">
            <a
              href={`mailto:${about.email}`}
              className="inline-flex items-center gap-3 text-accent hover:text-accent/80 transition-colors group"
            >
              <FaEnvelope size={20} className="group-hover:scale-110 transition-transform" />
              <span className="font-medium">{about.email}</span>
            </a>
            <div className="flex gap-4 mt-6">
              <a
                href={about.links.linkedin}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-accent text-accent hover:bg-accent hover:text-white transition-all duration-300 hover:scale-105"
              >
                <FaLinkedin /> LinkedIn
              </a>
              <a
                href={about.links.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-accent text-accent hover:bg-accent hover:text-white transition-all duration-300 hover:scale-105"
              >
                <FaGithub /> GitHub
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
