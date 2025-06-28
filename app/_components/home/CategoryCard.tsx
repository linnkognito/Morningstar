'use client';

import { motion } from 'motion/react';
import { Category } from '@/app/_data/categories';
import Image from 'next/image';
import Link from 'next/link';
import ArrowButton from '../ui/buttons/ArrowButton';

function CategoryCard({
  id,
  title,
  color,
  image,
  priority = false,
  hoverColor,
  className,
}: Category) {
  return (
    <Link
      href={`/products/category/${id}`}
      role='button'
      className={`group relative w-full grow shadow-sm shadow-offblack md:mt-2 md:w-1/4 ${color} ${className} overflow-hidden`}
      aria-label={`Browse ${title} products`}
    >
      <Image
        src={image.src}
        alt={image.alt}
        fill
        priority={priority}
        sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
        className='object-cover object-[50%_40%]'
      />

      <div className='group relative flex h-full min-w-full cursor-pointer items-end justify-start'>
        <ArrowButton alt={`Browse ${title} products`} hoverColor={hoverColor} />

        <motion.h2
          layout={false}
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          viewport={{ once: true, amount: 0.2 }}
          className='text-shadow-sm ml-2 h-fit p-0 font-bebas text-[10vw] uppercase leading-none text-pearl'
          style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)' }}
        >
          {title}
        </motion.h2>
      </div>
    </Link>
  );
}

export default CategoryCard;
