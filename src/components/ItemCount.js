import React, { useState, useEffect } from "react";
import "./ItemCount.css";

//contar unidades de un mismo producto y mandar cantidad a Cards
//para que agregue el producto
export const ItemCount = ({ initial, stock, onAdd }) => {
	const [count, setCount] = useState(parseInt(initial));

	const decrease = (e) => {
		e.preventDefault();
		setCount(count - 1);
	};

	const increase = (e) => {
		e.preventDefault();
		setCount(count + 1);
	};

	useEffect(() => {
		setCount(parseInt(initial));
	}, [initial]);

	return (
		<div className="contador">
			<button
				disabled={count <= 1}
				onClick={decrease}
			>
				-
			</button>
			<span>{count}</span>
			<button
				disabled={count >= stock}
				onClick={increase}
			>
				+
			</button>
			<span
				disabled={stock <= 0}
				onClick={() => onAdd(count)}
			>
				<i className="bx bxs-cart-add "></i>
			</span>
		</div>
	);
};

export default ItemCount;
