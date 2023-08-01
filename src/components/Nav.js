import React from "react";
import { useState } from "react";
import "./Nav.css";
import LogoM from "./Logo.js";
import Comando from "./Comando";
import CartWidget from "./CartWidget";

function Navegacion() {
	const [menu, setMenu] = useState(false);

	const toggleMenu = () => {
		setMenu(!menu);
	};

	return (
		<div className="container">
			<nav className="nav">
				<LogoM />
				<ul
					className={`menu ${menu ? "isActive" : ""}`}
					onClick={toggleMenu}
				>
					<li>
						<Comando
							link="/"
							texto="INICIO"
						/>
					</li>
					<li>
						<Comando
							link="/About"
							texto="SOBRE NOSOTROS"
						/>
					</li>
					<li>
						<Comando
							link="/Venta"
							texto="VENTA"
						/>
					</li>
					<li>
						<Comando
							link="/Contacto"
							texto="CONTACTO"
						/>
					</li>
				</ul>
				<ul className="menu-derecha">
					<div className="carrito">
                        <CartWidget/>
					</div>
					<div
						onClick={toggleMenu}
						className="hamburguesa"
					>
						<i className="bx bx-menu"></i>
					</div>
				</ul>
			</nav>
		</div>
	);
}

export default Navegacion;
