import express from "express";
import cors from "cors";
import movies from "./routes/movies";
import genres from "./routes/genres";
import filters from "./routes/filters";

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(cors());
app.use("/movies", movies);
app.use("/genres", genres);
app.use("/filters", filters);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
