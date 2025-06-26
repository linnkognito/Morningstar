'use client';

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'next/navigation';
import { useSaveItem } from '@/app/_utils/useSaveItem';
import {
  clearSelections,
  fetchProductById,
} from '@/app/_redux/slices/productSlice';
import Container from '@/app/_components/common/Container';
import Spinner from '@/app/_components/common/Spinner';
import AddProductButtonSet from '@/app/_components/products/AddProductButtonSet';
import BackButton from '@/app/_components/ui/buttons/BackButton';
import ProductSelections from '@/app/_components/product/ProductSelections';
import ProductImage from '@/app/_components/product/ProductImage';
import ProductAccordions from '@/app/_components/product/ProductAccordions';

function ProductPage() {
  const dispatch = useDispatch();
  const { productId } = useParams();

  useEffect(() => {
    if (productId) dispatch(fetchProductById(productId));
    return () => dispatch(clearSelections());
  }, [dispatch, productId]);

  const { currentProduct: product, status } = useSelector(
    (state) => state.products
  );
  const { isSavedItem, toggleSave } = useSaveItem(productId, product);

  if (status === 'loading') return <Spinner />;

  return (
    <article className='flex max-sm:flex-col h-full w-full justify-center bg-gradient-to-l from-aura/50 via-mint/40 to-zest/30 px-6 py-6'>
      <BackButton className='max-sm:hidden' />

      <Container tag='section' className=' w-full max-w-[1000px] px-4 py-4'>
        {product && (
          <section
            role='main'
            className='relative grid grid-cols-1 gap-3 sm:grid-cols-2'
          >
            <BackButton className='absolute top-2 right-0 z-50 sm:hidden' />

            <ProductImage image={product.image} name={product.name} />

            <Container
              width='w-full'
              height='h-full'
              color='bg-aura/20'
              className='flex flex-col items-start justify-start gap-1 px-6 py-6'
            >
              <div className='flex flex-col items-start'>
                <h2 className='text-2xl sm:text-3xl text-offblack'>
                  {product.name}
                </h2>
                <h3 className='text-xl sm:text-2xl text-grey-600'>
                  ${product.price}
                </h3>
              </div>

              <ProductSelections product={product} />

              <AddProductButtonSet
                product={product}
                onClick={toggleSave}
                isSavedItem={isSavedItem}
              />

              <ProductAccordions product={product} />
            </Container>
          </section>
        )}
      </Container>
    </article>
  );
}

export default ProductPage;
