import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
  price: 0,
  discount: 0,
  totalPrice: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action) {
      state.cart.push(action.payload);
    },

    deleteItem(state, action) {
      state.cart = state.cart.filter((item) => item.id !== action.payload);
    },

    incQuantity(state, action) {
      const item = state.cart.find((item) => item.id === action.payload);

      item.quantity++;
    },

    decQuantity(state, action) {
      const item = state.cart.find((item) => item.id === action.payload);

      item.quantity--;

      if (item.quantity === 0) cartSlice.caseReducers.deleteItem(state, action);
    },

    clearCart(state) {
      state.cart = [];
    },
  },
});

export const getCartItems = (state) => state.cart.cart;
export const getCartItemById = (id) => (state) =>
  state.cart.cart.find((item) => item.id === id);

export const { addItem, deleteItem, incQuantity, decQuantity, clearCart } =
  cartSlice.actions;

export default cartSlice.reducer;
