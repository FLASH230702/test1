import { Link } from "react-router-dom/cjs/react-router-dom";
import ProductMain from "./ProductMain";
import { useState } from "react";

const Shop = () => {
  const [isOpen1, setIsOpen1] = useState(true);
  const [isOpen2, setIsOpen2] = useState(true);
  const [isOpen3, setIsOpen3] = useState(true);
  const [isOpen4, setIsOpen4] = useState(true);
  const [isOpen5, setIsOpen5] = useState(true);
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedColor, setSelectedColor] = useState("");
  const toggleMenu1 = () => {
    setIsOpen1(!isOpen1);
  };
  const toggleMenu2 = () => {
    setIsOpen2(!isOpen2);
  };
  const toggleMenu3 = () => {
    setIsOpen3(!isOpen3);
  };
  const toggleMenu4 = () => {
    setIsOpen4(!isOpen4);
  };
  const toggleMenu5 = () => {
    setIsOpen5(!isOpen5);
  };

  const handleSizeChange = (event) => {
    setSelectedSize(event.target.value);
  };
  const handleColorChange = (event) => {
    setSelectedColor(event.target.value);
  };
  return (
    <section className="shop spad">
      <div className="container">
        <div className="row">
          <div className="col-lg-3">
            <div className="shop__sidebar">
              <div className="shop__sidebar__search">
                <form action="/">
                  <input type="text" placeholder="Search..." />
                  <button type="submit">
                    <span className="icon_search"></span>
                  </button>
                </form>
              </div>
              <div className="shop__sidebar__accordion">
                <div className="accordion" id="accordionExample">
                  <div className="card">
                    <div className="card-heading">
                      <button className="btn btn-link" onClick={toggleMenu1}>
                        Categories
                      </button>
                    </div>
                    <div className={`collapse ${isOpen1 ? "show" : ""}`}>
                      <div className="card-body">
                        <div className="shop__sidebar__categories">
                          <ul className="nice-scroll">
                            <li>
                              <a href="/">Men (20)</a>
                            </li>
                            <li>
                              <a href="/">Women (20)</a>
                            </li>
                            <li>
                              <a href="/">Bags (20)</a>
                            </li>
                            <li>
                              <a href="/">Clothing (20)</a>
                            </li>
                            <li>
                              <a href="/">Shoes (20)</a>
                            </li>
                            <li>
                              <a href="/">Accessories (20)</a>
                            </li>
                            <li>
                              <a href="/">Kids (20)</a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <div className="card-heading">
                      <button className="btn btn-link" onClick={toggleMenu2}>
                        Branding
                      </button>
                    </div>
                    <div className={`collapse ${isOpen2 ? "show" : ""}`}>
                      <div className="card-body">
                        <div className="shop__sidebar__brand">
                          <ul className="nice-scroll">
                            <li>
                              <a href="/">Louis Vuitton</a>
                            </li>
                            <li>
                              <a href="/">Chanel</a>
                            </li>
                            <li>
                              <a href="/">Hermes</a>
                            </li>
                            <li>
                              <a href="/">Gucci</a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <div className="card-heading">
                      <button className="btn btn-link" onClick={toggleMenu3}>
                        Filter Price
                      </button>
                    </div>
                    <div className={`collapse ${isOpen3 ? "show" : ""}`}>
                      <div className="card-body">
                        <div className="shop__sidebar__price">
                          <ul className="nice-scroll">
                            <li>
                              <a href="/">$0.00 - $50.00</a>
                            </li>
                            <li>
                              <a href="/">$50.00 - $100.00</a>
                            </li>
                            <li>
                              <a href="/">$100.00 - $150.00</a>
                            </li>
                            <li>
                              <a href="/">$150.00 - $200.00</a>
                            </li>
                            <li>
                              <a href="/">250.00+</a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <div className="card-heading">
                      <button className="btn btn-link" onClick={toggleMenu4}>
                        Size
                      </button>
                    </div>
                    <div className={`collapse ${isOpen4 ? "show" : ""}`}>
                      <div className="card-body">
                        <div className="shop__sidebar__size">
                          <label
                            htmlFor="xs"
                            className={selectedSize === "xs" ? "selected" : ""}
                          >
                            xs
                            <input
                              type="radio"
                              id="xs"
                              name="size"
                              value="xs"
                              checked={selectedSize === "xs"}
                              onChange={handleSizeChange}
                            />
                          </label>
                          <label
                            htmlFor="sm"
                            className={selectedSize === "sm" ? "selected" : ""}
                          >
                            s
                            <input
                              type="radio"
                              id="sm"
                              name="size"
                              value="sm"
                              checked={selectedSize === "sm"}
                              onChange={handleSizeChange}
                            />
                          </label>
                          <label
                            htmlFor="md"
                            className={selectedSize === "md" ? "selected" : ""}
                          >
                            m
                            <input
                              type="radio"
                              id="md"
                              name="size"
                              value="md"
                              checked={selectedSize === "md"}
                              onChange={handleSizeChange}
                            />
                          </label>
                          <label
                            htmlFor="xl"
                            className={selectedSize === "xl" ? "selected" : ""}
                          >
                            xl
                            <input
                              type="radio"
                              id="xl"
                              name="size"
                              value="xl"
                              checked={selectedSize === "xl"}
                              onChange={handleSizeChange}
                            />
                          </label>
                          <label
                            htmlFor="2xl"
                            className={selectedSize === "2xl" ? "selected" : ""}
                          >
                            2xl
                            <input
                              type="radio"
                              id="2xl"
                              name="size"
                              value="2xl"
                              checked={selectedSize === "2xl"}
                              onChange={handleSizeChange}
                            />
                          </label>
                          <label
                            htmlFor="3xl"
                            className={selectedSize === "3xl" ? "selected" : ""}
                          >
                            3xl
                            <input
                              type="radio"
                              id="3xl"
                              name="size"
                              value="3xl"
                              checked={selectedSize === "3xl"}
                              onChange={handleSizeChange}
                            />
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <div className="card-heading">
                      <button className="btn btn-link" onClick={toggleMenu5}>
                        Colours
                      </button>
                    </div>
                    <div className={`collapse ${isOpen5 ? "show" : ""}`}>
                      <div className="card-body">
                        <div className="shop__sidebar__color">
                          <label
                            htmlFor="black"
                            className={
                              selectedColor === "black" ? "selected" : ""
                            }
                            style={{ backgroundColor: "black" }}
                          >
                            <input
                              type="radio"
                              id="black"
                              name="color"
                              value="black"
                              checked={selectedColor === "#0b090c"}
                              onChange={handleColorChange}
                            />
                          </label>
                          <label
                            htmlFor="red"
                            className={
                              selectedColor === "red" ? "selected" : ""
                            }
                            style={{ backgroundColor: "#20315f" }}
                          >
                            <input
                              type="radio"
                              id="red"
                              name="color"
                              value="red"
                              checked={selectedColor === "red"}
                              onChange={handleColorChange}
                            />
                          </label>
                          <label
                            htmlFor="green"
                            className={
                              selectedColor === "green" ? "selected" : ""
                            }
                            style={{ backgroundColor: "#f1af4d" }}
                          >
                            <input
                              type="radio"
                              id="green"
                              name="color"
                              value="green"
                              checked={selectedColor === "green"}
                              onChange={handleColorChange}
                            />
                          </label>
                          <label
                            htmlFor="blue"
                            className={
                              selectedColor === "blue" ? "selected" : ""
                            }
                            style={{ backgroundColor: "#636068" }}
                          >
                            <input
                              type="radio"
                              id="blue"
                              name="color"
                              value="blue"
                              checked={selectedColor === "blue"}
                              onChange={handleColorChange}
                            />
                          </label>
                          <label
                            htmlFor="orange"
                            className={
                              selectedColor === "orange" ? "selected" : ""
                            }
                            style={{ backgroundColor: "#57594d" }}
                          >
                            <input
                              type="radio"
                              id="orange"
                              name="color"
                              value="orange"
                              checked={selectedColor === "orange"}
                              onChange={handleColorChange}
                            />
                          </label>
                          <label
                            htmlFor="magenta"
                            className={
                              selectedColor === "magenta" ? "selected" : ""
                            }
                            style={{ backgroundColor: "#e8bac4" }}
                          >
                            <input
                              type="radio"
                              id="magenta"
                              name="color"
                              value="magenta"
                              checked={selectedColor === "magenta"}
                              onChange={handleColorChange}
                            />
                          </label>
                          <label
                            htmlFor="gold"
                            className={
                              selectedColor === "gold" ? "selected" : ""
                            }
                            style={{ backgroundColor: "#d6c1d7" }}
                          >
                            <input
                              type="radio"
                              id="gold"
                              name="color"
                              value="gold"
                              checked={selectedColor === "gold"}
                              onChange={handleColorChange}
                            />
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-9">
            <div className="shop__product__option">
              <div className="row">
                <div className="col-lg-6 col-md-6 col-sm-6">
                  <div className="shop__product__option__left">
                    <p>Showing 1-12 of 126 results</p>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6">
                  <div className="shop__product__option__right">
                    <p>Sort by Price:</p>
                    <select>
                      <option value="">Low To High</option>
                      <option value="">Popularity</option>
                      <option value="">New Arrivals</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
            <ProductMain />
            <div className="row">
              <div className="col-lg-12">
                <div className="product__pagination">
                  <Link className="active" to="/shop">
                    1
                  </Link>
                  <Link to="/shop">2</Link>
                  <Link to="/shop">3</Link>
                  <span>...</span>
                  <Link to="/shop">21</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Shop;
