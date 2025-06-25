function TextButton({
  children,
  className = "",
  color = "bg-none",
  width = "w-fit",
  fontSize = "text-base",
  onClick = () => {},
}) {
  return (
    <button
      className={`${width} ${color} ${fontSize} ${className} flex items-center gap-2 rounded-xl px-2 py-1 text-center font-primary uppercase tracking-wide text-offblack hover:bg-zest`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default TextButton;
