'use client';

import {
  sortHighestPriceFirst,
  sortLowestPriceFirst,
} from '@/app/_redux/slices/productSlice';
import { useDispatch } from 'react-redux';
import { useRef } from 'react';
import useDismiss from '@/app/_hooks/useDismiss';
import RefineDropdown from './RefineDropdown';
import { sortDropdownItems } from '@/app/_data/sort-dropdown';

function SortDropdown({ isOpen, setIsOpen }) {
  const dispatch = useDispatch();
  const dropdownRef = useRef(null);

  function handleSort(selection) {
    selection === 'price-lowest'
      ? dispatch(sortLowestPriceFirst())
      : dispatch(sortHighestPriceFirst());

    setIsOpen(null);
  }

  useDismiss(dropdownRef, isOpen, () => setIsOpen(null));

  return (
    <RefineDropdown setIsOpen={setIsOpen} padding='py-2 text-offblack'>
      <ul>
        {sortDropdownItems.map((item) => (
          <li
            key={item.value}
            onClick={() => handleSort(item.value)}
            className='flex gap-4 h-full items-center p-4 text-lg text-offblack transition duration-200 ease-in hover:bg-aura/30'
          >
            {item.icon}
            {item.label}
          </li>
        ))}
      </ul>
    </RefineDropdown>
  );
}

export default SortDropdown;
