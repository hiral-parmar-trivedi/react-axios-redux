import {
  SAVE_PRODUCT_DATA,
  SAVE_PRODUCT_DETAIL,
} from "../actions/productActions";

const initialState = {
  products: [],
  productDetail: null,
};

export const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case SAVE_PRODUCT_DATA:
      return { products: action.payload };

    case SAVE_PRODUCT_DETAIL:
      return { productDetail: action.payload };

    default:
      return state;
  }
};
