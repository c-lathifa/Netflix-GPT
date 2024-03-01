import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { addHorror } from '../utils/movieSlice'
import { TMDB_API_OPTIONS } from '../utils/constants'

const useHorrorMovies = () => {
  const dispatch = useDispatch()
  const getHorrorMovies = async () => {
    const data = await fetch(
      'https://api.themoviedb.org/3/search/movie?query=horror&include_adult=false&language=en-US&page=1',
      TMDB_API_OPTIONS,
    )
    const json = await data.json()
    dispatch(addHorror(json.results))
  }

  useEffect(() => {
    getHorrorMovies()
  }, [])
}

export default useHorrorMovies
