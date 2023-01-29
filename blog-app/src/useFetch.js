import { useEffect, useState } from "react"

const useFetch = () => {
    const [data, setData] = useState(null)
    const [isPending, setIsPending] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        fetch(' http://localhost:8000/blogss')
          .then(res => {
              if(!res.ok) {
                  throw Error('could not fetch data for resource')
              }
             return res.json()
          })
          .then(data => {
              setData(data)
              setIsPending(false)
              setError(null)
          })
          .catch(err => {
              setIsPending(false)
             setError(err.message)
          })
      }, [])
}

export default useFetch