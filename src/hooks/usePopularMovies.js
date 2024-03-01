import { useDispatch } from 'react-redux'
import { addPopularMovies } from '../utils/movieSlice'
import { useEffect } from 'react'
import { TMDB_API_OPTIONS } from '../utils/constants'

const usePopularMovies = () => {
  const dispatch = useDispatch()
  const getPopularMovies = async () => {
    const data = await fetch(
      'https://api.themoviedb.org/3/movie/popular?page=1',
      TMDB_API_OPTIONS,
    )
    const json = await data.json()
    dispatch(addPopularMovies(json.results))
  }

  useEffect(() => {
    getPopularMovies()
  }, [])
}

export default usePopularMovies
