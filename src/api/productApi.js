import { WEBAPI_ENDPOINT } from "../config";
import { RequestBuilder } from "./requestBuilder";

export const getProductList = async () => {
  return RequestBuilder(`${WEBAPI_ENDPOINT}products`, "get", null, true);
};

export const getProductDetail = async (productId) => {
  return RequestBuilder(
    `${WEBAPI_ENDPOINT}products/${productId}`,
    "get",
    null,
    true
  );
};

export const addProduct = async (params) => {
  return RequestBuilder(`${WEBAPI_ENDPOINT}products/add`, "post", params, true);
};
