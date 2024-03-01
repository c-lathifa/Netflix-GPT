import MovieCard from './MovieCard'

const MovieList = ({ title, movies }) => {
  return (
    <div>
      <div className="flex flex-col px-12 ">
        <h1 className="m-2 text-3xl text-white">{title}</h1>
        <div className="flex overflow-x-scroll no-scrollbar">
          {movies?.map((movie) => (
            <MovieCard
              key={movie.id}
              posterPath={movie.poster_path}
              title={movie.original_title}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default MovieList
