import { Link } from "react-router-dom/cjs/react-router-dom";
import useFetch from "./useFetch";
import search from "./img/icons/search.png";
import heart from "./img/icons/heart.png";
import compare from "./img/icons/compare.png";

const Products = () => {
  const { data: products } = useFetch("http://localhost:8000/products");
  return (
    <section className="product spad">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <ul className="filter__controls">
              <li className="active">Best Sellers</li>
              <li>New Arrivals</li>
              <li>Hot Sales</li>
            </ul>
          </div>
        </div>
        <div className="row product__filter">
          {products
            ? products.map((product) => (
                <div className="col-lg-3 col-md-6 col-sm-6 col-md-6 col-sm-6">
                  <div className="product__item">
                    <div
                      className="product__item__pic set-bg"
                      style={{ backgroundImage: `url(${product.image})` }}
                      key={product.id}
                    >
                      <span className="label">{product.vari}</span>
                      <ul className="product__hover">
                        <li>
                          <Link to="/home">
                            <img src={heart} alt="heart" />
                            <span>Like</span>
                          </Link>
                        </li>
                        <li>
                          <Link to="/home">
                            <img src={compare} alt="compare" />
                            <span>Compare</span>
                          </Link>
                        </li>
                        <li>
                          <Link to="/home">
                            <img src={search} alt="search" />
                            <span>Search</span>
                          </Link>
                        </li>
                      </ul>
                    </div>
                    <div className="product__item__text">
                      <h6>{product.name}</h6>
                      <Link to="/home" className="add-cart">
                        + Add To Cart
                      </Link>
                      <div className="rating">
                        <box-icon name="star" />
                        <box-icon name="star" />
                        <box-icon name="star" />
                        <box-icon name="star" />
                        <box-icon name="star" />
                      </div>
                      <h5>${product.price}</h5>
                    </div>
                  </div>
                </div>
              ))
            : "Loading . . ."}
        </div>
      </div>
    </section>
  );
};

export default Products;
