import { useDispatch, useSelector } from "react-redux";
import { setSizeFilter, setSizeSelection } from "../../products/productSlice";

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

function SizeSelector({
  sizes = defaultSizes,
  multiSelect = false,
  type = "selections",
  className = "",
}) {
  const dispatch = useDispatch();

  const sizeSelections = useSelector((state) =>
    type === "selections"
      ? state.products.selections.size
      : state.products.filters.sizes,
  );

  function applyStyles(size) {
    size = size.toUpperCase();

    if (!sizeSelections.length) return "bg-pearl";

    return sizeSelections.includes(size) || sizeSelections[0] === size
      ? "scale-105 bg-aura"
      : "opacity-50 bg-pearl hover:opacity-100";
  }

  function toggleSizeSelection(size) {
    size = size.toUpperCase();

    if (type === "selections")
      return dispatch(setSizeSelection({ size, isMultiSelect: multiSelect }));

    if (type === "filters")
      return dispatch(setSizeFilter({ size, isMultiSelect: multiSelect }));
  }

  return (
    <div
      className={`${className} flex max-w-full flex-wrap items-center justify-start gap-2`}
    >
      {sizes.map((sz) => (
        <ButtonTiny
          key={sz.size}
          onClick={() => toggleSizeSelection(sz.size)}
          className={`${applyStyles(sz.size)} ${type === "productPage" ? "grow" : "grow-0"}`}
        >
          {sz.size}
        </ButtonTiny>
      ))}
    </div>
  );
}

export default SizeSelector;
