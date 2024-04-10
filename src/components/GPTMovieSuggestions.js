import { useSelector } from "react-redux";
import MovieCard from "./MovieCard";

const GPTMovieSuggestions = () => {
  const loadingText = useSelector((store) => store.gpt.loadingText);
  let movieResults = useSelector((store) => store.gpt.tmdbSearchResults);
  const movieLang = useSelector((store) => store.gpt.movieLang);

  // console.log(movieResults.length);

  if (movieResults.length === 0)
    return <h1 className="text-white text-center">{loadingText}</h1>;

  let moviesArr = movieResults?.filter((movie) => movie && movie.length > 0);

  if (movieLang !== "all") {
    let initialValue = [];

    moviesArr = moviesArr.reduce((fMovie, movieArr) => {
      let movieF = movieArr.filter(
        (movie) => movie && movie.original_language === movieLang
      );
      movieF.length > 0 && fMovie.push(movieF);
      return fMovie;
    }, initialValue);
  }
  // console.log(moviesArr);

  if (moviesArr.length === 0)
    return (
      <h1 className="text-white text-center">
        Oops!! No matching movies found....
      </h1>
    );

  return (
    <div className="p-2 w-10/12 opacity-80 mx-auto flex flex-wrap bg-black text-white justify-evenly mb-4">
      {moviesArr?.map((movies) =>
        movies?.map((movie) => {
          return (
            <MovieCard
              key={movie.id}
              movieId={movie.id}
              title={movie.title}
              imageId={movie.poster_path}
            />
          );
        })
      )}
    </div>
  );
};

export default GPTMovieSuggestions;
