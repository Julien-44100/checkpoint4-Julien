import "./connexion.css";

function Connexion() {
  return (
    <div className="connexion">
      <h1>Connexion</h1>
      <div className="form-connexion">
        <form action="/submit_form" method="POST">
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

          <input type="submit" value="Submit" />
        </form>
      </div>
    </div>
  );
}

export default Connexion;
