import { useDispatch, useSelector } from "react-redux";
import {
  ALL_LANGUAGES,
  SUPPORTED_MOVIE_LANGUAGES,
} from "../utils/langConstants";
import { useRef, useState } from "react";
import openai from "../utils/openai";
import { API_OPTIONS, SEARCH_MOVIES_API_URL } from "../utils/constants";
import {
  addTmdbResults,
  addMovieNames,
  addSearchText,
  changeMovieLang,
  changeLoadingText,
} from "../utils/gptSlice";

const GPTSearchBar = () => {
  const gptSearchText = useSelector((store) => store.gpt.gptSearchText);
  const [errorMessage, setErrorMessage] = useState(null);
  const dispatch = useDispatch();
  const searchText = useRef(null);
  // console.log(searchText);

  const language = useSelector((store) => store.language.lang);
  const moviesLang = useSelector((store) => store.gpt.movieLang);

  const handleSearchText = (e) => {
    e.preventDefault();
    if (searchText.current.value.length !== 0) {
      // console.log("ok....");
      dispatch(addTmdbResults([]));
      dispatch(changeLoadingText("Searching.... Please wait..."));
      dispatch(addSearchText(searchText.current.value));
      fetchMovies();
    } else {
      setErrorMessage("Enter valid search query for movies");
      setTimeout(() => {
        setErrorMessage(null);
      }, 3000);
    }
  };

  const searchTmdbMovies = async (movie) => {
    try {
      const data = await fetch(SEARCH_MOVIES_API_URL + movie, API_OPTIONS);
      const tmdbMovie = await data.json();
      //console.log(tmdbMovie.results);
      return tmdbMovie.results;
      // dispatch(addMovieNames(movie)); // add the name of movie
    } catch (error) {}
  };

  const fetchMovies = async () => {
    const query =
      "act as a recommendation system and suggest some movies for the query: " +
      searchText.current.value +
      ". only give me names of 25 movies, comma separated like the example result given ahead. Example result: Don, Dhoom, Yaariyan, Brothers, Oppenheimer";
    const results = await openai.chat.completions.create({
      messages: [{ role: "user", content: query }],
      model: "gpt-3.5-turbo",
    });
    // console.log(results.choices[0].message.content);

    // const fetchedResults =
    //   "Golmaal Again, Stree, Badhaai Ho, Luka Chuppi, Bala, Housefull 4, Good Newwz, Angrezi Medium, Coolie No. 1, Pagalpanti, Hungama 2, Roohi, Suraj Pe Mangal Bhari, Hello Charlie, Bhoot Police".split(
    //     ","
    //   );
    const fetchedResults = results.choices[0].message.content.split(",");
    console.log(fetchedResults);

    dispatch(addMovieNames(fetchedResults));
    const data = fetchedResults?.map((movie) => searchTmdbMovies(movie)); // this will give an array of promises as searchTmdbMovies is an async operation
    // console.log(data);
    const actualMovies = await Promise.all(data);
    //console.log(actualMovies);
    dispatch(addTmdbResults(actualMovies)); // add the results of all the movies having the corresponding movie name
  };

  const changeMovieLanguage = (e) => {
    dispatch(changeMovieLang(e.target.value));
  };

  return (
    <div className="flex flex-col text-white">
      <div className="flex justify-center ">
        <form className="bg-black max-sm:text-sm w-full p-1 m-1 sm:w-9/12 lg:w-6/12 sm:p-3 sm:m-3 md:p-6 md:m-6 grid grid-cols-12 rounded-md">
          <input
            ref={searchText}
            type="text"
            placeholder={
              gptSearchText || ALL_LANGUAGES[language].gptSearchPlaceholder
            }
            className="col-span-6 p-1 sm:p-2 text-black "
            required
          />
          <button
            className="col-span-3 mx-1 p-1 sm:mx-2 sm:p-2 bg-red-600 rounded-md"
            onClick={handleSearchText}
          >
            {ALL_LANGUAGES[language].search}
          </button>
          <select
            className="col-span-3 bg-red-600 p-1 sm:p-2 rounded-lg hover:cursor-pointer"
            onChange={changeMovieLanguage}
          >
            {SUPPORTED_MOVIE_LANGUAGES.map((lang) => (
              <option
                key={lang.identifier}
                value={lang.identifier}
                defaultValue={lang.identifier === moviesLang}
              >
                {lang.name}
              </option>
            ))}
          </select>
        </form>
      </div>
      {errorMessage && <h1 className="z-10 text-center">{errorMessage}</h1>}
    </div>
  );
};

export default GPTSearchBar;
