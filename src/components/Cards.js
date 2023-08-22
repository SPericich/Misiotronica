import React, { useCartContext } from "../context/CartContext";
import { Link } from "react-router-dom";
import scrolltop from "../helpers/scroll";
import "./Cards.css";

function Cards(props) {
	const { addProduct, isInCart } = useCartContext();

	const onAdd = (quantity) => {
		addProduct(props, quantity);
        isInCart(true);
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
				{isInCart(props.id) ? (
					<Link
						to="/Carrito/"
						onClick={scrolltop}
                        smooth="true"
					>
						Ir la carrito<i className="bx bxs-right-arrow-circle"></i>
					</Link>
				) : (
					<button onClick={() => onAdd(1)}>
						<i className='bx bxs-cart-add' ></i>
					</button>
				)}
			</div>
		</div>
	);

}

export default Cards;
