import { NavLink } from "react-router-dom";

const Boutique = () => {
  return (
    <div>
      <div className="boutique">
        <h1>Boutiques</h1>
        <h2>Catégories populaires</h2>
      </div>
      <div className="boutiqueContainer">
        <div className="homme translate column">
          <img src="/dist/Hommes.png" alt="" />
          <NavLink to="/modèleshommes">Modèles hommes</NavLink>
        </div>
        <div className="enfants translate">
          <div className="childs">
            <img src="/dist/garçons.png" alt="" />
            <img src="/dist/fillettes.png" alt="" />
          </div>
          <NavLink className="absolute" to="/modèlesenfants">
            Modèles enfants
          </NavLink>
        </div>
        <div className="femme translate column">
          <img src="/dist/femmes.png" alt="" />
          <NavLink to="/modèlesfemmes">Modèles femmes</NavLink>
        </div>
        <div className="couple translate column">
          <img src="/dist/couples.png" alt="" />
          <NavLink to="/modèlescouples">Modèles couples</NavLink>
        </div>
      </div>
    </div>
  );
};

export default Boutique;
