import { Link } from "react-router-dom/cjs/react-router-dom";
import search from "./img/icons/search.png";
import heart from "./img/icons/heart.png";
import compare from "./img/icons/compare.png";
import React, { useState, useEffect } from "react";
import { getDatabase, ref, onValue } from "firebase/database";

const Products = () => {
  const [productNames, setProductNames] = useState([]);
  const [productPrices, setProductPrices] = useState([]);
  const [productImage, setProductImage] = useState([]);
  const [productId, setProductId] = useState([]);
  const [productVari, setProductVari] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const dbRef = ref(getDatabase(), "products");

      onValue(dbRef, (snapshot) => {
        const products = snapshot.val();

        if (products) {
          const productNamesArray = Object.values(products).map(
            (product) => product.name
          );
          const productPriceArray = Object.values(products).map(
            (product) => product.price
          );
          const productImageArray = Object.values(products).map(
            (product) => product.image
          );
          const productIdArray = Object.values(products).map(
            (product) => product.id
          );
          const productVariArray = Object.values(products).map(
            (product) => product.vari
          );

          setProductNames(productNamesArray);
          setProductPrices(productPriceArray);
          setProductImage(productImageArray);
          setProductId(productIdArray);
          setProductVari(productVariArray);
        }
      });
    };

    fetchData();

    return () => {};
  }, []);

  const productsarray = productNames.map((name, index) => ({
    name,
    price: productPrices[index],
    image: productImage[index],
    id: productId[index],
    vari: productVari[index],
  }));
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
          {productsarray.map((product, index) => (
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
                <div className="product__item__text" key={product.id}>
                  <h6>{product.name}</h6>
                  <Link to={`/shop/${product.id}`} className="add-cart">
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
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
