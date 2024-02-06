const VideoTitle = ({ title, overview }) => {
  return (
    <div className="absolute px-12 text-white bg-gradient-to-b from-black w-screen aspect-video">
      <div className="lg:w-1/3 relative top-80">
        <h1 className="text-5xl  font-bold">{title}</h1>
        <p className="pt-4 text-lg">{overview}</p>
        <button className="bg-white text-black font-bold px-10 py-3 mt-2 rounded-md hover:bg-gray-200">
          ▷ Play
        </button>
        <button className="bg-white text-black font-bold px-10 py-3 m-2 rounded-md hover:bg-gray-200">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
