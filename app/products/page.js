'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchAllProducts,
  fetchProductsByCategory,
} from '../_redux/slices/productSlice';
import Banner from '@/app/_components/ui/Banner';
import RefineMenu from '@/app/_components/products/menus/RefineMenu';
import Spinner from '@/app/_components/common/Spinner';
import ProductCard from '@/app/_components/products/ProductCard';

function Page() {
  const dispatch = useDispatch();
  const { categoryName } = useParams();
  const { status, products } = useSelector((state) => state.products);
  const [productCardMenu, setProductCardMenu] = useState(null);

  console.log('categoryName', categoryName);
  console.log('products', products);

  useEffect(() => {
    if (categoryName) {
      dispatch(fetchProductsByCategory(categoryName));
    } else {
      dispatch(fetchAllProducts());
    }
  }, [categoryName, dispatch]);

  return (
    <main className='flex w-full justify-center pb-[75px] sm:pb-4'>
      <article className='flex w-full max-w-[1284px] flex-col gap-3 px-2'>
        {/* Banner */}
        <Banner heading={categoryName || 'All products'} />

        {/* Content */}
        <section className='mx-auto flex w-full min-w-fit max-w-[1284px] flex-col space-y-3'>
          {/* Filter & Sort menu */}
          <RefineMenu />

          {/* Product cards */}
          <div className='grid grid-cols-2 gap-3 px-2 pt-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5'>
            {/* Spinner */}
            {status === 'loading' && <Spinner />}

            {status === 'idle' &&
              products.map((product) => (
                <ProductCard
                  key={product._id}
                  currentMenu={productCardMenu}
                  setProductCardMenu={setProductCardMenu}
                  product={product}
                />
              ))}
          </div>
        </section>
      </article>
    </main>
  );
}

export default Page;
