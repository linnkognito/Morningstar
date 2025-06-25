import { forwardRef } from 'react';

import RefineDropdown from './RefineDropdown';
import SizeSelector from '@/app/_components/ui/inputs/SizeSelector';
import ColorSelector from '@/app/_components/ui/inputs/ColorSelector';
import AddToCartButton from '@/app/_components/cart/AddToCartButton';

const ProductCardMenu = forwardRef(
  ({ product, productBarHeight, setIsOpen }, ref) => {
    const { sizes, colors } = product;

    return (
      <div
        ref={ref}
        className='absolute flex w-full flex-col'
        style={{ bottom: `${productBarHeight}px` }}
      >
        <RefineDropdown className='rounded-b-none' setIsOpen={setIsOpen}>
          <SizeSelector sizes={sizes} />
          <ColorSelector colors={colors} height='h-[1.5em]' />
          <AddToCartButton product={product} bgColor='bg-zest/70' />
        </RefineDropdown>
      </div>
    );
  }
);

export default ProductCardMenu;
