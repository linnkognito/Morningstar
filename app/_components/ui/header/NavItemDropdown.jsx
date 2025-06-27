import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

function NavItem({
  children,
  path,
  alt,
  label,
  isActive = false,
  onToggle = () => {},
  onClick = () => {},
  className = '',
}) {
  return (
    <li
      className={`
        group
        text-[1.4em] tracking-wider 
        transition-[padding]duration-300 ease-out 
        hover:bg-aura/30
        ${className}
        `}
      onToggle={onToggle}
      onClick={onClick}
    >
      <Link
        href={path}
        aria-label={alt}
        aria-current={isActive ? 'page' : undefined}
        className={`
          flex items-center justify-between
          w-full p-4
          text-offblack
          group-hover:pl-6
          transition-[colors,padding] will-change-[padding] duration-200 ease-in
          `}
      >
        <span>{label}</span>
        <ArrowRightIcon className='opacity-0 w-8 stroke-2 pl-2 group-hover:opacity-100 transition-opacity duration-200 ease-in' />
      </Link>
    </li>
  );
}
export default NavItem;
