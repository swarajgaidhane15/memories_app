import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import {
  Avatar,
  Button,
  Paper,
  Grid,
  Typography,
  Container,
  CircularProgress,
} from "@material-ui/core";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import { GoogleLogin } from "react-google-login";

import { gapi } from "gapi-script";

import {
  authenticateUserByGoogle,
  signup,
  signin,
} from "../../slices/authAction";

import Input from "./Input";
import Icon from "./icon";

import useStyles from "./styles";
import { resetError } from "../../slices/authSlice";

const initialState = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const Auth = () => {
  const [isSignup, setIsSignup] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [form, setForm] = useState(initialState);
  const [progress, setProgress] = useState(0);

  const { error } = useSelector((state) => state.auth);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const classes = useStyles();

  useEffect(() => {
    function start() {
      gapi.client.init({
        clientId: process.env.REACT_APP_GOOGLE_CLIENT_ID,
        scope: "email",
      });
    }

    gapi.load("client:auth2", start);
  }, []);

  const switchMode = () => {
    setIsSignup(!isSignup);
    setShowPassword(false);
    dispatch(resetError());
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isSignup) dispatch(signup(form, navigate));
    else dispatch(signin(form, navigate));

    const timer = setInterval(() => {
      setProgress((prevProgress) => prevProgress + 20);
    }, 1000);

    setTimeout(() => {
      clearInterval(timer);
      dispatch(resetError());
      setProgress(0);
    }, 5500);
  };

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const googleSuccess = async (res) => {
    const result = res?.profileObj;
    const token = res?.tokenId;

    try {
      dispatch(authenticateUserByGoogle({ result, token }));
      navigate("/");
    } catch (error) {
      console.log(error.message);
    }
  };

  const googleFailure = (error) => {
    console.log(error);
    alert("Google Sign in failed.. try again !");
  };

  return (
    <Container component="main" maxWidth="xs">
      <Paper className={classes.paper} elevation={3}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          {isSignup ? "Sign up" : "Sign in"}
        </Typography>
        {error && (
          <div className={classes.error}>
            <Typography variant="body1" color="error">
              {error}
            </Typography>
            <CircularProgress
              style={{ marginLeft: "0.5rem" }}
              variant="determinate"
              value={progress}
            />
          </div>
        )}
        <form className={classes.form} onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            {isSignup && (
              <>
                <Input
                  name="firstName"
                  label="First Name"
                  handleChange={handleChange}
                  autoFocus
                  half
                />
                <Input
                  name="lastName"
                  label="Last Name"
                  handleChange={handleChange}
                  half
                />
              </>
            )}
            <Input
              name="email"
              label="Email Address"
              handleChange={handleChange}
              type="email"
            />
            <Input
              name="password"
              label="Password"
              handleChange={handleChange}
              type={showPassword ? "text" : "password"}
              handleShowPassword={() => setShowPassword(!showPassword)}
            />
            {isSignup && (
              <Input
                name="confirmPassword"
                label="Repeat Password"
                handleChange={handleChange}
                type="password"
              />
            )}
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            {isSignup ? "Sign Up" : "Sign In"}
          </Button>
          <GoogleLogin
            clientId="684382116518-7ldeoeun521n5odegl70meeqkd195qnc.apps.googleusercontent.com"
            render={(renderProps) => (
              <Button
                className={classes.googleButton}
                color="primary"
                fullWidth
                onClick={renderProps.onClick}
                disabled={renderProps.disabled}
                startIcon={<Icon />}
                variant="contained"
              >
                Google Sign In
              </Button>
            )}
            onSuccess={googleSuccess}
            onFailure={googleFailure}
            cookiePolicy={"single_host_origin"}
          />
          <Grid container justifyContent="flex-end">
            <Grid item>
              <Button onClick={switchMode}>
                {isSignup
                  ? "Already have an account? Sign in"
                  : "Don't have an account? Sign Up"}
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Container>
  );
};
export default Auth;
