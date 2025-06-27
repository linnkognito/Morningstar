import Link from 'next/link';

function NavItem({
  children,
  path,
  alt,
  isActive = false,
  onToggle = () => {},
  onClick = () => {},
  className = '',
}) {
  return (
    <li
      className={`group w-full h-full list-none ${className}`}
      onToggle={onToggle}
      onClick={onClick}
    >
      {path ? (
        <Link
          href={path}
          aria-label={alt}
          aria-current={isActive ? 'page' : undefined}
          className={`flex w-full h-full justify-center items-center p-4 text-offblack transition-colors duration-200 ease-in hover:bg-aura/30`}
        >
          {children}
        </Link>
      ) : (
        children
      )}
    </li>
  );
}
export default NavItem;
