import React from "react";

const API_URL = `https://www.omdbapi.com/?i=${process.env.REACT_APP_OMDB_ID}&apikey=${process.env.REACT_APP_OMDB_KEY}`;

const useOMDbAPI = () => {
  const getMovies = async (searchTerm: string) => {
    const response = await fetch(`${API_URL}&s=${searchTerm}`);
    const data = await response.json();

    return data.Search !== undefined ? data.Search : [];
  };

  return { getMovies };
};

export default useOMDbAPI;
