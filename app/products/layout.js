'use client';

import { useParams } from 'next/navigation';
import Banner from '@/app/_components/ui/Banner';
import RefineMenu from '@/app/_components/products/menus/RefineMenu';

function ProductsLayout({ children }) {
  const { categoryName } = useParams();

  return (
    <article className='flex w-full justify-center pb-[75px] sm:pb-4'>
      <section className='flex w-full max-w-[1284px] flex-col gap-3 px-2'>
        {/* Banner */}
        <Banner heading={categoryName || 'All products'} />

        {/* Content */}
        <section className='mx-auto flex w-full min-w-fit max-w-[1284px] flex-col space-y-3'>
          {/* Filter & Sort menu */}
          <RefineMenu />

          {/* Product cards */}
          <div className='grid grid-cols-2 gap-3 px-2 pt-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5'>
            {children}
          </div>
        </section>
      </section>
    </article>
  );
}

export default ProductsLayout;
