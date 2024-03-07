import { ADD_TO_CART, REMOVE_FROM_CART, SUBMIT_ORDER } from "../actions/actions";

const initialState = {

}

const cartReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return [...state, action.payload];
    case REMOVE_FROM_CART:
      const filteredProducts = [...state].filter(
        (product) => product.id !== action.payload
      );
      return filteredProducts;
    case SUBMIT_ORDER:
      return [];
    default:
      return state;
  }
};

export default cartReducer;
