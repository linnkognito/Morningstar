import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";
import { addItem } from "../../cart/cartSlice";

import Icon from "../../common/Icon";
import ActionButton from "../../ui/buttons/ActionButton";
import { clearSelections } from "../productSlice";

function AddToCartButton({ product }) {
  const { name, image, price, _id: id } = product;
  const { size, color, quantity } = useSelector(
    (state) => state.products.selections,
  );

  const dispatch = useDispatch();

  function addToCart() {
    if (!size.length || !color.length)
      return toast.error("Please select a size & color before adding to cart.");

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

    if (!sizeData || sizeData.quantity === 0)
      return toast.error("Sorry! No more items available in this size.");

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
