import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { addTrending } from '../utils/movieSlice'
import { TMDB_API_OPTIONS } from '../utils/constants'

const useTrendingMovies = () => {
  const dispatch = useDispatch()
  const getTrandingMovies = async () => {
    const data = await fetch(
      'https://api.themoviedb.org/3/trending/movie/week?language=en-US',
      TMDB_API_OPTIONS,
    )
    const json = await data.json()
    dispatch(addTrending(json.results))
  }

  useEffect(() => {
    getTrandingMovies()
  }, [])
}

export default useTrendingMovies
