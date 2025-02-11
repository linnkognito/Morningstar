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
    addItem(state, action) {
      const product = action.payload;
      const existingItem = findItem(state, product);

      existingItem
        ? (existingItem.quantity += 1)
        : state.cart.push({ ...product });

      state.price += product.price;
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

      if (item.quantity === item.maxQuantity)
        return alert("No more items available in this size");

      item.quantity++;
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
