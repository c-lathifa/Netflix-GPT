import { useSelector } from 'react-redux'
import MovieList from './MovieList'

const GptMovieSuggestions = () => {
  const gpt = useSelector((store) => store.gpt)
  const { movieNames, movieResults } = gpt
  if (!movieNames) return null
  return (
    <div>
      <div className="bg-black/65 m-2 p-2">
        {movieNames.map((movieName, index) => (
          <MovieList
            key={movieName}
            title={movieName}
            movies={movieResults[index]}
          />
        ))}
      </div>
    </div>
  )
}

export default GptMovieSuggestions
