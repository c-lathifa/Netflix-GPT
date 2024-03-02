import { useDispatch } from 'react-redux'
import { TMDB_API_OPTIONS } from '../utils/constants'
import { addTrailer } from '../utils/movieSlice'
import { useEffect } from 'react'

const useTrailer = (id) => {
  const dispatch = useDispatch()
  const getMovieVideos = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`,
      TMDB_API_OPTIONS,
    )
    const json = await data.json()
    const filterData = json.results.filter((video) => video.type === 'Trailer')
    const trailer = filterData.length ? filterData[0] : json.results[0]
    dispatch(addTrailer(trailer))
  }
  useEffect(() => {
    getMovieVideos()
  }, [])
}

export default useTrailer
