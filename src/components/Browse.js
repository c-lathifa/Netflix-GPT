import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import useHorrorMovies from '../hooks/useHorrorMovies'
import usePopularMovies from '../hooks/usePopularMovies'
import useTrendingMovies from '../hooks/useTrendingMovies'
import useUpComingMovies from '../hooks/useUpComingMovies'
import useWebSeries from '../hooks/useWebSeries'
import Header from './Header'
import MainContainer from './MainContainer'
import SecondaryContainer from './SecondaryContainer'
import GptSearch from './GptSearch'
import { useSelector } from 'react-redux'

const Browse = () => {
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch)
  useNowPlayingMovies()
  useHorrorMovies()
  usePopularMovies()
  useTrendingMovies()
  useUpComingMovies()
  useWebSeries()
  return (
    <div>
      <Header />
      {showGptSearch ? (
        <GptSearch />
      ) : (
        <>
          <MainContainer /> <SecondaryContainer />
        </>
      )}
    </div>
  )
}

export default Browse
