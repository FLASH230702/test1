import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom/cjs/react-router-dom";
import Navbar from "./Navbar";
import Home from "./Home";
import Shop from "./Shop";
import Signin from "./Signin";

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
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
