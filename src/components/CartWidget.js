import React from "react";
import { animateScroll as scroll } from "react-scroll";
import { Link } from "react-router-dom";
import { useCartContext } from "../context/CartContext";
import "./CartWidget.css";

export const CartWidget = () => {
	const { totalProducts } = useCartContext();

	const scrollToTop = () => {
		scroll.scrollToTop();
	};

	return (
		<div className="widget">
			<Link
				to="/Carrito"
				onClick={scrollToTop}
			>
				<i className="bx bx-cart"></i>
			</Link>
			<span>
				<p>{totalProducts() || ""}</p>
			</span>
		</div>
	);
};

export default CartWidget;
