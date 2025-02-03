function NavItem({
  children,
  id,
  onToggle,
  isActive,
  onClick = () => {},
  className = "",
}) {
  const activeItemClasses = () => {
    if (isActive && id === "dropdown") return "bg-zest";

    return "bg-pearl text-offblack";
  };

  return (
    <li
      className={`${className} flex h-full items-center p-4 transition duration-200 ease-in hover:bg-zest hover:text-offblack ${isActive && activeItemClasses()}`}
      onToggle={() => onToggle(id)}
      onClick={onClick}
    >
      {children}
    </li>
  );
}
export default NavItem;
