import { Link } from "react-router-dom";
import "./NavBar.css";
function Navbar() {
  return (
    <section className="navbar">
      <ul className="navbar-list">
        <Link className="navbar-connexion-link" to="/inscription">
          Inscription
        </Link>
      </ul>
    </section>
  );
}

export default Navbar;
