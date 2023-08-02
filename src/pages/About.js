import React from "react";
import Titulo from "../components/Titulo";
import personal from "../assets/Personal.jpg";
import fundador1 from "../assets/MartaGarrido.jpg";
import fundador2 from "../assets/ArielAlonzo.jpg";
import "./About.css";

function About() {
	return (
		<div className="containerAbout">
			<Titulo tituloS="Sobre nosotros" />
			<div className="aboutContent">
				<p>
					Misiotrónica es una PyME que nace de la necesidad de dos almas
					inquietas que no sabían en qué invertir su dinero. Al principio
					pensábamos en algo simple, como vender cactus, hasta que un amigo
					en común nos hizo ver que una lamparita led era mucho más
					necesaria que una planta... y la verdad es que tenía razón.
				</p>
				<p>
					Buscábamos crear una empresa con un propósito simple, sí, pero
					también buscábamos ser diferentes, originales, innovadores, y es
					por eso que decidimos romper con el esquema común: nuestros
					empleados no son expertos en la materia, sino simplemente gente
					que necesita trabajar. Además, nuestro ambiente de trabajo es
					relajado y seguro &#40;a veces jugamos chinchón, burako y
					tuti-fruti&#41;, y eso lo convierte también en un ambiente feliz
					y eficaz.
				</p>
				<img
					src={personal}
					className="grupal"
					alt="personal trabajando"
				/>
				<p>
					Aunque usted no lo crea, nuestros trabajadores, sin saber nada
					sobre electrónica, consiguen insumos que no se encuentran en
					sitios de renombre. Pendorchos, cosoletos, pitutos... cada
					producto de nuestro catálogo es el fruto de la eficacia de
					nuestra gente al googlear y poner sus datos reales en páginas
					dudosas.
				</p>
				<p>
					Nuestra misión como empresa es no solo conseguir para usted
					aquellos insumos difíciles de encontrar, sino también asegurar el
					bienestar de nuestros empleados, que al no saber hacer nada más
					que navegar por internet y darle “aceptar” a todo, hoy tienen la
					posibilidad de vivir de ello y tener la vida digna que asegura el
					trabajo remunerado.
				</p>
				<p>
					¡Sea usted también parte de nuestra gran familia y visite nuestro
					catálogo!
					<b>
						<i> Usted es el que sabe, no nosotros</i>
					</b>
					, así que, si no encuentra lo que busca, no dude en ponerse en
					contacto para que lo encontremos por usted.
				</p>
				<div className="fundadores">
					<ul>
						<li>
							<img
								src={fundador1}
								className="perfil"
								alt="perfil de la fundadora"
							/>
						</li>
						<li>
							<h3>Marta Garrido</h3>
						</li>
						<li>
							<p>Fundadora</p>
						</li>
					</ul>
					<ul>
						<li>
							<img
								src={fundador2}
								className="perfil"
								alt="perfil del fundador"
							/>
						</li>
						<li>
							<h3>Ariel Alonzo</h3>
						</li>
						<li>
							<p>Fundador</p>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
}

export default About
