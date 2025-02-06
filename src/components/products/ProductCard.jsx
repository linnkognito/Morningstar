import { useRef, useState } from "react";

import SizeSelector from "../ui/inputs/SizeSelector";
import ColorSelector from "../ui/inputs/ColorSelector";
import ActionButton from "../ui/buttons/ActionButton";
import Icon from "../common/Icon";
import RefineDropdown from "./menus/RefineDropdown";

const testColors = ["bg-aura", "bg-ember", "bg-zest"];

function ProductCard({ product }) {
  const productBar = useRef(null);
  const [showMenu, setShowMenu] = useState(false);
  const [saveButtonHover, setSaveButtonHover] = useState(false);

  const optimizedImage = product.image.replace(
    "/upload/",
    "/upload/h_280,f_auto,q_auto/",
  );

  return (
    <div className="relative flex min-h-[200px] max-w-[250px] flex-col rounded bg-pearl">
      {/* Heart (save product) */}
      <Icon
        name={saveButtonHover ? "heart_plus" : "favorite"}
        onMouseEnter={() => setSaveButtonHover(true)}
        onMouseLeave={() => setSaveButtonHover(false)}
        className="border-red absolute right-0 cursor-pointer pr-1 pt-0.5 text-aura"
      />

      {/* Image will be inserted as a background */}
      <img
        src={optimizedImage}
        alt={product.alt || product.name}
        className="h-[280px] rounded-t object-cover object-center"
      />

      {/* Product bar */}
      <div
        ref={productBar}
        className="flex w-full grow items-center justify-between overflow-hidden rounded-b bg-aura pl-2"
      >
        <div className="flex h-full flex-col pt-2">
          <h2 className="font-bebas text-xl tracking-widest xl:text-[1.35rem]">
            {product.name}
          </h2>
          <h3 className="font-bebas text-lg tracking-widest">
            ${product.price}
          </h3>
        </div>
        <button
          className="font-base flex h-full w-[50px] min-w-[50px] items-center justify-center font-bebas text-6xl transition-transform duration-300 ease-out will-change-transform hover:scale-110 hover:bg-pearl/50"
          onClick={() => setShowMenu((show) => !show)}
        >
          <span>{showMenu ? "-" : "+"}</span>
        </button>
      </div>

      {/* Size/Color selection menu */}
      {showMenu && (
        <div
          className="absolute flex w-full flex-col"
          style={{ bottom: `${productBar.current.offsetHeight}px` }}
        >
          <RefineDropdown className="rounded-b-none">
            <SizeSelector />
            <ColorSelector colors={testColors} height="h-[1.5em]" />
            <ActionButton className="gap-2 pt-0" fontSize="text-xl">
              <Icon name="shopping_basket" />
              Add to cart
            </ActionButton>
          </RefineDropdown>
        </div>
      )}
    </div>
  );
}

export default ProductCard;
