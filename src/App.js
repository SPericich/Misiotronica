import React from "react";
import Navegacion from "./components/Nav";
import Footer from "./components/Footer";
import Copyright from "./components/Copyright";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Venta from "./pages/Venta";
import Contacto from "./pages/Contacto";
import NotFound from "./pages/NotFound";
import Home from "./pages/Home";
import CartProvider from "./context/CartContext";
import Carrito from "./pages/Carrito";
import "./App.css";

function App() {
	return (
		<div>
			<Router>
				<CartProvider>
					<Navegacion />
					<Routes>
						<Route
							exact
							path="/"
							element={<Home />}
						/>
						<Route
							exact
							path="/About"
							element={<About />}
						/>
						<Route
							exact
							path="/Venta"
							element={<Venta />}
						/>
						<Route
							exact
							path="/Contacto"
							element={<Contacto />}
						/>
						<Route
							exact
							path="/Carrito"
							element={<Carrito />}
						/>
						<Route
							path="*"
							element={<NotFound />}
						/>
					</Routes>

					<Footer />
					<Copyright />
				</CartProvider>
			</Router>
		</div>
	);
}

export default App;
