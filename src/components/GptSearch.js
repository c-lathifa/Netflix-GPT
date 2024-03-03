import GptMovieSuggestions from './GptMovieSuggestions'
import GptSearchBar from './GptSearchBar'

const GptSearch = () => {
  return (
    <div className="">
      <div className="fixed -z-10">
        <img
          className="h-screen object-cover md:h-full"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/2e07bc25-8b8f-4531-8e1f-7e5e33938793/e4b3c14a-684b-4fc4-b14f-2b486a4e9f4e/IN-en-20240219-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt=""
        />
      </div>
      <GptSearchBar />
      <GptMovieSuggestions />
    </div>
  )
}

export default GptSearch
