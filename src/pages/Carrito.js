import React from "react";
import Carr from "../components/Carr";
import Titulo from "../components/Titulo";
import "./Carrito.css";

function Carrito() {
	return (
		<div className="containerCarrito">
			<Titulo tituloS="Carrito de compras" />
			<div>
				<Carr />
			</div>
		</div>
	);
}

export default Carrito;
