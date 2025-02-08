import { useState } from "react";

import SizeSelector from "../../ui/inputs/SizeSelector";
import RangeSelector from "../../ui/inputs/RangeSelector";
import ColorSelector from "../../ui/inputs/ColorSelector";
import Button from "../../ui/buttons/Button";
import RefineDropdown from "./RefineDropdown";

const colorsArr = ["bg-ember", "bg-zest", "bg-aura", "bg-pearl", "bg-offblack"];

function FilterDropdown({ handleClick }) {
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
          className="will-change bg-sea duration-300 ease-out hover:scale-105"
          onClick={() => setSizeSelection(null)}
        >
          Clear
        </Button>
        <Button
          type="filter"
          className="will-change bg-pearl duration-300 ease-out hover:scale-105"
          onClick={() => handleClick("filter")}
        >
          Apply
        </Button>
      </div>
    </RefineDropdown>
  );
}

export default FilterDropdown;
