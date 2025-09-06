import { MovieModel } from "../types";

const Movie = (): MovieModel => ({
  Movie_id: "",
  Title: "",
  Runtime: "",
  Rating: 0,
  TotalVotes: 0,
  MetaCritic: 0,
  Budget: 0,
  genre: "",
  genres: "",
});

export default Movie;
