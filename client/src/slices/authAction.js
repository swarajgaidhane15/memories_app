import * as api from "../api";

import { authenticateUser, logoutUser } from "./authSlice";
import { setError } from "./errorAction";

export const authenticateUserByGoogle = (data) => {
  return async (dispatch) => {
    try {
      const { result } = await api.googleSignin(data);
      dispatch(authenticateUser({ ...data, result }));
    } catch (error) {
      dispatch(setError("UNKNOWN_ERROR"));
    }
  };
};

export const logoutAction = () => {
  return (dispatch) => {
    try {
      localStorage.removeItem("profile");
      dispatch(logoutUser());
    } catch (error) {
      dispatch(setError("UNKNOWN_ERROR"));
    }
  };
};

export const signin = (formData, navigate) => {
  return async (dispatch) => {
    try {
      const { data } = await api.signIn(formData);

      dispatch(authenticateUser(data));

      navigate("/");
    } catch (error) {
      const { message } = error.response?.data;

      dispatch(setError(message));
    }
  };
};

export const signup = (formData, navigate) => {
  return async (dispatch) => {
    try {
      const { data } = await api.signUp(formData);

      dispatch(authenticateUser(data));

      navigate("/");
    } catch (error) {
      dispatch(setError("UNKNOWN_ERROR"));
    }
  };
};
