import React, { useEffect, useState, type ChangeEvent } from "react";
import type { Filter as FilterModel } from "../types";

interface Props {
  filter: FilterModel;
  onFilterChange: ({
    filter,
    value,
  }: {
    filter: FilterModel;
    value: string;
  }) => void;
}

const Filter = (props: Props) => {
  const { filter, onFilterChange } = props;

  const [selected, setSelected] = useState("");

  useEffect(() => {
    onFilterChange({ filter, value: selected });
  }, [selected]);

  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const { value } = event.target;

    setSelected(value);
  };

  return (
    <div className="flex flex-col gap-2 h-fit">
      <label htmlFor={filter.id} className="font-bold">
        {filter.label}
      </label>
      <select
        id={filter.id}
        name={filter.name}
        value={selected}
        onChange={handleChange}
        className="w-full p-2 border border-gray-300 rounded-md bg-white text-gray-800"
      >
        <option value="" disabled selected>Select A {filter.label}</option>
        {filter.options.length > 0 &&
          filter.options.map(option => (
            <option key={option.value}>{option.value}</option>
          ))}
      </select>
    </div>
  );
};

export default Filter;
