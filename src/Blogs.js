import { Link } from "react-router-dom/cjs/react-router-dom";
import bacg from "./img/breadcrumb-bg.jpg";
import React, { useState, useEffect } from "react";
import { getDatabase, ref, onValue } from "firebase/database";

const Blogs = () => {
  const [productNames, setProductNames] = useState([]);
  const [productImage, setProductImage] = useState([]);
  const [productAuthor, setProductAuthor] = useState([]);
  const [productDate, setProductDate] = useState([]);
  const [productId, setProductId] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const dbRef = ref(getDatabase(), "blogs");

      onValue(dbRef, (snapshot) => {
        const blogs = snapshot.val();

        if (blogs) {
          const productNamesArray = Object.values(blogs).map(
            (blog) => blog.name
          );
          const productImageArray = Object.values(blogs).map(
            (blog) => blog.image
          );
          const productAuthorArray = Object.values(blogs).map(
            (blog) => blog.author
          );
          const productDateArray = Object.values(blogs).map(
            (blog) => blog.date
          );
          const productIdArray = Object.values(blogs).map((blog) => blog.id);

          setProductNames(productNamesArray);
          setProductImage(productImageArray);
          setProductAuthor(productAuthorArray);
          setProductDate(productDateArray);
          setProductId(productIdArray);
        }
      });
    };

    fetchData();

    return () => {};
  }, []);

  const productsarray = productNames.map((name, index) => ({
    name,
    image: productImage[index],
    author: productAuthor[index],
    date: productDate[index],
    id: productId[index],
  }));
  return (
    <section className="blog spad">
      <div
        className="breadcrumb-blog set-bg"
        style={{ backgroundImage: `url(${bacg})` }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h2>Our Blog</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          {productsarray.map((blog) => (
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="blog__item">
                <div
                  className="blog__item__pic set-bg"
                  style={{ backgroundImage: `url(${blog.image})` }}
                ></div>
                <div className="blog__item__text" key={blog.id}>
                  <span>
                    <img src="img/icon/calendar.png" alt="" />
                    {blog.date}
                  </span>
                  <h5>{blog.name}</h5>
                  <Link to={`/blogs/${blog.id}`}>Read More</Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blogs;
