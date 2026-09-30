import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <Link to="/" className="logo">
        Noura
      </Link>

      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </nav>
  );
}

export default Navbar;