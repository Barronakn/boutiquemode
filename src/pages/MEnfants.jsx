import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import MEnfantsList from "../components/MEnfantsList";
import img1 from "/public/451c46215fb3ffb5a957053950b1b1a8-removebg-preview.png";
import img2 from "/public/528e3953ef4bba7ed22847356c92f8e0--african-attire-african-wear-removebg-preview.png";
import img3 from "/public/672544b5db4af05ec4724ac4b493fc17-removebg-preview.png";
import img4 from "/public/Robes-avec-chapeau-pour-petites-filles-100-coton-imprim-africain-v-tements-pour-enfants-Bazin-Riche.jpg_640x640-removebg-preview.png";
import img5 from "/public/d0553e50da6abbca97a351e6bd4f91c8-removebg-preview.png";
import img6 from "/public/garçons.png";
import img7 from "/public/fillettes.png";
import img8 from "/public/Robe-africaine-en-dentelle-pour-filles-v-tements-africains-col-rond-robe-de-princesse-imprim-e-removebg-preview.png";
import img9 from "/public/V-tements-traditionnels-africains-pour-enfants-nouvelle-mode-Dashiki-jolies-robes-pour-filles-volants-Bazin-WYT119.jpg_640x640-removebg-preview (1).png";
import img10 from "/public/V-tements-africains-pour-enfants-Dashiki-en-cire-de-coton-costume-pour-enfants-Shorts-d-contract-removebg-preview.png";
import img11 from "/public/d0553e50da6abbca97a351e6bd4f91c8-removebg-preview.png";
import img12 from "/public/e03955c106bdae884d4703002dce0d11-removebg-preview.png";

const MEnfants = () => {
  const enfants = [
    {
      id: 0,
      img: img1,
      name: "Tenu enfant",
      price: 10000 + " Fcfa",
      add: "Ajouter au panier",
    },
    {
      id: 1,
      img: img2,
      name: "Tenu enfant",
      price: 10000 + " Fcfa",
      add: "Ajouter au panier",
    },
    {
      id: 2,
      img: img3,
      name: "Tenu enfant",
      price: 10000 + " Fcfa",
      add: "Ajouter au panier",
    },
    {
      id: 3,
      img: img4,
      name: "Tenu enfant",
      price: 10000 + " Fcfa",
      add: "Ajouter au panier",
    },
    {
      id: 4,
      img: img5,
      name: "Tenu enfant",
      price: 10000 + " Fcfa",
      add: "Ajouter au panier",
    },
    {
      id: 5,
      img: img6,
      name: "Tenu enfant",
      price: 10000 + " Fcfa",
      add: "Ajouter au panier",
    },
    {
      id: 6,
      img: img7,
      name: "Tenu enfant",
      price: 10000 + " Fcfa",
      add: "Ajouter au panier",
    },
    {
      id: 7,
      img: img8,
      name: "Tenu enfant",
      price: 10000 + " Fcfa",
      add: "Ajouter au panier",
    },
    {
      id: 8,
      img: img9,
      name: "Tenu enfant",
      price: 10000 + " Fcfa",
      add: "Ajouter au panier",
    },
    {
      id: 9,
      img: img10,
      name: "Tenu enfant",
      price: 10000 + " Fcfa",
      add: "Ajouter au panier",
    },
    {
      id: 10,
      img: img11,
      name: "Tenu enfant",
      price: 10000 + " Fcfa",
      add: "Ajouter au panier",
    },
    {
      id: 11,
      img: img12,
      name: "Tenu enfant",
      price: 10000 + " Fcfa",
      add: "Ajouter au panier",
    },
  ];
  return (
    <div>
      <Navigation />
      <h1 className="p-t">Enfants</h1>
      <div className="modeles">
        {enfants.map((enfant) => {
          return <MEnfantsList key={enfant.id} {...enfant} />;
        })}
      </div>
      <Footer />
    </div>
  );
};

export default MEnfants;
