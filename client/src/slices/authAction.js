import { authenticateUser, logoutUser } from "./authSlice";

export const authenticateUserByGoogle = (data) => {
  return (dispatch) => {
    try {
      localStorage.setItem("profile", JSON.stringify(data));
      dispatch(authenticateUser(data));
    } catch (error) {
      console.log(error.message);
    }
  };
};

export const logoutAction = () => {
  return (dispatch) => {
    try {
      localStorage.removeItem("profile");
      dispatch(logoutUser());
    } catch (error) {
      console.log(error.message);
    }
  };
};

export const signin = (formData, navigate) => {
  return async (dispatch) => {
    try {
      navigate("/");
    } catch (error) {
      console.log(error.message);
    }
  };
};

export const signup = (formData, navigate) => {
  return async (dispatch) => {
    try {
      navigate("/");
    } catch (error) {
      console.log(error.message);
    }
  };
};
