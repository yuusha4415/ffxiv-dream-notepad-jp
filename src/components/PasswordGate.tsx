import { useState } from 'react'

const PASSWORD = 'kenton'
const STORAGE_KEY = 'auth'

export const PasswordGate = ({ children }: { children: React.ReactNode }) => {
  const [authed, setAuthed] = useState(() => sessionStorage.getItem(STORAGE_KEY) === '1')
  const [input, setInput] = useState('')
  const [error, setError] = useState(false)

  if (authed) return <>{children}</>

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (input === PASSWORD) {
      sessionStorage.setItem(STORAGE_KEY, '1')
      setAuthed(true)
    } else {
      setError(true)
      setInput('')
    }
  }

  return (
    <div className="w-full h-screen flex items-center justify-center bg-gray-900">
      <form onSubmit={handleSubmit} className="flex flex-col items-center gap-4">
        <p className="text-white text-lg">パスワードを入力してください</p>
        <input
          type="password"
          value={input}
          onChange={e => { setInput(e.target.value); setError(false) }}
          className="px-4 py-2 rounded bg-gray-700 text-white outline-none"
          autoFocus
        />
        {error && <p className="text-red-400 text-sm">パスワードが違います</p>}
        <button type="submit" className="px-6 py-2 bg-gray-600 text-white rounded hover:bg-gray-500">
          入室
        </button>
      </form>
    </div>
  )
}
