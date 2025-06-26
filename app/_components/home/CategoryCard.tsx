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
        className='object-cover object-[50%_40%]'
      />

      <div className='relative flex h-full min-w-full cursor-pointer items-end justify-start'>
        <ArrowButton hoverColor={hoverColor} />

        <h2
          className='text-shadow-sm ml-2 h-fit p-0 font-bebas text-[10vw] uppercase leading-none text-pearl'
          style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)' }}
        >
          {title}
        </h2>
      </div>
    </Link>
  );
}

export default CategoryCard;
