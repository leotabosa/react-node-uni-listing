import { HashRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./views/home/Home";
import Product from "./views/product/Product";
function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/product">
            <Product />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
