export const getMermaid = async () => {

  const response = await fetch('/api/mermaid')

  if (!response.ok) {
    throw new Error(
      `Mermaid API request failed: ${response.status}`
    )
  }

  const data = await response.json()

  return data.mermaid
}