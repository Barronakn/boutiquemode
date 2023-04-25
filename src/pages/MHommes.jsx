import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import MHommesList from "../components/MHommesList";

const MHommes = () => {
  const hommes = [
    {
      id: 0,
      img: "/dist/7a90f53dc3a2ed7ea5f600eb8ee0750f-removebg-preview.png",
      name: "Tenu homme",
      price: 10000 + " Fcfa",
      add: "Ajouter au panier",
    },
    {
      id: 1,
      img: "/dist/9fa789dca9b542b98e6e5415cc4d6732-removebg-preview.png",
      name: "Tenu homme",
      price: 10000 + " Fcfa",
      add: "Ajouter au panier",
    },
    {
      id: 2,
      img: "/dist/1541ZYHJ-default-removebg-preview.png",
      name: "Tenu homme",
      price: 10000 + " Fcfa",
      add: "Ajouter au panier",
    },
    {
      id: 3,
      img: "/dist/179402f471b52143e5258861dedca882-removebg-preview.png",
      name: "Tenu homme",
      price: 10000 + " Fcfa",
      add: "Ajouter au panier",
    },
    {
      id: 4,
      img: "/dist/chemise-homme-en-pagne-wax-africain-847_400x-removebg-preview.png",
      name: "Tenu homme",
      price: 10000 + " Fcfa",
      add: "Ajouter au panier",
    },
    {
      id: 5,
      img: "/dist/fadzeco-africain-hommes-chemise-nouveau-design-a-m-removebg-preview.png",
      name: "Tenu homme",
      price: 10000 + " Fcfa",
      add: "Ajouter au panier",
    },
    {
      id: 6,
      img: "/dist/Hab03902b56f44285a42204cf0a2c45e1h.png_300x300-removebg-preview.png",
      name: "Tenu homme",
      price: 10000 + " Fcfa",
      add: "Ajouter au panier",
    },
    {
      id: 7,
      img: "/dist/hommePic.png",
      name: "Tenu homme",
      price: 10000 + " Fcfa",
      add: "Ajouter au panier",
    },
    {
      id: 8,
      img: "/dist/Hommes.png",
      name: "Tenu homme",
      price: 10000 + " Fcfa",
      add: "Ajouter au panier",
    },
    {
      id: 9,
      img: "/dist/HTB1Phh_UNYaK1RjSZFnq6y80pXa1-removebg-preview.png",
      name: "Tenu homme",
      price: 10000 + " Fcfa",
      add: "Ajouter au panier",
    },
    {
      id: 10,
      img: "/dist/images-removebg-preview.png",
      name: "Tenu homme",
      price: 10000 + " Fcfa",
      add: "Ajouter au panier",
    },
    {
      id: 11,
      img: "/dist/rBVaVFzTvjKAelGZAAIn8Is1vB4560-removebg-preview.png",
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
