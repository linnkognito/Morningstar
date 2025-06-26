import { ArrowRightIcon } from '@heroicons/react/24/outline';

interface ArrowButtonProps {
  hoverColor?: string;
  className?: string;
}

function ArrowButton({ hoverColor, className }: ArrowButtonProps) {
  return (
    <button
      className={`hidden group-hover:flex absolute end-0 h-full w-full max-md:max-w-1/3 cursor-pointer items-center md:justify-center text-offblack ${className}`}
    >
      <div
        className={`${hoverColor} flex h-full md:min-h-[15vh] w-full items-center justify-center py-6 md:h-fit`}
      >
        <ArrowRightIcon className='max-md:h-full sm:w-full text-offwhite' />
      </div>
    </button>
  );
}

export default ArrowButton;
