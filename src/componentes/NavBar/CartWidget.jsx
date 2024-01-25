import { useContext } from "react";

import { PiShoppingCartFill } from "react-icons/pi";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";

const CartWidget = () => {
  const { carrito, totalCantidad } = useContext(CartContext);

  return (
    <Link className="cartwidget" to="/carrito" id="cartwidget">
      <PiShoppingCartFill size={40} />
      {carrito.length !== 0 && <p>{totalCantidad()}</p>}
    </Link>
  );
};

export default CartWidget;
