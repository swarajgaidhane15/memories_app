import Loader from "./Loader";

import useStyles from "./styles";

const LoadingPage = () => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <Loader className={classes.navbar} width="90vw" height="100px" />

      <div className={classes.cardSection}>
        {[...Array(5)].map((t, i) => (
          <Loader key={i} />
        ))}
      </div>
    </div>
  );
};

export default LoadingPage;
