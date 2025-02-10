function Container({
  children,
  className = "",
  width = "w-fit",
  height = "h-fit",
  border = "",
}) {
  return (
    <div
      className={`${className} ${width} ${height} text-md flex flex-col gap-3 rounded-xl bg-pearl/50 text-center font-bebas text-lg font-medium tracking-widest text-pearl shadow-sm shadow-offblack backdrop-blur-sm transition-all duration-200`}
    >
      {children}
    </div>
  );
}

export default Container;
