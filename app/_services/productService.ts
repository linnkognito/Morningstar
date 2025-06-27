import { Product, RawProduct } from '@/app/_types/product';
import normalizeProduct from '../_utils/normalizeProduct';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

export async function getAllProducts(): Promise<Product[]> {
  const res = await fetch(`${API_BASE_URL}/products`);
  if (!res.ok) throw new Error('Failed to fetch products');
  const products = await res.json();
  return products.data.map(normalizeProduct);
}

export async function getProductsByCategory(
  categoryName: string
): Promise<Product[]> {
  const res = await fetch(`${API_BASE_URL}/products/category/${categoryName}`);
  if (!res.ok) throw new Error('Failed to fetch products');
  const products = await res.json();
  return products.data.map(normalizeProduct);
}

export async function getProductById(id: string): Promise<Product> {
  const res = await fetch(`${API_BASE_URL}/products/${id}`);
  if (!res.ok) throw new Error('Failed to fetch product');
  const product = await res.json();
  return normalizeProduct(product.data);
}

export async function getProductsByName(name: string): Promise<Product[]> {
  const res = await fetch(`${API_BASE_URL}/products`);
  if (!res.ok) throw new Error('Failed to fetch products');
  const products = await res.json();
  const filteredProducts = products.data.filter((product: RawProduct) =>
    product.name.toLowerCase().includes(name.toLowerCase())
  );
  return filteredProducts.map(normalizeProduct);
}
