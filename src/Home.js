import "boxicons";
import hero1 from "./img/hero-1.jpg";
import banner1 from "./img/banner/banner-1.jpg";
import banner2 from "./img/banner/banner-2.jpg";
import banner3 from "./img/banner/banner-3.jpg";
import { Link } from "react-router-dom/cjs/react-router-dom";
import Products from "./Products";

const Home = () => {
  return (
    <div className="home">
      <section className="hero">
        <div className="hero__slider owl-carousel">
          <div
            className="hero__items set-bg"
            style={{ backgroundImage: `url(${hero1})` }}
          >
            <div className="container">
              <div className="row">
                <div className="col-xl-5 col-lg-7 col-md-8">
                  <div className="hero__text">
                    <h6>Summer Collection</h6>
                    <h2>Fall - Winter Collections 2030</h2>
                    <p>
                      A specialist label creating luxury essentials. Ethically
                      crafted with an unwavering commitment to exceptional
                      quality.
                    </p>
                    <Link to="/shop" className="primary-btn">
                      Shop now
                    </Link>
                    <div className="hero__social">
                      <Link to="/home">
                        <box-icon name="facebook" type="logo" />
                      </Link>
                      <Link to="/home">
                        <box-icon name="twitter" type="logo" />
                      </Link>
                      <Link to="/home">
                        <box-icon name="pinterest" type="logo" />
                      </Link>
                      <Link to="/home">
                        <box-icon name="instagram" type="logo" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/*-----------------------------------------------------------------------------------------------------*/}

      <section className="banner spad">
        <div className="container">
          <div className="row">
            <div className="col-lg-7 offset-lg-4">
              <div className="banner__item">
                <div className="banner__item__pic">
                  <img src={banner1} alt="banner1" />
                </div>
                <div className="banner__item__text">
                  <h2>Clothing Collections 2030</h2>
                  <Link to="/">Shop now</Link>
                </div>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="banner__item banner__item--middle">
                <div className="banner__item__pic">
                  <img src={banner2} alt="banner2" />
                </div>
                <div className="banner__item__text">
                  <h2>Accessories</h2>
                  <Link to="/">Shop now</Link>
                </div>
              </div>
            </div>
            <div className="col-lg-7">
              <div className="banner__item banner__item--last">
                <div className="banner__item__pic">
                  <img src={banner3} alt="banner3" />
                </div>
                <div className="banner__item__text">
                  <h2>Shoes Spring 2030</h2>
                  <Link to="/">Shop now</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Products />
    </div>
  );
};

export default Home;
