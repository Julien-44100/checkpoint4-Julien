import { Link, useLocation } from "react-router-dom";
import "./NavBar.css";

function Navbar() {
  const location = useLocation();

  return (
    <section className="navbar">
      <ul className="navbar-list">
        {location.pathname !== "/inscriptionform" && (
          <Link className="navbar-connexion-link" to="/inscriptionform">
            Inscription
          </Link>
        )}
        {location.pathname !== "/Connexion" && (
          <Link className="navbar-connexion-link" to="/">
            connection
          </Link>
        )}
      </ul>
    </section>
  );
}

export default Navbar;
