import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom/cjs/react-router-dom";
import Navbar from "./Navbar";
import Home from "./Home";
import ScrollToTopOnRedirect from "./ScrollToTopOnRedirect";
import Shop from "./Shop";
import Signin from "./Signin";
import Signup from "./Signup";
import Profile from "./Profile";
import ProfileList from "./ProfileList";
import ShopDetails from "./ShopDetails";
import Cart from "./Cart";
import Blogs from "./Blogs";
import BlogDetails from "./BlogDetails";
import Contact from "./Contact";
import Test from "./Test";

function App() {
  return (
    <Router>
      <ScrollToTopOnRedirect />
      <div className="app">
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path="/home">
              <Home />
            </Route>
            <Route exact path="/shop">
              <Shop />
            </Route>
            <Route exact path="/signin">
              <Signin />
            </Route>
            <Route exact path="/signup">
              <Signup />
            </Route>
            <Route exact path="/profile/:id">
              <Profile />
            </Route>
            <Route exact path="/profilelist">
              <ProfileList />
            </Route>
            <Route exact path="/shop/:id">
              <ShopDetails />
            </Route>
            <Route exact path="/cart/:id">
              <Cart />
            </Route>
            <Route exact path="/blogs">
              <Blogs />
            </Route>
            <Route exact path="/blogs/:id">
              <BlogDetails />
            </Route>
            <Route exact path="/contact">
              <Contact />
            </Route>
            <Route exact path="/test">
              <Test />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
