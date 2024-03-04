import { useDispatch } from 'react-redux'
import { IMG_POSTER_URL } from '../utils/constants'
import { addDisplayMovie } from '../utils/movieSlice'
const MovieCard = ({ movie, posterPath, title }) => {
  const dispatch = useDispatch()
  const handleMovieCardClick = (movie) => {
    dispatch(addDisplayMovie(movie))
  }
  if (!posterPath) return null
  return (
    <div onClick={() => handleMovieCardClick(movie)}>
      <div className="w-28 md:w-36 p-2">
        <img src={IMG_POSTER_URL + posterPath} alt={title + 'Image'} />
      </div>
    </div>
  )
}

export default MovieCard
