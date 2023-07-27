import React from "react";
import "./NotFound.css";
import gif from "../assets/bang-my-head.gif";
import Titulo from "../components/Titulo";

function NotFound() {
	return (
		<div className="not-found">
			<Titulo tituloS="Pero... ¿qué dice?" />
			<div>
				<img
					src={gif}
					className="gif"
					alt="gif"
				/>
			</div>
			<p>
				Si esperaba encontrar algo en una página que no existe, lamento
				decirle que usted podría estar delirando. ¿O acaso se desmayó sobre
				el teclado? ¿Está usted bien, necesita una ambulancia?
			</p>
			<p>
				Si está bien, por favor utilice la barra de navegación &#40;esa enorme e intuitiva franja amarilla en la parte superior&#41;, como
				cualquier persona en su sano juicio.
			</p>
		</div>
	);
}

export default NotFound
