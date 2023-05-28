import MHommesList from "../components/MHommesList";
import { NavLink } from "react-router-dom";
import img1 from "/public/7a90f53dc3a2ed7ea5f600eb8ee0750f-removebg-preview.png";
import img2 from "/public/9fa789dca9b542b98e6e5415cc4d6732-removebg-preview.png";
import img3 from "/public/1541ZYHJ-default-removebg-preview.png";
import img4 from "/public/179402f471b52143e5258861dedca882-removebg-preview.png";

const Hommes = () => {
  const hommes = [
    {
      id: 0,
      img: img1,
      name: "Tenu homme",
      price: 10000 + " Fcfa",
      add: "Ajouter au panier",
    },
    {
      id: 1,
      img: img2,
      name: "Tenu homme",
      price: 10000 + " Fcfa",
      add: "Ajouter au panier",
    },
    {
      id: 2,
      img: img3,
      name: "Tenu homme",
      price: 10000 + " Fcfa",
      add: "Ajouter au panier",
    },
    {
      id: 3,
      img: img4,
      name: "Tenu homme",
      price: 10000 + " Fcfa",
      add: "Ajouter au panier",
    },
  ];
  return (
    <div>
      <h1 className="p-t">Hommes</h1>
      <div className="modeles">
        {hommes.map((homme) => {
          return <MHommesList key={homme.id} {...homme} />;
        })}
      </div>
      <div className="seeMore">
        <NavLink to="/modèleshommes">Voir plus</NavLink>
      </div>
    </div>
  );
};

export default Hommes;
