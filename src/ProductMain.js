import { Link } from "react-router-dom/cjs/react-router-dom";
import heart from "./img/icons/heart.png";
import compare from "./img/icons/compare.png";
import React, { useState, useEffect } from "react";
import { getDatabase, ref, onValue } from "firebase/database";

const ProductMain = () => {
  const [productNames, setProductNames] = useState([]);
  const [productCost, setProductCost] = useState([]);
  const [productImage, setProductImage] = useState([]);
  const [productId, setProductId] = useState([]);
  const [productDescrip, setProductDescrip] = useState([]);
  const [productProd, setProductProd] = useState([]);
  const [productQuan, setProductQuan] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const dbRef = ref(getDatabase(), "shops");

      onValue(dbRef, (snapshot) => {
        const shops = snapshot.val();

        if (shops) {
          const productNamesArray = Object.values(shops).map(
            (shop) => shop.name
          );
          const productCostArray = Object.values(shops).map(
            (shop) => shop.cost
          );
          const productImageArray = Object.values(shops).map(
            (shop) => shop.image
          );
          const productIdArray = Object.values(shops).map((shop) => shop.id);
          const productDescripArray = Object.values(shops).map(
            (shop) => shop.vari
          );
          const productProdArray = Object.values(shops).map(
            (shop) => shop.prod
          );
          const productQuanArray = Object.values(shops).map(
            (shop) => shop.quan
          );

          setProductNames(productNamesArray);
          setProductCost(productCostArray);
          setProductImage(productImageArray);
          setProductId(productIdArray);
          setProductDescrip(productDescripArray);
          setProductProd(productProdArray);
          setProductQuan(productQuanArray);
        }
      });
    };

    fetchData();

    return () => {};
  }, []);

  const productsarray = productNames.map((name, index) => ({
    name,
    cost: productCost[index],
    image: productImage[index],
    id: productId[index],
    descrip: productDescrip[index],
    prod: productProd[index],
    quan: productQuan[index],
  }));
  return (
    <div className="row">
      {productsarray.map((shop) => (
        <div class="col-lg-4 col-md-6 col-sm-6">
          <div class="product__item" key={shop.id}>
            <Link to={`/shop/${shop.id}`}>
              <div
                class="product__item__pic set-bg"
                style={{ backgroundImage: `url(${shop.image})` }}
                key={shop.id}
              >
                <ul class="product__hover">
                  <li>
                    <Link to="/">
                      <img src={heart} alt="Heart" />
                      <span>Like</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/">
                      <img src={compare} alt="Compare" />
                      <span>Compare</span>
                    </Link>
                  </li>
                </ul>
              </div>
            </Link>
            <div class="product__item__text" key={shop.id}>
              <h6>{shop.name}</h6>
              <Link to={`/shop/${shop.id}`} class="add-cart">
                + Add To Cart
              </Link>
              <div class="rating">
                <box-icon type="solid" name="star" />
                <box-icon type="solid" name="star" />
                <box-icon type="solid" name="star" />
                <box-icon name="star-half" type="solid" />
                <box-icon name="star" />
              </div>
              <h5>${shop.cost}</h5>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductMain;
