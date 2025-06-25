import Link from 'next/link';

function AuthRedirect({ text = '', path = '/', linkText = 'Click here' }) {
  return (
    <p className='text-center text-sm'>
      {text}{' '}
      <Link
        href={path}
        className='will-change text-aura underline transition-all duration-200 ease-in-out hover:bg-zest hover:text-offblack'
      >
        {linkText}
      </Link>
    </p>
  );
}

export default AuthRedirect;
