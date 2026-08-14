import { useEffect, useState } from 'react'
import { getMermaid } from '../api/mermaidApi'

export const Mermaid = () => {

  const [mermaid, setMermaid] = useState('')
  const [error, setError] = useState('')

  useEffect(() => {

    const loadMermaid = async () => {
      try {
        const result = await getMermaid()
        setMermaid(result)
      } catch (e) {
        setError(e.message)
      }
    }

    loadMermaid()

  }, [])

  if (error) {
    return <div>{error}</div>
  }

  return (
    <pre>
      {mermaid}
    </pre>
  )
}