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

  return (
    <div className="bg-black">
      <div className="relative -mt-60">
        <MoviesList
          title="Now Playing"
          movies={allMovieCategories.nowPlayingMovies}
        />
        <MoviesList
          title="Popular Movies"
          movies={allMovieCategories.popularMovies}
        />
        <MoviesList
          title="Top Rated"
          movies={allMovieCategories.topRatedMovies}
        />
        <MoviesList
          title="Upcoming"
          movies={allMovieCategories.upcomingMovies}
        />
      </div>
    </div>
  );
};

export default SecondaryContainer;