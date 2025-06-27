import Link from 'next/link';
import ActionButton from './buttons/ActionButton';
import { ArrowLeftIcon } from '@heroicons/react/24/outline';

function Message({ heading, children, buttonText, buttonLink, className }) {
  return (
    <div
      className={`mx-auto space-y-4 rounded-xl p-4 text-center md:w-1/2 ${className}`}
    >
      <h2 className='text-2xl text-offblack'>{heading}</h2>

      {children}

      {buttonText && buttonLink && (
        <Link href={buttonLink}>
          <ActionButton>
            <ArrowLeftIcon className='w-6 stroke-2' />
            <span>{buttonText}</span>
          </ActionButton>
        </Link>
      )}
    </div>
  );
}

export default Message;
