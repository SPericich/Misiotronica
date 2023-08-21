import { Link } from "react-router-dom";
import scrolltop from "../helpers/scroll";
import gifLeyenda from "../assets/trabajoduro2.gif";
import "./Leyenda.css";

function Leyenda() {
    return (
	<div className="leyend">
		<img
			src={gifLeyenda}
			alt="trabajo duro"
		/>
        <div className="leyendText">
		
  
		<p>
			Visite nuestro <br/>
			<Link
				to="/Venta"
				onClick={scrolltop}
			>
				catálogo<i className="bx bxs-right-arrow-circle"></i>
			</Link>
		</p>
        <br/>
        <p>
			Y si no encuentra lo que busca... <br />
            <Link
				to="/Contacto"
				onClick={scrolltop}
			>
				¡lo buscamos por usted!<i className="bx bxs-right-arrow-circle"></i>
			</Link>
			
		</p>
        </div>
	</div>
    );
};

export default Leyenda;
