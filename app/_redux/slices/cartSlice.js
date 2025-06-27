import { createSlice } from '@reduxjs/toolkit';
import { findItem } from '@/app/_utils/findCartItem';

const initialState = {
  cartItems: [],
  price: 0,
  discount: 0,
  totalPrice: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem(state, action) {
      const newCartItem = action.payload;
      const existingItem = findItem(state.cartItems, newCartItem);
      const { productData } = newCartItem;

      const sizeData = productData.sizes.find(
        (sz) => sz.size === newCartItem.size
      );
      if (!sizeData || sizeData.quantity === 0) return;

      if (existingItem) {
        if (existingItem.maxQuantity === 0) return;
        existingItem.quantity += 1;
        existingItem.maxQuantity -= 1;
      } else {
        const maxQuantity = sizeData.quantity - newCartItem.quantity;
        state.cartItems.push({ ...newCartItem, maxQuantity });
      }

      state.price += newCartItem.price;
      state.totalPrice = state.price - state.discount;
    },
    deleteItem(state, action) {
      const itemToDelete = findItem(state.cartItems, action.payload);
      if (!itemToDelete) return;

      state.cartItems = state.cartItems.filter((item) => item !== itemToDelete);

      state.price = state.cartItems.reduce(
        (sum, item) => sum + item.quantity * item.price,
        0
      );
      state.totalPrice = state.price - state.discount;
    },
    incQuantity(state, action) {
      const item = findItem(state.cartItems, action.payload);
      if (!item || item.maxQuantity === 0) return;

      item.quantity++;
      item.maxQuantity--;
      state.price += item.price;
      state.totalPrice = state.price - state.discount;
    },
    decQuantity(state, action) {
      const item = findItem(state.cartItems, action.payload);
      if (!item) return;

      item.quantity--;
      item.maxQuantity++;
      state.price -= item.price;
      state.totalPrice = state.price - state.discount;

      if (item.quantity === 0) cartSlice.caseReducers.deleteItem(state, action);
    },
    clearCart(state) {
      state.cartItems = [];
    },
  },
});

export const getCartItems = (state) => state.cart.cartItems;
export const getCartItemById = (id) => (state) =>
  state.cart.cartItems.find((item) => item.id === id);
export const getTotalPrice = (state) => state.cart.totalPrice;

export const { addItem, deleteItem, incQuantity, decQuantity, clearCart } =
  cartSlice.actions;

export default cartSlice.reducer;
