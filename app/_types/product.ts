export type RawProduct = {
  _id: string;
  name: string;
  price: number;
  category: string;
  type: string;
  sizes: { size: string; quantity: number }[];
  colors: string[];
  image: string;
  productDetails: string[];
  careInstructions: string[];
};

export type Product = Omit<RawProduct, '_id'> & {
  id: string;
};
