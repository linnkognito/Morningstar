import { useDispatch, useSelector } from "react-redux";
import { useMemo } from "react";
import {
  applyFilters,
  clearFilters,
  fetchAllProducts,
  fetchProductsByCategory,
  setMaxPriceFilter,
} from "../productSlice";

import RefineDropdown from "./RefineDropdown";
import SizeSelector from "../../ui/inputs/SizeSelector";
import RangeSelector from "../../ui/inputs/RangeSelector";
import ColorSelector from "../../ui/inputs/ColorSelector";
import Button from "../../ui/buttons/Button";

function FilterDropdown({ setIsOpen }) {
  const dispatch = useDispatch();

  const { maxPrice } = useSelector((state) => state.products.filters);
  const { products, currentCategory } = useSelector((state) => state.products);

  const availableColors = useMemo(() => {
    const colorSet = new Set();

    products.forEach((product) => {
      product.colors.forEach((color) => colorSet.add(color));
    });

    return Array.from(colorSet);
  }, [products]);

  function handleClearFilters() {
    dispatch(clearFilters());
    currentCategory
      ? dispatch(fetchProductsByCategory(currentCategory))
      : dispatch(fetchAllProducts());
    setIsOpen(false);
  }

  function handleApplyFilters() {
    dispatch(applyFilters());
    setIsOpen(false);
  }

  return (
    <RefineDropdown setIsOpen={setIsOpen} className="flex">
      <SizeSelector
        type="filters"
        multiSelect={true}
        className="sm:justify-between"
      />

      <RangeSelector
        value={maxPrice}
        onChange={(e) => dispatch(setMaxPriceFilter(+e.target.value))}
      />

      <ColorSelector
        type="filters"
        colors={availableColors}
        multiSelect={true}
      />

      <div className="flex w-full gap-4 px-2 pt-2">
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
