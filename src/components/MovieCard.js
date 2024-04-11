import { Link } from "react-router-dom";
import { MOVIE_IMAGE_URL } from "../utils/constants";

const MovieCard = ({ imageId, movieId }) => {
  if (!imageId) return;
  return (
    <Link to={"/movies/" + movieId}>
      <div className="w-24 h-36 sm:w-36 sm:h-48 md:w-42 md:h-56 lg:w-48 lg:h-64 xl:w-52 xl:h-80 2xl:w-64 2xl:h-96 hover:scale-105 hover:cursor-pointer">
        {/* {showName && (
        <h1 className="text-md">
          {title}
        </h1>
      )} */}
        <img
          src={MOVIE_IMAGE_URL + imageId}
          className="rounded-md h-full "
          alt="movie"
        />
      </div>
    </Link>
  );
};

export default MovieCard;
