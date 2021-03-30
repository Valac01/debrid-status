// Custom hook for fetch api to get status
import { useEffect, useState } from 'react'
import axios from 'axios'

const useFetchData = (url, urlParams) => {
  const [data, setData] = useState({})
  const [error, setError] = useState()
  useEffect(() => {
    const cancelToken = axios.CancelToken
    const source = cancelToken.source()
    axios
      .get(url, {
        params: urlParams,
        cancelToken: source.token,
      })
      .then((res) => {
        console.log(res.data)
        setData(res.data)
      })
      .catch((err) => {
        console.error(err)
        setError(err)
      })

    return () => {
      source.cancel
    }
  }, [url])

  return [data, error]
}

export default useFetchData
