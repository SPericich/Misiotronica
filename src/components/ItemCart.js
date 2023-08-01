import React from "react";
import { useCartContext } from "../context/CartContext";

//items en carrito
const ItemCart = ({key, product}) => {
    const {removeProduct} = useCartContext();

	return (
		<div key={key} >
			<img src={product.imagen} alt={product.nombre} />
			<div>
				<p>Producto: {product.nombre}</p>
				<p>Cantidad: {product.quantity}</p>
				<p>Precio U: ${product.precio}</p>
				<p>Subtotal: ${product.quantity * product.precio}</p>
				<button onClick={()=> removeProduct(product.id)}>Eliminar</button>
			</div>
		</div>
	);
};

export default ItemCart;
