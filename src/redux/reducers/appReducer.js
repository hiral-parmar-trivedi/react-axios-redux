import { APP_LOADER } from "../actions/actions";

const initialState = {
  loader: [],
};

export const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case APP_LOADER:
      return { loader: action.payload };

    default:
      return state;
  }
};
