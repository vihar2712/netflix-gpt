import { Link } from "react-router-dom";

const VideoTitle = ({ title, overview, movieId }) => {
  return (
    <div className="absolute px-6 sm:px-12 text-white bg-gradient-to-b from-black w-screen aspect-video">
      <h1 className="text-xl sm:text-2xl md:text-4xl xl:text-6xl font-bold sm:mt-20 md:mt-28 lg:mt-36 xl:mt-52 2xl:mt-64">
        {title}
      </h1>
      <div className="w-1/2 sm:w-2/3 lg:w-1/2 2xl:w-1/3 mt-1 sm:mt-0">
        <span className="hidden sm:inline-block pt-4 sm:text-xs md:text-sm lg:text-md 2xl:text-lg">
          {overview}
        </span>
        <button className="bg-white text-sm hidden sm:inline-block sm:text-base text-black font-bold sm:px-4 sm:mr-2 sm:py-1 sm:mt-2 lg:px-10 lg:py-3 rounded-md hover:bg-gray-200">
          ▷ Play
        </button>
        <Link
          to={"/movies/" + movieId}
          className="bg-white text-black font-bold p-1 sm:px-4 sm:py-1 sm:mt-2 lg:px-10 lg:py-3  rounded-md hover:bg-gray-200"
        >
          More Info
        </Link>
      </div>
    </div>
  );
};

export default VideoTitle;
