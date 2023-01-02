import React, { useEffect, useState } from "react";
import "./App.css";
import useOMDbAPI from "./hooks/useOMDbAPI";
import MovieCard from "./MovieCard";
import SearchBar from "./SearchBar";

interface IMovie {
  Title: string;
  Type: string;
  Year: string;
  Poster: string;
  imdbID: string;
}

const App = () => {
  const [movies, setMovies] = useState<IMovie[]>([]);
  const { getMovies } = useOMDbAPI();

  const searchMovies = async (title: string) => {
    const movieData = await getMovies(title);

    setMovies(movieData);
  };

  useEffect(() => {
    searchMovies("Spiderman");
  }, []);

  return (
    <div className="app">
      <h1>Movie Search</h1>
      <SearchBar onIconClick={searchMovies} placeholder="Search for movies" />

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
    </div>
  );
};

export default App;
