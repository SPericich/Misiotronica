import { Link } from "react-router-dom";
import scrolltop from "../helpers/scroll";
import "./Comando.css";

function Comando(props) {

	return (
		<Link
			to={props.link}
			className="enlace"
			onClick={scrolltop}
		>
			{props.texto}
		</Link>
	);
}

export default Comando;
