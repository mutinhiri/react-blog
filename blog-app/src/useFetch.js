const useFetch = () => {
    useEffect(() => {
        fetch(' http://localhost:8000/blogss')
          .then(res => {
              if(!res.ok) {
                  throw Error('could not fetch data for resource')
              }
             return res.json()
          })
          .then(data => {
              setBlogs(data)
              setIsPending(false)
              setError(null)
          })
          .catch(err => {
              setIsPending(false)
             setError(err.message)
          })
      }, [])
}