import { getProductDetail, getProductList } from "../../api/productApi";
import { setLoader } from "./actions";

export const SAVE_PRODUCT_DATA = "SAVE_PRODUCT_DATA";
export const SAVE_PRODUCT_DETAIL = "SAVE_PRODUCT_DETAIL";

export const saveProductData = (products) => {
  return {
    type: SAVE_PRODUCT_DATA,
    payload: products,
  };
};

export const saveProductDetail = (product) => {
  return {
    type: SAVE_PRODUCT_DETAIL,
    payload: product,
  };
};

export const fetchProductList = () => {
  return async (dispatch) => {
    try {
      dispatch(setLoader(true));
      const productResponse = await getProductList();
      console.log("productResponse", productResponse);
      if (productResponse.success) {
        dispatch(saveProductData(productResponse.data.products));
      } else {
        dispatch(saveProductData([]));
      }
      dispatch(setLoader(false));
    } catch (error) {
      console.log("fetchProducts error", error);
      dispatch(saveProductData([]));
      dispatch(setLoader(false));
    }
  };
};

export const fetchProductDetail = (productId) => {
  return async (dispatch) => {
    try {
      const productDetailResponse = await getProductDetail(productId);
      if (productDetailResponse.success) {
        dispatch(saveProductDetail(productDetailResponse.data));
      }
    } catch (error) {
      console.log("fetchProductDetail error", error);
      dispatch(saveProductDetail(null));
    }
  };
};
