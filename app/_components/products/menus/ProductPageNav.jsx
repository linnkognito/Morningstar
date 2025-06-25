'use client';

import { useRouter } from 'next/navigation';
import ArrowButton from '@/app/_components/ui/buttons/ArrowButton';

function ProductPageNav() {
  const router = useRouter();

  return (
    <div
      className='group flex w-fit cursor-pointer items-center xl:hidden'
      onClick={() => router.back()}
    >
      <ArrowButton
        dir='left'
        size='text-md'
        className='cursor-pointer text-offblack'
      />
      <span className='will-change pl-1 text-offblack opacity-0 duration-300 ease-in-out group-hover:opacity-100'>
        Back
      </span>
    </div>
  );
}

export default ProductPageNav;
