import { toast } from "react-toastify";
import "./Inscription.css";

function Inscriptionform() {
  const handleClick = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Inscription approuvé");
  };

  return (
    <div className="card-inscription">
      <h1 className="inscription">Inscription</h1>
      <div className="form-connexion">
        <form className="form" action="/submit_form" method="POST">
          <label htmlFor="name">nom</label>
          <input
            type="name"
            id="name"
            name="name"
            placeholder="Enter your name"
            required
          />
          <label htmlFor="firt-name">prénom</label>
          <input
            type="first-name"
            id="first-name"
            name="first-name"
            placeholder="Enter your first-name"
            required
          />
          <label htmlFor="email">E-mail</label>
          <input
            type="email"
            id="mail"
            name="mail"
            placeholder="Enter your mail"
            required
          />
          <label htmlFor="password">Mot de passe</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Enter your password"
            required
          />
          <button type="button" onClick={handleClick}>
            S'inscrire
          </button>
        </form>
      </div>
    </div>
  );
}

export default Inscriptionform;
