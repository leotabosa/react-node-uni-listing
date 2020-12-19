import CustomLink from "../../components/CustomLink";
import "./Home.scss";
import React from "react";

class App extends React.Component {
  componentDidMount() {}

  render() {
    return (
      <div className="home">
        <CustomLink to="/product" label="Produto" />
      </div>
    );
  }
}

export default App;
