import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./Home";
import Entry from "./Entry";
import Profiles from "./Profiles";
import ProfileDetails from "./ProfileDetails";
import Boom from "./Boom";
import Blast from "./Blast";
import SignIn from "./SignIn";
import Tasks from "./Tasks";

// const Navbar = React.lazy(() => import("./Navbar"));
// const Home = React.lazy(() => import("./Home"));
// const Entry = React.lazy(() => import("./Entry"));
// const Profiles = React.lazy(() => import("./Profiles"));

const App = () => {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/form">
              <Entry />
            </Route>
            <Route exact path="/profiles">
              <Profiles />
            </Route>
            <Route exact path="/profiles/:id">
              <ProfileDetails />
            </Route>
            <Route exact path="/boom">
              <Boom />
            </Route>
            <Route exact path="/blast">
              <Blast />
            </Route>
            <Route exact path="/signin">
              <SignIn />
            </Route>
            <Route exact path="/tasks">
              <Tasks />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
};

export default App;

// Formik / useForm, YUP validations
