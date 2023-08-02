import React from "react";
import logoM from "../assets/logoMT.png";
import "./Footer.css";

function Footer() {
   return (
      <div className="caja-footer">
         <div className="containerF">
            <ul>
               <li>
                  <img src={logoM} className="logoF" alt="logo" />
               </li>
               <li>
                  <h3>MISIOTRÓNICA</h3>
               </li>
               <li>
                  <p>San Montoto 1243</p>
               </li>
               <li>
                  <p>Misiones</p>
               </li>
            </ul>
            <ul>
               <li>
                  <i className="bx bxs-phone-call"></i>
                  <i className="bx bxs-envelope"></i>
                  <i className="bx bxs-bell-ring"></i>
               </li>
               <li>
                  <h3>Contáctenos</h3>
               </li>
               <li>
                  <p>+54 9 3952 8542697</p>
               </li>
               <li>
                  <p>0-800-ELECTROCUTADOS</p>
               </li>
               <li>
                  <p>misiotronicapyme@gmail.com</p>
               </li>
               <li>
                  <p>O venga y toque timbre</p>
               </li>
            </ul>
         </div>
      </div>
   );
}

export default Footer;
