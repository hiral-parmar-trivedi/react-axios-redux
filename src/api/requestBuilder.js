import axios from "axios";
import { WEBAPI_ENDPOINT } from "../config";
import { toast } from "react-toastify"

export const getHeaders = () => {
  return {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    // "authorization": "bearer+ ....."
  };
};

const axiosInstance = axios.create({
  baseURL: WEBAPI_ENDPOINT,
  timeout: 1000000,
  timeoutErrorMessage: "Server timeout",
  headers: { "Content-Type": "application/json" },
});

axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  async function (error) {
    // Add a response interceptor for global notifications and response log
    return Promise.reject(error);
  }
);

export async function RequestBuilder(
  endpoint,
  method = "GET",
  body = "",
  isJsonAPI = true,
  headers = getHeaders()
) {
  try {
    const parameters = body ? JSON.stringify(body) : body;
    let updatedMethod = method.toString().toLowerCase();
    //axios.get()
    //axios.post()
    //axios.put()
    const response = await axiosInstance[updatedMethod](endpoint, parameters, {
      headers,
    });
    if (response.status === 200) {
      if (isJsonAPI) {
        return {
          success: true,
          data: response.data || "",
        };
      } else {
        return response.json().then((data) => ({
          success: true,
          data,
        }));
      }
    }
    if (response?.status === 204 && response?.statusText === "No Content") {
      return {
        success: true,
        data: null,
      };
    }
    if (response.status === 401) {
      // toast.error("Unauthorized");
      return {
        success: false,
        message: "unauthorized",
        data: "",
      };
    }
    if (response.status === 404) {
      // toast.error('Not Found')
      return response.json().then((data) => ({
        success: response.ok || false,
        message: data.error_description || "Please try after sometime",
        data: "",
      }));
    }
    // toast.error('Something went wrong, Please try again later.')
    return {
      success: false,
      message: "Something went wrong, Please try again later.",
      data: "",
    };
  } catch (error) {
    console.log("RequestBuilder error", error);
    // toast.error('Something went wrong, Please try again later.')
    return {
      success: false,
      message: "Something went wrong, Please try again later.",
      data: "",
    };
  }
}
