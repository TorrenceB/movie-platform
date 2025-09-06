import { useEffect, useState } from "react";
import { getMovies } from "../api/movies";
import type { Filter, Movie } from "../types";

const useMovies = () => {
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    const init = async () => {
      const movies = await getMovies();

      if (movies) setMovies(movies);
    };

    init();
  }, []);

  const filterMovies = async ({
    filter,
    value,
  }: {
    filter: Filter;
    value: string;
  }) => {
    const movies = await getMovies(filter, value);

    setMovies(movies);
  };

  return { movies, filterMovies };
};

export default useMovies;
