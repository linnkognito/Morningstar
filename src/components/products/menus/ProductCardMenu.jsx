import { forwardRef } from "react";
import AddToCartButton from "../../cart/AddToCartButton";
import ColorSelector from "../../ui/inputs/ColorSelector";
import SizeSelector from "../../ui/inputs/SizeSelector";
import RefineDropdown from "./RefineDropdown";

const ProductCardMenu = forwardRef(({ product, productBarHeight }, ref) => {
  const { sizes, colors } = product;

  return (
    <div
      ref={ref}
      className="absolute flex w-full flex-col"
      style={{ bottom: `${productBarHeight}px` }}
    >
      <RefineDropdown className="rounded-b-none">
        <SizeSelector sizes={sizes} />
        <ColorSelector colors={colors} height="h-[1.5em]" />
        <AddToCartButton product={product} bgColor="bg-zest/70" />
      </RefineDropdown>
    </div>
  );
});

export default ProductCardMenu;
