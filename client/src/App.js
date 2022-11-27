import { Container } from "@material-ui/core";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Auth from "./components/Auth/Auth";
import PostDetails from "./components/PostDetails/PostDetails";
import ErrorSnackbar from "./components/ErrorSnackbar/ErrorSnackbar";
import User from "./components/User/User";

const ProtectedRoute = ({ children }) => {
  const user = JSON.parse(localStorage.getItem("profile"));

  if (user) {
    return <Navigate to="/posts" replace />;
  }

  return children;
};

const App = () => {
  return (
    <Router>
      <Container maxWidth="xl">
        <Navbar />
        <ErrorSnackbar />
        <Routes>
          <Route exact path="/" element={<Navigate to="/posts" replace />} />
          <Route exact path="/posts" element={<Home />} />
          <Route exact path="/posts/search" element={<Home />} />
          <Route exact path="/posts/:id" element={<PostDetails />} />
          <Route exact path="/user/:id" element={<User />} />
          <Route
            exact
            path="/auth"
            element={
              <ProtectedRoute>
                <Auth />
              </ProtectedRoute>
            }
          />
        </Routes>
      </Container>
    </Router>
  );
};

export default App;
