function NavItem({
  children,
  id,
  onToggle = null,
  isActive = null,
  onClick = () => {},
  className = "",
}) {
  return (
    <li
      className={`${className} flex h-full items-center p-4 transition duration-200 ease-in hover:bg-zest hover:text-offblack ${isActive && ""}`}
      onToggle={() => onToggle(id)}
      onClick={onClick}
    >
      {children}
    </li>
  );
}
export default NavItem;
