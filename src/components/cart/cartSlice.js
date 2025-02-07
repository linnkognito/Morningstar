import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
  price: 0,
  discount: 0,
  totalPrice: 0,
};

function isInCart(cart, product) {
  return cart.find(
    (item) =>
      item.id === product.id &&
      item.color === product.color &&
      item.size === product.size,
  );
}

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action) {
      const existingItem = isInCart(state.cart, action.payload);

      !existingItem
        ? state.cart.push(action.payload)
        : (existingItem.quantity += 1);

      state.price += action.payload.price;
      state.totalPrice = state.price - state.discount;
    },

    deleteItem(state, action) {
      state.cart = state.cart.filter((item) => item.id !== action.payload);
    },

    incQuantity(state, action) {
      const item = state.cart.find((item) => item.id === action.payload);

      item.quantity++;
      state.price += item.price;
      state.totalPrice = state.price - state.discount;
    },

    decQuantity(state, action) {
      const item = state.cart.find((item) => item.id === action.payload);

      item.quantity--;
      state.price -= item.price;
      state.totalPrice = state.price - state.discount;

      if (item.quantity === 0) cartSlice.caseReducers.deleteItem(state, action);
    },

    clearCart(state) {
      state.cart = [];
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
