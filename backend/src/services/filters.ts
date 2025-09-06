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

  if (genreFilters) {
    const [genres] = await db.query(`
        SELECT DISTINCT genre as value FROM genre ORDER BY genre
        `);

    return (filters as FilterModel[]).map(filter =>
      Filter({ ...filter, options: genres as [] })
    );
  }

  return [];
};

export { getFilters };
