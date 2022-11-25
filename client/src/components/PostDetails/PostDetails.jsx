import React, { useEffect, useState } from "react";
import { Paper, Typography, Divider } from "@material-ui/core/";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";
import { useParams, useNavigate, Link } from "react-router-dom";

import { fetchPostsBySearch, getPost } from "../../slices/postAction";

import useStyles from "./styles";
import Loader from "../SkeletonLoader/Loader";

const Post = () => {
  const { id } = useParams();
  const { post, posts } = useSelector((state) => state.posts);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [noPosts, setNoPosts] = useState(false);

  const classes = useStyles();

  useEffect(() => {
    dispatch(getPost(id));
    setTimeout(() => {
      if (!post) setNoPosts(true);
    }, 5000);
  }, [id]);

  useEffect(() => {
    if (post) {
      dispatch(
        fetchPostsBySearch({ search: "none", tags: post?.tags?.join(",") })
      );
    }
  }, [post]);

  const openPost = (_id) => navigate(`/posts/${_id}`);

  if (!post) {
    return noPosts ? (
      <Typography variant="h6" className={classes.no_post}>
        Looks like there are no memories ☹️
        <br />
        <Link to="/posts" />
      </Typography>
    ) : (
      <Loader width="30%" />
    );
  }

  const recommendedPosts = posts.filter(({ _id }) => _id !== post._id);

  return (
    <>
      <Paper style={{ padding: "20px", borderRadius: "15px" }} elevation={6}>
        <div className={classes.card}>
          <div className={classes.section}>
            <Typography variant="h3" component="h2">
              {post.title}
            </Typography>
            <Typography
              gutterBottom
              variant="h6"
              color="textSecondary"
              component="h2"
            >
              {post?.tags?.map((tag) => `#${tag} `)}
            </Typography>
            <Typography gutterBottom variant="body1" component="p">
              {post.message}
            </Typography>
            <Typography variant="h6">Created by: {post.name}</Typography>
            <Typography variant="body1">
              {moment(post.createdAt).fromNow()}
            </Typography>
            <Divider style={{ margin: "20px 0" }} />
          </div>
          <div className={classes.imageSection}>
            <img
              className={classes.media}
              src={
                post.selectedFile ||
                "https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png"
              }
              alt={post.title}
            />
          </div>
        </div>
      </Paper>
      <Paper
        style={{ padding: "20px", borderRadius: "15px", marginTop: "2rem" }}
        elevation={6}
      >
        {!!recommendedPosts.length && (
          <div className={classes.section}>
            <Typography gutterBottom variant="h5">
              You might also like:
            </Typography>
            <Divider />
            <div className={classes.recommendedPosts}>
              {recommendedPosts.map(
                ({ title, name, message, likes, selectedFile, _id }) => (
                  <div
                    style={{ margin: "20px", cursor: "pointer" }}
                    onClick={() => openPost(_id)}
                    key={_id}
                  >
                    <Typography gutterBottom variant="h6">
                      {title}
                    </Typography>
                    <Typography gutterBottom variant="subtitle2">
                      {name}
                    </Typography>
                    <Typography gutterBottom variant="subtitle2">
                      {message}
                    </Typography>
                    <Typography gutterBottom variant="subtitle1">
                      Likes: {likes.length}
                    </Typography>
                    <img src={selectedFile} alt={"Image"} width="200px" />
                  </div>
                )
              )}
            </div>
          </div>
        )}
      </Paper>
    </>
  );
};

export default Post;
