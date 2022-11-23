import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Grid, CircularProgress, Button, Typography } from "@material-ui/core";

import Post from "./Post/Post";

import useStyles from "./styles";

const Posts = ({ titleInputRef, setCurrentId }) => {
  const classes = useStyles();

  const user = JSON.parse(localStorage.getItem("profile"))?.result;

  const { posts } = useSelector((state) => state.posts);
  const [noPosts, setNoPosts] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      if (posts.length === 0) setNoPosts(true);
    }, 5000);
  }, [posts]);

  return !posts.length ? (
    noPosts ? (
      <Typography variant="h6" className={classes.no_post}>
        Looks like there are no memories ☹️
        <br />
        <Button
          variant="contained"
          color="secondary"
          size="small"
          onClick={() => titleInputRef.current.focus()}
          disabled={!user}
        >
          Create One 😉
        </Button>
      </Typography>
    ) : (
      <CircularProgress />
    )
  ) : (
    <Grid
      className={classes.container}
      container
      alignItems="stretch"
      spacing={3}
    >
      {posts.map((post) => (
        <Grid key={post._id} item xs={12} sm={6} md={6}>
          <Post post={post} setCurrentId={setCurrentId} />
        </Grid>
      ))}
    </Grid>
  );
};

export default Posts;
