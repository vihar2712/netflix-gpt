import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";

const Browse = () => {
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
