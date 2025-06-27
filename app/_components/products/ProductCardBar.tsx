'use client';

import { forwardRef } from 'react';
import { useDispatch } from 'react-redux';
import { clearSelections } from '@/app/_redux/slices/productSlice';
import { Product } from '@/app/_types/product';

type ProductCardBarProps = {
  id: string;
  product: Product;
  isOpen: boolean;
  setMenu: (id: string | null) => void;
};

import ProductCardMenuButton from '@/app/_components/products/ProductCardMenuButton';
import Link from 'next/link';

const ProductCardBar = forwardRef<HTMLDivElement, ProductCardBarProps>(
  ({ id, product, isOpen, setMenu }, ref) => {
    const dispatch = useDispatch();

    function handleMenuToggle() {
      setMenu(isOpen ? null : id);
      dispatch(clearSelections());
    }

    return (
      <div
        ref={ref}
        className='relative flex min-h-[84px] w-full flex-1 items-center justify-between overflow-hidden rounded-b bg-aura/80 pl-2 pb-1'
      >
        <div className='flex h-full flex-col pt-2'>
          <Link href={`/product/${id}`}>
            <h2 className='font-bebas text-xl tracking-widest hover:bg-zest/70 will-change-colors duration-300 ease-out xl:text-[1.35rem]'>
              {product.name}
            </h2>
          </Link>
          <h3 className='font-bebas text-lg tracking-widest text-gray-700'>
            ${product.price}
          </h3>
        </div>

        {/* Open menu button */}
        <ProductCardMenuButton
          isOpen={isOpen}
          onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
            e.stopPropagation();
            handleMenuToggle();
          }}
        />
      </div>
    );
  }
);

ProductCardBar.displayName = 'ProductCardBar';

export default ProductCardBar;
