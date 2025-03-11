import { useRef, useState } from "react";
import { useNavigate } from "react-router";
import { useSaveItem } from "../../utils/useSaveItem";
import { useResizeObserver } from "../../hooks/useResizeObserver";
import { useClickOutside } from "../../hooks/useClickOutside";

import { LazyLoadImage } from "react-lazy-load-image-component";

import HeartButton from "./HeartButton";
import ProductCardBar from "./ProductCardBar";
import ProductCardMenu from "./menus/ProductCardMenu";

function ProductCard({ product, setProductCardMenu, currentMenu }) {
  const { _id: id } = product;
  const { isSavedItem, toggleSave } = useSaveItem(id, product);

  const navigator = useNavigate();

  const menuIsOpen = currentMenu === id;

  const productBar = useRef(null);
  const productBarHeight = useResizeObserver(productBar);

  const ref = useRef();
  useClickOutside(ref, () => setProductCardMenu(false));

  const [heartButtonHover, setHeartButtonHover] = useState(false);

  const optimizedImage = product.image.replace(
    "/upload/",
    "/upload/h_380,f_auto,q_auto/",
  );

  return (
    <div className="relative flex h-full min-h-[200px] w-full max-w-[285px] cursor-pointer flex-col justify-self-center rounded bg-pearl shadow-sm shadow-offblack">
      {/* Add to wishlist */}
      <HeartButton
        isSaved={isSavedItem}
        heartButtonHover={heartButtonHover}
        setHeartButtonHover={setHeartButtonHover}
        onClick={toggleSave}
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
      <ProductCardBar
        ref={productBar}
        id={id}
        product={product}
        isOpen={menuIsOpen}
        setMenu={setProductCardMenu}
      />

      {/* Selection menu */}
      {menuIsOpen && (
        <ProductCardMenu
          ref={ref}
          product={product}
          productBarHeight={productBarHeight}
        />
      )}
    </div>
  );
}

export default ProductCard;
