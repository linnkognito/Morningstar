import { useMemo } from "react";

export function useAvailableColors(products) {
  return useMemo(() => {
    const colorSet = new Set();

    products.forEach((product) => {
      product.colors.forEach((color) => colorSet.add(color));
    });

    return Array.from(colorSet);
  }, [products]);
}
