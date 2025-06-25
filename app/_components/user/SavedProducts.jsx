import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/navigation';
import WrapperScreenGradient from '../ui/containers/WrapperScreenGradient';
import ProductCard from '../products/ProductCard';
import Banner from '../ui/Banner';
import Icon from '../common/Icon';
import ActionButton from '../ui/buttons/ActionButton';

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
                  <Icon name='arrow_back' />
                  Back
                </ActionButton>
              </div>

              <NavLink to='/cart'>
                <ActionButton
                  width='w-fit'
                  fontSize='text-xl'
                  className='flex pl-4 pr-2'
                >
                  Cart
                  <Icon name='arrow_forward' />
                </ActionButton>
              </NavLink>
            </nav>
          )}

          {/* Product cards */}
          {hasSavedProducts && (
            <div className='grid grid-cols-2 gap-3 px-2 pt-2 sm:grid-cols-3 lg:grid-cols-4'>
              {savedProducts.map((product) => (
                <ProductCard
                  key={product._id}
                  currentMenu={productCardMenu}
                  setProductCardMenu={setProductCardMenu}
                  product={product}
                />
              ))}
            </div>
          )}

          {!hasSavedProducts && (
            <div className='mx-auto space-y-4 rounded-xl p-4 text-center md:w-1/2'>
              <h2 className='text-2xl text-offblack'>Your wishlist is empty</h2>
              <NavLink to='/products'>
                <ActionButton>
                  <Icon name='arrow_back' /> <span>Continue shopping</span>
                </ActionButton>
              </NavLink>
            </div>
          )}
        </div>
      </div>
    </WrapperScreenGradient>
  );
}

export default SavedProducts;
