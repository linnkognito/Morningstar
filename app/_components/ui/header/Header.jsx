'use client';

import { useState } from 'react';
import Nav from './Nav';
import UserAction from './UserAction';
import H1 from '../H1';

export default function Header() {
  const [activeItem, setActiveItem] = useState(null);

  const handleToggle = (id) =>
    setActiveItem((curId) => (curId === id ? null : id));

  return (
    <header
      role='banner'
      className='z-[9999] flex h-[64px] w-full justify-center border-b border-aura/40 bg-pearl shadow-[-2px_2px_4px_rgba(15,15,15,0.3)]'
    >
      <section className='flex w-full max-w-[1324px] items-center justify-between gap-2 font-bebas leading-normal text-pearl'>
        <Nav activeItem={activeItem} onToggle={handleToggle} />
        <H1 />
        <UserAction activeItem={activeItem} onToggle={handleToggle} />
      </section>
    </header>
  );
}
