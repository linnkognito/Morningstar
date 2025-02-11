import { useState } from "react";

import SizeSelector from "../../ui/inputs/SizeSelector";
import RangeSelector from "../../ui/inputs/RangeSelector";
import ColorSelector from "../../ui/inputs/ColorSelector";
import Button from "../../ui/buttons/Button";
import RefineDropdown from "./RefineDropdown";
import { useDispatch, useSelector } from "react-redux";
import { clearFilters, setFilters } from "../productSlice";

const colorsArr = ["bg-ember", "bg-zest", "bg-aura", "bg-pearl", "bg-offblack"];

function FilterDropdown({ handleClick }) {
  const dispatch = useDispatch();

  const [sizeSelection, setSizeSelection] = useState([]);
  const [maxPrice, setMaxPrice] = useState(120);
  const [colorSelection, setColorSelection] = useState([]);
  // const { sizes, colors } = useSelector((state) => state.products.filters);

  function handleClearFilters() {
    setSizeSelection([]);
    setMaxPrice(120);
    setColorSelection([]);

    dispatch(clearFilters());
  }

  return (
    <RefineDropdown>
      <SizeSelector type="filters" multiSelect={true} />

      <RangeSelector
        value={maxPrice}
        onChange={(e) => setMaxPrice(+e.target.value)}
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
          onClick={() =>
            dispatch(
              setFilters({
                sizes: sizeSelection,
                maxPrice,
                colors: colorSelection,
              }),
            )
          }
        >
          Apply
        </Button>
      </div>
    </RefineDropdown>
  );
}

export default FilterDropdown;
