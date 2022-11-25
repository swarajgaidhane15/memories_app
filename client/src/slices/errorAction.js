import { ERROR_TYPES } from "../utils/errorTypes";

import { addError, removeError } from "./errorSlice";

export const setError = (key) => {
  return async (dispatch) => {
    dispatch(addError(ERROR_TYPES[key]));
  };
};

export const resetError = () => {
  return async (dispatch) => {
    dispatch(removeError());
  };
};
