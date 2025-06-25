import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';

function Searchbar({ className = '' }) {
  return (
    <div
      className={`relative flex items-center justify-end px-2 h-full ${className}`}
    >
      <input
        type='text'
        placeholder='Search...'
        className='will-change w-full rounded-md py-1 pl-2 pr-8 font-primary text-lg tracking-wide text-offblack placeholder-grey-400 shadow-[0_0_2px_#0F0F0F] shadow-offblack transition-all ease-out hover:scale-105 hover:shadow-[0_0_4px_#0F0F0F] focus:ring-0 focus:ring-pearl sm:w-[200px] md:w-64'
      />

      <MagnifyingGlassIcon className='absolute right-3 w-5 text-offblack bg-transparent cursor-pointer' />
    </div>
  );
}

export default Searchbar;
