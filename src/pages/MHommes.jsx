import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import MHommesList from "../components/MHommesList";
import img1 from "/public/7a90f53dc3a2ed7ea5f600eb8ee0750f-removebg-preview.png";
import img2 from "/public/9fa789dca9b542b98e6e5415cc4d6732-removebg-preview.png";
import img3 from "/public/1541ZYHJ-default-removebg-preview.png";
import img4 from "/public/179402f471b52143e5258861dedca882-removebg-preview.png";
import img5 from "/public/chemise-homme-en-pagne-wax-africain-847_400x-removebg-preview.png";
import img6 from "/public/fadzeco-africain-hommes-chemise-nouveau-design-a-m-removebg-preview.png";
import img7 from "/public/Hab03902b56f44285a42204cf0a2c45e1h.png_300x300-removebg-preview.png";
import img8 from "/public/hommePic.png";
import img9 from "/public/Hommes.png";
import img10 from "/public/HTB1Phh_UNYaK1RjSZFnq6y80pXa1-removebg-preview.png";
import img11 from "/public/images-removebg-preview.png";
import img12 from "/public/rBVaVFzTvjKAelGZAAIn8Is1vB4560-removebg-preview.png";

const MHommes = () => {
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
    {
      id: 4,
      img: img5,
      name: "Tenu homme",
      price: 10000 + " Fcfa",
      add: "Ajouter au panier",
    },
    {
      id: 5,
      img: img6,
      name: "Tenu homme",
      price: 10000 + " Fcfa",
      add: "Ajouter au panier",
    },
    {
      id: 6,
      img: img7,
      name: "Tenu homme",
      price: 10000 + " Fcfa",
      add: "Ajouter au panier",
    },
    {
      id: 7,
      img: img8,
      name: "Tenu homme",
      price: 10000 + " Fcfa",
      add: "Ajouter au panier",
    },
    {
      id: 8,
      img: img9,
      name: "Tenu homme",
      price: 10000 + " Fcfa",
      add: "Ajouter au panier",
    },
    {
      id: 9,
      img: img10,
      name: "Tenu homme",
      price: 10000 + " Fcfa",
      add: "Ajouter au panier",
    },
    {
      id: 10,
      img: img11,
      name: "Tenu homme",
      price: 10000 + " Fcfa",
      add: "Ajouter au panier",
    },
    {
      id: 11,
      img: img12,
      name: "Tenu homme",
      price: 10000 + " Fcfa",
      add: "Ajouter au panier",
    },
  ];
  return (
    <div>
      <Navigation />
      <h1 className="p-t">Hommes</h1>
      <div className="modeles">
        {hommes.map((homme) => {
          return <MHommesList key={homme.id} {...homme} />;
        })}
      </div>
      <Footer />
    </div>
  );
};

export default MHommes;
