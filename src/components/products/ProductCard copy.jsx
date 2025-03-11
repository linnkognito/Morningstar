import { useRef, useState } from "react";
import { useNavigate } from "react-router";
import { LazyLoadImage } from "react-lazy-load-image-component";
// import { useDispatch } from "react-redux";
// import { clearSelections } from "./productSlice";

import RefineDropdown from "./menus/RefineDropdown";
import SizeSelector from "../ui/inputs/SizeSelector";
import ColorSelector from "../ui/inputs/ColorSelector";
import AddToCartButton from "../cart/AddToCartButton";
import HeartButton from "./HeartButton";
import { useSaveItem } from "../../utils/useSaveItem";
// import ProductCardMenuButton from "./ProductCardMenuButton";
import { useResizeObserver } from "../../hooks/useResizeObserver";
import { useClickOutside } from "../../hooks/useClickOutside";
import ProductCardBar from "./ProductCardBar";

function ProductCard({ product, setProductCardMenu, currentMenu }) {
  const { _id: id, sizes, colors } = product;
  const { isSavedItem, toggleSave } = useSaveItem(id, product);

  // const dispatch = useDispatch();
  const navigator = useNavigate();

  const menuIsOpen = currentMenu === id;

  const ref = useRef();
  useClickOutside(ref, () => setProductCardMenu(false));

  const [heartButtonHover, setHeartButtonHover] = useState(false);

  const optimizedImage = product.image.replace(
    "/upload/",
    "/upload/h_380,f_auto,q_auto/",
  );

  const productBar = useRef(null);
  const productBarHeight = useResizeObserver(productBar);

  // function handleMenuToggle(id) {
  //   menuIsOpen ? setProductCardMenu(null) : setProductCardMenu(id);
  //   dispatch(clearSelections());
  // }

  return (
    <div className="relative flex h-full min-h-[200px] w-full max-w-[285px] cursor-pointer flex-col justify-self-center rounded bg-pearl shadow-sm shadow-offblack">
      {/* Heart icon (save product) */}
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
      {/* <div
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
        </div>*/}

      {/* Open menu button */}
      {/*<ProductCardMenuButton
          id={id}
          isOpen={currentMenu === id}
          onClick={(e) => {
            e.stopPropagation();
            handleMenuToggle(id);
          }}
        />
      </div> */}

      {/* Selection menu */}
      {currentMenu === id && (
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
      )}
    </div>
  );
}

export default ProductCard;
