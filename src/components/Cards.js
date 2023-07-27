import React from "react";
import "./Cards.css";

function cards(props) {
   return (
      <div className="card">
         <img src={props.imagen} alt={props.nombre} />
            <h2>{props.nombre}</h2>
            <p>{props.descripcion}</p>
            <h3>
               {props.precio}
               <i className="bx bx-cart-add bx-md"></i>
            </h3>
      </div>
   );
}

export default cards;
