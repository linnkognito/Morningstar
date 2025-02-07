function ActionButton({
  children,
  color = "bg-pearl",
  width = "w-[90%]",
  height = "h-fit",
  fontSize = "text-2xl",
  className = "",
  disabled = false,
  onClick = () => {},
}) {
  return (
    <button
      className={`${width} ${height} ${fontSize} ${className} ${color} mx-auto mt-2 flex items-center justify-center gap-1 rounded font-bebas leading-10 tracking-wide text-offblack shadow-sm shadow-offblack transition-transform duration-300 ease-out will-change-transform ${disabled ? "cursor-not-allowed" : "hover:scale-105 hover:bg-zest"}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default ActionButton;
