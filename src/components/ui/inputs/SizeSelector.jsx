import { useDispatch, useSelector } from "react-redux";
import { setSizeSelection } from "../../products/productSlice";

import ButtonTiny from "../buttons/ButtonTiny";

const defaultSizes = [
  { size: "xs" },
  { size: "s" },
  { size: "m" },
  { size: "l" },
  { size: "xl" },
  { size: "xxl" },
  { size: "onesize" },
];

function SizeSelector({ sizes = defaultSizes, multiSelect = false }) {
  const dispatch = useDispatch();
  const sizeSelections = useSelector((state) => state.products.selections.size);

  function applyStyles(size) {
    if (!sizeSelections.length) return "bg-pearl";

    return sizeSelections.includes(size) || sizeSelections[0] === size
      ? "scale-105 bg-aura"
      : "opacity-50 bg-pearl hover:opacity-100";
  }

  return (
    <div className="flex items-center justify-between gap-2">
      {sizes.map((sz) => (
        <ButtonTiny
          key={sz.size}
          onClick={() =>
            dispatch(
              setSizeSelection({ size: sz.size, isMultiselect: multiSelect }),
            )
          }
          className={applyStyles(sz.size)}
        >
          {sz.size}
        </ButtonTiny>
      ))}
    </div>
  );
}

export default SizeSelector;
