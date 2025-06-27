'use client';

import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllProducts } from '../_redux/slices/productSlice';
import Spinner from '@/app/_components/common/Spinner';
import ProductCard from '@/app/_components/products/ProductCard';

function Page() {
  const dispatch = useDispatch();
  const { status, products } = useSelector((state) => state.products);
  const [productCardMenu, setProductCardMenu] = useState(null);

  useEffect(() => {
    dispatch(fetchAllProducts());
  }, [dispatch]);

  return (
    <>
      {status === 'loading' && <Spinner />}

      {status === 'idle' &&
        products.map((product) => (
          <ProductCard
            key={product.id}
            currentMenu={productCardMenu}
            setProductCardMenu={setProductCardMenu}
            product={product}
          />
        ))}
    </>
  );
}

export default Page;
