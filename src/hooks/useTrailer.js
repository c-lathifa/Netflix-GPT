import { useDispatch, useSelector } from 'react-redux'
import { TMDB_API_OPTIONS } from '../utils/constants'
import { addDisplayDetails, addTrailer } from '../utils/movieSlice'
import { useEffect } from 'react'

const useTrailer = (id, isTrailer = true) => {
  const dispatch = useDispatch()
  const trailerVideo = useSelector((store) => store.movies.trailerVideo)
  const getMovieVideos = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`,
      TMDB_API_OPTIONS,
    )
    const json = await data.json()
    const filterData = json.results?.filter((video) => video.type === 'Trailer')
    let trailerVideo = json.results[0]
    if (filterData.length > 0) {
      trailerVideo = filterData[0]
    }

    if (isTrailer) {
      dispatch(addTrailer(trailerVideo))
    } else {
      dispatch(addDisplayDetails(trailerVideo))
    }
  }
  useEffect(() => {
    if (!isTrailer || !trailerVideo) {
      getMovieVideos()
    }
  }, [])
}

export default useTrailer
