import React from "react";
import { useCartContext } from "../context/CartContext";
import ItemCart from "./ItemCart";
import { Link } from "react-router-dom";
import scrolltop from "../helpers/scroll";
import "./Carr.css";

const Carr = () => {
	const { cart, totalPrice, clearCart } = useCartContext();

	const pedido = () => {
		clearCart();
        scrolltop();
		return alert("Eso es todo, amigos 😄");
	};

    const vaciar = () => {
        clearCart();
        scrolltop();
    };

	if (cart.length === 0) {
		return (
			<div className="carrito-vacio">
				<p>No hay artículos en el carrito</p>
				<Link
					to="../Venta"
					onClick={scrolltop}
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
                <button onClick={vaciar}>Vaciar carrito</button>
			</div>
		</div>
	);
};

export default Carr;
