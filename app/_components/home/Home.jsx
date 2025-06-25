import { categories } from '../../data/categories';
import CategoryCard from './CategoryCard';

function Home() {
  return (
    <section className='mx-auto flex h-full w-full flex-col gap-1 overflow-y-hidden px-1 py-2 md:flex-row md:pt-0'>
      {categories.map((category) => (
        <CategoryCard
          key={category.id}
          image={category.image}
          color={category.color}
          hoverColor={category.hoverColor}
          hoverClass={category.hoverClass}
          title={category.title}
          className={category.className}
          onClick={() => handleCategoryClick(category.id)}
          aria-label={`Browse ${category.title} products`}
          role='button'
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              handleCategoryClick(category.id);
            }
          }}
        />
      ))}
    </section>
  );
}

export default Home;
