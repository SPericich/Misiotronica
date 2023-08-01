import React from "react";
import { useCartContext } from "../context/CartContext";
import ItemCart from "./ItemCart";
import { Link } from "react-router-dom";
import "./Carr.css";

const Carr = () => {
	const { cart, totalPrice, clearCart } = useCartContext();

    const pedido = () => {
        clearCart();
		return alert("Eso es todo amigos");
	};

	if (cart.length === 0) {
		return (
			<div className="carrito-vacio">
				<p>No hay artículos en el carrito</p>
				<Link to="../Venta">Hacer compras</Link>
			</div>
		);
	}

	return (
		<div className="pedido">
			<div className="cardProductos">
				{cart.map((product) => (
					<ItemCart
						key={product.id}
						product={product}
					/>
				))}
			</div>
			<h3> Total: ${totalPrice()}</h3>
            <button onClick={pedido}>Hacer pedido</button>
		</div>
	);
};

export default Carr;
