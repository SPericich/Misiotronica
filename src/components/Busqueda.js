import { useEffect, useState } from "react";
import Cards from "./Cards";
import productos from "../repositories/productos";
import "./Busqueda.css";

const Busqueda = () => {
	//Se muestra el catálogo entero asignándole a Filtrados el array completo
	//cuando la barra de búsqueda está vacía
	useEffect(() => {
		setup();
	}, []);

	const setup = () => {
		setFiltrados(productos);
	};

	const [Filtrados, setFiltrados] = useState(null);

	//saca las tildes
	const sacarTildes = (palabra) => {
		let tmp = palabra;
		tmp = tmp.replace(/á/g, "a");
		tmp = tmp.replace(/é/g, "e");
		tmp = tmp.replace(/í/g, "i");
		tmp = tmp.replace(/ó/g, "o");
		tmp = tmp.replace(/ú/g, "u");
		return tmp;
	};

	//Creo un arreglo temporal para almacenar los resultados de la búsqueda.
	//Convierto a minúscula y quito tildes tanto a lo que escribe el usuario
	//en la barra como a los nombres de los productos dentro del array original
	//y voy buscando coincidencias. Si coincide, el producto se agrega al array
	//temporal, que se asigna luego a Filtrados para mostrarse en pantalla
	const handleBuscador = (e) => {
        e.preventDefault()
		const cadena = sacarTildes(e.target.value.toLowerCase());
		const tmpArray = [];
		const limite = productos.length;
		for (let index = 0; index < limite; index++) {
			const nombres = sacarTildes(productos[index].nombre.toLowerCase());
			const patt = new RegExp(cadena);
			const res = patt.test(nombres);
			if (res) {
				tmpArray.push(productos[index]);
			}
		}
		setFiltrados(tmpArray);
	};

	return (
		<form>
			<div className="barra">
				<input
					type="text"
					autoComplete="off"
					placeholder="¿Qué necesita?"
					onChange={handleBuscador}
				></input>
				<div className="btn">
					<i className="bx bx-search"></i>
				</div>
			</div>

			<div className="galeria">
				{Filtrados &&
					Filtrados.map(function (elem, i) {
						return (
							<div key={i}>
								<Cards
									id={elem.id}
									imagen={elem.imagen}
									nombre={elem.nombre}
									descripcion={elem.descripcion}
									precio={elem.precio}
								/>
							</div>
						);
					})}
			</div>
		</form>
	);
};

export default Busqueda;
