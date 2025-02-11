import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./components/cart/cartSlice";
import productReducer from "./components/products/productSlice";
import userReducer from "./components/user/userSlice";

const store = configureStore({
  reducer: {
    cart: cartReducer,
    products: productReducer,
    user: userReducer,
  },
});

export default store;
