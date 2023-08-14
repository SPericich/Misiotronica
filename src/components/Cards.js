import { useState } from "react";
import React, { useCartContext } from "../context/CartContext";
import { Link } from "react-router-dom";
import { animateScroll as scroll } from "react-scroll";
import "./Cards.css";

function Cards(props) {
	const { addProduct } = useCartContext();
	const [goToCart, setGoToCart] = useState(false);

	const onAdd = (quantity) => {
		addProduct(props, quantity);
		setGoToCart(true);
	};

	const scrollToTop = () => {
		scroll.scrollToTop();
	};

	return (
		<div className="card">
			<img
				src={props.imagen}
				alt={props.nombre}
			/>
			<h2>{props.nombre}</h2>
			<p>{props.descripcion}</p>
			<h3>${props.precio}</h3>
			<div className="agregar-carrito">
				{goToCart ? (
					<Link
						to="/Carrito/"
						onClick={scrollToTop}
					>
						Ir al carrito<i className="bx bxs-right-arrow-circle"></i>
					</Link>
				) : (
					<button onClick={() => onAdd(1)}>
						<i className="bx bxs-cart-add "></i>
					</button>
				)}
			</div>
		</div>
	);
}

export default Cards;
