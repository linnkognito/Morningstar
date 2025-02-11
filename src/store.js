import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./components/cart/cartSlice";
import productReducer from "./components/products/productSlice";

const store = configureStore({
  reducer: {
    cart: cartReducer,
    products: productReducer,
  },
});

export default store;
