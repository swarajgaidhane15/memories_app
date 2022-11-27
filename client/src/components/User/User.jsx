import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Paper, Typography } from "@material-ui/core";

import Loader from "../SkeletonLoader/Loader";

import { getUserSpecificPosts } from "../../slices/postAction";

import useStyles from "./styles.js";

const User = () => {
  const dispatch = useDispatch();
  const loggedUser = localStorage.getItem("profile")?.result;
  const { user, posts } = useSelector((state) => state.posts);

  const { id } = useParams();

  useEffect(() => {
    dispatch(getUserSpecificPosts(id));
  }, [id]);

  const classes = useStyles();

  if (!user) {
    return <Loader width="90vw" height="200px" />;
  }

  return (
    <>
      <Paper style={{ padding: "20px", borderRadius: "15px" }} elevation={6}>
        <div className={classes.card}>
          <div className={classes.imageSection}>
            <img
              className={classes.media}
              src={
                user?.imageUrl ||
                "https://i1.sndcdn.com/avatars-UidYWfW20bjki8Ub-GJKpBQ-t500x500.jpg"
              }
              alt={user?.name[0]}
            />
          </div>

          <div className={classes.section}>
            <Typography variant="h4" component="h4">
              {user?.name}
            </Typography>
            <Typography variant="h6" component="h6" color="textSecondary">
              {user?.email}
            </Typography>
          </div>
        </div>
      </Paper>
    </>
  );
};

export default User;
