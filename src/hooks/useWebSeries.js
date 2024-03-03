import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addWebSeries } from '../utils/movieSlice'
import { TMDB_API_OPTIONS } from '../utils/constants'

const useWebSeries = () => {
  const dispatch = useDispatch()
  const webSeries = useSelector((store) => store.movies.webSeries)
  const getWebSeries = async () => {
    const data = await fetch(
      'https://api.themoviedb.org/3/trending/tv/week?language=en-US',
      TMDB_API_OPTIONS,
    )
    const json = await data.json()
    dispatch(addWebSeries(json.results))
  }

  useEffect(() => {
    !webSeries && getWebSeries()
  }, [])
}

export default useWebSeries
