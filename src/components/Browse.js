import Header from "./Header";

import useNowPlayingMovies from "../hooks/useNowPlayingMovies";

const Browse = () => {
  useNowPlayingMovies();
  return (
    <div className="bg-black h-screen">
      <Header />        
    </div>
  );
};

export default Browse;
