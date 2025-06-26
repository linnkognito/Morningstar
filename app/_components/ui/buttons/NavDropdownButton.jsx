'use client';

import { forwardRef } from 'react';

const NavDropdownButton = forwardRef(
  (
    { children, alt, isActive = false, onToggle = null, onClick = () => {} },
    ref
  ) => {
    return (
      <button
        ref={ref}
        type='button'
        aria-label={alt}
        aria-expanded={isActive}
        onToggle={onToggle}
        onClick={onClick}
        className={`xl:hidden flex h-full items-center p-4 text-offblack transition duration-200 ease-in hover:bg-aura/30 cursor-pointer 
      ${isActive ? 'bg-zest text-offblack' : ''}`}
      >
        {children}
      </button>
    );
  }
);

export default NavDropdownButton;
