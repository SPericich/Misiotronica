import React, { useState, useContext } from "react";

const CartContext = React.createContext([]);

export const useCartContext = () => useContext(CartContext);

const CartProvider = ({ children }) => {
	const [cart, setCart] = useState([]);

	 const addProduct = (item, quantity) => {
		if (isInCart(item.id)) {
			setCart(
				cart.map((productos) => {
					return productos.id === item.id
						? { ...productos, quantity: quantity }
						: productos;
				})
			);
		} else {
			setCart([...cart, { ...item, quantity }]);
		}
	};

	const clearCart = () => setCart([]);

	const isInCart = (id) =>
		cart.find((item) => item.id === id) ? true : false;
       
	const removeProduct = (id) => {
		return setCart(cart.filter((item) => item.id !== id));
	};

	const totalPrice = () => {
		return cart.reduce((prev, act) => prev + act.quantity * act.precio, 0);
	};

	const totalProducts = () => 
		 cart.reduce(
			(acumulador, productoActual) => acumulador + productoActual.quantity, 0);
	

	return (
		<CartContext.Provider
			value={{
				clearCart,
				isInCart,
				removeProduct,
				addProduct,
				totalPrice,
				totalProducts,
				cart,
			}}
		>
			{children}
		</CartContext.Provider>
	);
};

export default CartProvider;
