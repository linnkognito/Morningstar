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
      className={`${className} flex h-full items-center p-4 text-offblack transition duration-200 ease-in hover:bg-aura/30`}
      onToggle={onToggle}
      onClick={onClick}
    >
      {path ? (
        <Link
          href={path}
          aria-label={alt}
          aria-current={isActive ? 'page' : undefined}
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
