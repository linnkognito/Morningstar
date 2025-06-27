'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProductsByCategory } from '@/app/_redux/slices/productSlice';
import ProductCard from '@/app/_components/products/ProductCard';
import Spinner from '@/app/_components/common/Spinner';

function Page() {
  const { categoryName } = useParams();

  const dispatch = useDispatch();
  const { status, products } = useSelector((state) => state.products);
  const [productCardMenu, setProductCardMenu] = useState(null);

  useEffect(() => {
    dispatch(fetchProductsByCategory(categoryName));
  }, [categoryName, dispatch]);

  return (
    <>
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
    </>
  );
}

export default Page;
