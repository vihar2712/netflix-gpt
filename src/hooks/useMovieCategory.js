import { API_OPTIONS, NOW_PLAYING_MOVIES_API_URL } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

const useMovieCategory = (link, dispatchFunction, state) => {
  //   console.log(link, dispatchFunction);
  const currentState = useSelector((store) => store.movies?.[state]);
  // console.log(currentState);

  const dispatch = useDispatch();

  useEffect(() => {
    !currentState && getMovieCategory();
  }, []);

  const getMovieCategory = async () => {
    try {
      const data = await fetch(link, API_OPTIONS);
      const json = await data.json();
      dispatch(dispatchFunction(json.results));
    } catch (error) {}
  };
};

export default useMovieCategory;
