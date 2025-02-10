import { configureStore } from "@reduxjs/toolkit";

import cartReducer from "./components/cart/cartSlice";
import productReducer from "./components/products/productSlice";
import persistReducer from "redux-persist/es/persistReducer";
import persistStore from "redux-persist/es/persistStore";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["products"],
};

const store = configureStore({
  reducer: {
    cart: cartReducer,
    products: persistReducer(persistConfig, productReducer),
  },
});

export const persistor = persistStore(store);

export default store;
