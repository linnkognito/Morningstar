function Container({
  children,
  className = "",
  width = "w-fit",
  height = "h-fit",
  border = "",
}) {
  return (
    <div
      className={`${className} ${width} ${height} text-md flex cursor-pointer flex-col gap-3 rounded-xl bg-pearl/70 text-center font-bebas text-lg font-medium tracking-widest text-pearl backdrop-blur-sm transition-all duration-200`}
    >
      {children}
    </div>
  );
}

export default Container;
