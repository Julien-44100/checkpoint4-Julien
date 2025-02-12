import { toast } from "react-toastify";
import "./Inscription.css";

function Inscriptionform() {
  // Fonction handleClick pour afficher le toast
  const handleClick = () => {
    toast.success("Connexion approuvée");
  };

  return (
    <div className="card-inscription">
      <h1>Inscription</h1>
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
        <button type="button" onClick={handleClick}>
          Se connecter
        </button>
      </form>
    </div>
  );
}

export default Inscriptionform;
