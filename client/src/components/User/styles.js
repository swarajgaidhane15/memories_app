import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  media: {
    borderRadius: "50%",
    objectFit: "cover",
    width: "200px",
  },
  card: {
    display: "flex",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    flexDirection: "column",
    [theme.breakpoints.down("sm")]: {
      flexWrap: "wrap",
    },
  },
  section: {
    borderRadius: "20px",
    margin: "10px",
    flex: 1,
  },
  imageSection: {
    marginLeft: "20px",
    [theme.breakpoints.down("sm")]: {
      marginLeft: 0,
    },
  },
  recommendedPosts: {
    display: "flex",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
    },
  },
  loadingPaper: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "20px",
    borderRadius: "15px",
    height: "39vh",
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
