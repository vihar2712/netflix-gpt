import { API_OPTIONS, NOW_PLAYING_MOVIES_API_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

const useMovieCategory = (link, dispatchFunction) => {
//   console.log(link, dispatchFunction);

  const dispatch = useDispatch();

  useEffect(() => {
    getMovieCategory();
  }, []);

  const getMovieCategory = async () => {
    const data = await fetch(link, API_OPTIONS);
    const json = await data.json();
    dispatch(dispatchFunction(json.results));
  };
};

export default useMovieCategory;
