import { Link, HashRouter as Router } from "react-router-dom";
import "./CustomLink.scss";

function CustomLink({ label, to }) {
  return (
    <Router>
      <Link to={to} className="link">
        {label}
      </Link>
    </Router>
  );
}

export default CustomLink;
