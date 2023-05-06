import Navigation from "../components/Navigation";
import Boutique from "../components/Boutique";
import Footer from "../components/Footer";
import womanPic from "dist/womanPic.png";
import hommePic from "dist/hommePic.png";

const Home = () => {
  return (
    <div>
      <div className="home">
        <Navigation />
        <div className="homeContainer">
          <div className="homeImg">
            <img src={womanPic} alt="womanPic" />
            <h1 className="homeTitle">Welcome to Akn Shop</h1>
            <img src={hommePic} alt="hommePic" />
          </div>
        </div>
      </div>
      <Boutique />
      <Footer />
    </div>
  );
};

export default Home;
