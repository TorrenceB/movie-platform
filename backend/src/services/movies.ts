import { ParsedQs } from "qs";
import createConnection from "../database/connection";
import { MovieModel } from "../types";

const db = createConnection();

const getMovies = async (query: ParsedQs): Promise<MovieModel[]> => {
  if (Object.keys(query).length > 0) {
    const { genre, rating } = query;

    const replacements: unknown[] = [];
    const sqlFilter: string[] = [];

    if (genre) {
      replacements.push(genre);
      sqlFilter.push(`g.genre = ?`);
    }
    if (rating) {
      replacements.push(rating);
      sqlFilter.push(`rating = ?`);
    }

    console.log({ replacements, sqlFilter })

    const options = {
      replacements,
    };
    let SQL = `
      SELECT DISTINCT         
        [Title], 
        [Rating], 
        [TotalVotes], 
        [MetaCritic],
        [Budget],
        [Runtime], 
        g.genre
      FROM IMDB i
      LEFT JOIN genre g ON i.Movie_id = g.Movie_id
      `;

    if (replacements.length > 0) {
      SQL += ` WHERE ${sqlFilter.join(" AND ")}`;
    }

    console.log({ SQL });

    const [movies] = await db.query(SQL, options);

    return movies as MovieModel[];
  }

  const [movies] = await db.query(`
    SELECT       
      [Title], 
      [Rating], 
      [TotalVotes], 
      [MetaCritic],
      [Budget],
      [Runtime], 
    GROUP_CONCAT(g.genre) as genres
    FROM IMDB i 
    LEFT JOIN genre g ON i.Movie_id = g.Movie_id 
    GROUP BY i.Movie_id
    `);

  return movies as MovieModel[];
};

const getMovie = async (id: string) => {
  const results = await db.query(`SELECT * FROM IMDB WHERE Movie_id = ${id}`);

  return results;
};

export { getMovies, getMovie };
