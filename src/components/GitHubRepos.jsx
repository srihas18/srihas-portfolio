import { useEffect, useState } from 'react'
import axios from 'axios'
import { FaStar, FaCodeBranch, FaExternalLinkAlt } from 'react-icons/fa'

export default function GitHubRepos({ username = 'srihasgullapalli' }) {
  const [repos, setRepos] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const res = await axios.get(`https://api.github.com/users/${username}/repos`, {
          params: { sort: 'updated', per_page: 6 },
        })
        setRepos(res.data)
      } catch (e) {
        setError('Failed to load repositories')
      } finally {
        setLoading(false)
      }
    }
    fetchRepos()
  }, [username])

  if (loading) return <p className="text-sm text-gray-500">Loading GitHub repositories…</p>
  if (error) return <p className="text-sm text-red-500">{error}</p>

  return (
    <div className="mt-10">
      <h3 className="font-semibold mb-3">Latest GitHub Repositories</h3>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {repos.map(r => (
          <a key={r.id} href={r.html_url} target="_blank" rel="noreferrer" className="block p-4 rounded-xl border border-gray-200 dark:border-gray-800 bg-white/70 dark:bg-gray-900/50 hover:shadow-lg transition-shadow">
            <div className="flex items-center justify-between mb-2">
              <h4 className="font-medium truncate pr-2">{r.name}</h4>
              <FaExternalLinkAlt className="text-gray-400" />
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-2 min-h-[2.5rem]">{r.description || 'No description'}</p>
            <div className="flex items-center gap-4 text-xs text-gray-500 mt-3">
              <span className="inline-flex items-center gap-1"><FaStar /> {r.stargazers_count}</span>
              <span className="inline-flex items-center gap-1"><FaCodeBranch /> {r.forks_count}</span>
              {r.language && <span>{r.language}</span>}
            </div>
          </a>
        ))}
      </div>
    </div>
  )
}


