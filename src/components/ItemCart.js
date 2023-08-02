import React from "react";
import ItemCount from "./ItemCount";
import { useCartContext } from "../context/CartContext";
import "./ItemCart.css";

const ItemCart = ({ key, product }) => {
	const { removeProduct, addProduct } = useCartContext();

	const onAdd = (quantity) => {
		addProduct(product, quantity);
	};

	return (
		<div
			key={key}
			className="item"
		>
			<img
				src={product.imagen}
				alt={product.nombre}
			/>
			<div>
				<p>Producto: {product.nombre}</p>
				<p>Cantidad: {product.quantity}</p>
				<p>Precio U: ${product.precio}</p>
				<p>Subtotal: ${product.quantity * product.precio}</p>
				<ItemCount
					initial={1}
					stock={5}
					onAdd={onAdd}
				/>
				<button
					className="eliminar"
					onClick={() => removeProduct(product.id)}
				>
					Eliminar
				</button>
			</div>
		</div>
	);
};

export default ItemCart;
