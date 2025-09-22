import type { FilterParams } from "../types";

const getMovies = async (
  filters?: FilterParams[] /* , values?: string[] */
) => {
  try {
    let url = `http://localhost:3000/movies`;

    if (filters && filters.length > 0) {
      const queryParams = filters.map(({ filter_type, value }) => {
        return new URLSearchParams({
          [filter_type]: value,
        });
      });

      const paramString = queryParams.join("&");

      url += `?${paramString}`
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
