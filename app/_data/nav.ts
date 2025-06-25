type NavItem = {
  id: string;
  text: string;
  path: string;
};

export const navItems: NavItem[] = [
  { id: 'home', text: 'Home', path: '/' },
  { id: 'womens', text: 'Her', path: '/products/category/womens' },
  { id: 'mens', text: 'Him', path: '/products/category/mens' },
  { id: 'unisex', text: 'Uni', path: '/products/category/unisex' },
  { id: 'new', text: 'New', path: '/products/category/new' },
  { id: 'all', text: 'All', path: '/products' },
];
export const dropdownNavItems: NavItem[] = [
  { id: 'womens', text: 'Womens', path: '/products/category/womens' },
  { id: 'mens', text: 'Mens', path: '/products/category/mens' },
  { id: 'unisex', text: 'Unisex', path: '/products/category/unisex' },
  { id: 'new', text: 'New in', path: '/products/category/new' },
  { id: 'all', text: 'Show all', path: '/products' },
];
