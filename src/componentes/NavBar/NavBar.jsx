import CartWidget from "./CartWidget";
import { Link } from "react-router-dom";

import "./NavBar.css";

const NavBar = () => {
  return (
    <div id="navbar">
      <Link to="/" className="brand">
        Plot Time
      </Link>
      <ul>
        <li>
          <Link to="/">Inicio</Link>
        </li>
        <li>
          <Link to="/categorias/gorras">Gorras</Link>
        </li>
        <li>
          <Link to="/categorias/sombreros">Sombreros</Link>
        </li>
        <li>
          <Link to="/categorias/pilusos">Pilusos</Link>
        </li>
        <li>
          <Link to="/categorias/gorros">Gorros</Link>
        </li>
      </ul>
      <CartWidget />
    </div>
  );
};

export default NavBar;
