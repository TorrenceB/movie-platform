import createConnection from "../database/connection";
import type { FilterModel } from "../types";
import Filter from "../models/Filter";

const db = createConnection();

const getFilters = async () => {
  const [filters] = await db.query(
    `SELECT id, name, label, filter_type FROM movie_filters`
  );

  const genreFilters =
    filters &&
    (filters as FilterModel[]).find(filter => filter.filter_type === "genre");

  const ratingFilters =
    filters &&
    (filters as FilterModel[]).find(filter => filter.filter_type === "rating");

  const runtimeFilters =
    filters &&
    (filters as FilterModel[]).find(filter => filter.filter_type === "runtime");

  const optionsMap = new Map<string, unknown[]>();

  if (genreFilters) {
    const [genres] = await db.query(`
        SELECT DISTINCT genre 
        AS value 
        FROM genre 
        ORDER BY genre
    `);

    optionsMap.set("genre", genres);
  }

  if (ratingFilters) {
    const [ratings] = await db.query(`
        SELECT DISTINCT [Rating] 
        As value
        FROM IMDB
        ORDER BY rating  
      `);

    optionsMap.set("rating", ratings);
  }

  if (runtimeFilters) {
    const [runtimes] = await db.query(`
        SELECT DISTINCT [Runtime] 
        As value
        FROM IMDB
        ORDER BY runtime  
      `);

    optionsMap.set("runtime", runtimes);
  }

  if (filters) {
    return (filters as FilterModel[]).map(filter =>
      Filter({ ...filter, options: optionsMap.get(filter.filter_type) as [] })
    );
  }

  return [];
};

export { getFilters };
