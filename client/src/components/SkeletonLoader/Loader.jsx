import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

import useStyles from "./styles";

const Loader = ({ width, height }) => {
  const classes = useStyles();

  return (
    <SkeletonTheme baseColor="#aaa" highlightColor="#555">
      <Skeleton
        className={classes.skeletonPaper}
        style={{
          width: width ?? "12rem",
          height: height ?? "16rem",
        }}
      />
    </SkeletonTheme>
  );
};

export default Loader;
