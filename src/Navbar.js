import { Link } from "react-router-dom/cjs/react-router-dom";
import logo from "./img/logo.png";
import search from "./img/search.png";
import heart from "./img/heart.png";
import bag from "./img/cart.png";
import "boxicons";

const Navbar = () => {
  return (
    <header>
      <div className="top">
        <div className="top-left">
          <p>Free shipping, 30-day return or refund guarantee.</p>
        </div>
        <div className="top-right" style={{ float: "right" }}>
          <Link to="/signin">SIGN IN</Link>
          <Link to="/faq">FAQs</Link>
        </div>
      </div>
      <nav className="navbar">
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="links">
          <Link to="/home">Home</Link>
          <Link to="/shop">Shop</Link>
          <Link to="/blog">Blogs</Link>
          <Link to="/contact">Contacts</Link>
        </div>
      </nav>
      <div className="icons">
        <img src={search} alt="search" />
        <img src={heart} alt="like" />
        <img src={bag} alt="cart" />
      </div>
    </header>
  );
};

export default Navbar;
