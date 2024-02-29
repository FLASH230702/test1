import { Link } from "react-router-dom/cjs/react-router-dom";
import ProductMain from "./ProductMain";

const Shop = () => {
  return (
    <section className="shop spad">
      <div className="container">
        <div className="row">
          <div className="col-lg-3">
            <div className="shop__sidebar">
              <div className="shop__sidebar__search">
                <form action="/">
                  <input type="text" placeholder="Search..." />
                  <button type="submit">
                    <span className="icon_search"></span>
                  </button>
                </form>
              </div>
              <div className="shop__sidebar__accordion">
                <div className="accordion" id="accordionExample">
                  <div className="card">
                    <div className="card-heading">
                      <Link data-toggle="collapse" data-target="#collapseOne">
                        Categories
                      </Link>
                    </div>
                    <div
                      id="collapseOne"
                      className="collapse show"
                      data-parent="#accordionExample"
                    >
                      <div className="card-body">
                        <div className="shop__sidebar__categories">
                          <ul className="nice-scroll">
                            <li>
                              <Link to="/">Men (20)</Link>
                            </li>
                            <li>
                              <Link to="/">Women (20)</Link>
                            </li>
                            <li>
                              <Link to="/">Bags (20)</Link>
                            </li>
                            <li>
                              <Link to="/">Clothing (20)</Link>
                            </li>
                            <li>
                              <Link to="/">Shoes (20)</Link>
                            </li>
                            <li>
                              <Link to="/">Accessories (20)</Link>
                            </li>
                            <li>
                              <Link to="/">Kids (20)</Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <div className="card-heading">
                      <Link data-toggle="collapse" data-target="/collapseTwo">
                        Branding
                      </Link>
                    </div>
                    <div
                      id="collapseTwo"
                      className="collapse show"
                      data-parent="/accordionExample"
                    >
                      <div className="card-body">
                        <div className="shop__sidebar__brand">
                          <ul>
                            <li>
                              <Link to="/">Louis Vuitton</Link>
                            </li>
                            <li>
                              <Link to="/">Chanel</Link>
                            </li>
                            <li>
                              <Link to="/">Hermes</Link>
                            </li>
                            <li>
                              <Link to="/">Gucci</Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <div className="card-heading">
                      <Link data-toggle="collapse" data-target="/collapseThree">
                        Filter Price
                      </Link>
                    </div>
                    <div
                      id="collapseThree"
                      className="collapse show"
                      data-parent="/accordionExample"
                    >
                      <div className="card-body">
                        <div className="shop__sidebar__price">
                          <ul>
                            <li>
                              <Link to="/">$0.00 - $50.00</Link>
                            </li>
                            <li>
                              <Link to="/">$50.00 - $100.00</Link>
                            </li>
                            <li>
                              <Link to="/">$100.00 - $150.00</Link>
                            </li>
                            <li>
                              <Link to="/">$150.00 - $200.00</Link>
                            </li>
                            <li>
                              <Link to="/">$200.00 - $250.00</Link>
                            </li>
                            <li>
                              <Link to="/">250.00+</Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <div className="card-heading">
                      <Link data-toggle="collapse" data-target="/collapseFour">
                        Size
                      </Link>
                    </div>
                    <div
                      id="collapseFour"
                      className="collapse show"
                      data-parent="/accordionExample"
                    >
                      <div className="card-body">
                        <div className="shop__sidebar__size">
                          <label for="xs">
                            xs
                            <input type="radio" id="xs" />
                          </label>
                          <label for="sm">
                            s
                            <input type="radio" id="sm" />
                          </label>
                          <label for="md">
                            m
                            <input type="radio" id="md" />
                          </label>
                          <label for="xl">
                            xl
                            <input type="radio" id="xl" />
                          </label>
                          <label for="2xl">
                            2xl
                            <input type="radio" id="2xl" />
                          </label>
                          <label for="xxl">
                            xxl
                            <input type="radio" id="xxl" />
                          </label>
                          <label for="3xl">
                            3xl
                            <input type="radio" id="3xl" />
                          </label>
                          <label for="4xl">
                            4xl
                            <input type="radio" id="4xl" />
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <div className="card-heading">
                      <Link data-toggle="collapse" data-target="/collapseFive">
                        Colors
                      </Link>
                    </div>
                    <div
                      id="collapseFive"
                      className="collapse show"
                      data-parent="/accordionExample"
                    >
                      <div className="card-body">
                        <div className="shop__sidebar__color">
                          <label className="c-1" for="sp-1">
                            <input type="radio" id="sp-1" />
                          </label>
                          <label className="c-2" for="sp-2">
                            <input type="radio" id="sp-2" />
                          </label>
                          <label className="c-3" for="sp-3">
                            <input type="radio" id="sp-3" />
                          </label>
                          <label className="c-4" for="sp-4">
                            <input type="radio" id="sp-4" />
                          </label>
                          <label className="c-5" for="sp-5">
                            <input type="radio" id="sp-5" />
                          </label>
                          <label className="c-6" for="sp-6">
                            <input type="radio" id="sp-6" />
                          </label>
                          <label className="c-7" for="sp-7">
                            <input type="radio" id="sp-7" />
                          </label>
                          <label className="c-8" for="sp-8">
                            <input type="radio" id="sp-8" />
                          </label>
                          <label className="c-9" for="sp-9">
                            <input type="radio" id="sp-9" />
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-9">
            <div className="shop__product__option">
              <div className="row">
                <div className="col-lg-6 col-md-6 col-sm-6">
                  <div className="shop__product__option__left">
                    <p>Showing 1–12 of 126 results</p>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6">
                  <div className="shop__product__option__right">
                    <p>Sort by Price:</p>
                    <select>
                      <option value="">Low To High</option>
                      <option value="">$0 - $55</option>
                      <option value="">$55 - $100</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
            <ProductMain />
            <div className="row">
              <div className="col-lg-12">
                <div className="product__pagination">
                  <Link className="active" to="/shop">
                    1
                  </Link>
                  <Link to="/shop/2">2</Link>
                  <Link to="/">3</Link>
                  <span>...</span>
                  <Link to="/">21</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Shop;
