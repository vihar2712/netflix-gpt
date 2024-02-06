import Header from "./Header";

import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";

const Browse = () => {
  useNowPlayingMovies();
  return (
    <div>
      <Header />
      {/* 
        MainContainer
            - Video Title
            - Video Background
        SecondaryContainer
            - List of movies
            - Movie cards*n
                  */}
      <MainContainer />
      <SecondaryContainer />
    </div>
  );
};

export default Browse;
