import { icons } from '@/app/_data/icons';
import Searchbar from './SearchBar';
import NavItem from './NavItem';
import Link from 'next/link';

function UserAction({ activeItem, onToggle }) {
  return (
    <>
      {/* Desktop User Action Nav */}
      <nav className='hidden h-full w-full cursor-pointer justify-end sm:flex'>
        <Searchbar />
        <ul className='hidden h-full items-center text-2xl sm:flex'>
          {icons.map((icon) => (
            <Link href={icon.path} key={icon.id} className='h-full'>
              <NavItem
                isActive={activeItem === icon.id}
                onToggle={() => onToggle(icon.id)}
              >
                {icon.icon}
              </NavItem>
            </Link>
          ))}
        </ul>
      </nav>

      {/* Mobile User Action Nav */}
      <Searchbar className='sm:hidden' />

      <nav className='fixed bottom-0 z-[9999] w-full bg-pearl shadow-[2px_-2px_4px_rgba(15,15,15,0.2)] sm:hidden'>
        <ul className='flex justify-around h-full items-stretch text-2xl'>
          {icons.map((icon) => (
            <Link href={icon.path} key={icon.id}>
              <NavItem
                isActive={activeItem === icon.id}
                onToggle={() => onToggle(icon.id)}
              >
                {icon.icon}
              </NavItem>
            </Link>
          ))}
        </ul>
      </nav>
    </>
  );
}
export default UserAction;
