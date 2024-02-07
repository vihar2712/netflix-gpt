import { useSelector } from "react-redux";
import MoviesList from "./MoviesList";

const GPTMovieSuggestions = () => {
  const movieNames = useSelector((store) => store.gpt.tmdbMovieNames);
  const movieResults = useSelector((store) => store.gpt.tmdbSearchResults);

  return (
    <div className="p-2 w-10/12 opacity-80 mx-auto">
      {movieNames.map((movieName, index) => (
        <MoviesList
          key={movieName}
          title={movieName}
          movies={movieResults[index]}
        />
      ))}
    </div>
  );
};

export default GPTMovieSuggestions;
