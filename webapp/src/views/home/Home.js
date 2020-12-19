import { Link } from "react-router-dom";
import CustomLink from "../../components/CustomLink";
import logo from "../../logo.svg";
import "./Home.scss";
import React from "react";
import api from "@api";

class App extends React.Component {
  componentDidMount() {}

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <CustomLink to="/product" label="Produto" />
        </header>
      </div>
    );
  }
}

export default App;
