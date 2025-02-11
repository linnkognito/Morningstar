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
  sizeSelection,
  setSizeSelection,
}) {
  function checkSizeSelection(size) {
    if (multiSelect) {
      // No selection
      if (!Array.isArray(sizeSelection) || !sizeSelection.length)
        return "bg-pearl";

      // At least one size selected
      return Array.isArray(sizeSelection) &&
        sizeSelection.length &&
        sizeSelection.includes(size)
        ? "scale-105 bg-aura"
        : "opacity-50 bg-pearl hover:opacity-100";
    }

    // Multiselect not allowed
    return sizeSelection === size
      ? "scale-105 bg-aura"
      : "opacity-50 bg-pearl hover:opacity-100";
  }

  function handleClick(size) {
    setSizeSelection((prev) => {
      // Multi selection toggle
      if (multiSelect) {
        const selectedSizes = Array.isArray(prev) ? prev : [];

        return selectedSizes.includes(size)
          ? selectedSizes.filter((s) => s !== size)
          : [...selectedSizes, size];
      }

      // Single selection toggle
      return prev === size ? null : size;
    });
  }

  return (
    <div className="flex items-center justify-between gap-2">
      {sizes.map((size) => (
        <ButtonTiny
          key={size.size}
          onClick={() => handleClick(size.size)}
          className={sizeSelection ? checkSizeSelection(size.size) : "bg-pearl"}
        >
          {size.size}
        </ButtonTiny>
      ))}
    </div>
  );
}

export default SizeSelector;
