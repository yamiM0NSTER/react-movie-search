import React from "react";
import MovieCard from "./MovieCard";

interface IMoviesProps {
  movies: IMovie[];
}

const Movies = ({ movies }: IMoviesProps) => {
  return (
    <>
      {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie) => (
            <MovieCard key={movie.imdbID} {...movie} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No movies found</h2>
        </div>
      )}
    </>
  );
};

export default Movies;
