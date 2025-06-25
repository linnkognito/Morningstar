'use client';

import { Provider } from 'react-redux';
import store from '../_redux/store';
import { useRouter } from 'next/navigation';
import { useSelector } from 'react-redux';
import { getCartItems, getTotalPrice } from '../_redux/slices/cartSlice';
import { ArrowLeftIcon, FaceFrownIcon } from '@heroicons/react/24/outline';
import CartItem from '../_components/cart/CartItem';
import ActionButton from '../_components/ui/buttons/ActionButton';
import Container from '../_components/common/Container';
import WrapperScreenGradient from '../_components/ui/containers/WrapperScreenGradient';
import Banner from '../_components/ui/Banner';

function Page() {
  const router = useRouter();
  const cart = useSelector(getCartItems);
  const totalPrice = useSelector(getTotalPrice);

  return (
    <Provider store={store}>
      <WrapperScreenGradient>
        <Banner heading='Checkout' />

        {/* Product list */}
        <div className='mx-auto mt-4 grid min-w-[290px] max-w-[1284px] gap-6 rounded-md bg-/70 p-6 shadow-sm shadow-offblack backdrop-blur-md sm:grid-cols-1 md:grid-cols-[2fr_1fr] text-offblack'>
          <p className='w-full font-bebas text-xl tracking-wider md:col-span-2'>
            {cart.length} items
          </p>

          {/* Cart items */}
          <Container
            width='w-full'
            className='flex flex-col gap-3 px-4 py-4 min-h-[200px] bg-white/70'
          >
            {cart.length ? (
              cart.map((item) => <CartItem key={item.id} item={item} />)
            ) : (
              <div className='rounded-xl p-4 text-center'>
                <h3 className='text-2xl text-offblack'>Your cart is empty.</h3>
                <FaceFrownIcon className='mx-auto w-8 text-aura stroke-2' />
              </div>
            )}

            <ActionButton
              color='bg-sea'
              width='w-[90%]'
              className='col-span-2 lg:col-span-1'
              onClick={() => router.back()}
            >
              <ArrowLeftIcon className='w-6 stroke-2' />
              {cart.length > 0 ? 'Continue shopping' : 'Go back'}
            </ActionButton>
          </Container>

          {/* Checkout */}
          <div
            className={`flex h-full flex-col gap-1 ${
              cart.length === 0 ? 'opacity-50' : 'opacity-100'
            }`}
          >
            <div className='flex flex-col justify-between rounded bg-aura/15 p-4 shadow-sm shadow-offblack backdrop-blur-md'>
              {/* Promo code */}
              <div className='flex h-fit w-full flex-col'>
                <label
                  htmlFor=''
                  className='h-8 pl-1 pt-1 font-bebas text-xl tracking-wide'
                >
                  Promo code:
                </label>
                <input
                  type='text'
                  placeholder='123PROMO'
                  disabled={!cart.length}
                  className='h-7 max-w-[400px] rounded-md px-2 font-primary text-base tracking-wide shadow-sm shadow-offblack'
                />
              </div>

              {/* Total */}
              <h4 className='mt-4 pl-1 font-bebas text-4xl'>
                Total: ${totalPrice}
              </h4>
            </div>

            <ActionButton
              color='bg-aura/80'
              width='w-full'
              className='place-self-end'
              disabled={!cart.length}
            >
              Go to checkout
            </ActionButton>
          </div>
        </div>
      </WrapperScreenGradient>
    </Provider>
  );
}

export default Page;
