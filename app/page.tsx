import React from 'react';
import CategoryCard from './_components/home/CategoryCard';
import { categories } from './_data/categories';

function Page() {
  return (
    <section className='mx-auto flex h-full w-full flex-col gap-1 overflow-y-hidden px-1 py-2 md:flex-row md:pt-0'>
      {categories.map((category) => (
        <CategoryCard
          key={category.id}
          id={category.id}
          title={category.title}
          image={category.image}
          color={category.color}
          priority={category.priority}
          hoverColor={category.hoverColor}
          className={category.className}
        />
      ))}
    </section>
  );
}

export default Page;
