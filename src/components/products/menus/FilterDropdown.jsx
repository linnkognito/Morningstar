import { useDispatch, useSelector } from "react-redux";
import {
  applyFilters,
  clearFilters,
  fetchProductsByCategory,
  setMaxPriceFilter,
} from "../productSlice";

import RefineDropdown from "./RefineDropdown";
import SizeSelector from "../../ui/inputs/SizeSelector";
import RangeSelector from "../../ui/inputs/RangeSelector";
import ColorSelector from "../../ui/inputs/ColorSelector";
import Button from "../../ui/buttons/Button";

const colorsArr = ["bg-ember", "bg-zest", "bg-aura", "bg-pearl", "bg-offblack"];

function FilterDropdown({ setIsOpen }) {
  const dispatch = useDispatch();
  const { maxPrice } = useSelector((state) => state.products.filters);
  const { currentCategory } = useSelector((state) => state.products);

  function handleClearFilters() {
    dispatch(clearFilters());
    dispatch(fetchProductsByCategory(currentCategory));
    setIsOpen(false);
  }

  function handleApplyFilters() {
    dispatch(applyFilters());
    setIsOpen(false);
  }

  return (
    <RefineDropdown>
      <SizeSelector type="filters" multiSelect={true} />

      <RangeSelector
        value={maxPrice}
        onChange={(e) => dispatch(setMaxPriceFilter(+e.target.value))}
      />

      <ColorSelector type="filters" colors={colorsArr} multiSelect={true} />

      <div className="flex gap-4 px-2 pt-2">
        <Button
          type="filter"
          className="will-change bg-sea duration-300 ease-out hover:scale-105"
          onClick={handleClearFilters}
        >
          Clear
        </Button>
        <Button
          type="filter"
          className="will-change bg-pearl duration-300 ease-out hover:scale-105"
          onClick={handleApplyFilters}
        >
          Apply
        </Button>
      </div>
    </RefineDropdown>
  );
}

export default FilterDropdown;
