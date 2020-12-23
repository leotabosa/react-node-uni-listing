import { HashRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./views/home/Home";
import "./App.scss";

import University from "./views/university/University";
function App() {
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route
            path="/university/:id"
            render={(props) => <University {...props} />}
          />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
