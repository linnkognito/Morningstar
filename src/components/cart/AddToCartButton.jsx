import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";

import { addItem } from "./cartSlice";
import { clearSelections } from "../products/productSlice";

import Icon from "../common/Icon";
import ActionButton from "../ui/buttons/ActionButton";

function AddToCartButton({ product, width = "w-[90%]", bgColor = "bg-pearl" }) {
  const { name, image, price, _id: id } = product;
  const { size, color, quantity } = useSelector(
    (state) => state.products.selections,
  );
  const cartItem = useSelector((state) =>
    state.cart.cart.find((cartItem) => cartItem.id === id),
  );

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const maxQuantity = cartItem?.maxQuantity;

  function addToCart() {
    if (!size.length || !color.length)
      return toast.error("Please select a size & color before adding to cart.");

    if (quantity >= maxQuantity)
      return toast.error("Sorry! No more items available in this size.");

    const newCartItem = {
      id: id,
      name: name,
      image: image,
      price: price,
      size: size[0],
      color: color[0],
      quantity: quantity || 1,
      productData: product,
    };

    const sizeData = product.sizes.find((sz) => sz.size === newCartItem.size);

    if (sizeData.quantity === 0)
      return toast.error("Sorry! No more items available in this size.");

    dispatch(addItem(newCartItem));
    dispatch(clearSelections());

    toast.success((t) => (
      <button
        onClick={() => {
          toast.dismiss(t.id);
          navigate("/cart");
        }}
      >
        {name} added to cart!
      </button>
    ));
  }

  return (
    <ActionButton
      width={width}
      color={bgColor}
      className="gap-2 pt-0"
      fontSize="text-xl"
      onClick={addToCart}
    >
      <Icon name="shopping_basket" />
      Add to cart
    </ActionButton>
  );
}

export default AddToCartButton;
