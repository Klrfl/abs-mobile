import { useEffect, useState } from "react"

export default function useFetch(endpoint) {
  const url = "http://127.0.0.1:8080/api"
  const [data, setData] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)

  async function fetchData() {
    try {
      setIsLoading(true)
      const response = await fetch(`${url}/${endpoint}`)
      const { data } = await response.json()
      setData(data)
    } catch (err) {
      console.error(err)
      setError(true)
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  return { error, isLoading, data }
}