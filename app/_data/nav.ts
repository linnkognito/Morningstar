type NavItem = {
  id: string;
  alt: string;
  text: string;
  path: string;
  isActive?: boolean;
  onToggle?: () => void;
  onClick?: () => void;
  className?: string;
};

export const navItems: NavItem[] = [
  {
    id: 'womens',
    alt: 'Womens clothing',
    text: 'Her',
    path: '/products/category/womens',
  },
  {
    id: 'mens',
    alt: 'Mens clothing',
    text: 'Him',
    path: '/products/category/mens',
  },
  {
    id: 'unisex',
    alt: 'Unisex clothing',
    text: 'Uni',
    path: '/products/category/unisex',
  },
  { id: 'all', alt: 'All products', text: 'All', path: '/products' },
];
export const dropdownNavItems: NavItem[] = [
  {
    id: 'womens',
    alt: 'Womens clothing',
    text: 'Womens',
    path: '/products/category/womens',
  },
  {
    id: 'mens',
    alt: 'Mens clothing',
    text: 'Mens',
    path: '/products/category/mens',
  },
  {
    id: 'unisex',
    alt: 'Unisex clothing',
    text: 'Unisex',
    path: '/products/category/unisex',
  },
  { id: 'all', alt: 'Show all products', text: 'Show all', path: '/products' },
];
