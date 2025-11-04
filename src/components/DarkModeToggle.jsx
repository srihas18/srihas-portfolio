import { FaMoon, FaSun } from 'react-icons/fa'

export default function DarkModeToggle({ theme, setTheme }) {
  const toggle = () => setTheme(theme === 'dark' ? 'light' : 'dark')
  return (
    <button onClick={toggle} aria-label="Toggle dark mode" className="p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-800">
      {theme === 'dark' ? <FaSun /> : <FaMoon />}
    </button>
  )
}


