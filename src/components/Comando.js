import { Link } from "react-router-dom";
import { animateScroll as scroll } from "react-scroll";
import "./Comando.css";

function Comando(props) {
	const scrollToTop = () => {
		scroll.scrollToTop();
	};

	return (
		<Link
			to={props.link}
			className="enlace"
			onClick={scrollToTop}
			smooth="true"
		>
			{props.texto}
		</Link>
	);
}

export default Comando;
