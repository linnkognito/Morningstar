function NavItem({
  children,
  id,
  path,
  onToggle = null,
  onClick = () => {},
  className = '',
}) {
  return (
    <li
      className={`${className} flex h-full items-center p-4 text-offblack transition duration-200 ease-in hover:bg-aura/30`}
      onToggle={() => onToggle(id)}
      onClick={onClick}
    >
      {children}
    </li>
  );
}
export default NavItem;
