'use client';

import { useParams } from 'next/navigation';

function Banner({ heading = null }) {
  const { categoryName, searchQuery } = useParams();
  const title = searchQuery
    ? `Results for: "${searchQuery}"`
    : heading || categoryName || 'All products';

  return (
    <div className='mt-4 flex h-[7vh] min-h-fit w-full items-center rounded-lg bg-gradient-to-l from-aura via-mint to-zest/50 py-2 text-right text-pearl shadow-sm shadow-offblack/40'>
      <h2
        className='ml-auto w-full pr-4 sm:pr-6 md:pr-9 lg:pr-10 font-bebas text-3xl sm:text-4xl md:text-5xl lg:text-6xl uppercase tracking-widest sm:pl-16'
        style={{ textShadow: '2px 2px 3px rgba(0, 0, 0, 0.5)' }}
      >
        {title}
      </h2>
    </div>
  );
}

export default Banner;
