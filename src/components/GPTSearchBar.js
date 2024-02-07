import { useSelector } from "react-redux";
import { ALL_LANGUAGES } from "../utils/langConstants";

const GPTSearchBar = () => {
  const language = useSelector((store) => store.language.lang);
  return (
    <div className="flex justify-center">
      <form className="bg-black w-6/12 p-6 m-6 grid grid-cols-12 rounded-md">
        <input
          type="text"
          placeholder={ALL_LANGUAGES[language].gptSearchPlaceholder}
          className="col-span-9 p-2"
        />
        <button className="col-span-3 mx-2 p-2 bg-red-600 rounded-md">
          {ALL_LANGUAGES[language].search}
        </button>
      </form>
    </div>
  );
};

export default GPTSearchBar;
