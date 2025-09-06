import Filter from "./Filter";
import type { Filter as FilterModel } from "../types";

interface Props {
  filters: FilterModel[];
  onFilterChange: ({
    filter,
    value,
  }: {
    filter: FilterModel;
    value: string;
  }) => void;
}

const Filters = (props: Props) => {
  const { filters, onFilterChange } = props;

  return (
    <div className="flex gap-4">
      {filters.map(filter => (
        <Filter
          key={filter.id}
          filter={filter}
          onFilterChange={onFilterChange}
        />
      ))}
    </div>
  );
};

export default Filters;
