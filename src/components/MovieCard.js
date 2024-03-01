import { IMG_POSTER_URL } from '../utils/constants'
const MovieCard = ({ posterPath, title }) => {
  return (
    <div>
      <div className="w-36 p-2">
        <img src={IMG_POSTER_URL + posterPath} alt={title + 'Image'} />
      </div>
    </div>
  )
}

export default MovieCard
