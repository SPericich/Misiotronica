import { useState } from "react";
import ItemCount from "./ItemCount";
import React, { useCartContext } from "../context/CartContext";
import "./Cards.css";
import { Link } from "react-router-dom";
import { animateScroll as scroll } from "react-scroll";

function Cards(props) {
	const { addProduct } = useCartContext();
	const [goToCart, setGoToCart] = useState(false);

    const scrollToTop = () => {
		scroll.scrollToTop();
	};

	const onAdd = (quantity) => {
		addProduct(props, quantity);
		setGoToCart(true);
	};

	return (
		<div className="card">
			<img
				src={props.imagen}
				alt={props.nombre}
			/>
			<h2>{props.nombre}</h2>
			<p>{props.descripcion}</p>
			<h3>{props.precio}</h3>
			<div className="agregar-carrito">
				{goToCart ? (
					<Link to="/Carrito/" onClick={scrollToTop}>
						Ir al carrito<i class="bx bxs-right-arrow-circle"></i>
					</Link>
				) : (
					<ItemCount
						initial={1}
						stock={5}
						onAdd={onAdd}
					/>
				)}
			</div>
		</div>
	);
}

export default Cards;
