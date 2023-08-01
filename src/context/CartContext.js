import React, { useState, useContext } from "react";

const CartContext = React.createContext([]);

export const useCartContext = () => useContext(CartContext);

const CartProvider = ({ children }) => {
	const [cart, setCart] = useState([]);

    //agregar producto al carrito
    const addProduct =(item, newQuantity) => {
        const newCart=cart.filter(prod=>prod.id !== item.id);
        newCart.push({...item, quantity: newQuantity});
        setCart(newCart);
    }

    //limpiar carrito
	const clearCart = () => setCart([]);

    //ver si un producto está en el carrito
	const isInCart = (id) =>
		cart.find((item) => item.id === id) ? true : false;

    //borrar un producto del carrito
	const removeProduct = (id) => {
		return setCart(cart.filter((item) => item.id !== id));
	};

    //calcular el precio total del carrito
	const totalPrice = () => {
		return cart.reduce((prev, act) => prev + act.quantity * act.precio, 0);
	};

    //contar la cantidad de productos en el carrito
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
