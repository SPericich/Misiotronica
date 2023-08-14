import React from "react";
import "./Social.css";

function Social() {
	return (
		<div className="social">
			<p>SÍGANOS</p>
			<div className="redes">
				<a
					href="https://www.facebook.com/"
					target="_blank"
					rel="noreferrer"
				>
					<i className="bx bxl-facebook-circle"></i>
				</a>
				<a
					href="https://www.instagram.com/"
					target="_blank"
					rel="noreferrer"
				>
					<i className="bx bxl-instagram-alt"></i>
				</a>
				<a
					href="https://www.blogger.com/"
					target="_blank"
					rel="noreferrer"
				>
					<i className="bx bxl-blogger"></i>
				</a>
			</div>
		</div>
	);
}

export default Social;
