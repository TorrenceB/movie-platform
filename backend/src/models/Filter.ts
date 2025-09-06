import { FilterModel } from "../types";

const Filter = ({
  id = Number(),
  name = "",
  label = "",
  filter_type = "",
  options = []
} = {}): FilterModel => ({
  id,
  name,
  label,
  filter_type,
  options
});

export default Filter;
