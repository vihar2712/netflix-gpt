import MovieCard from "./MovieCard";

const MoviesList = ({ title, movies }) => {
  return (
    <div className="pt-4 bg-black text-white">
      <h1 className="text-3xl px-6">{title}</h1>
      <div className="flex overflow-x-scroll mx-6 py-2 hover:cursor-pointer">
        <div className="flex ">
          {movies?.map((movie) => (
            <MovieCard key={movie.id} imageId={movie.poster_path} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MoviesList;
