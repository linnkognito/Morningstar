import { useRef, useState } from 'react';
import { useSaveItem } from '@/app/_utils/useSaveItem';
import { useResizeObserver } from '@/app/_hooks/useResizeObserver';

import HeartButton from './HeartButton';
import ProductCardBar from './ProductCardBar';
import ProductCardMenu from './menus/ProductCardMenu';
import Image from 'next/image';
import Link from 'next/link';

function ProductCard({ product, setProductCardMenu, currentMenu }) {
  const { _id: id } = product;
  const { isSavedItem, toggleSave } = useSaveItem(id, product);

  const menuIsOpen = currentMenu === id;

  const productBar = useRef(null);
  const productBarHeight = useResizeObserver(productBar);

  const ref = useRef();
  // useClickOutside(ref, () => setProductCardMenu(false));

  const [heartButtonHover, setHeartButtonHover] = useState(false);

  return (
    <div className='relative flex h-full min-h-[200px] w-full max-w-[285px] cursor-pointer flex-col justify-self-center rounded bg-pearl shadow-sm shadow-offblack'>
      {/* Add to wishlist */}
      <HeartButton
        isSaved={isSavedItem}
        heartButtonHover={heartButtonHover}
        setHeartButtonHover={setHeartButtonHover}
        onClick={toggleSave}
      />

      {/* Image */}
      <Link
        href={`/products/${id}`}
        className='relative aspect-5/4 h-[280px] w-full overflow-hidden rounded-t'
      >
        <Image
          src={product.image}
          alt={product.name}
          fill
          className='object-cover object-center'
        />
      </Link>

      {/* Product bar */}
      <ProductCardBar
        ref={productBar}
        id={id}
        product={product}
        isOpen={menuIsOpen}
        setMenu={setProductCardMenu}
      />

      {/* Selection menu */}
      {menuIsOpen && (
        <ProductCardMenu
          ref={ref}
          product={product}
          productBarHeight={productBarHeight}
          setIsOpen={setProductCardMenu}
        />
      )}
    </div>
  );
}

export default ProductCard;
