import React from "react";
import "./Social.css";

function Social() {
   return (
      <div className="social">
         <p>Síganos</p>
         <div className="redes">
            <a href="https://www.facebook.com/lola.montez.12327/">
               <i className="bx bxl-facebook-circle"></i>
            </a>
            <a href="https://soniapericich.blogspot.com/">
               <i className="bx bxl-blogger"></i>
            </a>
            <a href="https://payhip.com/SoniaPericichAutoraIndependiente">
               <i className="bx bxs-book-bookmark"></i>
            </a>
         </div>
      </div>
   );
}

export default Social
