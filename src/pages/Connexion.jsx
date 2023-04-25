import { NavLink } from "react-router-dom";

const Connexion = () => {
  return (
    <div className="connexion">
      <h1>Connexion sur Akn Shop</h1>
      <form className="flex" action="">
        <label htmlFor="mail">Email</label>
        <input type="email" name="mail" />
        <div className="mdp">
          <label htmlFor="mdp">Mot de passe</label>
          <NavLink to="/oublié">Oublié</NavLink>
        </div>
        <input type="password" name="mdp" />
        <input type="submit" id="btn" value="Connexion" />
      </form>
      <p className="ins-compte mt-15">
        Vous n'avez pas de compte ?{" "}
        <NavLink to="/register"> Inscrivez-vous .</NavLink>
      </p>
    </div>
  );
};

export default Connexion;
