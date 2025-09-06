import type { Filter } from "../types";

const getMovies = async (filter?: Filter, value?: string) => {
  try {
    let url = `http://localhost:3000/movies`;

    if (filter && value) {
      const params = new URLSearchParams({
        [filter.filter_type]: value,
      });

      url = `${url}?${params}`;
    }

    const request = new Request(url);
    const response = await fetch(request);

    if (response.ok) {
      const movies = await response.json();      

      return movies;
    } else {
      console.error(`[HTTP Error] status: ${response.status}`);
    }
  } catch (error) {
    console.error(`There was an error retrieving movies`, error);
  }
};

export { getMovies };
