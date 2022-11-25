import { useRef, useState } from "react";
import {
  Container,
  Grow,
  Grid,
  AppBar,
  TextField,
  Button,
  Paper,
} from "@material-ui/core";
import { useDispatch } from "react-redux";
import { useNavigate,  useSearchParams } from "react-router-dom";
import ChipInput from "material-ui-chip-input";

import Form from "../Form/Form";
import Posts from "../Posts/Posts";
import Paginate from "../Pagination/Paginate";

import { getPosts, fetchPostsBySearch } from "../../slices/postAction";

import useStyles from "./styles";

const Home = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [searchParams, setSearchParams] = useSearchParams();

  const page = searchParams.get("page") || 1;
  const searchQuery = searchParams.get("searchQuery");
  const tagsQuery = searchParams.get("tags");

  const classes = useStyles();

  const [currentId, setCurrentId] = useState(null);
  const [search, setSearch] = useState(
    searchQuery && searchQuery !== "none" ? searchQuery : ""
  );
  const [tags, setTags] = useState(tagsQuery ? tagsQuery.split(",") : []);

  const titleInputRef = useRef(null);

  const handleKeyPress = (e) => {
    if (e.keyCode === 13) searchPost();
  };

  const handleAddChip = (tag) => setTags([...tags, tag]);

  const handleDeleteChip = (tagToDelete) =>
    setTags(tags.filter((tag) => tag !== tagToDelete));

  const searchPost = () => {
    if (search.trim().length > 0 || tags.length > 0) {
      dispatch(fetchPostsBySearch({ search, tags: tags.join(",") }));
      navigate(
        `/posts/search?searchQuery=${search || "none"}&tags=${tags.join(",")}`
      );
    } else {
      dispatch(getPosts());
      navigate("/posts");
    }
  };

  return (
    <Grow in>
      <Container maxWidth="xl">
        <Grid
          container
          justifyContent="space-between"
          alignItems="stretch"
          spacing={3}
          className={classes.gridContainer}
        >
          <Grid item xs={12} sm={6} md={9}>
            <Posts setCurrentId={setCurrentId} titleInputRef={titleInputRef} />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <AppBar
              className={classes.appBarSearch}
              position="static"
              color="inherit"
            >
              <TextField
                onKeyDown={handleKeyPress}
                name="search"
                variant="outlined"
                label="Search Memories"
                fullWidth
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
              <ChipInput
                style={{ margin: "10px 0" }}
                value={tags}
                onAdd={(chip) => handleAddChip(chip)}
                onDelete={(chip) => handleDeleteChip(chip)}
                label="Search Tags"
                variant="outlined"
              />
              <Button
                onClick={searchPost}
                className={classes.searchButton}
                variant="contained"
                color="primary"
              >
                Search
              </Button>
            </AppBar>
            <Form
              titleInputRef={titleInputRef}
              currentId={currentId}
              setCurrentId={setCurrentId}
            />
            {!searchQuery && !tags.length && (
              <Paper className={classes.pagination} elevation={6}>
                <Paginate page={page} />
              </Paper>
            )}
          </Grid>
        </Grid>
      </Container>
    </Grow>
  );
};

export default Home;
