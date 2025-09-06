import createConnection from "../database/connection";
import type { GenreModel } from "../types";

const db = createConnection();

const getGenres = async (): Promise<GenreModel[]> => {
  const [results] = await db.query(`SELECT * FROM genre`);

  return results as GenreModel[];
};

export { getGenres };
