function ColorSelector({
  colors = [],
  height = "h-[2em]",
  className = "",
  disabled = false,
  colorSelection,
  setColorSelection,
}) {
  function checkColorSelection(color) {
    return colorSelection === color
      ? `scale-105 ${color}`
      : `opacity-30 ${color} hover:opacity-100`;
  }

  return (
    <div className="flex w-full gap-2">
      {colors.map((color) => (
        <button
          key={color}
          onClick={() => {
            colorSelection === color
              ? setColorSelection(null)
              : setColorSelection(color);
          }}
          className={`${height} ${className} grow rounded shadow-sm shadow-offblack transition-transform duration-300 ease-out will-change-transform hover:scale-105 ${colorSelection ? checkColorSelection(color) : color}`}
          disabled={disabled}
        ></button>
      ))}
    </div>
  );
}

export default ColorSelector;
