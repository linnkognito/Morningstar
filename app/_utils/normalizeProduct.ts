import { RawProduct, Product } from '@/app/_types/product';

export default function normalizeProduct(raw: RawProduct): Product {
  const { _id, ...rest } = raw;
  return { id: _id, ...rest };
}
