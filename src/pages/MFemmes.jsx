import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import MFemmesList from "../components/MFemmesList";
import img1 from "/public/chouette-idée-robe-moderne-tenue-africaine-femme-chic-idée-modele-robe-africaine-moderne-chic-removebg-preview.png";
import img2 from "/public/couture-africaine-1-removebg-preview.png";
import img3 from "/public/d857fe1c64e43da5e5e61123b83c4b61-removebg-preview.png";
import img4 from "/public/femmes.png";
import img5 from "/public/femmesF.png";
import img6 from "/public/robe-africaine-chic29-removebg-preview.png";
import img7 from "/public/robe-africaine-robe-africaine-chic-jaune-et-rose-afro-nation-m-16065699152008_400x-removebg-preview.png";
import img8 from "/public/robe-africaine-wax-1-removebg-preview.png";
import img9 from "/public/robe-en-pagne-africain-606_1800x1800-1-300x300-removebg-preview.png";
import img10 from "/public/robe-pagne-4-min-1-removebg-preview.png";
import img11 from "/public/robe-soiree-1-min-removebg-preview.png";
import img12 from "/public/womanPic.png";

const MFemmes = () => {
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
    {
      id: 4,
      img: img5,
      name: "Robe",
      price: 10000 + " Fcfa",
      add: "Ajouter au panier",
    },
    {
      id: 5,
      img: img6,
      name: "Robe",
      price: 10000 + " Fcfa",
      add: "Ajouter au panier",
    },
    {
      id: 6,
      img: img7,
      name: "Robe",
      price: 10000 + " Fcfa",
      add: "Ajouter au panier",
    },
    {
      id: 7,
      img: img8,
      name: "Robe",
      price: 10000 + " Fcfa",
      add: "Ajouter au panier",
    },
    {
      id: 8,
      img: img9,
      name: "Robe",
      price: 10000 + " Fcfa",
      add: "Ajouter au panier",
    },
    {
      id: 9,
      img: img10,
      name: "Robe",
      price: 10000 + " Fcfa",
      add: "Ajouter au panier",
    },
    {
      id: 10,
      img: img11,
      name: "Robe",
      price: 10000 + " Fcfa",
      add: "Ajouter au panier",
    },
    {
      id: 11,
      img: img12,
      name: "Robe",
      price: 10000 + " Fcfa",
      add: "Ajouter au panier",
    },
  ];
  return (
    <div>
      <Navigation />
      <h1 className="p-t">Femmes</h1>
      <div className="modeles">
        {femmes.map((femme) => {
          return <MFemmesList key={femme.id} {...femme} />;
        })}
      </div>
      <Footer />
    </div>
  );
};

export default MFemmes;
