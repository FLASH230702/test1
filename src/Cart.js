import { useState } from "react";
import { Link } from "react-router-dom/cjs/react-router-dom";

const Cart = () => {
  const prodprice1 = 28.69;
  const [numberofitems, setNumberOfItems] = useState(1);
  const [money, setMoney] = useState([
    {
      subtotal: "",
      tax: "",
      total: "",
    },
  ]);
  const handleCart = () => {
    const newsubtotal = prodprice1 * numberofitems;
    const newtax = 0.18 * newsubtotal;
    const newtotal = newsubtotal + newtax;
    const newCartItem = {
      subtotal: newsubtotal.toFixed(2),
      tax: newtax.toFixed(2),
      total: newtotal.toFixed(2),
    };
    setMoney(newCartItem);
  };
  const handleClickDown = () => {
    if (numberofitems !== 1) {
      setNumberOfItems(numberofitems - 1);
    } else {
      setNumberOfItems(numberofitems);
    }
  };
  const handleClickUp = () => {
    setNumberOfItems(numberofitems + 1);
  };
  const handleDelete = () => {
    console.log("You Did it!!");
  };
  return (
    <div className="cart">
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
                          <h5>${prodprice1}</h5>
                        </div>
                      </td>
                      <td class="quantity__item">
                        <div class="quantity">
                          <div class="pro-qty-2">
                            <button className="qtybtn" onClick={handleClickUp}>
                              +
                            </button>
                            <input type="text" value={numberofitems} />
                            <button
                              className="qtybtn"
                              onClick={handleClickDown}
                            >
                              -
                            </button>
                          </div>
                        </div>
                      </td>
                      <td class="cart__price">$ {prodprice1}</td>
                      <td class="cart__close" onClick={handleDelete}>
                        <box-icon type="solid" name="trash" />
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
                    Subtotal <span>${money.subtotal} </span>
                  </li>
                  <li>
                    Taxes (18% GST) <span>${money.tax} </span>
                  </li>
                  <li>
                    Total <span>${money.total} </span>
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
