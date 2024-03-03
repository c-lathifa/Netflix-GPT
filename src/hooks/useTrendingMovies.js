import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addTrending } from '../utils/movieSlice'
import { TMDB_API_OPTIONS } from '../utils/constants'

const useTrendingMovies = () => {
  const dispatch = useDispatch()
  const trending = useSelector((store) => store.movies.trending)
  const getTrandingMovies = async () => {
    const data = await fetch(
      'https://api.themoviedb.org/3/trending/movie/week?language=en-US',
      TMDB_API_OPTIONS,
    )
    const json = await data.json()
    dispatch(addTrending(json.results))
  }

  useEffect(() => {
    !trending && getTrandingMovies()
  }, [])
}

export default useTrendingMovies
