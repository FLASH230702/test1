import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>React Website</h1>
      <Link to="/">Home</Link>
      <Link to="/form">New User</Link>
      <Link to="/boom">Boom</Link>
      <Link to="/signin">Sign In</Link>
    </nav>
  );
};

export default Navbar;
