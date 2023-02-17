import { useState } from 'react'
import AxiosWrapper from './axiosWrapper'

const useGet = () => {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const execute = (url) => {
    setError(null)
    setLoading(true)
    AxiosWrapper.get(url)
      .then((response) => {
        setData(response.data)
        setError(null)
        setLoading(false)
      })
      .catch((_error) => {
        setData(null)
        setError('Cannot get data')
        setLoading(false)
      })
  }

  return { data, loading, error, execute }
}

export default useGet
