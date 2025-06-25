'use client';

import { navItems, dropdownNavItems } from '@/app/_data/nav';
import { useRef, useState } from 'react';
import { ArrowRightIcon, Bars3Icon } from '@heroicons/react/24/outline';
import useDismissDropdown from '@/app/_hooks/useDismissDropdown';
import NavItem from './NavItem';
import Icon from '../../common/Icon';
import Link from 'next/link';

function Nav({ onToggle, activeItem }) {
  const dropdownRef = useRef();
  const [showDropdownNav, setShowDropdownNav] = useState(false);

  useDismissDropdown(dropdownRef, setShowDropdownNav);

  return (
    <nav className='relative h-full cursor-pointer'>
      {/* Smaller screens (dropdown menu) */}
      <NavItem
        id='dropdown'
        className={`xl:hidden ${showDropdownNav && 'bg-zest text-offblack'}`}
        isActive={activeItem === 'dropdown'}
        onToggle={onToggle}
        onClick={(e) => {
          e.stopPropagation();
          setShowDropdownNav((show) => !show);
        }}
      >
        <Bars3Icon className='w-6' />
      </NavItem>

      {/* Dropdown menu */}
      {showDropdownNav && (
        <nav
          ref={dropdownRef}
          className='absolute z-[9999] w-[250px] rounded rounded-tl-none border-2 border-zest bg-pearl/70 text-offblack backdrop-blur-sm xl:hidden'
        >
          {dropdownNavItems.map((li) => (
            <Link href={li.path} key={li.id}>
              <NavItem
                key={li.id}
                id={li.id}
                onToggle={onToggle}
                isActive={activeItem === li.id}
                path={li.path}
                onClick={() => setShowDropdownNav(false)}
                className='will-change group flex w-full items-center justify-between text-[1.4em] tracking-wider transition-all duration-300 ease-out hover:pl-6 group-hover:inline'
              >
                <span>{li.text}</span>
                <ArrowRightIcon className='hidden w-10 pl-2 group-hover:inline' />
              </NavItem>
            </Link>
          ))}
        </nav>
      )}

      {/* Larger screens (individual buttons) */}
      <ul className='xl:text-1xl hidden h-full items-center text-2xl xl:flex'>
        {navItems.map((li) => (
          <NavItem
            key={li.id}
            id={li.id}
            onToggle={onToggle}
            isActive={activeItem === li.id}
            path={li.path}
          >
            {li.text}
          </NavItem>
        ))}
      </ul>
    </nav>
  );
}
export default Nav;
