function ActionButton({
  children,
  color = 'bg-pearl',
  hoverColor = 'hover:bg-zest',
  width = 'w-[90%]',
  height = 'h-fit',
  fontSize = 'text-2xl',
  className = '',
  type = 'button',
  disabled = false,
  onClick = () => {},
}) {
  return (
    <button
      className={`${width} ${height} ${fontSize} ${className} ${color} ${hoverColor} mx-auto mt-2 flex items-center justify-center gap-2 rounded font-bebas leading-10 tracking-wide text-offblack shadow-sm shadow-offblack transition-transform duration-300 ease-out will-change-transform cursor-pointer ${
        disabled ? 'cursor-not-allowed' : 'hover:scale-105'
      }`}
      onClick={onClick}
      type={type}
    >
      {children}
    </button>
  );
}

export default ActionButton;
