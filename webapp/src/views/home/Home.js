import { Link } from "react-router-dom";
import CustomLink from "../../components/CustomLink";
import logo from "../../logo.svg";
import "./Home.scss";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <CustomLink to="/product" label="Produto" />
      </header>
    </div>
  );
}

export default App;
