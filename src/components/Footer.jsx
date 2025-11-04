export default function Footer() {
  return (
    <footer className="border-t border-gray-200 dark:border-gray-800 py-6 mt-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-sm text-gray-500 flex justify-between">
        <p>© {new Date().getFullYear()} Srihas Gullapalli</p>
        <a className="hover:text-accent" href="#home">Back to top</a>
      </div>
    </footer>
  )
}


