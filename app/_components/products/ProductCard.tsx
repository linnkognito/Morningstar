'use client';

import { useRef } from 'react';
import { useSaveItem } from '@/app/_utils/useSaveItem';
import { useClickOutside } from '@/app/_hooks/useClickOutside';
import { useResizeObserver } from '@/app/_hooks/useResizeObserver';
import { Product } from '@/app/_types/product';
import { motion } from 'motion/react';
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
  setProductCardMenu: (id: string | null) => void;
  currentMenu: string;
}) {
  const { id, image, name } = product;

  const ref = useRef(null);
  const productBar = useRef(null);
  const productBarHeight = useResizeObserver(productBar);
  const menuIsOpen = currentMenu === id;

  const { isSavedItem, toggleSave } = useSaveItem(id, product);

  useClickOutside(ref, () => setProductCardMenu(null));

  return (
    <motion.div
      layout={false}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      viewport={{ once: true, amount: 0.2 }}
      className='relative flex h-full min-h-[200px] w-full max-w-[285px] cursor-pointer flex-col justify-self-center rounded bg-pearl shadow-sm shadow-offblack  text-offblack'
    >
      <HeartButton isSaved={isSavedItem} onClick={toggleSave} />

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
    </motion.div>
  );
}

export default ProductCard;
