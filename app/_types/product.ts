export type Product = {
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
