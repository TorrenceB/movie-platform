
import { Router } from "express";
import { getFilters } from "../services/filters";

const router = Router();

/**
 * @endpoint - getAllFilters
 * @route - /filters
 */
router.get("/", async (req, res) => {
  const filters = await getFilters();

  if (filters) {
    res.status(200).send(filters);
  } else {
    res.status(400).send({ status: "error", message: "Filters not found" });
  }
});

export default router;
