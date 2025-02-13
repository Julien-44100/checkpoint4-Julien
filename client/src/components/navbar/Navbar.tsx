import { Link, useLocation } from "react-router-dom";
import "./NavBar.css";

function Navbar() {
  const location = useLocation();

  return (
    <section className="navbar">
      <ul className="navbar-list">
        {/* Afficher "Inscription" sauf si on est sur la page "Actuality" ou "Ajoutactualité" */}
        {location.pathname !== "/inscriptionform" &&
          location.pathname !== "/Actuality" &&
          location.pathname !== "/Ajoutactualité" && (
            <Link className="navbar-connexion-link" to="/inscriptionform">
              Inscription
            </Link>
          )}

        {/* Afficher "Connexion" sauf si on est sur la page "Connexion", "Actuality" ou "Ajoutactualité" */}
        {location.pathname !== "/Connexion" &&
          location.pathname !== "/Actuality" &&
          location.pathname !== "/Ajoutactualité" && (
            <Link className="navbar-connexion-link" to="/">
              Connexion
            </Link>
          )}

        {/* Afficher "Ajouter une actualité" uniquement sur la page "Actuality" */}
        {location.pathname === "/Actuality" && (
          <Link className="navbar-connexion-link" to="/Ajoutactualité">
            Ajouter une actualité
          </Link>
        )}

        {/* Afficher "Actualité" uniquement sur la page "Ajoutactualité" */}
        {location.pathname === "/Ajoutactualité" && (
          <Link className="navbar-connexion-link" to="/Actuality">
            Actualité
          </Link>
        )}
      </ul>
    </section>
  );
}

export default Navbar;
