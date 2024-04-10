import { Link, useNavigate, useParams } from "react-router-dom";
import { IoIosArrowDropleftCircle } from "react-icons/io";
import { IMDB_LINK, MOVIE_IMAGE_URL, MOVIE_INFO_URL } from "../utils/constants";
import { useSelector } from "react-redux";
import { changeClickedMovie } from "../utils/movieSlice";
import useMovieCategory from "../hooks/useMovieCategory";
import Loading from "./Loading";
import Header from "./Header";

const MovieInfo = () => {
  const { movieId } = useParams();
  const link = MOVIE_INFO_URL + movieId;
  let navigate = useNavigate();

  useMovieCategory(link, changeClickedMovie, "clickedMovie", true);
  const movieInfo = useSelector((store) => store.movies.clickedMovie);

  if (!movieInfo)
    return (
      <div className="h-screen w-screen">
        <Loading />
      </div>
    );
  const {
    id,
    poster_path,
    title,
    overview,
    imdb_id,
    genres,
    vote_average,
    release_date,
    status,
  } = movieInfo;

  return (
    <div className="bg-black min-h-screen">
      <Header />
      <button onClick={() => navigate(-1)}>
        <IoIosArrowDropleftCircle className="text-red-500 h-12 w-12 hover:opacity-75 relative left-10" />
      </button>
      <div className="text-white flex justify-center items-center p-4 ">
        {movieInfo ? (
          <div className="flex flex-col lg:flex-row justify-center items-center gap-6 lg:gap-2 mt-5">
            <div className="lg:w-3/12 flex flex-col items-center">
              <img
                src={MOVIE_IMAGE_URL + poster_path}
                alt={title}
                className="w-48 sm:w-60 rounded-md"
              />
            </div>
            <div className="w-9/12 lg:w-6/12 flex flex-col gap-4">
              <h1 className="text-3xl font-semibold">
                {title}{" "}
                {release_date && <span>({release_date.slice(0, -6)})</span>}
              </h1>
              <p className="text-lg text-slate-400 py-2">{overview}</p>
              <Link
                to={IMDB_LINK + imdb_id}
                className="flex hover:underline text-slate-400"
              >
                <img
                  src={
                    "https://m.media-amazon.com/images/G/01/imdb/images-ANDW73HA/favicon_desktop_32x32._CB1582158068_.png"
                  }
                  className="mr-2 w-7 rounded-md"
                  alt="imdb"
                />
                Go to IMDB{" "}
              </Link>
              <p className="text-slate-400">
                {genres?.map(
                  (genre, index) =>
                    genre.name + (index < genres.length - 1 ? ", " : "")
                )}
              </p>
              {vote_average !== 0 && (
                <span className="text-lg text-slate-400">
                  Ratings: {vote_average.toFixed(1)}/(10) ⭐
                </span>
              )}
              <h1 className="text-slate-400">Status: {status} </h1>
              <h1 className="text-slate-400">
                Release Date : {new Date(release_date).toDateString("En-IN")}{" "}
              </h1>
            </div>
          </div>
        ) : (
          <h1>Loading....</h1>
        )}
      </div>
    </div>
  );
};

export default MovieInfo;
