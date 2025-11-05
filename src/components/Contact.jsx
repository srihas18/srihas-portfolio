import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import about from '../data/about.json'
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'

// Replace 'your-form-id' with your actual Formspree form ID
// Get your form ID from: https://formspree.io/forms
const FORMSPREE_ENDPOINT = 'https://formspree.io/f/your-form-id'

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    // Validation
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setError(true)
      setTimeout(() => setError(false), 3000)
      return
    }

    setLoading(true)
    setError(false)

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })
      
      if (response.ok) {
        setSubmitted(true)
        setFormData({ name: '', email: '', message: '' })
        setTimeout(() => setSubmitted(false), 5000)
      } else {
        setError(true)
        setTimeout(() => setError(false), 3000)
      }
    } catch (error) {
      console.error('Form submission error:', error)
      setError(true)
      setTimeout(() => setError(false), 3000)
    } finally {
      setLoading(false)
    }
  }

  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-3xl font-bold mb-4 text-gray-900 pb-2 border-b-2 border-gray-200"
      >
        Contact
      </motion.h2>
      <div className="grid md:grid-cols-2 gap-8 mt-8">
        <motion.form
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          onSubmit={handleSubmit}
          className="space-y-4 p-6 rounded-xl border border-gray-200 bg-white shadow-lg"
        >
          <AnimatePresence>
            {submitted && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="p-4 bg-green-50 border border-green-200 rounded-lg text-green-700 text-sm font-medium"
              >
                ✓ Message sent successfully!
              </motion.div>
            )}
            {error && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="p-4 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm font-medium"
              >
                ✗ Failed to send message. Please check all fields are filled and try again.
              </motion.div>
            )}
          </AnimatePresence>
          <div>
            <input
              type="text"
              name="name"
              required
              placeholder="Your name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
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
              className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
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
              className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all resize-none"
            />
          </div>
          <button
            type="submit"
            disabled={loading}
            className="w-full px-6 py-3 rounded-lg bg-accent text-white hover:bg-[#9C1333] hover:shadow-xl hover:scale-105 transition-all duration-300 font-medium disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? 'Sending...' : submitted ? 'Message Sent! ✓' : 'Send Message'}
          </button>
        </motion.form>
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="p-6 rounded-xl border border-gray-200 bg-white shadow-lg"
        >
          <h3 className="text-xl font-semibold mb-4 text-gray-900">Let's Connect</h3>
          <p className="text-gray-700 mb-6">
            I'd love to hear from you! Reach out via email or connect on social media.
          </p>
          <div className="space-y-4">
            <a
              href={`mailto:${about.email}`}
              className="inline-flex items-center gap-3 text-accent hover:text-[#9C1333] transition-colors group"
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
