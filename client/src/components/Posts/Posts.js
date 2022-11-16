import React from "react";
import { useSelector } from "react-redux";

import useStyles from "./styles";

const Posts = () => {
  const classes = useStyles();

  const { posts } = useSelector((state) => state.posts);

  return (
    <div>
      {posts.map((post) => (
        <p key={post._id}>{post.title}</p>
      ))}
    </div>
  );
};

export default Posts;
