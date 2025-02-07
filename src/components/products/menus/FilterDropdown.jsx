import { useState } from "react";

import SizeSelector from "../../ui/inputs/SizeSelector";
import RangeSelector from "../../ui/inputs/RangeSelector";
import ColorSelector from "../../ui/inputs/ColorSelector";
import Button from "../../ui/buttons/Button";
import RefineDropdown from "./RefineDropdown";
import { useDispatch } from "react-redux";
import { clearFilters } from "../productSlice";

const colorsArr = ["bg-ember", "bg-zest", "bg-aura", "bg-pearl", "bg-offblack"];

function FilterDropdown({ handleClick }) {
  const dispatch = useDispatch();

  const defaultPrice = 120;
  const [maxPrice, setMaxPrice] = useState(defaultPrice);

  const [sizeSelection, setSizeSelection] = useState(null);
  const [colorSelection, setColorSelection] = useState(null);

  return (
    <RefineDropdown>
      <SizeSelector
        multiSelect={true}
        sizeSelection={sizeSelection}
        setSizeSelection={setSizeSelection}
      />

      <RangeSelector
        value={maxPrice}
        onChange={(e) => setMaxPrice(+e.target.value)}
      />

      <ColorSelector
        colors={colorsArr}
        colorSelection={colorSelection}
        setColorSelection={setColorSelection}
      />

      <div className="flex gap-4 px-2 pt-2">
        <Button
          type="filter"
          className="bg-sea"
          onClick={() => setSizeSelection(null)}
        >
          Clear filters
        </Button>
        <Button
          type="filter"
          className="bg-pearl"
          onClick={() => handleClick("filter")}
        >
          Apply filters
        </Button>
      </div>
    </RefineDropdown>
  );
}

export default FilterDropdown;
