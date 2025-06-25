import {
  UserIcon,
  HeartIcon,
  ShoppingCartIcon,
} from '@heroicons/react/24/outline';

type Icon = {
  id: string;
  name: string;
  path: string;
  icon: React.ReactNode;
};

export const icons: Icon[] = [
  {
    id: 'icon-person',
    name: 'person',
    path: '/user/login',
    icon: <UserIcon className='w-6' />,
  },
  {
    id: 'icon-fav',
    name: 'favorite',
    path: '/user/saved',
    icon: <HeartIcon className='w-6' />,
  },
  {
    id: 'icon-cart',
    name: 'shopping_cart',
    path: '/cart',
    icon: <ShoppingCartIcon className='w-6' />,
  },
];
