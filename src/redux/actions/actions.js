import { toast } from "react-toastify"

export const APP_LOADER = "APP_LOADER";
export const ADD_TO_CART = "ADD_TO_CART";
export const REMOVE_FROM_CART = "REMOVE_FROM_CART";
export const SUBMIT_ORDER = "SUBMIT_ORDER";

export const setLoader = (loader) => {
  return {
    type: APP_LOADER,
    loader: loader,
  };
};

export const addToCart = (product) => {
  toast.success("Product added to cart")
  return {
    type: ADD_TO_CART,
    payload: product,
  };
};

export const removeFromCart = (productId) => {
  toast.info("Product removed from cart")
  return {
    type: REMOVE_FROM_CART,
    payload: productId,
  };
};

export const submitOrder = (cartItems) => {
  // Make an API call to submit the order here and pass cartItems as API payload -> Hint: You may use redux-thunk/ redux-saga to handle this efficiently
  // Once API returns success, show the toast and trigger the redux action to clear the cart
  toast.success("Order submitted successfully")
  return {
    type: SUBMIT_ORDER
  };
};