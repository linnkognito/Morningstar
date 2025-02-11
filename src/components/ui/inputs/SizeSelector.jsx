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

    if (multiSelect)
      return sizeSelections.includes(size)
        ? "scale-105 bg-aura"
        : "opacity-50 bg-pearl hover:opacity-100";

    return sizeSelections[0] === size
      ? "scale-105 bg-aura"
      : "opacity-50 bg-pearl hover:opacity-100";
  }

  return (
    <div className="flex items-center justify-between gap-2">
      {sizes.map((size) => (
        <ButtonTiny
          key={size.size}
          onClick={() =>
            dispatch(
              setSizeSelection({ size: size.size, isMultiselect: multiSelect }),
            )
          }
          className={applyStyles(size.size)}
        >
          {size.size}
        </ButtonTiny>
      ))}
    </div>
  );
}

export default SizeSelector;
