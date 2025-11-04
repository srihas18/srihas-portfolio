import about from '../data/about.json'
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'

const FORMSPREE_ENDPOINT = "https://formspree.io/f/your-form-id" // replace with real ID

export default function Contact() {
  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h2 className="text-2xl font-bold mb-8">Contact</h2>
      <div className="grid md:grid-cols-2 gap-8">
        <form action={FORMSPREE_ENDPOINT} method="POST" className="space-y-4 p-5 rounded-xl border border-gray-200 dark:border-gray-800 bg-white/70 dark:bg-gray-900/50 backdrop-blur">
          <input name="name" required placeholder="Your name" className="w-full px-3 py-2 rounded border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900" />
          <input type="email" name="email" required placeholder="Your email" className="w-full px-3 py-2 rounded border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900" />
          <textarea name="message" required placeholder="Your message" rows="5" className="w-full px-3 py-2 rounded border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900" />
          <button type="submit" className="px-4 py-2 rounded-md bg-accent text-white hover:shadow">Send</button>
        </form>
        <div className="p-5 rounded-xl border border-gray-200 dark:border-gray-800 bg-white/70 dark:bg-gray-900/50 backdrop-blur">
          <p className="text-gray-700 dark:text-gray-300 mb-4">I'd love to connect. Reach me via email or socials.</p>
          <a href={`mailto:${about.email}`} className="inline-flex items-center gap-2 text-accent hover:underline"><FaEnvelope /> {about.email}</a>
          <div className="flex gap-4 mt-4">
            <a href={about.links.linkedin} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 hover:text-accent"><FaLinkedin /> LinkedIn</a>
            <a href={about.links.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 hover:text-accent"><FaGithub /> GitHub</a>
          </div>
        </div>
      </div>
    </section>
  )
}


