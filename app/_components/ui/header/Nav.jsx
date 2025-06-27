'use client';

import { motion } from 'motion/react';
import { navItems, dropdownNavItems } from '@/app/_data/nav';
import { useRef, useState } from 'react';
import { ArrowRightIcon, Bars3Icon } from '@heroicons/react/24/outline';
import useDismiss from '@/app/_hooks/useDismiss';
import NavItem from './NavItem';
import NavDropdownButton from '../buttons/NavDropdownButton';
import NavItemDropdown from './NavItemDropdown';

function Nav({ onToggle, activeItem }) {
  const dropdownRef = useRef(null);
  const dropdownButtonRef = useRef(null);
  const [showDropdownNav, setShowDropdownNav] = useState(false);

  useDismiss(
    dropdownRef,
    showDropdownNav,
    () => setShowDropdownNav(false),
    dropdownButtonRef
  );

  return (
    <nav
      role='navigation'
      aria-label='Primary navigation'
      className='relative h-full cursor-pointer'
    >
      {/* Smaller screens (dropdown menu) */}
      <NavDropdownButton
        id='dropdown'
        ref={dropdownButtonRef}
        alt='Main navigation menu'
        isActive={activeItem === 'dropdown'}
        onToggle={onToggle}
        onClick={() => setShowDropdownNav((show) => !show)}
      >
        <Bars3Icon className='w-6' />
      </NavDropdownButton>

      {/* Dropdown menu */}
      {showDropdownNav && (
        <motion.ul
          layout={false}
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 0.2, ease: 'easeOut' }}
          viewport={{ once: true, amount: 0.2 }}
          ref={dropdownRef}
          role='navigation'
          className='absolute z-[9999] w-[250px] rounded rounded-tl-none border-2 border-zest bg-pearl/70 text-offblack backdrop-blur-sm xl:hidden origin-top-left'
        >
          {dropdownNavItems.map((li) => (
            <NavItemDropdown
              key={li.id}
              path={li.path}
              alt={li.alt}
              label={li.text}
              onToggle={() => onToggle(li.id)}
              isActive={activeItem === li.id}
              onClick={() => setShowDropdownNav(false)}
            />
          ))}
        </motion.ul>
      )}

      {/* Larger screens (individual buttons) */}
      <ul className='xl:text-1xl hidden h-full items-center text-2xl xl:flex'>
        {navItems.map((li) => (
          <NavItem
            key={li.id}
            path={li.path}
            alt={li.alt}
            onToggle={() => onToggle(li.id)}
            isActive={activeItem === li.id}
          >
            {li.text}
          </NavItem>
        ))}
      </ul>
    </nav>
  );
}
export default Nav;
