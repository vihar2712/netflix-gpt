import { MOVIE_IMAGE_URL } from "../utils/constants";

const MovieCard = ({ imageId }) => {
  if (!imageId) return;
  return (
    <div className="w-52 p-1 hover:scale-105">
      <img src={MOVIE_IMAGE_URL + imageId} className="rounded-md" />
    </div>
  );
};

export default MovieCard;
