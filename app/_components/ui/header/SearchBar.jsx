'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { useDispatch } from 'react-redux';
import { queryProductsByName } from '@/app/_redux/slices/productSlice';

function Searchbar({ className = '' }) {
  const dispatch = useDispatch();
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const trimmedQuery = searchQuery?.toLowerCase().trim();

    if (!trimmedQuery) {
      router.push('/products');
      return;
    }

    dispatch(queryProductsByName(trimmedQuery));
    router.push(`/products/search/${trimmedQuery}`);
  };

  return (
    <form
      role='search'
      onSubmit={handleSubmit}
      className={`group relative flex items-center justify-end my-auto px-2 h-[34px] ${className}`}
    >
      <input
        type='text'
        placeholder='Search...'
        className='will-change w-full h-9 rounded-md py-1 pl-2 pr-8 font-primary tracking-wide text-offblack placeholder-grey-400 placeholder:italic shadow-[0_0_2px_#0F0F0F] shadow-offblack transition-transform duration-400 ease-in-out hover:scale-105 hover:shadow-[0_0_4px_#0F0F0F] focus:ring-0 focus:ring-pearl sm:w-[200px] md:w-64'
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />

      <button
        type='submit'
        aria-label='Search'
        className='absolute top-0 right-[10px] h-[34px] w-[34px] flex items-center justify-center bg-aura/30 rounded-md group-hover:stroke-3 transition-transform duration-400 ease-in-out cursor-pointer'
      >
        <MagnifyingGlassIcon className='w-5 stroke-offblack stroke-2' />
      </button>
    </form>
  );
}

export default Searchbar;
