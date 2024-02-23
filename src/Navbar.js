import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>React Website</h1>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/form">New User</Link>
        <Link to="/profiles">Profiles</Link>
        <Link to="/boom">Boom</Link>
      </div>
    </nav>
  );
};

export default Navbar;
