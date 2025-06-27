import { icons } from '@/app/_data/icons';
import Searchbar from './SearchBar';
import NavItem from './NavItem';

function UserAction({ activeItem, onToggle }) {
  return (
    <>
      {/* Desktop User Action Nav */}
      <nav
        role='Secondary navigation'
        className='hidden h-full w-full cursor-pointer justify-end sm:flex'
      >
        <Searchbar />
        <ul className='hidden h-full items-center text-2xl sm:flex'>
          {icons.map((icon) => (
            <NavItem
              key={icon.id}
              path={icon.path}
              alt={icon.alt}
              isActive={activeItem === icon.id}
              onToggle={() => onToggle(icon.id)}
            >
              <span className='group-hover:scale-115 group-hover:stroke-2 transition-transform duration-400 ease-in-out'>
                {icon.icon}
              </span>
            </NavItem>
          ))}
        </ul>
      </nav>

      {/* Mobile User Action Nav */}
      <Searchbar className='sm:hidden' />
      <nav
        role='Secondary navigation'
        className='fixed bottom-0 z-[9999] w-full bg-pearl shadow-[2px_-2px_4px_rgba(15,15,15,0.2)] sm:hidden'
      >
        <ul className='flex justify-around h-full items-stretch text-2xl'>
          {icons.map((icon) => (
            <NavItem
              key={icon.id}
              path={icon.path}
              alt={icon.alt}
              isActive={activeItem === icon.id}
              onToggle={() => onToggle(icon.id)}
            >
              <span className='group-hover:scale-115 group-hover:stroke-2 transition-transform duration-400 ease-in-out'>
                {icon.icon}
              </span>
            </NavItem>
          ))}
        </ul>
      </nav>
    </>
  );
}
export default UserAction;
