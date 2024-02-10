import { useSelector } from "react-redux";
import MoviesList from "./MoviesList";
import useMovieCategory from "../hooks/useMovieCategory";
import {
  NOW_PLAYING_MOVIES_API_URL,
  POPULAR_MOVIES_API_URL,
  TOP_RATED_MOVIES_API_URL,
  UPCOMING_MOVIES_API_URL,
} from "../utils/constants";
import {
  addNowPlayingMovies,
  addPopularMovies,
  addTopRatedMovies,
  addUpcomingMovies,
} from "../utils/movieSlice";

const SecondaryContainer = () => {
  useMovieCategory(
    NOW_PLAYING_MOVIES_API_URL,
    addNowPlayingMovies,
    "nowPlayingMovies"
  );
  useMovieCategory(POPULAR_MOVIES_API_URL, addPopularMovies, "popularMovies");
  useMovieCategory(
    TOP_RATED_MOVIES_API_URL,
    addTopRatedMovies,
    "topRatedMovies"
  );
  useMovieCategory(
    UPCOMING_MOVIES_API_URL,
    addUpcomingMovies,
    "upcomingMovies"
  );
  const allMovieCategories = useSelector((store) => store.movies);
  // console.log(allMovieCategories);
  const { nowPlayingMovies, popularMovies, topRatedMovies, upcomingMovies } =
    allMovieCategories;

  return (
    <div>
      <div className="sm:-mt-24 md:-mt-32 lg:-mt-36 xl:-mt-48">
        {nowPlayingMovies && (
          <MoviesList title="Now Playing" movies={nowPlayingMovies} showName={true} />
        )}
        {popularMovies && (
          <MoviesList title="Popular Movies" movies={popularMovies} showName={true} />
        )}
        {topRatedMovies && (
          <MoviesList title="Top Rated" movies={topRatedMovies} showName={true} />
        )}
        {upcomingMovies && (
          <MoviesList title="Upcoming" movies={upcomingMovies} showName={true}/>
        )}
      </div>
    </div>
  );
};

export default SecondaryContainer;
