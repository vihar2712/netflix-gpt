import { API_OPTIONS, NOW_PLAYING_MOVIES_API_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../utils/movieSlice";
import { useEffect } from "react";


const useNowPlayingMovies = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    getNowPlayingMovies();
  }, []);

  const getNowPlayingMovies = async () => {
    try {
      const data = await fetch(NOW_PLAYING_MOVIES_API_URL, API_OPTIONS);
      const json = await data.json();
      console.log(json.results);
      dispatch(addNowPlayingMovies(json.results));
    } catch (e) {
      console.log("error - ", e);
    }
  };
};

export default useNowPlayingMovies;
