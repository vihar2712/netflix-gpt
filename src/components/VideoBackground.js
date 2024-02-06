import { useSelector } from "react-redux";
import useTrailerVideo from "../hooks/useTrailerVideo";

const VideoBackground = ({ movieId }) => {
  useTrailerVideo(movieId);
  const trailer = useSelector((store) => store.movies?.trailerVideo);
  if (!trailer) return;

  //   console.log(trailer);

  return (
    <div className="w-screen">
      <iframe
        className="w-screen aspect-video"
        src={
          "https://www.youtube.com/embed/" +
          trailer.key +
          "?playlist=" +
          trailer.key +
          "&autoplay=1&mute=1&controls=0&loop=1"
        }
        title="YouTube video player"
      ></iframe>
    </div>
  );
};

export default VideoBackground;
