'use client';

import { useState } from 'react';
import Nav from './Nav';
import UserAction from './UserAction';
import Link from 'next/link';

export default function Header() {
  const [activeItem, setActiveItem] = useState(null);

  const handleToggle = (id) => {
    setActiveItem((curId) => (curId === id ? null : id));
  };

  return (
    <div className='z-[9999] flex h-[64px] w-full justify-center border-b border-aura/40 bg-pearl shadow-[-2px_2px_4px_rgba(15,15,15,0.3)]'>
      <header className='flex w-full max-w-[1324px] items-center justify-between gap-2 font-bebas leading-normal text-pearl'>
        <Nav activeItem={activeItem} onToggle={handleToggle} />

        <Link href='/' className='w-full cursor-pointer text-[2.3rem]'>
          <h1
            className='
          md:text-5xl xl:text-center text-black 
          animate-none
          hover:animate-[gradient-animation_2s_ease_infinite]
          hover:bg-gradient-to-r hover:from-zest  hover:to-aura
          hover:bg-[length:200%] hover:bg-clip-text
          hover:text-transparent
          '
          >
            Morning Star
          </h1>
        </Link>

        <UserAction activeItem={activeItem} onToggle={handleToggle} />
      </header>
    </div>
  );
}
