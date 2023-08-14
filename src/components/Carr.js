import React from "react";
import { useCartContext } from "../context/CartContext";
import ItemCart from "./ItemCart";
import { Link } from "react-router-dom";
import { animateScroll as scroll } from "react-scroll";
import "./Carr.css";

const Carr = () => {
	const { cart, totalPrice, clearCart } = useCartContext();

	const pedido = () => {
		clearCart();
        scrollToTop();
		return alert("Eso es todo, amigos");
	};

	const scrollToTop = () => {
		scroll.scrollToTop();
	};

	if (cart.length === 0) {
		return (
			<div className="carrito-vacio">
				<p>No hay artículos en el carrito</p>
				<Link
					to="../Venta"
					onClick={scrollToTop}
				>
					Hacer compras
				</Link>
			</div>
		);
	}

	return (
		<div>
			<div className="cardProductos">
				{cart.map((product) => (
					<ItemCart
						key={product.id}
						product={product}
					/>
				))}
			</div>
			<div className="pedido">
				<h3> Total: ${totalPrice()}</h3>
				<button onClick={pedido}>Hacer pedido</button>
			</div>
		</div>
	);
};

export default Carr;
