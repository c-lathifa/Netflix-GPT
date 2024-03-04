const VideoDetails = ({ title, overview }) => {
  return (
    <div className="w-full aspect-video  absolute md:bg-gradient-to-r md:from-black">
      <div className="w-4/12 mt-40 md:mt-56 ml-10">
        <h1 className="text-2xl hidden md:text-5xl text-bold text-white my-2">
          {title}
        </h1>
        <p className="hidden md:inline-block my-2 text-white">{overview}</p>
        <div className="flex my-2">
          <button className="py-3 px-6 hover:bg-white/75 bg-white text-black mr-2 rounded-sm hidden md:inline-block">
            ▷Play Now
          </button>
          <button className="py-3 px-6 hover:bg-gray-500/60 bg-gray-500/70 text-white rounded-sm hidden md:inline-block">
            More Info
          </button>
        </div>
      </div>
    </div>
  )
}

export default VideoDetails
