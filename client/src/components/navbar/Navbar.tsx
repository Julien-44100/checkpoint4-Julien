import { Link, useLocation } from "react-router-dom";
import "./NavBar.css";

function Navbar() {
  const location = useLocation();

  return (
    <section className="navbar">
      <ul className="navbar-list">
        {/* Afficher "Inscription" sauf si on est sur la page actualité */}
        {location.pathname !== "/inscriptionform" &&
          location.pathname !== "/Actuality" && (
            <Link className="navbar-connexion-link" to="/inscriptionform">
              Inscription
            </Link>
          )}

        {location.pathname !== "/Connexion" &&
          location.pathname !== "/Actuality" && (
            <Link className="navbar-connexion-link" to="/">
              Connexion
            </Link>
          )}

        {location.pathname === "/Actuality" && (
          <Link className="navbar-connexion-link" to="/Ajoutactualité">
            Ajouter une actualité
          </Link>
        )}
        {location.pathname === "/Ajoutactualité" && (
          <Link className="navbar-connexion-link" to="/inscriptionform">
            Inscription
          </Link>
        )}
      </ul>
    </section>
  );
}

export default Navbar;
