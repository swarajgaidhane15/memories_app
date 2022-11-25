import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  mainContainer: {
    display: "flex",
    alignItems: "center",
    flexWrap: "wrap",
  },
  smMargin: {
    margin: theme.spacing(1),
  },
  actionDiv: {
    textAlign: "center",
  },
  no_post: {
    backgroundColor: "white",
    marginTop: "2rem",
    textAlign: "center",
    fontWeight: "600",
    borderRadius: "0.4rem",
    padding: "0.5rem",
    paddingBottom: "1rem",
  },
}));
