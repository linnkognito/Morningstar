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
      onSubmit={handleSubmit}
      className={`group relative flex items-center justify-end px-2 h-full ${className}`}
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
        className='absolute right-3 group-hover:scale-110 group-hover:stroke-3 transition-transform duration-400 ease-in-out cursor-pointer'
      >
        <MagnifyingGlassIcon className='w-5 mr-1 stroke-offblack stroke-2' />
      </button>
    </form>
  );
}

export default Searchbar;
