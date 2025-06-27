export function findItem(cartArray, product) {
  return (
    cartArray.find(
      (item) =>
        item.id === product.id &&
        item.color === product.color &&
        item.size === product.size
    ) || null
  );
}
