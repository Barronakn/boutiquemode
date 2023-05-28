import MFemmesList from "../components/MFemmesList";
import { NavLink } from "react-router-dom";
import img1 from "/public/chouette-idée-robe-moderne-tenue-africaine-femme-chic-idée-modele-robe-africaine-moderne-chic-removebg-preview.png";
import img2 from "/public/couture-africaine-1-removebg-preview.png";
import img3 from "/public/d857fe1c64e43da5e5e61123b83c4b61-removebg-preview.png";
import img4 from "/public/femmes.png";

const Femmes = () => {
  const femmes = [
    {
      id: 0,
      img: img1,
      name: "Robe",
      price: 10000 + " Fcfa",
      add: "Ajouter au panier",
    },
    {
      id: 1,
      img: img2,
      name: "Robe",
      price: 10000 + " Fcfa",
      add: "Ajouter au panier",
    },
    {
      id: 2,
      img: img3,
      name: "Robe",
      price: 10000 + " Fcfa",
      add: "Ajouter au panier",
    },
    {
      id: 3,
      img: img4,
      name: "Robe",
      price: 10000 + " Fcfa",
      add: "Ajouter au panier",
    },
  ];
  return (
    <div>
      <h1 className="text">Femmes</h1>
      <div className="modeles">
        {femmes.map((femme) => {
          return <MFemmesList key={femme.id} {...femme} />;
        })}
      </div>
      <div className="seeMore">
        <NavLink to="/modèlesfemmes">Voir plus</NavLink>
      </div>
    </div>
  );
};

export default Femmes;
