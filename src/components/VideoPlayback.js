import { useSelector } from 'react-redux'
import useTrailer from '../hooks/useTrailer'
import { IMG_POSTER_URL } from '../utils/constants'

const VideoPlayback = ({ movieId }) => {
  const trailerVideo = useSelector((store) => store.movies.trailerVideo)
  const poster_path = useSelector(
    (store) => store?.movies?.nowPlayingMovies[0]?.poster_path,
  )

  useTrailer(movieId)
  return (
    <>
      <div className="w-full hidden md:block">
        <iframe
          className="w-full aspect-video"
          src={
            'https://www.youtube.com/embed/' +
            trailerVideo?.key +
            '?&autoplay=1&mute=1'
          }
          title="YouTube video player"
          allowFullScreen
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        ></iframe>
      </div>
      <div className="md:hidden  ">
        <img
          className=" w-[90%] border-[1px] border-brand-beige mx-auto rounded-xl"
          src={IMG_POSTER_URL + poster_path}
          alt="movie poster make it dynamic"
        />
      </div>
    </>
  )
}

export default VideoPlayback
