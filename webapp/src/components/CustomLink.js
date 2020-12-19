import { Link, BrowserRouter as Router } from "react-router-dom";
import "./CustomLink.scss";

function CustomLink({ label, to, color = "white" }) {
  return (
    <Router class="link">
      <Link to={to}>{label}</Link>
    </Router>
  );
}

export default CustomLink;
