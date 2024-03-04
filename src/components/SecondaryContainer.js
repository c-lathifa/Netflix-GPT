import { useSelector } from 'react-redux'
import MovieList from './MovieList'
const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies)
  return (
    movies.nowPlayingMovies && (
      <div className="bg-black">
        <div className="-mt-0 md:-mt-60 z-10 relative">
          <MovieList title={'Now Playing'} movies={movies.nowPlayingMovies} />
          <MovieList title={'Popular Movies'} movies={movies.popularMovies} />
          <MovieList title={'Trending'} movies={movies.trending} />
          <MovieList title={'Web Series'} movies={movies.webSeries} />
          <MovieList title={'Horror Movies'} movies={movies.horror} />
        </div>
      </div>
    )
  )
}

export default SecondaryContainer
