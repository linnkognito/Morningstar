import AddToCartButton from '../cart/AddToCartButton';
import ActionButton from '../ui/buttons/ActionButton';

function AddProductButtonSet({ product, onClick = () => {}, isSavedItem }) {
  return (
    <div className='grid w-full grid-cols-1 gap-1'>
      <AddToCartButton product={product} width='w-full' bgColor='bg-zest/70' />

      <ActionButton
        color='bg-aura/70'
        hoverColor='hover:bg-aura'
        width='w-full'
        className='text-lg'
        onClick={onClick}
      >
        {isSavedItem ? 'Remove from wishlist' : 'Add to wishlist'}
      </ActionButton>
    </div>
  );
}

export default AddProductButtonSet;
