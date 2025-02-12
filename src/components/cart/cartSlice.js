import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: JSON.parse(localStorage.getItem("cart")) || [],
  price: 0,
  discount: 0,
  totalPrice: 0,
};

function updateLocalStorage(state, method, timestamp = false) {
  if (method === "set") {
    localStorage.setItem("cart", JSON.stringify(state.cart));
    if (timestamp) localStorage.setItem("cartTimestamp", Date.now());
  }

  if (method === "remove") {
    localStorage.removeItem("cart");
    if (timestamp) localStorage.removeItem("cartTimestamp");
  }
}
function findItem(state, product) {
  return (
    state.cart.find(
      (item) =>
        item.id === product.id &&
        item.color === product.color &&
        item.size === product.size,
    ) || null
  );
}

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    // Accepts: newCartItem object
    addItem(state, action) {
      const newCartItem = action.payload;
      const existingItem = findItem(state, newCartItem);

      const { productData } = newCartItem;
      const sizeData = productData.sizes.find(
        (sz) => sz.size === newCartItem.size,
      );

      if (!sizeData || sizeData.quantity === 0) return; // No stock

      if (existingItem) {
        if (existingItem.maxQuantity === 0) return;

        existingItem.quantity += 1;
        existingItem.maxQuantity -= 1;
      } else {
        const maxQuantity = sizeData.quantity - newCartItem.quantity;
        state.cart.push({ ...newCartItem, maxQuantity });
      }

      // Update price
      state.price += newCartItem.price;
      state.totalPrice = state.price - state.discount;

      updateLocalStorage(state, "set", true);
    },
    deleteItem(state, action) {
      const itemToDelete = findItem(state, action.payload);

      state.cart = state.cart.filter((item) => item !== itemToDelete);
      updateLocalStorage(state, "set");
    },
    incQuantity(state, action) {
      const item = findItem(state, action.payload);

      if (!item || item.maxQuantity === 0) return;

      item.quantity++;
      item.maxQuantity--;
      state.price += item.price;
      state.totalPrice = state.price - state.discount;

      updateLocalStorage(state, "set");
    },
    decQuantity(state, action) {
      const item = findItem(state, action.payload);

      item.quantity--;
      state.price -= item.price;
      state.totalPrice = state.price - state.discount;

      if (item.quantity === 0) cartSlice.caseReducers.deleteItem(state, action);

      updateLocalStorage(state, "set");
    },
    clearCart(state) {
      state.cart = [];

      updateLocalStorage(state, "remove", true);
    },
  },
});

export const getCartItems = (state) => state.cart.cart;
export const getCartItemById = (id) => (state) => {
  state.cart.cart.find((item) => item.id === id);
};
export const getTotalPrice = (state) => state.cart.totalPrice;

export const { addItem, deleteItem, incQuantity, decQuantity, clearCart } =
  cartSlice.actions;

export default cartSlice.reducer;
