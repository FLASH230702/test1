import { useSelector } from "react-redux";
import { Link } from "react-router-dom/cjs/react-router-dom";
import React, { useState, useEffect } from "react";
import { getDatabase, ref, onValue, set, get } from "firebase/database";
import { app } from "./firebase";

const db = getDatabase(app);

const Cart = () => {
  const { id } = useSelector((state) => state.counter);
  const [cart, setCart] = useState([]);
  const [products, setProducts] = useState([]);
  const [numberofitems, setNumberOfItems] = useState(1);
  const [money, setMoney] = useState([
    {
      subtotal: "",
      tax: "",
      total: "",
    },
  ]);
  useEffect(() => {
    const fetchData = async () => {
      const dbRef = ref(getDatabase(), "profiles/" + id + "/cart");

      onValue(dbRef, (snapshot) => {
        const carts = snapshot.val();

        if (carts) {
          const cartarray = Object.values(carts).map((cart) => ({
            id: cart.id,
            value: cart.value,
          }));
          setCart(cartarray);
        }
      });
    };

    fetchData();

    return () => {};
  }, []);
  const filteredCartArray = cart.filter((cart) => cart.value === true);
  const data_id = filteredCartArray.map((cart) => cart.id);

  useEffect(() => {
    const fetchData = async () => {
      const dbRef = ref(getDatabase(), "shops");

      onValue(dbRef, (snapshot) => {
        const shops = snapshot.val();

        if (shops) {
          const products = Object.values(shops).map((shop) => ({
            name: shop.name,
            id: shop.id,
            image: shop.image,
            cost: shop.cost,
            quan: shop.quan,
          }));
          setProducts(products);
        }
      });
    };

    fetchData();

    return () => {};
  }, []);
  const filteredId = products.filter((product) =>
    [...data_id].includes(product.id)
  );
  const costitem = filteredId.map((cost) => Number(cost.cost));
  const totalcost = costitem.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  );
  const handleCart = () => {
    const newsubtotal = totalcost * numberofitems;
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
  const handleDelete = (productId) => {
    const cartRef = ref(db, `profiles/${id}/cart`);
    get(cartRef).then((snapshot) => {
      const existingCart = snapshot.val() || {};
      const updatedCart = { ...existingCart };
      delete updatedCart[`product${productId}`];
      set(cartRef, updatedCart);
    });
  };

  console.log(filteredId);
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
                    {filteredId.length === 0 && (
                      <h4 style={{ textAlign: "center" }}>The Cart Is Empty</h4>
                    )}
                    {filteredId.map((cart) => (
                      <tr>
                        <td class="product__cart__item">
                          <div class="product__cart__item__pic">
                            <img
                              src={cart.image}
                              style={{ height: "100px", width: "100px" }}
                              alt={cart}
                            />
                          </div>
                          <div class="product__cart__item__text">
                            <h6>{cart.name}</h6>
                            <h5>${cart.cost}</h5>
                          </div>
                        </td>
                        <td class="quantity__item">
                          <div class="quantity">
                            <div class="pro-qty-2">
                              <button
                                className="qtybtn"
                                onClick={handleClickUp}
                              >
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
                        <td class="cart__price">$ {cart.cost}</td>
                        <td
                          class="cart__close"
                          onClick={() => handleDelete(cart.id)}
                        >
                          <box-icon type="solid" name="trash" />
                        </td>
                      </tr>
                    ))}
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
