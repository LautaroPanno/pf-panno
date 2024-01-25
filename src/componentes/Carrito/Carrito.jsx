import { useContext } from "react";

import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import { FaTrashAlt } from "react-icons/fa";

import "./Carrito.css";

const Carrito = () => {
  const { carrito, borrarCarrito, borrarProducto, totalPrecio } =
    useContext(CartContext);

  if (carrito.length === 0) {
    return (
      <div className="carrito-vacio">
        <h2>El carrito aún se encuentra vacio 🤨🛒</h2>
        <Link className="button-verproductos" to="/">
          Ver productos
        </Link>
      </div>
    );
  }

  return (
    <div className="carrito">
      <ul className="lista">
        {carrito.map((producto) => (
          <li className="producto" key={producto.id}>
            <img
              className="imagen"
              src={producto.imagen}
              alt={producto.nombre}
            />
            <div className="carrito-texto">
              <p className="texto-nombre">{producto.nombre}</p>
              <p className="texto-categoria">Categoria: {producto.categoria}</p>
              <p className="texto-cantidad">Cantidad: {producto.cantidad}</p>
              <p className="texto-unidad">
                Precio por unidad: ${producto.precio}
              </p>

              <div
                className="borrar"
                onClick={() => borrarProducto(producto.id)}
              >
                <p>Borrar producto</p> <FaTrashAlt size={25} />
              </div>
            </div>
          </li>
        ))}
      </ul>
      <h3>Total a pagar: ${totalPrecio()}</h3>

      <div className="botones-vaciar-continuar">
        <div className="boton-carrito-borrar" onClick={borrarCarrito}>
          <p>Vaciar carrito</p>
          <FaTrashAlt size={20} />
        </div>
        <Link className="boton-carrito-continuar" to="/checkout">
          <p>Continuar con la compra</p>
        </Link>
      </div>
    </div>
  );
};
export default Carrito;
