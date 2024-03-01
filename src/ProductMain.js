import { Link } from "react-router-dom/cjs/react-router-dom";
import useFetch from "./useFetch";
import heart from "./img/icons/heart.png";
import compare from "./img/icons/compare.png";

const ProductMain = () => {
  const { data: shops } = useFetch("http://localhost:8000/shops");
  return (
    <div className="row">
      {shops
        ? shops.map((shop) => (
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
          ))
        : "Loading . . ."}
    </div>
  );
};

export default ProductMain;
