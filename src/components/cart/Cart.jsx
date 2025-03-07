import { useNavigate } from "react-router";
import { useSelector } from "react-redux";

import { getCartItems, getTotalPrice } from "./cartSlice";

import CartItem from "./CartItem";
import Icon from "../common/Icon";
import ActionButton from "../ui/buttons/ActionButton";
import Container from "../common/Container";
import WrapperScreenGradient from "../ui/containers/WrapperScreenGradient";

function Cart() {
  const navigate = useNavigate();
  const cart = useSelector(getCartItems);
  const totalPrice = useSelector(getTotalPrice);

  return (
    <WrapperScreenGradient>
      {/* Product list */}
      <div className="mx-auto mt-4 grid grid-cols-1 gap-6 rounded-md bg-pearl/60 p-6 shadow-sm shadow-offblack backdrop-blur-md md:grid-cols-[2fr_1fr]">
        <p className="w-full font-bebas text-xl tracking-wider md:col-span-2">
          {cart.length} items
        </p>

        {/* Cart items */}
        <Container width="w-full" className="flex flex-col gap-3 px-4 py-4">
          {cart.length ? (
            cart.map((item) => <CartItem key={item.id} item={item} />)
          ) : (
            <div className="rounded-xl p-4 text-center">
              <h2 className="text-2xl text-offblack">Your cart is empty.</h2>
              <Icon
                name="sentiment_dissatisfied"
                className="text-3xl text-aura"
              />
            </div>
          )}
          <ActionButton
            color="bg-sea"
            width="w-[90%]"
            onClick={() => navigate(-1)}
          >
            <Icon name="arrow_back" />
            {cart.length > 0 ? "Continue shopping" : "Go back"}
          </ActionButton>
        </Container>

        {/* Checkout */}
        <div
          className={`flex h-full flex-col gap-1 ${cart.length === 0 ? "opacity-50" : "opacity-100"}`}
        >
          <div className="flex flex-col justify-between rounded bg-aura/15 p-4 shadow-sm shadow-offblack backdrop-blur-md">
            {/* Promo code */}
            <div className="flex h-fit w-full flex-col">
              <label
                htmlFor=""
                className="h-8 pl-1 pt-1 font-bebas text-xl tracking-wide"
              >
                Promo code:
              </label>
              <input
                type="text"
                placeholder="123PROMO"
                disabled={!cart.length}
                className="h-7 max-w-[400px] rounded-md px-2 font-primary text-base tracking-wide shadow-sm shadow-offblack"
              />
            </div>

            {/* Total */}
            <h2 className="mt-4 pl-1 font-bebas text-4xl">
              Total: ${totalPrice}
            </h2>
          </div>

          <ActionButton
            color="bg-aura/80"
            width="w-full"
            className="place-self-end"
            disabled={!cart.length}
          >
            Go to checkout
          </ActionButton>
        </div>
      </div>
    </WrapperScreenGradient>
  );
}

export default Cart;
