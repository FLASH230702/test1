import { Link, useParams } from "react-router-dom/cjs/react-router-dom.min";
import payment from "./img/details-payment.png";
import heart from "./img/icons/heart.png";
import compare from "./img/icons/compare.png";
import React, { useState, useEffect } from "react";
import { getDatabase, ref, onValue, set, get } from "firebase/database";
import { app } from "./firebase";
import { useSelector } from "react-redux";

const db = getDatabase(app);

const ShopDetails = () => {
  const { id } = useParams();
  const { ud } = useSelector((state) => state.counter);
  const { qtn, setQtn } = useState(1);
  const { changeddown, setChangedDown } = useState("black");
  const { changedup, setChangedUp } = useState("black");
  const [productNames, setProductNames] = useState([]);
  const [productCost, setProductCost] = useState([]);
  const [productImage, setProductImage] = useState([]);
  const [productId, setProductId] = useState([]);
  const [productDescrip, setProductDescrip] = useState([]);
  const [productProd, setProductProd] = useState([]);
  const [productQuan, setProductQuan] = useState([]);
  const [text, setText] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const dbRef = ref(getDatabase(), `shops`);

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
            (shop) => shop.descrip
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
  const filteredProductsArray = productsarray.filter(
    (product) => product.id === id
  );
  const changeQtnUp = () => {
    if (qtn > 0) {
      setQtn(qtn + 1);
      setChangedUp("black");
    } else if (qtn === filteredProductsArray.quan) {
      setQtn(qtn);
      setChangedUp("white");
    }
  };
  const changeQtnDown = () => {
    if (qtn === 0) {
      setQtn(qtn);
      setChangedDown("white");
    } else {
      setQtn(qtn - 1);
      setChangedDown("black");
    }
  };
  const handleClick = () => {
    const cartRef = ref(db, `profiles/${ud}/cart`);
    get(cartRef).then((snapshot) => {
      const existingCart = snapshot.val() || {};
      const newProduct = {
        id: id,
        value: true,
      };
      const updatedCart = {
        ...existingCart,
        [`product${id}`]: newProduct,
      };
      set(cartRef, updatedCart);
    });
    setText("Item Added To Cart");
  };
  console.log(filteredProductsArray);
  return (
    <div className="main">
      {filteredProductsArray.map((shop) => (
        <section className="shop-details">
          <div className="product__details__pic">
            <div className="container">
              <div className="row">
                <div className="col-lg-3 col-md-3">
                  <ul className="nav nav-tabs" role="tablist">
                    <li className="nav-item">
                      <div className="nav-link">
                        <div
                          className="product__thumb__pic set-bg"
                          style={{
                            backgroundImage: `url(${shop.image})`,
                          }}
                        ></div>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="col-lg-6 col-md-9">
                  <div className="tab-content">
                    <div
                      className="tab-pane active"
                      id="tabs-1"
                      role="tabpanel"
                    >
                      <div className="product__details__pic__item">
                        <img src={shop.image} alt={shop.name} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="product__details__content">
            <div className="container">
              <div className="row d-flex justify-content-center">
                <div className="col-lg-8">
                  <div className="product__details__text">
                    <h4>{shop.name}</h4>
                    <div className="rating">
                      <box-icon name="star" type="solid" color="#f7941d" />
                      <box-icon name="star" type="solid" color="#f7941d" />
                      <box-icon name="star" type="solid" color="#f7941d" />
                      <box-icon name="star" type="solid" color="#f7941d" />
                      <box-icon name="star" type="solid" color="#f7941d" />
                      <span> - 5 Reviews</span>
                    </div>
                    <h3>
                      ${shop.cost} <span>70.00</span>
                    </h3>
                    <p>{shop.descrip}</p>
                    <div className="product__details__option">
                      <div className="product__details__option__size">
                        <span>Size:</span>
                        <label for="xxl">
                          xxl
                          <input type="radio" id="xxl" name="size" />
                        </label>
                        <label for="xl">
                          xl
                          <input type="radio" id="xl" name="size" />
                        </label>
                        <label for="l">
                          l
                          <input type="radio" id="l" name="size" />
                        </label>
                        <label for="sm">
                          s
                          <input type="radio" id="sm" name="size" />
                        </label>
                      </div>
                      <div className="product__details__option__color">
                        <span>Color:</span>
                        <label className="c-1" for="sp-1">
                          <input type="radio" id="sp-1" name="color" />
                        </label>
                        <label className="c-2" for="sp-2">
                          <input type="radio" id="sp-2" name="color" />
                        </label>
                        <label className="c-3" for="sp-3">
                          <input type="radio" id="sp-3" name="color" />
                        </label>
                        <label className="c-4" for="sp-4">
                          <input type="radio" id="sp-4" name="color" />
                        </label>
                        <label className="c-9" for="sp-9">
                          <input type="radio" id="sp-9" />
                        </label>
                      </div>
                    </div>
                    <div className="product__details__cart__option">
                      <div className="quantity">
                        <div className="pro-qty">
                          <input
                            type="text"
                            className="qtybtn inc"
                            value="-"
                            onClick={changeQtnUp}
                            style={{ color: changeddown }}
                            disabled
                          />
                          <input type="text" value={qtn} disabled />
                          <input
                            type="text"
                            className="qtybtn dec"
                            value="+"
                            onClick={changeQtnDown}
                            style={{ color: changedup }}
                            disabled
                          />
                        </div>
                      </div>
                      <button onClick={handleClick} className="primary-btn">
                        add to cart
                      </button>
                      <h4>{text}</h4>
                    </div>
                    <div className="product__details__btns__option">
                      <Link to="/shop">
                        <img src={heart} alt="Like" /> add to wishlist
                      </Link>
                      <Link to="/shop">
                        <img src={compare} alt="Compare" /> Add To Compare
                      </Link>
                    </div>
                    <div className="product__details__last__option">
                      <h5>
                        <span>Guaranteed Safe Checkout</span>
                      </h5>
                      <img src={payment} alt="Payment" />
                      <ul>
                        <li>
                          <span>Product ID:</span> {shop.prod}
                        </li>
                        <li>
                          <span>Categories:</span> Clothes
                        </li>
                        <li>
                          <span>Tag:</span> Clothes, Skin, Body
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-12">
                  <div className="product__details__tab">
                    <ul className="nav nav-tabs" role="tablist">
                      <li className="nav-item">
                        <a
                          className="nav-link active"
                          data-toggle="tab"
                          href="#tabs-5"
                          role="tab"
                        >
                          Description
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          className="nav-link"
                          data-toggle="tab"
                          href="#tabs-6"
                          role="tab"
                        >
                          Customer Previews(5)
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          className="nav-link"
                          data-toggle="tab"
                          href="#tabs-7"
                          role="tab"
                        >
                          Additional information
                        </a>
                      </li>
                    </ul>
                    <div className="tab-content">
                      <div
                        className="tab-pane active"
                        id="tabs-5"
                        role="tabpanel"
                      >
                        <div className="product__details__tab__content">
                          <p className="note">
                            Nam tempus turpis at metus scelerisque placerat
                            nulla deumantos solicitud felis. Pellentesque diam
                            dolor, elementum etos lobortis des mollis ut risus.
                            Sedcus faucibus an sullamcorper mattis drostique des
                            commodo pharetras loremos.
                          </p>
                          <div className="product__details__tab__content__item">
                            <h5>Products Infomation</h5>
                            <p>
                              A Pocket PC is a handheld computer, which features
                              many of the same capabilities as a modern PC.
                              These handy little devices allow individuals to
                              retrieve and store e-mail messages, create a
                              contact file, coordinate appointments, surf the
                              internet, exchange text messages and more. Every
                              product that is labeled as a Pocket PC must be
                              accompanied with specific software to operate the
                              unit and must feature a touchscreen and touchpad.
                            </p>
                            <p>
                              As is the case with any new technology product,
                              the cost of a Pocket PC was substantial during
                              it’s early release. For approximately $700.00,
                              consumers could purchase one of top-of-the-line
                              Pocket PCs in 2003. These days, customers are
                              finding that prices have become much more
                              reasonable now that the newness is wearing off.
                              For approximately $350.00, a new Pocket PC can now
                              be purchased.
                            </p>
                          </div>
                          <div className="product__details__tab__content__item">
                            <h5>Material used</h5>
                            <p>
                              Polyester is deemed lower quality due to its none
                              natural quality’s. Made from synthetic materials,
                              not natural like wool. Polyester suits become
                              creased easily and are known for not being
                              breathable. Polyester suits tend to have a shine
                              to them compared to wool and cotton suits, this
                              can make the suit look cheap. The texture of
                              velvet is luxurious and breathable. Velvet is a
                              great choice for dinner party jacket and can be
                              worn all year round.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="tab-pane" id="tabs-6" role="tabpanel">
                        <div className="product__details__tab__content">
                          <div className="product__details__tab__content__item">
                            <h5>Products Infomation</h5>
                            <p>
                              A Pocket PC is a handheld computer, which features
                              many of the same capabilities as a modern PC.
                              These handy little devices allow individuals to
                              retrieve and store e-mail messages, create a
                              contact file, coordinate appointments, surf the
                              internet, exchange text messages and more. Every
                              product that is labeled as a Pocket PC must be
                              accompanied with specific software to operate the
                              unit and must feature a touchscreen and touchpad.
                            </p>
                            <p>
                              As is the case with any new technology product,
                              the cost of a Pocket PC was substantial during
                              it’s early release. For approximately $700.00,
                              consumers could purchase one of top-of-the-line
                              Pocket PCs in 2003. These days, customers are
                              finding that prices have become much more
                              reasonable now that the newness is wearing off.
                              For approximately $350.00, a new Pocket PC can now
                              be purchased.
                            </p>
                          </div>
                          <div className="product__details__tab__content__item">
                            <h5>Material used</h5>
                            <p>
                              Polyester is deemed lower quality due to its none
                              natural quality’s. Made from synthetic materials,
                              not natural like wool. Polyester suits become
                              creased easily and are known for not being
                              breathable. Polyester suits tend to have a shine
                              to them compared to wool and cotton suits, this
                              can make the suit look cheap. The texture of
                              velvet is luxurious and breathable. Velvet is a
                              great choice for dinner party jacket and can be
                              worn all year round.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="tab-pane" id="tabs-7" role="tabpanel">
                        <div className="product__details__tab__content">
                          <p className="note">
                            Nam tempus turpis at metus scelerisque placerat
                            nulla deumantos solicitud felis. Pellentesque diam
                            dolor, elementum etos lobortis des mollis ut risus.
                            Sedcus faucibus an sullamcorper mattis drostique des
                            commodo pharetras loremos.
                          </p>
                          <div className="product__details__tab__content__item">
                            <h5>Products Infomation</h5>
                            <p>
                              A Pocket PC is a handheld computer, which features
                              many of the same capabilities as a modern PC.
                              These handy little devices allow individuals to
                              retrieve and store e-mail messages, create a
                              contact file, coordinate appointments, surf the
                              internet, exchange text messages and more. Every
                              product that is labeled as a Pocket PC must be
                              accompanied with specific software to operate the
                              unit and must feature a touchscreen and touchpad.
                            </p>
                            <p>
                              As is the case with any new technology product,
                              the cost of a Pocket PC was substantial during
                              it’s early release. For approximately $700.00,
                              consumers could purchase one of top-of-the-line
                              Pocket PCs in 2003. These days, customers are
                              finding that prices have become much more
                              reasonable now that the newness is wearing off.
                              For approximately $350.00, a new Pocket PC can now
                              be purchased.
                            </p>
                          </div>
                          <div className="product__details__tab__content__item">
                            <h5>Material used</h5>
                            <p>
                              Polyester is deemed lower quality due to its none
                              natural quality’s. Made from synthetic materials,
                              not natural like wool. Polyester suits become
                              creased easily and are known for not being
                              breathable. Polyester suits tend to have a shine
                              to them compared to wool and cotton suits, this
                              can make the suit look cheap. The texture of
                              velvet is luxurious and breathable. Velvet is a
                              great choice for dinner party jacket and can be
                              worn all year round.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}
    </div>
  );
};

export default ShopDetails;
