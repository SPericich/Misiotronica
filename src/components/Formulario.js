import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser"; 
import "./Formulario.css";

const Formulario = () => {
	
	const form = useRef();

	const [values, setValues] = useState({
		nombre: "",
		apellido: "",
		email: "",
		consulta: "",
	});

	const [validations, setValidations] = useState({
		nombre: "",
		apellido: "",
		email: "",
		consulta: "",
	});

	//Validación de los datos ingresados por el usuario
	const validateAll = () => {
		const { nombre, apellido, email, consulta } = values;
		const validations = { nombre: "", apellido: "", email: "", consulta: "" };
		let isValid = true;

		if (!nombre) {
			validations.nombre = "¿No tiene nombre usted?";
			isValid = false;
		}

		if ((nombre && nombre.length < 2) || nombre.length > 50) {
			validations.nombre =
				"¿En serio? ¿Así se llama? Ponga dos caracteres como mínimo, por favor";
			isValid = false;
		}

		if (!apellido) {
			validations.apellido = "No se haga el misterioso";
			isValid = false;
		}

		if ((apellido && apellido.length < 2) || apellido.length > 50) {
			validations.apellido =
				"¿En serio? ¿Ese es su apellido? Ponga dos caracteres como mínimo, por favor";
			isValid = false;
		}

		if (!email) {
			validations.email =
				"¿Cómo pretende que le contestemos si no deja su email?";
			isValid = false;
		}

		if (email && !/\S+@\S+\.\S+/.test(email)) {
			validations.email = "Sí sabe que un email lleva @, ¿no?";
			isValid = false;
		}

		if (!consulta) {
			validations.consulta = "Si no va a consultar nada ¿para qué molesta?";
			isValid = false;
		}

		if (!isValid) {
			setValidations(validations);
		}

		return isValid;
	};

	const validateOne = (e) => {
		const { name } = e.target;
		const value = values[name];
		let message = "";

		if (!value) {
			message = `${name} es requerido`;
		}

		if (value && name === "name" && (value.length < 2 || value.length > 50)) {
			message = "Debe tener entre 2 y 50 caracteres";
		}

		if (value && name === "email" && !/\S+@\S+\.\S+/.test(value)) {
			message = "El formato del Email debe ser ejemplo@mail.com";
		}

		setValidations({ ...validations, [name]: message });
	};

	const handleChange = (e) => {
		const { name, value } = e.target;
		setValues({ ...values, [name]: value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
        
		const isValid = validateAll();

		if (!isValid) {
			return false;
		}

		emailjs
			.sendForm(
				"service_3wlati3",
				"template_fbtamve",
				form.current,
				"MzQOVm8uolehW7T0g"
			)
			.then(
				(result) => {
					console.log(result.text);
                    setValues({ nombre: "", apellido: "", email: "", consulta: "" });
                    alert("¡Mensaje enviado!");
				},
				(error) => {
					console.log(error.text);
				}
			);

		
	};

	const { nombre, apellido, email, consulta } = values;

	const {
		nombre: nombreVal,
		apellido: apellidoVal,
		email: emailVal,
		consulta: consultaVal,
	} = validations;
  
	return (
		<form
			ref={form}
			onSubmit={handleSubmit}
		>
			<div className="form">
				<div>
					<input
						type="text"
						placeholder="Nombre"
						onChange={handleChange}
						onBlur={validateOne}
						value={nombre}
						name="nombre"
					></input>
					<div className="val">{nombreVal}</div>
				</div>
				<div>
					<input
						type="text"
						placeholder="Apellido"
						onChange={handleChange}
						onBlur={validateOne}
						value={apellido}
						name="apellido"
					></input>
					<div className="val">{apellidoVal}</div>
				</div>
				<div>
					<input
						type="text"
						placeholder="E-Mail"
						onChange={handleChange}
						onBlur={validateOne}
						value={email}
						name="email"
					></input>
					<div className="val">{emailVal}</div>
				</div>
				<div>
					<textarea
						type="text"
						placeholder="Escriba su consulta aquí"
						rows={8}
						cols={40}
						onChange={handleChange}
						onBlur={validateOne}
						value={consulta}
						name="consulta"
					></textarea>
					<div className="val">{consultaVal}</div>
				</div>
				<div>
					<button type="submit">Enviar</button>
				</div>
			</div>
		</form>
	);
};

export default Formulario;
