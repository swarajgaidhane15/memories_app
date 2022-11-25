import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(() => ({
  skeletonPaper: {
    borderRadius: "15px",
    opacity: "60%",
    margin: "1rem",
  },
  container: {
    padding: "30px",
  },
  navbar: {
    marginBottom: "5rem",
  },
  cardSection: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "flex-start",
  },
}));
