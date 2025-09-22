import Filter from "./Filter";
import type { Filter as FilterModel, FilterParams } from "../types";
import { useState, useEffect } from "react";

interface Props {
  filters: FilterModel[];
  onFilterChange: (filter?: FilterParams[]) => void;
}

const Filters = (props: Props) => {
  const { filters, onFilterChange } = props;

  const [filterParams, setFilterParams] = useState<FilterParams[]>([]);

  const handleFilterChange = (filter?: FilterParams) => {
    if (filter && filter.filter_type) {
      const isInParams = filterParams.some(
        param => param.filter_type === filter.filter_type
      );

      if (isInParams) {
        const params = filterParams
          .map(param => {
            if (param.filter_type === filter.filter_type) {
              return {
                ...param,
                value: filter.value,
              };
            }

            return param;
          })
          .filter(param => !param.value || param.value !== "any");

        setFilterParams(params);
      } else {
        const params = [...filterParams, filter];

        setFilterParams(params);
      }
    }
  };

  useEffect(() => {
    onFilterChange(filterParams);

    console.log({ filterParams });
  }, [filterParams]);

  return (
    <div className="flex gap-4">
      {filters?.length > 0 &&
        filters.map(filter => (
          <Filter
            key={filter.id}
            filter={filter}
            onFilterChange={handleFilterChange}
          />
        ))}
    </div>
  );
};

export default Filters;
