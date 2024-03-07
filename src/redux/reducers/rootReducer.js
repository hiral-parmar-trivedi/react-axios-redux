import { combineReducers } from "redux";
import cartReducer from "./cartReducer";
import { productReducer } from "./productReducer";
import { appReducer } from "./appReducer";

export const rootReducer = combineReducers({
  app: appReducer,
  cartItems: cartReducer,
  products: productReducer,
});
