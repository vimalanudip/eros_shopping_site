import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src="/assets/Fashion.png" alt="Era's Shopping" />
      </div>

      <ul className="nav-links">
        <li>
          <Link to="/">HOME</Link>
        </li>

        <li>
          <Link to="/shop">SHOP</Link>
        </li>

        <li>
          <Link to="/women">WOMEN</Link>
        </li>

        <li>
          <Link to="/men">MEN</Link>
        </li>

        <li>
          <Link to="/find-store">FIND STORE</Link>
        </li>
      </ul>

      <div className="slider-icons">
        <i className="fa-solid fa-bag-shopping"></i>

        <i className="fa-solid fa-magnifying-glass"></i>

        <i className="fa-solid fa-bars"></i>
      </div>
    </nav>
  );
}

export default Navbar;