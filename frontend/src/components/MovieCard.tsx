import React from "react";
import type Movie from "../types/Movie";

interface Props {
  movie: Movie;
}

const MovieCard = (props: Props) => {
  const { movie } = props;

  const genres =
    movie.genres && movie.genres.length > 0
      ? movie.genres
          .split(",")
          .map((genre, index) => <p key={index}>{genre}</p>)
      : movie.genre;

  return (
    <div className="flex flex-col items-center rounded border h-[14rem] w-md">
      <h1 className="text-xl font-bold">{movie.Title}</h1>
      {genres}
      {movie.Rating && <p>Rating: {movie.Rating}</p>}
      {movie.Runtime && <p>Runtime: {movie.Runtime}</p>}
    </div>
  );
};

export default MovieCard;
