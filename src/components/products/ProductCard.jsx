import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useDispatch } from "react-redux";
import { clearSelections } from "./productSlice";
// import toast from "react-hot-toast";
// import {
//   addToSavedItems,
//   getSavedItems,
//   removeFromSavedItems,
// } from "../user/userSlice";

import RefineDropdown from "./menus/RefineDropdown";
import SizeSelector from "../ui/inputs/SizeSelector";
import ColorSelector from "../ui/inputs/ColorSelector";
import AddToCartButton from "../cart/AddToCartButton";
import HeartButton from "./HeartButton";
import { useSaveItem } from "../../utils/useSaveItem";

function ProductCard({ product, setProductCardMenu, currentMenu }) {
  const { _id: id, sizes, colors } = product;
  const { isSavedItem, toggleSave } = useSaveItem(id, product);

  const dispatch = useDispatch();
  const navigator = useNavigate();

  const [heartButtonHover, setHeartButtonHover] = useState(false);

  const optimizedImage = product.image.replace(
    "/upload/",
    "/upload/h_380,f_auto,q_auto/",
  );

  const productBar = useRef(null);
  const [productBarHeight, setProductBarHeight] = useState(0);

  useEffect(() => {
    if (!productBar.current) return;

    const observer = new ResizeObserver(() => {
      if (productBar.current)
        setProductBarHeight(productBar.current.offsetHeight);
    });

    observer.observe(productBar.current);

    return () => observer.disconnect();
  }, []);

  function handleMenuToggle(id) {
    currentMenu === id ? setProductCardMenu(null) : setProductCardMenu(id);
    dispatch(clearSelections());
  }

  return (
    <div className="relative flex h-full min-h-[200px] w-full max-w-[285px] cursor-pointer flex-col justify-self-center rounded bg-pearl shadow-sm shadow-offblack">
      {/* Heart (save product) */}
      <HeartButton
        isSaved={isSavedItem}
        heartButtonHover={heartButtonHover}
        setHeartButtonHover={setHeartButtonHover}
        onClick={toggleSave}
        // onClick={handleSaveItem}
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
        className="relative flex min-h-[84px] w-full flex-1 items-center justify-between overflow-hidden rounded-b bg-aura/80 pl-2"
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
          style={{ bottom: `${productBarHeight}px` }}
          // style={{ bottom: `${productBar.current.offsetHeight}px` }}
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
