import { Link } from "react-router-dom/cjs/react-router-dom";
import logo from "./img/icons/logo.png";
import search from "./img/icons/search.png";
import heart from "./img/icons/heart.png";
import bag from "./img/icons/cart.png";
import "boxicons";
import { useSelector } from "react-redux";
import { useState } from "react";

const Navbar = () => {
  const [select1, setSelect1] = useState("");
  const [select2, setSelect2] = useState("");
  const [select3, setSelect3] = useState("");
  const [select4, setSelect4] = useState("");
  const { sign } = useSelector((state) => state.counter);
  const { id } = useSelector((state) => state.counter);

  const handleClick1 = () => {
    setSelect1("active");
    setSelect2(null);
    setSelect3(null);
    setSelect4(null);
  };
  const handleClick2 = () => {
    setSelect1(null);
    setSelect2("active");
    setSelect3(null);
    setSelect4(null);
  };
  const handleClick3 = () => {
    setSelect1(null);
    setSelect2(null);
    setSelect3("active");
    setSelect4(null);
  };
  const handleClick4 = () => {
    setSelect1(null);
    setSelect2(null);
    setSelect3(null);
    setSelect4("active");
  };

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
                  {sign && <Link to="/signin">Sign in</Link>}
                  {!sign && <Link to={`/profile/${id}`}>Profile</Link>}
                  {id === "0" && <Link to="/profilelist">Profile List</Link>}
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
                <li className={select1} onClick={handleClick1}>
                  <Link to="/home">Home</Link>
                </li>
                <li className={select2} onClick={handleClick2}>
                  <Link to="/shop">Shop</Link>
                </li>
                <li className={select3} onClick={handleClick3}>
                  <Link to="/blogs">Blog</Link>
                </li>
                <li className={select4} onClick={handleClick4}>
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
              <Link to="/cart">
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
