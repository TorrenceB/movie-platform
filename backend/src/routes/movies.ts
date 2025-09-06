import { Router } from "express";
import { getMovies, getMovie } from "../services/movies";

const router = Router();

/**
 * @endpoint - getAllMovies
 * @route - /movies
 */
router.get("/", async (req, res) => {
  const { query } = req;

  const movies = await getMovies(query);

  if (movies) {
    res.status(200).send(movies);
  } else {
    res.status(400).send({ status: "error", message: "Movies not found" });
  }
});

/**
 * @endpoint - getMovie
 * @route - /movies/{id}
 */
router.get("/:id", (req, res) => {
  const { id } = req.params;

  const movie = getMovie(id);

  if (movie) {
    res.status(200).send(movie);
  } else {
    res.status(400).send(`Cannot find movie with id ${id}`);
  }
});

export default router;
