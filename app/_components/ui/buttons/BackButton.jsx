'use client';

import { useRouter } from 'next/navigation';
import { ArrowLeftIcon } from '@heroicons/react/24/outline';

function BackButton({ children, className = '' }) {
  const router = useRouter();

  return (
    <button
      type='button'
      className={`
      flex w-fit h-fit
      sm:mt-4 mr-3 px-3 sm:px-2 py-2 sm:py-4 
      cursor-pointer 
      items-center 
      rounded-xl 
      text-offblack bg-aura/60
      shadow-sm shadow-offblack 
      will-change duration-300 ease-out 
      hover:-left-14 
      hover:bg-gradient-to-r hover:from-mint via-zest  hover:to-aura
      hover:bg-[length:300%]
      hover:animate-[gradient-animation_3s_ease_infinite]
      hover:-translate-x-1
      ${className}
      `}
      onClick={() => router.back()}
    >
      <ArrowLeftIcon className='w-4 sm:w-6 stroke-2' />
      {children}
    </button>
  );
}

export default BackButton;
