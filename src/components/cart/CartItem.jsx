import { useState } from "react";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";

import { decQuantity, deleteItem, incQuantity } from "./cartSlice";

import Icon from "../common/Icon";
import QuantitySelector from "../ui/inputs/QuantitySelector";
import ColorSelector from "../ui/inputs/ColorSelector";

function CartItem({ item }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cartItem = useSelector((state) =>
    state.cart.cart.find((cartItem) => cartItem.id === item.id),
  );
  const maxQuantity = cartItem?.maxQuantity || 0;

  const [deleteIsHovered, setDeleteIsHovered] = useState(false);

  const optimizedImage = item.image.replace(
    "/upload/",
    "/upload/w_150,f_auto,q_auto/",
  );

  function handleIncQuantity() {
    if (item.quantity >= maxQuantity)
      return toast.error("Sorry! No more items available in this size.");

    dispatch(incQuantity(item));
  }

  return (
    <div
      className={`relative grid grid-cols-[auto_3fr_1fr_auto] gap-3 rounded-md bg-pearl/60 pr-1 text-offblack shadow-sm shadow-offblack backdrop-blur-md duration-300 ease-out will-change-[scale] sm:grid-cols-[auto_2fr_1fr_auto] ${deleteIsHovered ? "scale-[1.005]" : ""}`}
    >
      {deleteIsHovered && (
        <div className="z-100 absolute h-full w-full bg-ember/30"></div>
      )}

      {/* Image */}
      <div className="flex h-full max-h-[7em] min-h-[7em] min-w-[7em] max-w-[7em] rounded-l-md">
        <img
          src={optimizedImage}
          alt=""
          className="cursor-pointer rounded rounded-r-none object-cover"
        />
      </div>

      {/* Product Name */}
      <div className="flex min-w-[4em] flex-col justify-center text-left font-bebas">
        <h2
          className="w-fit cursor-pointer text-xl transition-all duration-200 ease-out hover:bg-zest/70 sm:text-2xl lg:text-3xl"
          onClick={() => navigate(`/products/${item.id}`)}
        >
          {item.name}
        </h2>

        {/* Product Price */}
        <p className="text-md pl-1 text-grey-600 sm:text-xl lg:text-2xl">
          ${item.price}
        </p>
      </div>

      {/* Actions */}
      <div className="mr-4 flex h-full flex-col justify-center gap-2 py-2 font-bebas text-offblack">
        {/* Size & Color*/}
        <div className="flex gap-2">
          <div className="text-md flex w-full cursor-pointer place-content-center rounded-xl bg-zest/80 p-1 tracking-wide md:text-xl">
            {item.size}
          </div>

          <ColorSelector
            colors={[item.color]}
            height="h-full"
            className="rounded-xl hover:scale-100"
            disabled={true}
          />
        </div>

        {/* Quantity */}
        <QuantitySelector
          quantity={item.quantity}
          text="Quantity:"
          className="w-full rounded-xl bg-mint/80 px-3 py-1 tracking-wide"
          increase={handleIncQuantity}
          decrease={() => dispatch(decQuantity(item))}
        />
      </div>

      <Icon
        name="close"
        al="Close button"
        className="h-fit origin-center cursor-pointer rounded duration-300 ease-out will-change-[scale,color] hover:scale-[1.2] hover:text-ember"
        onMouseEnter={() => setDeleteIsHovered(true)}
        onMouseLeave={() => setDeleteIsHovered(false)}
        onClick={() => dispatch(deleteItem(item))}
      />
    </div>
  );
}

export default CartItem;
