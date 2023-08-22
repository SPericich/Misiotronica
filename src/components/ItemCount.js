import React, { useState, useEffect } from "react";
import "./ItemCount.css";

export const ItemCount = ({ initial, stock, onAdd }) => {
	const [count, setCount] = useState(parseInt(initial));

	useEffect(() => {
		setCount(parseInt(initial));
	}, [initial]);

	return (
		<div className="contador">
			<button
				disabled={count <= 1}
				onClick={() => onAdd(count - 1)}
			>
				-
			</button>
			<span>{count}</span>
			<button
				disabled={count >= stock}
				onClick={() => onAdd(count + 1)}
			>
				+
			</button>
		</div>
	);
};

export default ItemCount;
