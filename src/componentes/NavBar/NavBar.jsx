import CartWidget from "./CartWidget";
import "./NavBar.scss";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="navbar fixed-top container-fluid">
        <a className="navbar-brand" href="#">
          Limpialoom
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" aria-current="page" href="#">
                Inicio
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Jabones
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Cepillos
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Quitamanchas
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Aspiradoras
              </a>
            </li>
            <li className="nav-item">
            </li>
          </ul>
        </div>
        <div className="cartwidget">
        <CartWidget />
        <p>0</p>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
