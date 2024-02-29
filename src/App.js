import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom/cjs/react-router-dom";
import Navbar from "./Navbar";
import Home from "./Home";
import Shop from "./Shop";
import Signin from "./Signin";
import Signup from "./Signup";
import Profile from "./Profile";
import ProfileList from "./ProfileList";

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <div className="content">
          <Switch>
            <Route path="/home">
              <Home />
            </Route>
            <Route path="/Shop">
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
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
