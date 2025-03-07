function ButtonTiny({
  children,
  className = "",
  width = "w-8",
  height = "h-8",
  color = "bg-pearl",
  onClick = () => {},
}) {
  return (
    <button
      className={`${className} ${width} ${height} ${color} flex w-full min-w-fit grow items-center justify-center rounded px-1 py-1 uppercase text-offblack shadow-sm shadow-offblack transition-all duration-300 ease-out will-change-transform hover:scale-105 hover:bg-aura active:bg-zest`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default ButtonTiny;
