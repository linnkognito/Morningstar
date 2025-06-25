'use client';

import { useRef } from 'react';
import { useClickOutside } from '@/app/_hooks/useClickOutside';

function RefineDropdown({
  children,
  className = '',
  padding = 'px-2 py-3',
  setIsOpen,
}) {
  const ref = useRef();
  useClickOutside(ref, () => setIsOpen(false));

  return (
    <div
      ref={ref}
      className={`${className} ${padding} text-md flex h-full w-full cursor-pointer flex-col gap-3 rounded border-2 border-zest bg-pearl/70 text-center font-bebas text-lg font-medium tracking-widest text-pearl backdrop-blur-sm transition-all duration-200`}
    >
      {children}
    </div>
  );
}

export default RefineDropdown;
