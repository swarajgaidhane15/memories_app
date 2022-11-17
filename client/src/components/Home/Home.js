import { Container, Grow, Grid } from "@material-ui/core";
import { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";

import Form from "../Form/Form";
import Posts from "../Posts/Posts";

import { getPosts } from "../../slices/postAction";

const Home = () => {
  const dispatch = useDispatch();

  const [currentId, setCurrentId] = useState(null);

  const titleInputRef = useRef(null);

  useEffect(() => {
    dispatch(getPosts());
  }, [currentId, dispatch]);

  return (
    <Grow in>
      <Container>
        <Grid
          container
          justifyContent="space-between"
          alignItems="stretch"
          spacing={3}
        >
          <Grid item xs={12} sm={7}>
            <Posts setCurrentId={setCurrentId} titleInputRef={titleInputRef} />
          </Grid>
          <Grid item xs={12} sm={4}>
            <Form
              titleInputRef={titleInputRef}
              currentId={currentId}
              setCurrentId={setCurrentId}
            />
          </Grid>
        </Grid>
      </Container>
    </Grow>
  );
};

export default Home;
