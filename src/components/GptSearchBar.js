const GptSearchBar = () => {
  return (
    <div className="flex justify-center pt-[9%]">
      <form className="w-1/2 bg-black/65 grid grid-cols-12">
        <input
          type="search"
          className="m-2 p-2 border-2 col-span-9 bg-black/65 text-white"
          placeholder="What would you like to watch"
        />
        <button className="col-span-3 m-2 bg-red-500 px-4 py-2">Search</button>
      </form>
    </div>
  )
}

export default GptSearchBar
