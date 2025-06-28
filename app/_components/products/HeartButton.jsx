import { HeartIcon as HeartIconOutline } from '@heroicons/react/24/outline';
import { HeartIcon as HeartIconSolid } from '@heroicons/react/24/solid';

function HeartButton({ isSaved, onClick }) {
  const savedIcon = <HeartIconSolid className='w-6 h-6 stroke-2' />;
  const notSavedIcon = <HeartIconOutline className='w-6 h-6 stroke-2' />;

  return (
    <button
      type='button'
      aria-label={isSaved ? 'Remove from wishlist' : 'Add to wishlist'}
      className={`absolute top-1 right-0 cursor-pointer pr-2 pt-0.5 z-50 text-pearl hover:text-zest hover:scale-110 duration-300 ease-in-out`}
      onClick={onClick}
    >
      {isSaved ? savedIcon : notSavedIcon}
    </button>
  );
}

export default HeartButton;
