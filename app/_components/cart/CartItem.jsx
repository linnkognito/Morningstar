import DeleteButton from '../ui/buttons/DeleteButton';
import CartItemImage from './CartItemImage';
import CartItemDetails from './CartItemDetails';
import CartItemActions from './CartItemActions';

function CartItem({ item }) {
  return (
    <div
      role='cart-item'
      className='relative flex h-fit rounded-md bg-pearl/60 text-offblack shadow-sm shadow-offblack backdrop-blur-md duration-300 ease-out will-change-[scale] overflow-hidden'
    >
      <DeleteButton item={item} />
      <CartItemImage item={item} />

      <div className='flex w-full flex-col gap-2 px-4 pb-2 pr-10 pt-3'>
        <CartItemDetails item={item} />
        <CartItemActions item={item} />
      </div>
    </div>
  );
}

export default CartItem;
