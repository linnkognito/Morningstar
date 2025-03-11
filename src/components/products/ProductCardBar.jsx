import { useDispatch } from "react-redux";
import { clearSelections } from "./productSlice";

import ProductCardMenuButton from "./ProductCardMenuButton";
import { forwardRef } from "react";

const ProductCardBar = forwardRef(({ id, product, isOpen, setMenu }, ref) => {
  const dispatch = useDispatch();

  function handleMenuToggle() {
    isOpen ? setMenu(null) : setMenu(id);
    dispatch(clearSelections());
  }

  return (
    <div
      ref={ref}
      className="relative flex min-h-[84px] w-full flex-1 items-center justify-between overflow-hidden rounded-b bg-aura/80 pl-2"
    >
      <div className="flex h-full flex-col pt-2">
        <h2
          className="font-bebas text-xl tracking-widest hover:bg-zest/70 xl:text-[1.35rem]"
          onClick={() => navigator(`/products/${id}`)}
        >
          {product.name}
        </h2>
        <h3 className="font-bebas text-lg tracking-widest">${product.price}</h3>
      </div>

      {/* Open menu button */}
      <ProductCardMenuButton
        id={id}
        isOpen={isOpen}
        onClick={(e) => {
          e.stopPropagation();
          handleMenuToggle();
        }}
      />
    </div>
  );
});

export default ProductCardBar;
