import React from 'react'
import "./Titulo.css"

function Seccion(props) {
  return (
    <div>
      <h2 className='tituloS'>{props.tituloS}</h2>
    </div>
  )
}

export default Seccion;
