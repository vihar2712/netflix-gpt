import { Link } from "react-router-dom";
import { MOVIE_IMAGE_URL } from "../utils/constants";

const MovieCard = ({ imageId, movieId }) => {
  if (!imageId) return;
  return (
    <Link to={'/movies/'+movieId}>
      <div className="w-12 sm:w-36 md:w-42 lg:w-48 xl:w-52 2xl:w-64 p-1 hover:scale-105 hover:cursor-pointer">
        {/* {showName && (
        <h1 className="text-md">
          {title}
        </h1>
      )} */}
        <img
          src={MOVIE_IMAGE_URL + imageId}
          className="rounded-md h-full"
          alt="movie"
        />
      </div>
    </Link>
  );
};

export default MovieCard;
