export function applyProductFilters(products, filters) {
  const { sizes: filterSizes, maxPrice, colors: filterColors } = filters;

  return products
    .filter((product) =>
      filterSizes.length
        ? product.sizes.some(
            (size) => filterSizes.includes(size.size) && size.quantity > 0,
          )
        : true,
    )
    .filter((product) =>
      filterColors.length ? filterColors.includes(product.color) : true,
    )
    .filter((product) => product.price <= maxPrice);
}
