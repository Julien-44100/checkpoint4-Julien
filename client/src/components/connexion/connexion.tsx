import "./connexion.css";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
function Connexion() {
  const navigate = useNavigate();
  const handleClick = (e: React.FormEvent) => {
    e.preventDefault(); // Empêcher la soumission du formulaire par défaut
    toast.success("Connexion approuvée"); // Afficher le toast
    navigate("/Actuality"); // Naviguer vers la page Actualité
  };
  return (
    <div className="connexion">
      <h1 className="connexion-h1">Connexion</h1>
      <div className="form-connexion">
        <form className="form" action="/submit_form" method="POST">
          <label htmlFor="email">adresse mail</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
            required
          />
          <label className="password" htmlFor="password">
            mot de passe
          </label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Enter your password"
            required
          />

          <button
            type="button"
            onClick={handleClick}
            className="button-connexion"
          >
            Se connecter
          </button>
        </form>
      </div>
    </div>
  );
}

export default Connexion;
