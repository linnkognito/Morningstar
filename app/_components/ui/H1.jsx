import Link from 'next/link';

function H1() {
  return (
    <h1
      aria-label='Home'
      className='
          w-full min-w-fit 
          text-[2.3rem] md:text-5xl 
          xl:text-center text-black 
          cursor-pointer 
          animate-none
          hover:animate-[gradient-animation_2s_ease_infinite]
          hover:bg-gradient-to-r hover:from-zest  hover:to-aura
          hover:bg-[length:200%] hover:bg-clip-text
          hover:text-transparent
          '
    >
      <Link href='/' aria-label='Home'>
        Morning Star
      </Link>
    </h1>
  );
}

export default H1;
