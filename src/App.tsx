import React, { useEffect, useState } from "react";
import "./App.css";
import useOMDbAPI from "./hooks/useOMDbAPI";
import Movies from "./Movies";
import SearchBar from "./SearchBar";

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
      <Movies movies={movies} />
    </div>
  );
};

export default App;
