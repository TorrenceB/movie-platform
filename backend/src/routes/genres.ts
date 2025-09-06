import { Router } from "express";
import { getGenres } from "../services/genres";

const router = Router();

/**
 * @endpoint - getAllMovies
 * @route - /movies
 */
router.get("/", async (req, res) => {
  const genres = await getGenres();

  if (genres) {
    res.status(200).send(genres);
  } else {
    res.status(400).send({ status: "error", message: "Genres not found" });
  }
});

export default router;
