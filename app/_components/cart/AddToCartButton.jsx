'use client';

import { useDispatch, useSelector } from 'react-redux';
import { addItem } from '@/app/_redux/slices/cartSlice';
import { clearSelections } from '@/app/_redux/slices/productSlice';
import { ShoppingCartIcon } from '@heroicons/react/24/outline';
import toast from 'react-hot-toast';
import ActionButton from '@/app/_components/ui/buttons/ActionButton';
import Link from 'next/link';

function AddToCartButton({ product, width = 'w-[90%]', bgColor = 'bg-pearl' }) {
  const { name, image, price, id } = product;
  const { size, color, quantity } = useSelector(
    (state) => state.products.selections
  );
  const cartItem = useSelector((state) =>
    state.cart.cart.find((cartItem) => cartItem.id === id)
  );

  const dispatch = useDispatch();

  const maxQuantity = cartItem?.maxQuantity;

  function addToCart() {
    if (!size.length || !color.length)
      return toast.error('Please select a size & color before adding to cart.');

    if (quantity >= maxQuantity)
      return toast.error('Sorry! No more items available in this size.');

    const newCartItem = {
      id: id,
      name: name,
      image: image,
      price: price,
      size: size[0],
      color: color[0],
      quantity: quantity || 1,
      productData: product,
    };

    const sizeData = product.sizes.find((sz) => sz.size === newCartItem.size);

    if (sizeData.quantity === 0)
      return toast.error('Sorry! No more items available in this size.');

    dispatch(addItem(newCartItem));
    dispatch(clearSelections());

    toast.success((t) => (
      <Link href='/cart' onClick={() => toast.dismiss(t.id)}>
        {name} added to cart!
      </Link>
    ));
  }

  return (
    <ActionButton
      width={width}
      color={bgColor}
      className='gap-2 pt-0'
      fontSize='text-xl'
      onClick={addToCart}
    >
      <ShoppingCartIcon className='w-6' />
      Add to cart
    </ActionButton>
  );
}

export default AddToCartButton;
