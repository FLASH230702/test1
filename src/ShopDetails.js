import { useParams } from "react-router-dom/cjs/react-router-dom";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { prodchangeup, prodchangedown } from "./redux/counter";
import useFetch from "./useFetch";
import payment from "./img/details-payment.png";
import heart from "./img/icons/heart.png";
import compare from "./img/icons/compare.png";
import { useDispatch, useSelector } from "react-redux";

const ShopDetails = () => {
  const dispatch = useDispatch();
  const prod = useSelector((state) => state.counter.prod);
  const { id } = useParams();
  const { data: shops } = useFetch("http://localhost:8000/shops/" + id);
  console.log(shops?.quan);
  return (
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
                      style={{ backgroundImage: `url(${shops?.image})` }}
                    ></div>
                  </div>
                </li>
              </ul>
            </div>
            <div className="col-lg-6 col-md-9">
              <div className="tab-content">
                <div className="tab-pane active" id="tabs-1" role="tabpanel">
                  <div className="product__details__pic__item">
                    <img src={shops?.image} alt={shops?.name} />
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
                <h4>{shops?.name}</h4>
                <div className="rating">
                  <box-icon name="star" type="solid" color="#f7941d" />
                  <box-icon name="star" type="solid" color="#f7941d" />
                  <box-icon name="star" type="solid" color="#f7941d" />
                  <box-icon name="star" type="solid" color="#f7941d" />
                  <box-icon name="star" type="solid" color="#f7941d" />
                  <span> - 5 Reviews</span>
                </div>
                <h3>
                  ${shops?.cost} <span>70.00</span>
                </h3>
                <p>{shops?.descrip}</p>
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
                      {prod > 0 && (
                        <span onClick={() => dispatch(prodchangedown())}>
                          <strong>-</strong>
                        </span>
                      )}
                      <input type="text" value={prod} />
                      {prod <= shops?.quan && (
                        <span onClick={() => dispatch(prodchangeup())}>
                          <strong>+</strong>
                        </span>
                      )}
                    </div>
                  </div>
                  <button to="" className="primary-btn">
                    add to cart
                  </button>
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
                      <span>Product ID:</span> {shops?.prod}
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
                  <div className="tab-pane active" id="tabs-5" role="tabpanel">
                    <div className="product__details__tab__content">
                      <p className="note">
                        Nam tempus turpis at metus scelerisque placerat nulla
                        deumantos solicitud felis. Pellentesque diam dolor,
                        elementum etos lobortis des mollis ut risus. Sedcus
                        faucibus an sullamcorper mattis drostique des commodo
                        pharetras loremos.
                      </p>
                      <div className="product__details__tab__content__item">
                        <h5>Products Infomation</h5>
                        <p>
                          A Pocket PC is a handheld computer, which features
                          many of the same capabilities as a modern PC. These
                          handy little devices allow individuals to retrieve and
                          store e-mail messages, create a contact file,
                          coordinate appointments, surf the internet, exchange
                          text messages and more. Every product that is labeled
                          as a Pocket PC must be accompanied with specific
                          software to operate the unit and must feature a
                          touchscreen and touchpad.
                        </p>
                        <p>
                          As is the case with any new technology product, the
                          cost of a Pocket PC was substantial during it’s early
                          release. For approximately $700.00, consumers could
                          purchase one of top-of-the-line Pocket PCs in 2003.
                          These days, customers are finding that prices have
                          become much more reasonable now that the newness is
                          wearing off. For approximately $350.00, a new Pocket
                          PC can now be purchased.
                        </p>
                      </div>
                      <div className="product__details__tab__content__item">
                        <h5>Material used</h5>
                        <p>
                          Polyester is deemed lower quality due to its none
                          natural quality’s. Made from synthetic materials, not
                          natural like wool. Polyester suits become creased
                          easily and are known for not being breathable.
                          Polyester suits tend to have a shine to them compared
                          to wool and cotton suits, this can make the suit look
                          cheap. The texture of velvet is luxurious and
                          breathable. Velvet is a great choice for dinner party
                          jacket and can be worn all year round.
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
                          many of the same capabilities as a modern PC. These
                          handy little devices allow individuals to retrieve and
                          store e-mail messages, create a contact file,
                          coordinate appointments, surf the internet, exchange
                          text messages and more. Every product that is labeled
                          as a Pocket PC must be accompanied with specific
                          software to operate the unit and must feature a
                          touchscreen and touchpad.
                        </p>
                        <p>
                          As is the case with any new technology product, the
                          cost of a Pocket PC was substantial during it’s early
                          release. For approximately $700.00, consumers could
                          purchase one of top-of-the-line Pocket PCs in 2003.
                          These days, customers are finding that prices have
                          become much more reasonable now that the newness is
                          wearing off. For approximately $350.00, a new Pocket
                          PC can now be purchased.
                        </p>
                      </div>
                      <div className="product__details__tab__content__item">
                        <h5>Material used</h5>
                        <p>
                          Polyester is deemed lower quality due to its none
                          natural quality’s. Made from synthetic materials, not
                          natural like wool. Polyester suits become creased
                          easily and are known for not being breathable.
                          Polyester suits tend to have a shine to them compared
                          to wool and cotton suits, this can make the suit look
                          cheap. The texture of velvet is luxurious and
                          breathable. Velvet is a great choice for dinner party
                          jacket and can be worn all year round.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="tab-pane" id="tabs-7" role="tabpanel">
                    <div className="product__details__tab__content">
                      <p className="note">
                        Nam tempus turpis at metus scelerisque placerat nulla
                        deumantos solicitud felis. Pellentesque diam dolor,
                        elementum etos lobortis des mollis ut risus. Sedcus
                        faucibus an sullamcorper mattis drostique des commodo
                        pharetras loremos.
                      </p>
                      <div className="product__details__tab__content__item">
                        <h5>Products Infomation</h5>
                        <p>
                          A Pocket PC is a handheld computer, which features
                          many of the same capabilities as a modern PC. These
                          handy little devices allow individuals to retrieve and
                          store e-mail messages, create a contact file,
                          coordinate appointments, surf the internet, exchange
                          text messages and more. Every product that is labeled
                          as a Pocket PC must be accompanied with specific
                          software to operate the unit and must feature a
                          touchscreen and touchpad.
                        </p>
                        <p>
                          As is the case with any new technology product, the
                          cost of a Pocket PC was substantial during it’s early
                          release. For approximately $700.00, consumers could
                          purchase one of top-of-the-line Pocket PCs in 2003.
                          These days, customers are finding that prices have
                          become much more reasonable now that the newness is
                          wearing off. For approximately $350.00, a new Pocket
                          PC can now be purchased.
                        </p>
                      </div>
                      <div className="product__details__tab__content__item">
                        <h5>Material used</h5>
                        <p>
                          Polyester is deemed lower quality due to its none
                          natural quality’s. Made from synthetic materials, not
                          natural like wool. Polyester suits become creased
                          easily and are known for not being breathable.
                          Polyester suits tend to have a shine to them compared
                          to wool and cotton suits, this can make the suit look
                          cheap. The texture of velvet is luxurious and
                          breathable. Velvet is a great choice for dinner party
                          jacket and can be worn all year round.
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
  );
};

export default ShopDetails;
