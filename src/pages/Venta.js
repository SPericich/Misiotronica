import React from "react";
import Titulo from "../components/Titulo";
import Busqueda from "../components/Busqueda";
import "./Venta.css";

function Venta() {
	return (
		<div className="containerVenta">
			<div>
				<Titulo tituloS="Catálogo" />
			</div>
			<div>
				<Busqueda />
			</div>
		</div>
	);
}

export default Venta;
