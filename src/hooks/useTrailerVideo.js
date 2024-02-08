import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addTrailerVideo } from "../utils/movieSlice";

const useTrailerVideo = (movieId) => {
  const dispatch = useDispatch();
  const currentState = useSelector((store) => store.movies?.trailerVideo);
  const getVideo = async () => {
    try {
      const data = await fetch(
        `https://api.themoviedb.org/3/movie/${movieId}/videos`,
        API_OPTIONS
      );
      const json = await data.json();
      const filteredData = json.results.filter(
        (video) => video.type === "Trailer"
      );
      const trailer = filteredData ? filteredData[0] : json.results[0];
      dispatch(addTrailerVideo(trailer));
    } catch (error) {}
  };
  useEffect(() => {
    // console.log("getting video");
    !currentState && getVideo();
  }, []);
};

export default useTrailerVideo;
