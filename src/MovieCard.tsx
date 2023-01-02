import React from "react";

interface IMovieCardProps {
  Title: string;
  Type: string;
  Year: string;
  Poster: string;
}

const MovieCard = ({ Year, Title, Type, Poster }: IMovieCardProps) => {
  return (
    <div className="movie">
      <div>
        <p>{Year}</p>
      </div>

      <div>
        <img
          src={Poster !== "N/A" ? Poster : "https://via.placeholder.com/400"}
          alt={Title}
        />
      </div>

      <div>
        <span>{Type}</span>
        <h3>{Title}</h3>
      </div>
    </div>
  );
};

export default MovieCard;
