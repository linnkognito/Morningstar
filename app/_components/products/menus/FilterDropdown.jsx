'use client';

import { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useAvailableColors } from '@/app/_hooks/useAvailableColors';
import useDismiss from '@/app/_hooks/useDismiss';
import {
  applyFilters,
  clearFilters,
  fetchAllProducts,
  fetchProductsByCategory,
  setMaxPriceFilter,
} from '@/app/_redux/slices/productSlice';
import SizeSelector from '@/app/_components/ui/inputs/SizeSelector';
import RangeSelector from '@/app/_components/ui/inputs/RangeSelector';
import ColorSelector from '@/app/_components/ui/inputs/ColorSelector';
import Button from '@/app/_components/ui/buttons/Button';
import RefineDropdown from './RefineDropdown';

function FilterDropdown({ isOpen, setIsOpen }) {
  const dispatch = useDispatch();
  const dropdownRef = useRef(null);

  const { maxPrice } = useSelector((state) => state.products.filters);
  const { products, currentCategory } = useSelector((state) => state.products);
  const availableColors = useAvailableColors(products);

  function handleClearFilters() {
    dispatch(clearFilters());
    currentCategory
      ? dispatch(fetchProductsByCategory(currentCategory))
      : dispatch(fetchAllProducts());
  }

  function handleApplyFilters() {
    dispatch(applyFilters());
    setIsOpen(false);
  }

  useDismiss(dropdownRef, isOpen, () => setIsOpen(false));

  return (
    <RefineDropdown ref={dropdownRef} setIsOpen={setIsOpen} className='flex'>
      <SizeSelector
        type='filters'
        multiSelect={true}
        className='sm:justify-between'
      />

      <RangeSelector
        value={maxPrice}
        onChange={(e) => dispatch(setMaxPriceFilter(+e.target.value))}
      />

      <ColorSelector
        type='filters'
        colors={availableColors}
        multiSelect={true}
      />

      <div className='flex w-full gap-4 px-2 pt-2'>
        <Button
          type='filter'
          className='will-change bg-sea text-xl duration-300 ease-out hover:scale-105'
          onClick={handleClearFilters}
        >
          Clear
        </Button>
        <Button
          type='filter'
          className='will-change bg-pearl text-xl duration-300 ease-out hover:scale-105'
          onClick={handleApplyFilters}
        >
          Apply
        </Button>
      </div>
    </RefineDropdown>
  );
}

export default FilterDropdown;
