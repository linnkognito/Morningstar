import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import toast from 'react-hot-toast';
import {
  decQuantity,
  deleteItem,
  incQuantity,
} from '@/app/_redux/slices/cartSlice';
import Icon from '../common/Icon';
import QuantitySelector from '../ui/inputs/QuantitySelector';
import ColorSelector from '../ui/inputs/ColorSelector';
import Link from 'next/link';

function CartItem({ item }) {
  const dispatch = useDispatch();
  const cartItem = useSelector((state) =>
    state.cart.cart.find((cartItem) => cartItem.id === item.id)
  );
  const maxQuantity = cartItem?.maxQuantity || 0;
  const [deleteIsHovered, setDeleteIsHovered] = useState(false);
  const optimizedImage = item.image.replace(
    '/upload/',
    '/upload/w_150,f_auto,q_auto/'
  );

  function handleIncQuantity() {
    if (item.quantity >= maxQuantity)
      return toast.error('Sorry! No more items available in this size.');
    dispatch(incQuantity(item));
  }

  return (
    <div
      className={`relative flex h-fit rounded-md bg-pearl/60 text-offblack shadow-sm shadow-offblack backdrop-blur-md duration-300 ease-out will-change-[scale] ${
        deleteIsHovered ? 'scale-[1.005]' : ''
      }`}
    >
      {deleteIsHovered && (
        <div className='z-100 absolute h-full w-full bg-ember/30'></div>
      )}

      <Icon
        name='close'
        al='Close button'
        onMouseEnter={() => setDeleteIsHovered(true)}
        onMouseLeave={() => setDeleteIsHovered(false)}
        onClick={() => dispatch(deleteItem(item))}
        className='absolute right-2 top-2 h-fit origin-center cursor-pointer duration-300 ease-out will-change-[scale,color] hover:scale-[1.2] hover:text-ember'
      />

      {/* Image */}
      <div className='min-w-[30%] max-w-[30%] lg:min-w-[20%] lg:max-w-[20%]'>
        <img
          src={optimizedImage}
          alt=''
          className='max-h-full min-h-full w-full cursor-pointer rounded-l object-cover'
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
