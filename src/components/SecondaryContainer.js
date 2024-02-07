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
  useMovieCategory(NOW_PLAYING_MOVIES_API_URL, addNowPlayingMovies);
  useMovieCategory(POPULAR_MOVIES_API_URL, addPopularMovies);
  useMovieCategory(TOP_RATED_MOVIES_API_URL, addTopRatedMovies);
  useMovieCategory(UPCOMING_MOVIES_API_URL, addUpcomingMovies);
  const allMovieCategories = useSelector((store) => store.movies);
  // console.log(allMovieCategories);
  const { nowPlayingMovies, popularMovies, topRatedMovies, upcomingMovies } =
    allMovieCategories;

  return (
    <div>
      <div className="-mt-60">
        <MoviesList title="Now Playing" movies={nowPlayingMovies} />
        <MoviesList title="Popular Movies" movies={popularMovies} />
        <MoviesList title="Top Rated" movies={topRatedMovies} />
        <MoviesList title="Upcoming" movies={upcomingMovies} />
      </div>
    </div>
  );
};

export default SecondaryContainer;
