'use client';

import { XMarkIcon } from '@heroicons/react/24/outline';
import { useDispatch } from 'react-redux';
import { deleteItem } from '@/app/_redux/slices/cartSlice';

function DeleteButton({ item }) {
  const dispatch = useDispatch();

  return (
    <button
      type='button'
      aria-label='Delete item'
      className='group flex items-center absolute right-3 top-2 cursor-pointer duration-300 ease-out will-change-[scale,color] hover:scale-[1.2]'
      onClick={() => dispatch(deleteItem(item))}
    >
      <XMarkIcon className='w-8 h-8 stroke-offblack group-hover:stroke-ember' />
    </button>
  );
}

export default DeleteButton;
