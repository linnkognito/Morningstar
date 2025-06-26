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
    <li className={`h-full list-none`} onToggle={onToggle} onClick={onClick}>
      {path ? (
        <Link
          href={path}
          aria-label={alt}
          aria-current={isActive ? 'page' : undefined}
          className={`flex h-full items-center p-4 text-offblack transition duration-200 ease-in hover:bg-aura/30 ${className}`}
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
