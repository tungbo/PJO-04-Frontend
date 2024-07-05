import { combineReducers, configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import {
  persistReducer,
  persistStore,
  FLUSH,
  REHYDRATE,
  REGISTER,
  PERSIST,
  PURGE,
} from "redux-persist";
import UserReducer from "./UserReducer";
import ProductDetailReducer from "./ProductDetailReducer";
import UserDetailReducer from "./UserDetailReducer";
import PizzaDetailReducer from "./PizzaDetailReducer";
import SizeDetailReducer from "./SizeDetailReducer";

const rootReducer = combineReducers({
  AuthReducer: UserReducer.reducer,
  ProductDetailReducer: ProductDetailReducer.reducer,
  UserDetailReducer: UserDetailReducer.reducer,
  PizzaDetailReducer: PizzaDetailReducer.reducer,
  SizeDetailReducer: SizeDetailReducer.reducer,
});

const persistConfig = {
  key: "root",
  storage,
  whitelist: [
    "AuthReducer",
    "ProductDetailReducer",
    "UserDetailReducer",
    "PizzaDetailReducer",
    "SizeDetailReducer",
  ],
};
const persistedReducer = persistReducer(persistConfig, rootReducer);
export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, REGISTER, PERSIST, PURGE],
      },
    }),
});
export let persistor = persistStore(store);
