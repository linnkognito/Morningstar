import ButtonTiny from "../buttons/ButtonTiny";

const sizes = ["xs", "s", "m", "l", "xl", "xxl"];

function SizeSelector({ sizeSelection, setSizeSelection }) {
  function checkSizeSelection(size) {
    if (sizeSelection === size) return "scale-105 bg-aura";
    return "opacity-50 bg-pearl hover:opacity-100";
  }

  return (
    <div className="flex items-center justify-evenly gap-2">
      {sizes.map((size) => (
        <ButtonTiny
          key={size}
          onClick={() => {
            sizeSelection === size
              ? setSizeSelection(null)
              : setSizeSelection(size);
          }}
          className={sizeSelection ? checkSizeSelection(size) : "bg-pearl"}
        >
          {size}
        </ButtonTiny>
      ))}
    </div>
  );
}

export default SizeSelector;
