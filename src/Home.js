import "boxicons";
import hero1 from "./img/hero-1.jpg";
import banner1 from "./img/banner-1.jpg";
import { Link } from "react-router-dom/cjs/react-router-dom";

const Home = () => {
  return (
    <div className="home">
      <div className="home-first">
        <img src={hero1} alt="hero1" />
        <div className="home-first-content">
          <h6>SUMMER COLLECTION</h6>
          <h2>
            Fall - Winter
            <br />
            Collections 2030
          </h2>
          <p>
            A specialist label creating luxury essentials. Ethically crafted
            with an unwaveringcommitment to exceptional quality.
          </p>
          <Link to="/shop">Shop Now</Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
