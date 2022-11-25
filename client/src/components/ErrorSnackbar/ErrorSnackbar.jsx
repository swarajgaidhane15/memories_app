import { useDispatch, useSelector } from "react-redux";

import Snackbar from "@material-ui/core/Snackbar";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";

import useStyles from "./styles";

import { resetError } from "../../slices/errorAction";

const ErrorSnackbar = () => {
  const dispatch = useDispatch();
  const { error } = useSelector((state) => state.error);

  const classes = useStyles();

  const handleClose = (event, reason) => {
    dispatch(resetError());

    if (error) {
      setTimeout(() => {
        dispatch(resetError());
      }, 5000);
    }

    if (reason === "clickaway") {
      return;
    }
  };

  const action = (
    <IconButton
      size="small"
      aria-label="close"
      color="inherit"
      onClick={handleClose}
    >
      <CloseIcon fontSize="small" />
    </IconButton>
  );

  return (
    <Snackbar
      ContentProps={{
        classes: {
          root: classes.snackbar,
        },
      }}
      open={error !== ""}
      autoHideDuration={5000}
      anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
      onClose={handleClose}
      message={error}
      action={action}
    />
  );
};

export default ErrorSnackbar;
