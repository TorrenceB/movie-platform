import { ParsedQs } from "qs";
import createConnection from "../database/connection";
import { MovieModel } from "../types";

const db = createConnection();

const getMovies = async (query: ParsedQs): Promise<MovieModel[]> => {
  if (Object.keys(query).length > 0) {
    const { genre, rating } = query;

    const options = {
      replacements: [genre, rating]
    };

    const [movies] = await db.query(
      `
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
      WHERE g.genre = ?
      `,
      options
    );

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
