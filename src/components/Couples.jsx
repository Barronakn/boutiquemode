import MCouplesList from "../components/MCouplesList";
import { NavLink } from "react-router-dom";
import img1 from "/public/WhatsApp_Image_2023-02-25_at_16.54.46-removebg-preview (1).png";
import img2 from "/public/WhatsApp_Image_2023-02-25_at_16.54.46__1_-removebg-preview.png";
import img3 from "/public/WhatsApp_Image_2023-02-25_at_16.54.46__2_-removebg-preview.png";
import img4 from "/public/WhatsApp_Image_2023-02-25_at_16.54.47-removebg-preview.png";

const Couples = () => {
  const couples = [
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
      <h1 className="text">Couples</h1>
      <div className="modeles">
        {couples.map((couple) => {
          return <MCouplesList key={couple.id} {...couple} />;
        })}
      </div>
      <div className="seeMore">
        <NavLink to="/modèlescouples">Voir plus</NavLink>
      </div>
    </div>
  );
};

export default Couples;
