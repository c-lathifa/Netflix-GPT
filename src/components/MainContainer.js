import { useSelector } from 'react-redux'
import VideoDetails from './VideoDetails'
import VideoPlayback from './VideoPlayback'

const MainContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies)
  if (!movies) return
  const mainMovie = movies[0]
  const { original_title, overview, id } = mainMovie
  return (
    <div className="pt-[43%] bg-black md:pt-0">
      <VideoDetails title={original_title} overview={overview} />
      <VideoPlayback movieId={id} />
    </div>
  )
}

export default MainContainer
