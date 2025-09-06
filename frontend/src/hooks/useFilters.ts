import { useState, useEffect } from "react";
import type { Filter as FilterModel } from "../types";
import { getFilters } from "../api/filters";

const useFilters = () => {
  const [filters, setFilters] = useState<FilterModel[]>([]);

  useEffect(() => {
    const init = async () => {
      const filters = await getFilters();

      setFilters(filters);
    };

    init();
  }, []);

  return { filters };
};

export default useFilters;
