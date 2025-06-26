import {
  UserIcon,
  HeartIcon,
  ShoppingCartIcon,
} from '@heroicons/react/24/outline';

type Icon = {
  id: string;
  name: string;
  alt: string;
  path: string;
  icon: React.ReactNode;
};

export const icons: Icon[] = [
  {
    id: 'icon-person',
    name: 'person',
    alt: 'User account',
    path: '/user/login',
    icon: <UserIcon className='w-6' />,
  },
  {
    id: 'icon-fav',
    name: 'favorite',
    alt: 'Wishlist',
    path: '/user/saved',
    icon: <HeartIcon className='w-6' />,
  },
  {
    id: 'icon-cart',
    name: 'cart',
    alt: 'Shopping cart',
    path: '/cart',
    icon: <ShoppingCartIcon className='w-6' />,
  },
];
