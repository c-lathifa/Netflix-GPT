import { useSelector } from 'react-redux'
import useTrailer from '../hooks/useTrailer'

const VideoPlayback = ({ movieId }) => {
  const trailerVideo = useSelector((store) => store.movies.trailerVideo)
  useTrailer(movieId)
  console.log(trailerVideo?.key)
  return (
    <div className="w-full">
      <iframe
        className="w-full aspect-video"
        src={
          'https://www.youtube.com/embed/' + trailerVideo?.key

          // + '?&autoplay=1&mute=1'
        }
        title="YouTube video player"
        allowFullScreen
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  )
}

export default VideoPlayback
