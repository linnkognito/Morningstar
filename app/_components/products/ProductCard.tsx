'use client';

import { useRef, useState } from 'react';
import { useSaveItem } from '@/app/_utils/useSaveItem';
import { useClickOutside } from '@/app/_hooks/useClickOutside';
import { useResizeObserver } from '@/app/_hooks/useResizeObserver';
import { Product } from '@/app/_types/product';
import HeartButton from './HeartButton';
import ProductCardBar from './ProductCardBar';
import ProductCardMenu from './menus/ProductCardMenu';
import Image from 'next/image';
import Link from 'next/link';

function ProductCard({
  product,
  setProductCardMenu,
  currentMenu,
}: {
  product: Product;
  setProductCardMenu: (menu: string | boolean) => void;
  currentMenu: string;
}) {
  const { _id: id, image, name } = product;
  const productBar = useRef(null);
  const productBarHeight = useResizeObserver(productBar);
  const ref = useRef(null);

  const [heartButtonHover, setHeartButtonHover] = useState(false);
  const { isSavedItem, toggleSave } = useSaveItem(id, product);
  const menuIsOpen = currentMenu === id;

  useClickOutside(ref, () => setProductCardMenu(false));

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
        href={`/product/${id}`}
        className='relative aspect-5/4 h-[280px] w-full overflow-hidden rounded-t'
      >
        <Image
          src={image}
          alt={name}
          sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
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
