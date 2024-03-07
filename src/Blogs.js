import { Link } from "react-router-dom/cjs/react-router-dom";
import useFetch from "./useFetch";
import bacg from "./img/breadcrumb-bg.jpg";

const Blogs = () => {
  const { data: blogs } = useFetch("http://localhost:8000/blogs");

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
          {blogs
            ? blogs.map((blog) => (
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
              ))
            : "Loading . . ."}
        </div>
      </div>
    </section>
  );
};

export default Blogs;
