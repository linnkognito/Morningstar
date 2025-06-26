import { useState } from 'react';
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/outline';

function Accordion({ children, title = '' }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className='text-offblack mb-2 w-full rounded border border-offblack bg-pearl/70 py-1 text-left font-primary'>
      <button
        onClick={() => setIsExpanded((prev) => !prev)}
        className='flex w-full items-center justify-between cursor-pointer'
      >
        <h3 className='px-4 py-2 font-primary text-offblack'>{title}</h3>
        {!isExpanded ? (
          <ChevronDownIcon className='w-4 mr-3 stroke-2' />
        ) : (
          <ChevronUpIcon className='w-4 mr-3 stroke-2' />
        )}
      </button>

      {isExpanded && (
        <div className='pb-2 pl-10 text-base text-gray-600'>{children}</div>
      )}
    </div>
  );
}

export default Accordion;
