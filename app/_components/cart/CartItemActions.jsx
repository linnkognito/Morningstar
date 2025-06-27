'use client';

import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-hot-toast';
import { findItem } from '@/app/_utils/findCartItem';
import { incQuantity, decQuantity } from '@/app/_redux/slices/cartSlice';
import ColorSelector from '../ui/inputs/ColorSelector';
import QuantitySelector from '../ui/inputs/QuantitySelector';

function CartItemActions({ item }) {
  if (!item) return null;
  const dispatch = useDispatch();

  const cartItem = useSelector((state) => findItem(state.cart.cartItems, item));
  const maxQuantity = cartItem?.maxQuantity || 0;

  function handleIncQuantity() {
    if (cartItem.quantity >= maxQuantity)
      return toast.error('Sorry! No more items available in this size.');
    dispatch(incQuantity(cartItem));
  }

  function handleDecQuantity() {
    if (cartItem.quantity <= 1) return;
    dispatch(decQuantity(cartItem));
  }

  return (
    <div className='flex h-full w-3/4 max-w-full flex-col gap-2 py-2 font-bebas text-offblack sm:mr-4'>
      {/* Size & Color*/}
      <div className='flex w-full cursor-pointer place-content-center rounded-xl bg-zest/80 p-1 text-base tracking-wide shadow-sm shadow-offblack/50'>
        {cartItem.size}
      </div>

      <ColorSelector
        colors={[cartItem.color]}
        height='h-full min-h-[2rem]'
        className='rounded-xl '
        disabled={true}
      />

      {/* Quantity */}
      <QuantitySelector
        quantity={cartItem.quantity}
        text='Qty:'
        fontSize='text-base'
        className='w-full rounded-xl bg-mint/80 px-3 py-1 tracking-wide shadow-sm shadow-offblack/50'
        increase={handleIncQuantity}
        decrease={handleDecQuantity}
      />
    </div>
  );
}

export default CartItemActions;
