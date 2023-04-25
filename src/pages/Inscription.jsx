import { NavLink } from "react-router-dom";

const Inscription = () => {
  return (
    <div className="inscriptionContainer">
      <div className="logo">
        <NavLink className="navActive" to="/">
          Akn <span>Shop</span>
        </NavLink>
      </div>
      <div className="inscription">
        <div className="left">
          <h1>Des données clients toujours sécurisées et conformes</h1>
        </div>
        <div className="right">
          <h1>Inscrivez sur Akn Shop</h1>
          <form className="flex" action="">
            <label htmlFor="">Nom</label>
            <input type="text" name="" />
            <label htmlFor="">E-mail</label>
            <input type="email" name="" />
            <label htmlFor="">Mot de passe</label>
            <input type="password" name="" />
            <label htmlFor="">Confirmer mot de passe</label>
            <input type="password" name="" />
            <input type="submit" id="btn" value="Connexion" />
          </form>
          <p className="mt-15">
            Vous avez déjà un compte?{" "}
            <NavLink to="/login"> Connectez-vous .</NavLink>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Inscription;
