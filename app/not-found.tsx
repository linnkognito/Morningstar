'use client';

import { useRouter } from 'next/navigation';
import ActionButton from '@/app/_components/ui/buttons/ActionButton';

function NotFound() {
  const router = useRouter();

  return (
    <div className='bg-blur-sm mx-auto mt-6 flex h-full w-4/5 flex-col items-center rounded border-2 border-zest bg-pearl px-0 pb-4 pt-10 shadow-sm'>
      <h2 className='mb-2 font-bebas text-3xl'>404 – Page Not Found</h2>
      <p className='text-md mb-4 font-semibold'>
        Sorry! The page you&apos;re looking for doesn&apos;t exist.
      </p>

      <ActionButton color='bg-mint' onClick={() => router.back()}>
        Go back
      </ActionButton>
    </div>
  );
}

export default NotFound;
