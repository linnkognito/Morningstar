'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { useDispatch, useSelector } from 'react-redux';
import { queryProductsByName } from '@/app/_redux/slices/productSlice';
import { FaceFrownIcon } from '@heroicons/react/24/outline';
import ProductCard from '@/app/_components/products/ProductCard';
import Spinner from '@/app/_components/common/Spinner';
import Message from '../../../_components/ui/Message';

function Page() {
  const { searchQuery } = useParams();

  const dispatch = useDispatch();
  const { status, products } = useSelector((state) => state.products);
  const [productCardMenu, setProductCardMenu] = useState(null);

  useEffect(() => {
    dispatch(queryProductsByName(searchQuery));
  }, [searchQuery, dispatch]);

  return (
    <>
      {status === 'loading' && <Spinner />}

      {status === 'idle' && products.length ? (
        products.map((product) => (
          <ProductCard
            key={product.id}
            currentMenu={productCardMenu}
            setProductCardMenu={setProductCardMenu}
            product={product}
          />
        ))
      ) : (
        <div className='col-span-full flex w-full min-w-fit max-w-[1284px] flex-col space-y-3 rounded-md bg-pearl/60 px-6 pb-6 pt-2 shadow-sm shadow-offblack backdrop-blur-md bg-gradient-to-tr from-aura/80 via-pearl to-pearl/40'>
          <Message
            heading='No results found'
            buttonText='Continue shopping'
            buttonLink='/products'
          >
            <FaceFrownIcon className='mx-auto w-8 text-offblack stroke-2' />
          </Message>
        </div>
      )}
    </>
  );
}

export default Page;
