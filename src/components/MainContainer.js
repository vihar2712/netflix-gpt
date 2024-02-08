import { useSelector } from "react-redux";
import VideoBackground from "./VideoBackground";
import VideoTitle from "./VideoTitle";

const MainContainer = () => {
  const movies = useSelector((store) => store.movies?.topRatedMovies);
  if (!movies) return;
  const mainMovie = movies[6];
//   console.log(mainMovie);
// sm:-mt-24 md:-mt-32 lg:-mt-42 xl:-mt-48
  const { title, overview, id } = mainMovie;

  return (
    <div className="max-sm:-mt-32 max-sm:pt-32 bg-black sm:-mt-24 md:-mt-32 lg:-mt-40 xl:-mt-48">
      <VideoTitle title={title} overview={overview} /> 
      <VideoBackground movieId={id} />
    </div>
  );
};

export default MainContainer;
