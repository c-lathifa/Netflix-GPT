import { useRef } from 'react'
import openai from '../utils/openai'
import { TMDB_API_OPTIONS } from '../utils/constants'
import { useDispatch } from 'react-redux'
import { addGptMovieResult } from '../utils/gptSlice'

const GptSearchBar = () => {
  const searchText = useRef(null)
  const dispatch = useDispatch()
  const gptMoviesSearch = async (movie) => {
    const data = await fetch(
      'https://api.themoviedb.org/3/search/movie?query=' +
        movie +
        '&include_adult=false&language=en-US&page=1',
      TMDB_API_OPTIONS,
    )
    const json = await data.json()
    return json.results
  }

  const handleGptSearch = async () => {
    const gptQuery =
      'Act as a Movie Recommendation system and suggest some movies for the query : ' +
      searchText.current.value +
      '. only give me names of 5 movies, comma seperated like the example result given ahead. Example Result: Gadar, Sholay, Don, Golmaal, Koi Mil Gaya'

    const gptSearchResults = await openai.chat.completions.create({
      messages: [{ role: 'user', content: gptQuery }],
      model: 'gpt-3.5-turbo',
    })
    const gptMovies = gptSearchResults.choices[0]?.message?.content.split(',')
    const tmdbPromiseArray = gptMovies.map((movie) => gptMoviesSearch(movie))
    const tmdbResults = await Promise.all(tmdbPromiseArray)
    dispatch(
      addGptMovieResult({ movieNames: gptMovies, movieResults: tmdbResults }),
    )
  }

  return (
    <div className="flex justify-center pt-[45%] md:pt-[9%]">
      <form
        className="md:w-1/2 w-full bg-black/65 grid grid-cols-12"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          type="search"
          className="m-2 p-2 border-2 col-span-9 rounded-md bg-black/65 text-white"
          placeholder="What would you like to watch"
        />
        <button
          onClick={handleGptSearch}
          className="col-span-3 m-2 bg-red-500 rounded-md px-4 py-2"
        >
          Search
        </button>
      </form>
    </div>
  )
}

export default GptSearchBar
