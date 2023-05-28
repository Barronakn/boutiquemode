import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import MCouplesList from "../components/MCouplesList";
import img1 from "/public/WhatsApp_Image_2023-02-25_at_16.54.47-removebg-preview.png";
import img2 from "/public/WhatsApp_Image_2023-02-25_at_16.54.46__1_-removebg-preview.png";
import img3 from "/public/WhatsApp_Image_2023-02-25_at_16.54.46__2_-removebg-preview.png";
import img4 from "/public/WhatsApp_Image_2023-02-25_at_16.54.46-removebg-preview (1).png";
import img5 from "/public/WhatsApp_Image_2023-02-25_at_16.54.47__2_-removebg-preview.png";
import img6 from "/public/couples.png";
import img7 from "/public/WhatsApp_Image_2023-02-25_at_16.54.48-removebg-preview.png";
import img8 from "/public/WhatsApp_Image_2023-02-25_at_16.54.47__3_-removebg-preview.png";
import img9 from "/public/WhatsApp_Image_2023-02-25_at_16.54.47__1_-removebg-preview.png";
import img10 from "/public/WhatsApp_Image_2023-02-25_at_16.54.46-removebg-preview.png";
import img11 from "/public/WhatsApp_Image_2023-02-25_at_16.54.45-removebg-preview.png";
import img12 from "/public/xdcfvjmlkjhbg.png";

const MCouples = () => {
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
