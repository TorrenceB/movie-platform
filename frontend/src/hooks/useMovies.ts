import { useEffect, useState } from "react";
import { getMovies } from "../api/movies";
import type { FilterParams, Movie } from "../types";

const useMovies = () => {
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    const init = async () => {
      const movies = await getMovies();

      if (movies) setMovies(movies);
    };

    init();
  }, []);

  const filterMovies = async (filters?: FilterParams[]) => {
    const movies = await getMovies(filters);

    setMovies(movies);
  };

  return { movies, filterMovies };
};

export default useMovies;
