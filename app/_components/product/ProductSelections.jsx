import { useDispatch, useSelector } from 'react-redux';
import { incQuantity, decQuantity } from '@/app/_redux/slices/productSlice';
import Container from '@/app/_components/common/Container';
import SizeSelector from '@/app/_components/ui/inputs/SizeSelector';
import ColorSelector from '@/app/_components/ui/inputs/ColorSelector';
import QuantitySelector from '@/app/_components/ui/inputs/QuantitySelector';

function ProductSelections({ product }) {
  const dispatch = useDispatch();
  const { quantity } = useSelector((state) => state.products.selections);

  return (
    <Container
      color='bg-pearl/90'
      width='w-full max-w-full'
      className='px-4 py-4'
    >
      <SizeSelector
        sizes={product?.sizes}
        multiSelect={false}
        type='selections'
      />
      <ColorSelector colors={product?.colors} multiSelect={false} />
      <QuantitySelector
        text='quantity:'
        quantity={quantity}
        className='rounded-xl bg-sea/80 py-1 text-xl text-offblack'
        increase={() => dispatch(incQuantity(product))}
        decrease={() => dispatch(decQuantity(product))}
      />
    </Container>
  );
}

export default ProductSelections;
