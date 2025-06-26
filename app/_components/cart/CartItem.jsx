import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import toast from 'react-hot-toast';
import { XMarkIcon } from '@heroicons/react/24/outline';
import {
  decQuantity,
  deleteItem,
  incQuantity,
} from '@/app/_redux/slices/cartSlice';
import QuantitySelector from '../ui/inputs/QuantitySelector';
import ColorSelector from '../ui/inputs/ColorSelector';
import Link from 'next/link';
import Image from 'next/image';

function CartItem({ item }) {
  const dispatch = useDispatch();
  const cartItem = useSelector((state) =>
    state.cart.cart.find((cartItem) => cartItem.id === item.id)
  );
  const maxQuantity = cartItem?.maxQuantity || 0;

  function handleIncQuantity() {
    if (item.quantity >= maxQuantity)
      return toast.error('Sorry! No more items available in this size.');
    dispatch(incQuantity(item));
  }

  return (
    <div
      className={`relative flex h-fit rounded-md bg-pearl/60 text-offblack shadow-sm shadow-offblack backdrop-blur-md duration-300 ease-out will-change-[scale] overflow-hidden`}
    >
      <button
        type='button'
        aria-label='Delete item'
        className='group flex items-center absolute right-3 top-2 cursor-pointer duration-300 ease-out will-change-[scale,color] hover:scale-[1.2]'
        onClick={() => dispatch(deleteItem(item))}
      >
        <XMarkIcon className='w-8 h-8 stroke-offblack group-hover:stroke-ember' />
      </button>

      {/* Image */}
      <div className='relative aspect-4/5 w-full max-w-[30%] lg:max-w-[25%]'>
        <Image
          src={item.image}
          alt={item.name}
          fill
          className='rounded-l object-center object-cover'
        />
      </div>

      <div className='flex w-full flex-col gap-2 px-4 pb-2 pr-10 pt-3'>
        {/* Text content container */}
        <div className='pl-2 text-left font-bebas'>
          <Link href={`/products/${item.id}`} className='w-fit'>
            <h2 className='w-fit cursor-pointer text-2xl transition-all duration-200 ease-out hover:bg-zest/70 lg:text-3xl'>
              {item.name}
            </h2>
          </Link>

          {/* Product Price */}
          <p className='text-md text-grey-600 sm:text-xl lg:text-2xl'>
            ${item.price}
          </p>
        </div>

        {/* Actions */}
        <div className='flex h-full w-3/4 max-w-full flex-col gap-2 py-2 font-bebas text-offblack sm:mr-4'>
          {/* Size & Color*/}
          <div className='flex w-full cursor-pointer place-content-center rounded-xl bg-zest/80 p-1 text-base tracking-wide'>
            {item.size}
          </div>

          <ColorSelector
            colors={[item.color]}
            height='h-full min-h-[2rem]'
            className='rounded-xl hover:scale-100'
            disabled={true}
          />

          {/* Quantity */}
          <QuantitySelector
            quantity={item.quantity}
            text='Qty:'
            fontSize='text-base'
            className='w-full rounded-xl bg-mint/80 px-3 py-1 tracking-wide'
            increase={handleIncQuantity}
            decrease={() => dispatch(decQuantity(item))}
          />
        </div>
      </div>
    </div>
  );
}

export default CartItem;
