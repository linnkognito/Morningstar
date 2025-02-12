import { useRef, useState } from "react";
import { useNavigate } from "react-router";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useDispatch } from "react-redux";
import { clearSelections } from "./productSlice";

import RefineDropdown from "./menus/RefineDropdown";
import SizeSelector from "../ui/inputs/SizeSelector";
import ColorSelector from "../ui/inputs/ColorSelector";
import Icon from "../common/Icon";
import AddToCartButton from "../cart/AddToCartButton";
import HeartButton from "./HeartButton";
import { set } from "@cloudinary/url-gen/actions/variable";

function ProductCard({ product, setProductCardMenu, currentMenu }) {
  const { _id: id, sizes, colors } = product;
  const dispatch = useDispatch();
  const navigator = useNavigate();
  const productBar = useRef(null);

  const [heartButtonHover, setHeartButtonHover] = useState(false);
  const [savedProduct, setSavedProduct] = useState(false);
  const optimizedImage = product.image.replace(
    "/upload/",
    "/upload/h_380,f_auto,q_auto/",
  );

  function handleMenuToggle(id) {
    currentMenu === id ? setProductCardMenu(null) : setProductCardMenu(id);
    dispatch(clearSelections());
  }

  return (
    <div className="relative flex h-full min-h-[200px] w-full max-w-[285px] cursor-pointer flex-col justify-self-center rounded bg-pearl shadow-sm shadow-offblack">
      {/* Heart (save product) */}
      <HeartButton
        savedProduct={savedProduct}
        setSavedProduct={setSavedProduct}
        heartButtonHover={heartButtonHover}
        setHeartButtonHover={setHeartButtonHover}
      />

      {/* Image */}
      <LazyLoadImage
        src={optimizedImage}
        alt={product.alt || product.name}
        effect="opacity"
        wrapperProps={{ style: { transitionDelay: "1.5s" } }}
        className="h-[280px] w-full rounded-t object-cover object-center"
        onClick={() => navigator(`/products/${id}`)}
      />

      {/* Product bar */}
      <div
        ref={productBar}
        className="flex w-full grow items-center justify-between overflow-hidden rounded-b bg-aura/80 pl-2"
      >
        <div className="flex h-full flex-col pt-2">
          <h2
            className="font-bebas text-xl tracking-widest hover:bg-zest/70 xl:text-[1.35rem]"
            onClick={() => navigator(`/products/${id}`)}
          >
            {product.name}
          </h2>
          <h3 className="font-bebas text-lg tracking-widest">
            ${product.price}
          </h3>
        </div>
        <button
          className="font-base flex h-full w-[50px] min-w-[50px] items-center justify-center font-bebas text-6xl transition-transform duration-300 ease-out will-change-transform hover:scale-110 hover:bg-pearl/50"
          onClick={() => handleMenuToggle(id)}
        >
          <span>{currentMenu === id ? "-" : "+"}</span>
        </button>
      </div>

      {/* Selection menu */}
      {currentMenu === id && (
        <div
          className="absolute flex w-full flex-col"
          style={{ bottom: `${productBar.current.offsetHeight}px` }}
        >
          <RefineDropdown className="rounded-b-none">
            <SizeSelector sizes={sizes} />
            <ColorSelector colors={colors} height="h-[1.5em]" />
            <AddToCartButton product={product} bgColor="bg-zest/70" />
          </RefineDropdown>
        </div>
      )}
    </div>
  );
}

export default ProductCard;
