import React from "react";
import "./Contacto.css";
import Titulo from "../components/Titulo";
import Formulario from "../components/Formulario";

function Contacto() {
	return (
		<div className="containerContacto">
			<Titulo tituloS="Su consulta no molesta... ¡la necesitamos!" />
			<p>
				Deje su nombre y su email para que podamos responder a su pedido*
			</p>
			<Formulario />
			<p className="nota">
				*Promesa sujeta a disponibilidad, ganas y habilidades de los
				encargados de esta sección. Tenga consideración, acá nadie sabe
				mucho sobre lo que vendemos, solo teníamos el dinero para invertir
				en una PyME.
			</p>
		</div>
	);
}

export default Contacto
