import "./App.css";
import useFilters from "./hooks/useFilters";
import useMovies from "./hooks/useMovies";

import Filters from "./components/Filters";
import MovieCard from "./components/MovieCard";

function App() {
  const { filters } = useFilters();
  const { movies, filterMovies } = useMovies();

  return (
    <div className="flex flex-col w-full">
      <nav className="flex w-full h-28 p-4 justify-end">
        <Filters filters={filters} onFilterChange={filterMovies} />
      </nav>

      <div className="grid grid-cols-4 gap-4">
        {movies?.length > 0 && movies.map(movie => (
          <MovieCard key={movie.Movie_id} movie={movie} />
        ))}
      </div>
    </div>
  );
}

export default App;
