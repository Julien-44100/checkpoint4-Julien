import "./connexion.css";
import { toast } from "react-toastify";
function Connexion() {
  const handleClick = () => {
    toast.success("Connexion approuvée");
  };
  return (
    <div className="connexion">
      <h1>Connexion</h1>
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

          <button type="button" onClick={handleClick}>
            Se connecter
          </button>
        </form>
      </div>
    </div>
  );
}

export default Connexion;
