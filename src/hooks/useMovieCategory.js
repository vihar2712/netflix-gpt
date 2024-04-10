import { API_OPTIONS } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

const useMovieCategory = (link, dispatchFunction, state,changeStateToNull) => {
  //   console.log(link, dispatchFunction);
  const currentState = useSelector((store) => store.movies?.[state]);
  // console.log(currentState);

  const dispatch = useDispatch();

  useEffect(() => {
    !currentState && getMovieCategory();

    return () => changeStateToNull && dispatch(dispatchFunction(null));
  }, []);

  const getMovieCategory = async () => {
    try {
      const data = await fetch(link, API_OPTIONS);
      const json = await data.json();
      // console.log(json);
      json.results
        ? dispatch(dispatchFunction(json.results))
        : dispatch(dispatchFunction(json));
    } catch (error) {}
  };
};

export default useMovieCategory;
