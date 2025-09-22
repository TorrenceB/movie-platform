import React, { useEffect, useState, type ChangeEvent } from "react";
import type { Filter as FilterModel, FilterParams } from "../types";

interface Props {
  filter: FilterModel;
  onFilterChange: (filter: FilterParams) => void;
}

const Filter = (props: Props) => {
  const { filter, onFilterChange } = props;

  const [selected, setSelected] = useState<FilterParams>({
    filter_type: "",
    value: "",
  });

  useEffect(() => {
    onFilterChange(selected);
  }, [selected]);

  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const { value } = event.target;

    setSelected({ filter_type: filter.filter_type, value });
  };

  return (
    <div className="flex flex-col gap-2 h-fit">
      <label htmlFor={filter.id} className="font-bold">
        {filter.label}
      </label>
      <select
        id={filter.id}
        name={filter.name}
        value={selected.value}
        onChange={handleChange}
        className="w-full p-2 border border-gray-300 rounded-md bg-white text-gray-800"
      >
        <option value="" disabled>
          Select A {filter.label}
        </option>
        <option value="any">Any</option>
        {filter.options.length > 0 &&
          filter.options.map(option => (
            <option key={option.value}>{option.value}</option>
          ))}
      </select>
    </div>
  );
};

export default Filter;
