import { useSelector } from "react-redux";
import { BACKGROUND_IMAGE } from "../utils/constants";
import GPTMovieSuggestions from "./GPTMovieSuggestions";
import GPTSearchBar from "./GPTSearchBar";
import { ALL_LANGUAGES } from "../utils/langConstants";

const GPTSearch = () => {
  const language = useSelector((store) => store.language?.lang);
  return (
    <div>
      <div className="bg-black fixed rounded-md top-0 -z-10">
        <img src={BACKGROUND_IMAGE} className="opacity-55" alt="bg-movies" />
      </div>
      <div>
        <h1 className="bg-red-600 p-2 m-2 rounded-sm text-gray-300">
          {ALL_LANGUAGES[language].disclaimer}
        </h1>
      </div>
      <GPTSearchBar />
      <GPTMovieSuggestions />
    </div>
  );
};

export default GPTSearch;
