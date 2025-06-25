'use client';

import { useDispatch, useSelector } from 'react-redux';
import {
  setColorFilter,
  setColorSelection,
} from '@/app/_redux/slices/productSlice';

function ColorSelector({
  colors = [],
  height = 'h-[2em]',
  className = '',
  multiSelect = false,
  disabled = false,
  type = 'selections',
}) {
  const dispatch = useDispatch();
  const colorSelections = useSelector((state) =>
    type === 'selections'
      ? state.products.selections.color
      : state.products.filters.colors
  );
  const isFilter = type === 'filters';

  function applyStyles(color) {
    if (!colorSelections.length) return 'hover:scale-105';

    return colorSelections.includes(color)
      ? 'scale-105'
      : 'opacity-30 hover:opacity-100 hover:scale-[1.01]';
  }

  function toggleColorSelection(color) {
    if (type === 'selections')
      return dispatch(setColorSelection({ color, isMultiSelect: multiSelect }));

    if (type === 'filters')
      return dispatch(setColorFilter({ color, isMultiSelect: multiSelect }));
  }

  return (
    <div
      className={`grid w-full gap-2 ${isFilter ? 'grid-cols-8' : ''}`}
      style={
        !isFilter
          ? {
              gridTemplateColumns: `repeat(${colors.length}, minmax(30px, 1fr))`,
            }
          : {}
      }
    >
      {colors.map((color) => (
        <button
          key={color}
          className={`${color} ${height} ${className} rounded shadow-sm shadow-offblack transition-transform duration-300 ease-out will-change-transform ${applyStyles(
            color
          )}`}
          onClick={() => toggleColorSelection(color)}
          disabled={disabled}
        ></button>
      ))}
    </div>
  );
}

export default ColorSelector;
