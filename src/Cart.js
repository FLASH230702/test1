import { useState } from "react";
import { Link } from "react-router-dom/cjs/react-router-dom";

const Cart = () => {
  const [money, setMoney] = useState([
    {
      subtotal: "",
      tax: "",
      total: "",
    },
  ]);
  const handleCart = () => {
    setMoney();
  };

  return (
    <div className="carrt">
      <section class="shopping-cart spad">
        <div class="container">
          <div class="row">
            <div class="col-lg-8">
              <div class="shopping__cart__table">
                <table>
                  <thead>
                    <tr>
                      <th>Product</th>
                      <th>Quantity</th>
                      <th>Total</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td class="product__cart__item">
                        <div class="product__cart__item__pic">
                          <img src="img/shopping-cart/cart-1.jpg" alt="" />
                        </div>
                        <div class="product__cart__item__text">
                          <h6>T-shirt Contrast Pocket</h6>
                          <h5>$98.49</h5>
                        </div>
                      </td>
                      <td class="quantity__item">
                        <div class="quantity">
                          <div class="pro-qty-2">
                            <input type="text" value="1" />
                          </div>
                        </div>
                      </td>
                      <td class="cart__price">$ 98.49</td>
                      <td class="cart__close">
                        <i class="fa fa-close"></i>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div class="row">
                <div class="col-lg-6 col-md-6 col-sm-6">
                  <div class="continue__btn">
                    <Link to="/shop">Continue Shopping</Link>
                  </div>
                </div>
                <div class="col-lg-6 col-md-6 col-sm-6">
                  <div class="continue__btn update__btn">
                    <button to="/cart" onClick={handleCart}>
                      <box-icon name="cart" color="#fffefe" /> Update cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-4">
              <div class="cart__discount">
                <h6>Discount codes</h6>
                <form action="#">
                  <input type="text" placeholder="Coupon code" />
                  <button type="submit">Apply</button>
                </form>
              </div>
              <div class="cart__total">
                <h6>Cart total</h6>
                <ul>
                  <li>
                    Subtotal <span>$ </span>
                  </li>
                  <li>
                    Taxes (18% GST) <span>$ </span>
                  </li>
                  <li>
                    Total <span>$ </span>
                  </li>
                </ul>
                <Link to="#" class="primary-btn">
                  Proceed to checkout
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Cart;
