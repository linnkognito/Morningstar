import { useDispatch, useSelector } from "react-redux";
import { setColorSelection } from "../../products/productSlice";

function ColorSelector({
  colors = [],
  height = "h-[2em]",
  className = "",
  multiSelect = false,
  disabled = false,
}) {
  const dispatch = useDispatch();
  const colorSelections = useSelector(
    (state) => state.products.selections.color,
  );

  function applyStyles(color) {
    if (!colorSelections.length) return "hover:scale-105";

    return colorSelections.includes(color)
      ? "scale-105"
      : "opacity-30 hover:opacity-100 hover:scale-[1.01]";
  }

  return (
    <div className="flex w-full gap-3">
      {colors.map((color) => (
        <button
          key={color}
          onClick={() =>
            dispatch(setColorSelection({ color, isMultiSelect: multiSelect }))
          }
          className={`${color} ${height} ${className} grow rounded shadow-sm shadow-offblack transition-transform duration-300 ease-out will-change-transform ${applyStyles(color)}`}
          disabled={disabled}
        ></button>
      ))}
    </div>
  );
}

export default ColorSelector;
