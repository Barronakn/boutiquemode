import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import MCouplesList from "../components/MCouplesList";

const MCouples = () => {
  const couples = [
    {
      id: 0,
      img: "/dist/WhatsApp_Image_2023-02-25_at_16.54.47-removebg-preview.png",
      name: "Robe",
      price: 10000 + " Fcfa",
      add: "Ajouter au panier",
    },
    {
      id: 1,
      img: "/dist/WhatsApp_Image_2023-02-25_at_16.54.46__1_-removebg-preview.png",
      name: "Robe",
      price: 10000 + " Fcfa",
      add: "Ajouter au panier",
    },
    {
      id: 2,
      img: "/dist/WhatsApp_Image_2023-02-25_at_16.54.46__2_-removebg-preview.png",
      name: "Robe",
      price: 10000 + " Fcfa",
      add: "Ajouter au panier",
    },
    {
      id: 3,
      img: "/dist/WhatsApp_Image_2023-02-25_at_16.54.46-removebg-preview (1).png",
      name: "Robe",
      price: 10000 + " Fcfa",
      add: "Ajouter au panier",
    },
    {
      id: 4,
      img: "/dist/WhatsApp_Image_2023-02-25_at_16.54.47__2_-removebg-preview.png",
      name: "Robe",
      price: 10000 + " Fcfa",
      add: "Ajouter au panier",
    },
    {
      id: 5,
      img: "/dist/couples.png",
      name: "Robe",
      price: 10000 + " Fcfa",
      add: "Ajouter au panier",
    },
    {
      id: 6,
      img: "/dist/WhatsApp_Image_2023-02-25_at_16.54.48-removebg-preview.png",
      name: "Robe",
      price: 10000 + " Fcfa",
      add: "Ajouter au panier",
    },
    {
      id: 7,
      img: "/dist/WhatsApp_Image_2023-02-25_at_16.54.47__3_-removebg-preview.png",
      name: "Robe",
      price: 10000 + " Fcfa",
      add: "Ajouter au panier",
    },
    {
      id: 8,
      img: "/dist/WhatsApp_Image_2023-02-25_at_16.54.47__1_-removebg-preview.png",
      name: "Robe",
      price: 10000 + " Fcfa",
      add: "Ajouter au panier",
    },
    {
      id: 9,
      img: "/dist/WhatsApp_Image_2023-02-25_at_16.54.46-removebg-preview.png",
      name: "Robe",
      price: 10000 + " Fcfa",
      add: "Ajouter au panier",
    },
    {
      id: 10,
      img: "/dist/WhatsApp_Image_2023-02-25_at_16.54.45-removebg-preview.png",
      name: "Robe",
      price: 10000 + " Fcfa",
      add: "Ajouter au panier",
    },
    {
      id: 11,
      img: "/dist/xdcfvjmlkjhbg.png",
      name: "Robe",
      price: 10000 + " Fcfa",
      add: "Ajouter au panier",
    },
  ];
  return (
    <div>
      <Navigation />
      <h1 className="p-t">Couples</h1>
      <div className="modeles">
        {couples.map((couple) => {
          return <MCouplesList key={couple.id} {...couple} />;
        })}
      </div>
      <Footer />
    </div>
  );
};

export default MCouples;
