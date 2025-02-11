import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";
import { addItem } from "../../cart/cartSlice";

import Icon from "../../common/Icon";
import ActionButton from "../../ui/buttons/ActionButton";
import { clearSelections } from "../productSlice";

function AddToCartButton({ product }) {
  const { name, image, price, _id: id } = product;
  const { size, color } = useSelector((state) => state.products.selections);

  const dispatch = useDispatch();

  function addToCart() {
    if (!size.length || !color.length)
      return toast.error("Please select a size & color before adding to cart.");

    const newCartItem = {
      id: id,
      name: name,
      image: image,
      price: price,
      size: size,
      color: color,
      quantity: 1,
    };

    dispatch(addItem(newCartItem));
    dispatch(clearSelections());

    toast.success(`${name} added to cart!`);
  }
  return (
    <ActionButton className="gap-2 pt-0" fontSize="text-xl" onClick={addToCart}>
      <Icon name="shopping_basket" />
      Add to cart
    </ActionButton>
  );
}

export default AddToCartButton;
