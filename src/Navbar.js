import { Link } from "react-router-dom/cjs/react-router-dom";
import logo from "./img/icons/logo.png";
import search from "./img/icons/search.png";
import heart from "./img/icons/heart.png";
import bag from "./img/icons/cart.png";
import "boxicons";

const Navbar = () => {
  return (
    <header className="header">
      <div className="header__top">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-7">
              <div className="header__top__left">
                <p>Free shipping, 30-day return or refund guarantee.</p>
              </div>
            </div>
            <div className="col-lg-6 col-md-5">
              <div className="header__top__right">
                <div className="header__top__links">
                  <Link to="/signin">Sign in</Link>
                  <Link to="/faq">FAQs</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-3">
            <div className="header__logo">
              <Link to="/home">
                <img src={logo} alt="logo" />
              </Link>
            </div>
          </div>
          <div className="col-lg-6 col-md-6">
            <nav className="header__menu mobile-menu">
              <ul>
                <li className="active">
                  <Link to="/home">Home</Link>
                </li>
                <li>
                  <Link to="/shop">Shop</Link>
                </li>
                <li>
                  <Link to="/blogs">Blog</Link>
                </li>
                <li>
                  <Link to="/contact">Contacts</Link>
                </li>
              </ul>
            </nav>
          </div>
          <div className="col-lg-3 col-md-3">
            <div className="header__nav__option">
              <Link to="/" className="search-switch">
                <img src={search} alt="search" />
              </Link>
              <Link to="/">
                <img src={heart} alt="Like" />
              </Link>
              <Link to="/">
                <img src={bag} alt="Cart" />
              </Link>
            </div>
          </div>
        </div>
        {/* <div className="canvas__open">
          <i className="fa fa-bars"></i>
        </div> */}
      </div>
    </header>
  );
};

export default Navbar;
