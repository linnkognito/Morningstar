'use client';

import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/navigation';
import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import WrapperScreenGradient from '../../_components/ui/containers/WrapperScreenGradient';
import ProductCard from '../../_components/products/ProductCard';
import Banner from '../../_components/ui/Banner';
import ActionButton from '../../_components/ui/buttons/ActionButton';
import Message from '../../_components/ui/Message';

function SavedProducts() {
  const router = useRouter();
  const [productCardMenu, setProductCardMenu] = useState(null);
  const { saved: savedProducts } = useSelector((state) => state.user);
  const hasSavedProducts = savedProducts?.length > 0;

  return (
    <WrapperScreenGradient className='flex justify-center pb-[75px] sm:pb-4'>
      <div className='flex w-full max-w-[1284px] flex-col gap-3 px-2'>
        {/* Banner */}
        <Banner heading='Wishlist' />

        {/* Content */}
        <div className='mx-auto flex w-full min-w-fit max-w-[1284px] flex-col space-y-3 rounded-md bg-pearl/60 px-6 pb-6 pt-2 shadow-sm shadow-offblack backdrop-blur-md'>
          {/* Nav */}
          {hasSavedProducts && (
            <nav className='flex h-full items-center justify-between border-b border-aura/30 px-2 pb-3'>
              <div>
                <ActionButton
                  width='w-fit'
                  fontSize='text-xl'
                  className='mx-0 pl-2 pr-4'
                  onClick={() => router.back()}
                >
                  <ArrowLeftIcon className='w-6 stroke-2' />
                  Back
                </ActionButton>
              </div>

              <Link href='/cart'>
                <ActionButton
                  width='w-fit'
                  fontSize='text-xl'
                  className='flex pl-4 pr-2'
                >
                  Cart
                  <ArrowRightIcon className='w-6 stroke-2' />
                </ActionButton>
              </Link>
            </nav>
          )}

          {/* Product cards */}
          {hasSavedProducts && (
            <div className='grid grid-cols-2 gap-3 px-2 pt-2 sm:grid-cols-3 lg:grid-cols-4'>
              {savedProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  currentMenu={productCardMenu}
                  setProductCardMenu={setProductCardMenu}
                  product={product}
                />
              ))}
            </div>
          )}

          {!hasSavedProducts && (
            <Message
              heading='Your wishlist is empty'
              buttonText='Continue shopping'
              buttonLink='/products'
            />
          )}
        </div>
      </div>
    </WrapperScreenGradient>
  );
}

export default SavedProducts;
