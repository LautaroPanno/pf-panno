import { useContext, useState } from "react";

import Form from "./Form";
import { CartContext } from "../../context/CartContext";
import { addDoc, collection } from "firebase/firestore";
import db from "../../db/db";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

import "./Checkout.css";

const Checkout = () => {
  const [datosForm, setDatosForm] = useState({
    nombre: "",
    telefono: "",
    email: "",
    emailRepetido: "",
  });
  const [idOrden, setIdOrden] = useState(null);
  const { carrito, totalPrecio, borrarCarrito } = useContext(CartContext);

  const guardarDatosInput = (event) => {
    setDatosForm({ ...datosForm, [event.target.name]: event.target.value });
  };

  const enviarOrder = (event) => {
    event.preventDefault();
    if (datosForm.email === datosForm.emailRepetido) {
      const orden = {
        comprador: { ...datosForm },
        productos: [...carrito],
        fecha: new Date(),
        total: totalPrecio(),
      };

      subirOrden(orden);
    } else {
      Swal.fire({
        title: "Los emails deben ser iguales",
        icon: "warning",
      });
    }
  };

  const subirOrden = (orden) => {
    const ordenesRef = collection(db, "ordenes");
    addDoc(ordenesRef, orden).then((respuesta) => {
      setIdOrden(respuesta.id);
      //limpiar carrito
      borrarCarrito();
    });
  };

  return (
    <div className="checkout">
      {idOrden ? (
        (Swal.fire({
          title: "Compra realizada con éxito!",
          icon: "success",
          timer: 1500,
        }),
        (
          <div className="orden">
            <h2>Gracias por su compra!!</h2>
            <p>N° de orden: {idOrden} </p>
            <Link className="boton-orden" to="/">
              <p className="vermasproductos">Ver mas productos</p>
            </Link>
          </div>
        ))
      ) : (
        <Form
          datosForm={datosForm}
          guardarDatosInput={guardarDatosInput}
          enviarOrder={enviarOrder}
        />
      )}
    </div>
  );
};
export default Checkout;
