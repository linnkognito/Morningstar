import { ArrowUpIcon, ArrowDownIcon } from '@heroicons/react/24/outline';

export type SortDropdownItem = {
  label: string;
  value: string;
  icon: React.ReactNode;
};

export const sortDropdownItems: SortDropdownItem[] = [
  {
    label: 'Price: Lowest first',
    value: 'price-lowest',
    icon: <ArrowUpIcon className='w-4 stroke-2' />,
  },
  {
    label: 'Price: Highest first',
    value: 'price-highest',
    icon: <ArrowDownIcon className='w-4 stroke-2' />,
  },
];
