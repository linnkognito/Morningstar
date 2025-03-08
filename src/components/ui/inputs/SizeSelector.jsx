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

  function applyStyles(size, type) {
    size = size.toUpperCase();

    if (type === "bg") {
      if (!sizeSelections.length) return "bg-pearl";
      return sizeSelections.includes(size) || sizeSelections[0] === size
        ? "bg-aura/60"
        : "bg-pearl";
    }

    if (type === "className") {
      return sizeSelections.includes(size) || sizeSelections[0] === size
        ? "scale-105"
        : "opacity-50 hover:opacity-100";
    }
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
      className={`${className} grid-cols-auto-fit grid w-full max-w-full items-center justify-start gap-2 xl:grid-cols-6 ${sizes.length === 1 ? "grid-cols-1" : "grid-cols-3"}`}
    >
      {sizes.map((sz) => (
        <ButtonTiny
          key={sz.size}
          color={applyStyles(sz.size, "bg")}
          onClick={() => toggleSizeSelection(sz.size)}
          className={`text-base ${applyStyles(sz.size, "className")} `}
        >
          {sz.size}
        </ButtonTiny>
      ))}
    </div>
  );
}

export default SizeSelector;
