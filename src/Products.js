import { Link } from "react-router-dom/cjs/react-router-dom";
import { useHistory } from "react-router-dom";
import search from "./img/icons/search.png";
import heart from "./img/icons/heart.png";
import compare from "./img/icons/compare.png";
import React, { useState, useEffect } from "react";
import { getDatabase, ref, onValue } from "firebase/database";

const Products = () => {
  const history = useHistory();
  const [aclass, setAclass] = useState([
    {
      class1: null,
      class2: null,
      class3: null,
    },
  ]);
  const [productNames, setProductNames] = useState([]);
  const [productPrices, setProductPrices] = useState([]);
  const [productImage, setProductImage] = useState([]);
  const [productId, setProductId] = useState([]);
  const [productVari, setProductVari] = useState([]);
  const [productDeal, setProductDeal] = useState([]);
  const [filtered, setFiltered] = useState([]);

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
          const productDealArray = Object.values(products).map(
            (product) => product.deal
          );

          setProductNames(productNamesArray);
          setProductPrices(productPriceArray);
          setProductImage(productImageArray);
          setProductId(productIdArray);
          setProductVari(productVariArray);
          setProductDeal(productDealArray);
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
    deal: productDeal[index],
  }));
  const handleClick = (e) => {
    history.push(`/shop/${e}`);
  };
  const handleClick1 = () => {
    setAclass((aclasses) =>
      aclasses.map((aclassItem) => ({
        class1: "active",
        class2: null,
        class3: null,
      }))
    );
    setFiltered([...productsarray]);
  };
  const handleClick2 = () => {
    setAclass((aclasses) =>
      aclasses.map((aclassItem) => ({
        class1: null,
        class2: "active",
        class3: null,
      }))
    );
    const temp1 = [...productsarray].filter(
      (product) => product.deal === "new"
    );
    setFiltered([...temp1]);
  };
  const handleClick3 = () => {
    setAclass((aclasses) =>
      aclasses.map((aclassItem) => ({
        class1: null,
        class2: null,
        class3: "active",
      }))
    );
    const temp1 = [...productsarray].filter(
      (product) => product.deal === "hot"
    );
    setFiltered([...temp1]);
  };
  console.log(filtered, ">>>>>>>>");
  const ProductItem = ({ product, index }) => {
    return (
      <div className="col-lg-3 col-md-6 col-sm-6 col-md-6 col-sm-6">
        <div className="product__item">
          <div
            className="product__item__pic set-bg"
            style={{ backgroundImage: `url(${product.image})` }}
            onClick={() => handleClick(product.id)}
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
    );
  };
  return (
    <section className="product spad">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <ul className="filter__controls">
              <li className={aclass[0].class1} onClick={handleClick1}>
                Best Sellers
              </li>
              <li className={aclass[0].class2} onClick={handleClick2}>
                New Arrivals
              </li>
              <li className={aclass[0].class3} onClick={handleClick3}>
                Hot Sales
              </li>
            </ul>
          </div>
        </div>
        <div className="row product__filter">
          {filtered.length > 0 &&
            filtered.map((product, index) => (
              <ProductItem product={product} index={index} key={product.id} />
            ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
