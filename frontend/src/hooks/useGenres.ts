import { useState, useEffect } from "react";
import { getGenres } from "../api/genres";
import type { Genre } from "../types";

const useGenres = () => {
  const [genres, setGenres] = useState<Genre[]>([]);

  useEffect(() => {
    const init = async () => {
      const genres = await getGenres();

      if (genres) setGenres(genres);
    };

    init();
  }, []);

  return genres;
};

export default useGenres;
