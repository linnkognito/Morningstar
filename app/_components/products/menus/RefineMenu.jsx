'use client';

import { useState } from 'react';

import RefineMenuButton from './RefineMenuButton';
import SortDropdown from './SortDropdown';
import FilterDropdown from './FilterDropdown';

function RefineMenu() {
  const [isOpen, setIsOpen] = useState(null);

  const handleClick = (type) => {
    isOpen === type ? setIsOpen(null) : setIsOpen(type);
  };

  return (
    <div className='flex h-8 w-full items-center justify-around gap-2'>
      {/* Sort button */}
      <div className='relative w-full'>
        <RefineMenuButton
          isOpen={isOpen === 'sort'}
          onClick={(e) => {
            e.stopPropagation();
            handleClick('sort');
          }}
        >
          Sort
        </RefineMenuButton>

        {/* Sort dropdown */}
        {isOpen === 'sort' && (
          <div className='absolute z-[100] w-full'>
            <SortDropdown isOpen={isOpen} setIsOpen={setIsOpen} />
          </div>
        )}
      </div>

      {/* Filter button */}
      <div className='relative w-full'>
        <RefineMenuButton
          isOpen={isOpen === 'filter'}
          onClick={(e) => {
            e.stopPropagation();
            handleClick('filter');
          }}
        >
          Filter
        </RefineMenuButton>

        {/* Filter dropdown */}
        {isOpen === 'filter' && (
          <div className='absolute z-[100] w-full'>
            <FilterDropdown
              isOpen={isOpen}
              setIsOpen={setIsOpen}
              handleClick={handleClick}
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default RefineMenu;
