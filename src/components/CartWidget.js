import React from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "../context/CartContext";
import "./CartWidget.css";

export const CartWidget = () => {
	const { totalProducts } = useCartContext();

	return (
		<div className="widget">
			<Link to="/Carrito">
				<i class="bx bx-cart"></i>
			</Link>
 			<span>
				<p>{totalProducts()  || "" }</p>
			</span> 
		</div>
	);
};

export default CartWidget;
