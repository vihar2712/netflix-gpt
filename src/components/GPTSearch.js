// import { useSelector } from "react-redux";
import { BACKGROUND_IMAGE } from "../utils/constants";
import GPTMovieSuggestions from "./GPTMovieSuggestions";
import GPTSearchBar from "./GPTSearchBar";
// import { ALL_LANGUAGES } from "../utils/langConstants";

const GPTSearch = () => {
  // const language = useSelector((store) => store.language?.lang);
  return (
    <div className="h-screen">
      <div className="bg-black -z-10 fixed top-0 rounded-md">
        <img
          src={BACKGROUND_IMAGE}
          className="opacity-55 h-screen w-screen object-cover"
          alt="bg-movies"
        />
      </div>
      {/* <div>
        <h1 className="bg-red-600 p-2 m-2 rounded-sm text-gray-300">
          {ALL_LANGUAGES[language].disclaimer}
        </h1>
      </div> */}
      <GPTSearchBar />
      <GPTMovieSuggestions />
    </div>
  );
};

export default GPTSearch;
