import { motion } from 'framer-motion'

export default function Footer() {
  const handleScrollToTop = (e) => {
    e.preventDefault()
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <footer className="border-t border-gray-200 py-8 mt-12 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-sm text-gray-600"
          >
            © 2025 Srihas Gullapalli. All Rights Reserved.
          </motion.p>
          <motion.a
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            href="#home"
            onClick={handleScrollToTop}
            className="text-sm text-accent hover:text-[#9C1333] transition-colors font-medium"
          >
            Back to top ↑
          </motion.a>
        </div>
      </div>
    </footer>
  )
}
